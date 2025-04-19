import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"
import api from "../utils/api"
import NuevoActividad from "../pages/NuevaActividad"

export default function ActivityModal({ activity, onClose, refetch }) {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  if (!activity) return null

  const canEditOrDelete = user?.role === "admin"

  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar esta actividad?")
    if (!confirmDelete) return

    try {
      await api.delete(`/activities/${activity._id}`)
      refetch()
      onClose()
    } catch (error) {
      console.error("Error al eliminar actividad:", error)
    }
  }

  const handleEditSuccess = () => {
    setIsEditing(false)
    refetch()
    onClose()
  }

  const formatDate = (isoDate) => {
    const date = new Date(isoDate)
    return date.toLocaleDateString("es-ES")
  }

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
          <NuevoActividad editData={activity} onSuccess={handleEditSuccess} />
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-2 text-[#2f3e2e] font-['Playfair_Display']">
              {activity.title}
            </h2>

            {activity.image && (
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}

            <p className="text-sm italic text-gray-500 mb-2">
              Fecha: {formatDate(activity.date)}
            </p>

            <p className="text-base text-[#2f3e2e] whitespace-pre-line">
              {activity.description}
            </p>

            {canEditOrDelete && (
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 rounded-md text-sm font-medium text-[#2f3e2e] border border-[#2f3e2e] hover:bg-[#f4f9ef] transition cursor-pointer"
                >
                  Editar
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-400 hover:bg-red-500 transition cursor-pointer"
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
