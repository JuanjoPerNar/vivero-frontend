import { useState, useEffect } from "react"
import api from '../utils/api'

export default function useProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products')
                setProducts(response.data)
            } catch (error) {
                console.error('Error al obtener los productos', error)            
            }               
        }
        fetchProducts()
    }, [])
    return products
}