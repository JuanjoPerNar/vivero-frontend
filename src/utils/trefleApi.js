import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const getPlants = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/api/trefle`, {
      params: { page }
    })

    return response.data
  } catch (error) {
    throw new Error('No se pudo cargar el listado de plantas.')
  }
}

export const searchPlantsByName = async (query, page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/api/trefle/search`, {
      params: { q: query, page }
    })

    if (response.data.length === 0) {
      throw new Error('No se encontraron plantas con ese nombre.')
    }

    return response.data
  } catch (error) {
    if (error.response) {
      throw new Error('Error al buscar plantas. Intenta más tarde.')
    } else if (error.request) {
      throw new Error('No se pudo conectar con el servidor.')
    } else {
      throw new Error(error.message || 'Error inesperado.')
    }
  }
}
