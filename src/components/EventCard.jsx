export default function EventCard({ title, date, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-[#2f3e2e] transition-transform hover:scale-[1.02] duration-300">
      <img
        src={image}
        alt={title}
        className="w-full max-h-48 object-contain rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-1 font-['Playfair_Display']">{title}</h3>
      <p className="text-sm mb-2 font-medium italic text-[#3f513d]">{date}</p>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  )
} 