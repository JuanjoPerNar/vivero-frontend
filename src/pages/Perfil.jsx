import { useState } from "react"
import { motion } from "framer-motion"
import { useAuth } from "../context/authContext"
import PostCard from "../components/PostCard"
import PostModal from "../components/PostModal"
import usePosts from "../hooks/usePosts"
import PerfilModal from "../components/PerfilModal"

export default function Perfil() {
  const { user } = useAuth()
  const { posts } = usePosts()
  const [selectedPost, setSelectedPost] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const userPosts = posts.filter(post => post.author === `${user?.name} ${user?.surname}`)

  if (!user) return null

  return (
    <main className="min-h-screen bg-[#F4F9EF] text-[#2f3e2e] font-['Playfair_Display']">
      <section className="min-h-[30vh] bg-gradient-to-r from-[#E8F3E4] to-[#D8EAD3] flex flex-col items-center justify-center px-6 py-16 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mi perfil
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Consulta y actualiza tus datos, y revisa las publicaciones que has hecho en la comunidad.
        </motion.p>
      </section>

      <section className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 mt-12">
        <h2 className="text-xl font-semibold mb-4 text-center">Datos personales</h2>
        <div className="space-y-2 text-sm text-[#2f3e2e]">
          <p><span className="font-semibold">Nombre:</span> {user.name}</p>
          <p><span className="font-semibold">Apellido:</span> {user.surname}</p>
          <p><span className="font-semibold">Correo electrónico:</span> {user.email}</p>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="bg-[#2f3e2e] text-white py-2 px-4 rounded hover:bg-[#3f513d] transition cursor-pointer"
          >
            Editar perfil
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-16 px-4 pb-16">
        <h2 className="text-xl font-semibold mb-6 text-center">Mis publicaciones</h2>
        {userPosts.length === 0 ? (
          <p className="text-center text-sm">Aún no has publicado nada en la comunidad.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
            {userPosts.map((post) => (
              <div key={post._id} onClick={() => {
                setSelectedPost(post)
                setIsModalOpen(true)
              }}>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </section>

      {isModalOpen && selectedPost && (
        <PostModal post={selectedPost} onClose={() => setIsModalOpen(false)} />
      )}

      {isEditModalOpen && (
        <PerfilModal user={user} onClose={() => setIsEditModalOpen(false)} />
      )}
    </main>
  )
}
