export default function PostCard({ title, author, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-[#2f3e2e] transition-transform hover:scale-[1.02] duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 font-['Playfair_Display']">{title}</h3>
      <p className="text-sm mb-1 font-medium italic text-[#3f513d]">Publicado por: {author}</p>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  )
} 
