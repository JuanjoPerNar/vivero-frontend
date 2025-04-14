import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import PostCard from "../components/PostCard"
import PostModal from "../components/PostModal"
import api from "../utils/api"

export default function Comunidad() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [selectedPost, setSelectedPost] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts")
        setPosts(response.data)
      } catch (err) {
        console.error("Error al cargar publicaciones:", err)
        setError("No se pudieron cargar las publicaciones.")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleOpenModal = (post) => {
    setSelectedPost(post)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setSelectedPost(null)
    setIsModalOpen(false)
  }

  return (
    <main className="min-h-screen bg-[#F4F9EF] text-[#2f3e2e] font-['Playfair_Display']">
      <section className="min-h-[30vh] bg-gradient-to-r from-[#E8F3E4] to-[#D8EAD3] flex flex-col items-center justify-center px-6 py-16 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Comunidad de amantes de las plantas
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Descubre las publicaciones de nuestra comunidad: ideas, inspiración y experiencias verdes.
        </motion.p>
      </section>

      <section className="px-4 py-12 max-w-7xl mx-auto">
        {loading && <p className="text-center">Cargando publicaciones...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {posts.map((post) => (
            <div key={post._id} onClick={() => handleOpenModal(post)}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && selectedPost && (
        <PostModal post={selectedPost} onClose={handleCloseModal} />
      )}
    </main>
  )
}
