import { useState, useEffect, useCallback } from "react"
import api from "../utils/api"

export default function usePosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    try {
      const response = await api.get("/posts")
      setPosts(response.data)
    } catch (err) {
      console.error("Error al obtener publicaciones:", err)
      setError("No se pudieron cargar las publicaciones.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return { posts, loading, error, refetch: fetchPosts }
}
