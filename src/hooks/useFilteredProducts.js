import { useState, useEffect } from "react"
import api from "../utils/api"

export default function useFilteredProducts(category) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            setLoading(true)
            setError(null)

            try {
                const response = await api.get(`/products?category=${category}`)
                setProducts(response.data)
            } catch (error) {
                console.error('Error al obtener productos filtrados', error)
                setError('No se pudieron cargar los productos')                
            } finally {
                setLoading(false)
            }
        }
        if (category) {
            if (category === 'todos') {
                api.get('/products')
                .then(response => setProducts(response.data))
                .catch(error => {
                    console.error('Error al obtener todos los productos', error)
                    setError('No se pudieron cargar los productos')
                })
                .finally(() => setLoading(false))
            } else {
                fetchFilteredProducts()
            }
        }
    }, [category])

    return {
        products,
        loading,
        error
    }
}