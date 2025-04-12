export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-[#2f3e2e] hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 font-['Playfair_Display']">{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  )
} 