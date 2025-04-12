export default function PlantCard({ name, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center text-[#2f3e2e] transition-transform hover:scale-[1.02] duration-300">
      <a href={image} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-80 transition"
        />
      </a>
      <h3 className="text-xl font-semibold mb-2 font-['Playfair_Display']">{name}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  )
} 