import { useState, useEffect } from "react"
import api from "../utils/api"

export default function useContacts() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchContacts = async () => {
    setLoading(true)
    try {
      const res = await api.get("/contacts")
      setContacts(res.data)
    } catch (err) {
      console.error("Error al cargar contactos:", err)
      setError("No se pudieron obtener los mensajes.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  return { contacts, loading, error, refetch: fetchContacts }
}
