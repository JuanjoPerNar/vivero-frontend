import { useState, useEffect } from "react"
import api from "../utils/api"

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const response = await api.get("/products")
      setProducts(response.data)
    } catch (err) {
      console.error("Error al obtener los productos:", err)
      setError("No se pudieron cargar los productos.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, loading, error, refetch: fetchProducts }
}
