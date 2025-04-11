import { useState, useEffect } from "react"
import api from "../utils/api"

export default function usePosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts')
                setPosts(response.data)
            } catch (error) {
                console.error('Error al obtener las publicaciones', error)
                setError('No se pudieron cargar las publicaciones')                
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [])

    return {
        posts,
        loading,
        error
    }
}