import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../utils/api"

export default function PostDetail() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`)
        setPost(response.data)
      } catch (err) {
        console.error("Error al cargar la publicación:", err)
        setError("No se pudo cargar la publicación.")
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  if (loading) {
    return <p className="text-center text-[#2f3e2e] mt-10">Cargando publicación...</p>
  }

  if (error) {
    return <p className="text-center text-red-600 mt-10">{error}</p>
  }

  return (
    <section className="bg-[#F4F9EF] min-h-screen px-4 py-10 mt-16">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h2 className="text-2xl font-bold text-[#2f3e2e] mb-2">{post.title}</h2>
        <p className="text-sm text-[#2f3e2e] mb-1 font-medium italic">
          Publicado por: {post.author}
        </p>
        <p className="text-base text-[#2f3e2e] mt-4">{post.description}</p>
      </div>
    </section>
  )
}
