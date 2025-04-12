import usePosts from "../hooks/usePosts"
import PostCard from "../components/PostCard"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Comunidad() {
  const { posts, loading, error } = usePosts()

  return (
    <main className="bg-[#F9FAF8] text-[#1C2B2D] font-['Playfair_Display']">
      <section className="min-h-[40vh] bg-gradient-to-r from-[#EDF4EC] to-[#E2EFE3] flex flex-col items-center justify-center px-6 py-16 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Comunidad Verde
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Ideas, historias y proyectos compartidos por quienes también cultivan su amor por lo natural.
        </motion.p>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {loading && <p className="text-center text-[#2f3e2e]">Cargando publicaciones...</p>}
          {error && <p className="text-center text-red-600">{error}</p>}

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {posts.map((post) => (
              <Link to={`/comunidad/${post._id}`} key={post._id}>
                <PostCard
                  title={post.title}
                  author={post.author}
                  description={post.description}
                  image={post.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 
