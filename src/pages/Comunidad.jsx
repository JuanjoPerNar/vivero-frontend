import usePosts from "../hooks/usePosts"
import PostCard from "../components/PostCard"
import { Link } from "react-router-dom"

export default function Comunidad() {
  const { posts, loading, error } = usePosts()

  return (
    <main className="bg-[#F4F9EF] min-h-screen px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2f3e2e] mb-6 text-center">Comunidad Verde</h1>

        {loading && <p className="text-center">Cargando publicaciones...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
    </main>
  )
}
