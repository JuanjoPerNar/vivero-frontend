import axios from 'axios'

const BASE_URL = 'https://trefle.io/api/v1/plants/search'
const TOKEN = import.meta.env.VITE_TREFLE_TOKEN

export const searchPlantsByName = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        token: TOKEN,
        q: query
      }
    })

    if (response.data.data.length === 0) {
      throw new Error('No se encontraron plantas con ese nombre.')
    }

    return response.data.data
  } catch (error) {
    if (error.response) {
      console.error('Error del servidor:', error.response.data)
      throw new Error('Error al buscar plantas. Intenta más tarde.')
    } else if (error.request) {
      console.error('No se recibió respuesta:', error.request)
      throw new Error('No se pudo conectar con la API de plantas.')
    } else {
      console.error('Error inesperado:', error.message)
      throw new Error(error.message || 'Error inesperado.')
    }
  }
}
