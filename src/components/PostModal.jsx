import { useEffect } from "react"

export default function PostModal({ post, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  if (!post) return null

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white max-w-xl w-full rounded-xl shadow-xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 hover:text-black text-xl cursor-pointer transition"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-2 text-[#2f3e2e] font-['Playfair_Display']">
          {post.title}
        </h2>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}

        <p className="text-sm italic text-gray-500 mb-4">Publicado por: {post.author}</p>


        <p className="text-base text-[#2f3e2e] leading-relaxed whitespace-pre-line">
          {post.description}
        </p>
      </div>
    </div>
  )
}
