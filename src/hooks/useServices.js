import { useState, useEffect } from "react"
import api from "../utils/api"

export default function useServices() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchServices = async () => {
    setLoading(true)
    try {
      const response = await api.get("/services")
      setServices(response.data)
    } catch (err) {
      console.error("Error al obtener los servicios:", err)
      setError("No se pudieron cargar los servicios.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return { services, loading, error, refetch: fetchServices }
}
