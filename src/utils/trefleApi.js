import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const searchPlantsByName = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/api/trefle/search`, {
      params: { q: query }
    })

    if (response.data.length === 0) {
      throw new Error('No se encontraron plantas con ese nombre.')
    }

    return response.data
  } catch (error) {
    if (error.response) {
      console.error('Error del servidor:', error.response.data)
      throw new Error('Error al buscar plantas. Intenta más tarde.')
    } else if (error.request) {
      console.error('No se recibió respuesta:', error.request)
      throw new Error('No se pudo conectar con el servidor.')
    } else {
      console.error('Error inesperado:', error.message)
      throw new Error(error.message || 'Error inesperado.')
    }
  }
}
