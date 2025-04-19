import { useEffect } from "react"
import api from "../utils/api"

export default function MensajeModal({ mensaje, onClose, onDeleted }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  if (!mensaje) return null

  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar este mensaje?")
    if (!confirmDelete) return

    try {
      await api.delete(`/contacts/${mensaje._id}`)
      onDeleted?.()
      onClose()
    } catch (error) {
      console.error("Error al eliminar el mensaje:", error)
    }
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

        <h2 className="text-xl font-bold mb-1 text-[#2f3e2e]">{mensaje.name}</h2>
        <p className="text-sm italic text-gray-500 mb-3">{mensaje.email} · {new Date(mensaje.createdAt).toLocaleDateString()}</p>

        <p className="whitespace-pre-line text-[#2f3e2e] mb-6">
          {mensaje.message}
        </p>

        <div className="flex justify-end gap-3">
          <a
            href={`mailto:${mensaje.email}`}
            className="px-4 py-2 rounded-md text-sm font-medium text-[#2f3e2e] border border-[#2f3e2e] hover:bg-[#f4f9ef] transition cursor-pointer"
          >
            Responder
          </a>

          <button
            onClick={handleDelete}
            className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-400 hover:bg-red-500 transition cursor-pointer"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
