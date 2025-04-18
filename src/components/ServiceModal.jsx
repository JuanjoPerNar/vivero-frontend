import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"
import api from "../utils/api"
import NuevoServicio from "../pages/NuevoServicio"

export default function ServiceModal({ service, onClose, refetch }) {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  if (!service) return null

  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar este servicio?")
    if (!confirmDelete) return

    try {
      await api.delete(`/services/${service._id}`)
      refetch?.()
      onClose()
    } catch (error) {
      console.error("Error al eliminar el servicio:", error)
    }
  }

  const handleEditSuccess = () => {
    setIsEditing(false)
    refetch?.()
    onClose()
  }

  const isAdmin = user?.role === "admin"

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white max-w-xl w-full rounded-xl shadow-xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 hover:text-black text-xl cursor-pointer transition"
        >
          &times;
        </button>

        {isEditing ? (
          <NuevoServicio editData={service} onSuccess={handleEditSuccess} />
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-2 text-[#2f3e2e] font-['Playfair_Display']">
              {service.title}
            </h2>

            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}

            <p className="text-sm italic text-gray-500 mb-4 capitalize">
              Tipo: {service.type}
            </p>

            <p className="text-base text-[#2f3e2e] leading-relaxed whitespace-pre-line mb-6">
              {service.description}
            </p>

            {isAdmin && (
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 rounded-md text-sm font-medium text-[#2f3e2e] border border-[#2f3e2e] hover:bg-[#f4f9ef] transition cursor-pointer"
                >
                  Editar
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition cursor-pointer"
                >
                  Eliminar
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
