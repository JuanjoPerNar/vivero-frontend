export default function PostCard({ title, author, description, image }) {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <img 
                src={image}
                alt={title} 
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-[#2f3e2e] mb-1">{title}</h3>
            <p className="text-sm text-[#2f3e2e] mb-1 font-medium italic">Publicado por: {author}</p>
            <p className="text-sm text-[#2f3e2e]">{description}</p>
        </div>
    )
}