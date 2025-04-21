import { useState, useEffect } from "react"
import { useAuth } from "../context/authContext"
import {
  changeUserEmail,
  changeUserPassword,
  deleteUserAccount,
} from "../services/authService"

export default function PerfilModal({ onClose }) {
  const { user } = useAuth()
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault()
    setSuccess("")
    setError("")

    try {
      if (newPassword) {
        await changeUserPassword(currentPassword, newPassword)
        setSuccess("Contraseña actualizada correctamente.")
      }
    } catch (err) {
      console.error(err)
      setError("Error al actualizar perfil. " + err.message)
    }
  }

  const handleDelete = async () => {
    const confirmed = window.confirm("¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.")
    if (!confirmed) return
  
    const password = window.prompt("Por seguridad, introduce tu contraseña actual:")
  
    if (!password) {
      setError("Se requiere la contraseña para eliminar la cuenta.")
      return
    }
  
    try {
      await deleteUserAccount(password)
      window.location.href = "/"
    } catch (err) {
      console.error(err)
      setError("Error al eliminar cuenta. " + err.message)
    }
  }
  

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow max-w-md w-full relative">
        <h2 className="text-xl font-bold mb-4 text-[#2f3e2e]">Editar perfil</h2>

        {error && <p className="text-red-600 mb-2 text-sm">{error}</p>}
        {success && <p className="text-green-600 mb-2 text-sm">{success}</p>}

        <form onSubmit={handleUpdate} className="space-y-4">          
          <input
            type="password"
            placeholder="Contraseña actual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full border border-[#ccc] p-2 rounded"
          />

          <input
            type="password"
            placeholder="Nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-[#ccc] p-2 rounded"
          />

          <button type="submit" className="w-full bg-[#2f3e2e] text-white py-2 rounded hover:bg-[#3f513d] transition cursor-pointer">
            Guardar cambios
          </button>
        </form>

        <button
          onClick={handleDelete}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition cursor-pointer"
        >
          Eliminar cuenta
        </button>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-[#2f3e2e] text-lg font-bold hover:text-red-600"
        >
          ×
        </button>
      </div>
    </div>
  )
}
