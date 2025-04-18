import { useState, useEffect } from "react"
import api from "../utils/api"
import NuevoProducto from "../pages/NuevoProducto"
import { useAuth } from "../context/authContext"

export default function ProductModal({ product, onClose, refetch }) {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  const canEdit = user?.role === "admin"

  const handleDelete = async () => {
    if (!confirm("¿Eliminar este producto?")) return
    try {
      await api.delete(`/products/${product._id}`)
      onClose()
      refetch()
    } catch (err) {
      console.error("Error al eliminar producto", err)
    }
  }

  const handleSuccess = () => {
    setIsEditing(false)
    onClose()
    refetch()
  }

  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white max-w-xl w-full rounded-xl shadow-xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 hover:text-black text-xl cursor-pointer transition"
        >
          &times;
        </button>

        {isEditing ? (
          <NuevoProducto editData={product} onSuccess={handleSuccess} />
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-[#2f3e2e] mb-2">{product.name}</h2>
            <p className="text-sm text-[#2f3e2e] mb-1 font-medium">Categoría: {product.category}</p>
            <p className="text-sm text-[#2f3e2e] mb-1 font-medium">Tamaño: {product.size}</p>
            <p className="text-sm text-[#2f3e2e] mb-4 font-semibold">Precio: {product.price} €</p>

            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer hover:opacity-90"
                onClick={() => setShowImage(true)}
              />
            )}

            <p className="text-base text-[#2f3e2e] whitespace-pre-line">{product.description}</p>

            {canEdit && (
              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 rounded text-sm font-medium text-[#2f3e2e] border border-[#2f3e2e] hover:bg-[#f4f9ef] cursor-pointer"
                >
                  Editar
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 rounded text-sm font-medium text-white bg-red-500 hover:bg-red-600 cursor-pointer"
                >
                  Eliminar
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {showImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={() => setShowImage(false)}
        >
          <img src={product.image} alt="Vista ampliada" className="max-w-3xl max-h-[80vh] rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  )
}
