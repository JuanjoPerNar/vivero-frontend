import { useEffect } from "react"

export default function PlantModal({ plant, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  if (!plant) return null

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
          {plant.common_name || "Sin nombre común"}
        </h2>
        <p className="text-sm italic text-gray-500 mb-4">{plant.scientific_name}</p>

        {plant.image_url && (
          <img
            src={plant.image_url}
            alt={plant.common_name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}

        <div className="space-y-2 text-[#2f3e2e] text-sm">
          <p><span className="font-medium">Familia:</span> {plant.family || "No disponible"}</p>
          <p><span className="font-medium">Género:</span> {plant.genus || "No disponible"}</p>
          <p><span className="font-medium">Autor:</span> {plant.author || "No disponible"}</p>
          <p><span className="font-medium">Año:</span> {plant.year || "No disponible"}</p>
        </div>
      </div>
    </div>
  )
}
