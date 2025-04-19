import { useEffect, useState } from "react"
import api from "../utils/api"

export default function useActivities() {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchActivities = async () => {
    try {
      const res = await api.get("/activities")
      setActivities(res.data)
    } catch (err) {
      setError("Error al cargar actividades")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchActivities()
  }, [])

  return { activities, loading, error, refetch: fetchActivities }
}
