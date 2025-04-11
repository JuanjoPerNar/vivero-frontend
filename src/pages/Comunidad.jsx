import usePosts from "../hooks/usePosts"
import PostCard from "../components/PostCard"

export default function Comunidad() {
  const { posts, loading, error } = usePosts()

  return (
    <section className="bg-[#F4F9EF], min-h-screen px-4 py-10 mt-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-[#2f3e2e] mb-6 text-center">
          Comunidad Verde: ideas y proyectos
        </h1>

        {loading && (
          <p className="text-center text-[#2f3e2e]">Cargando publicaciones...</p>
        )}
        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard 
              key={post._id}
              title={post.title}
              author={post.author}
              description={post.description}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
