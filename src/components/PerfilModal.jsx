import { useState } from "react"
import { motion } from "framer-motion"
import {
  changeUserEmail,
  changeUserPassword,
} from "../services/authService"

export default function PerfilModal({ user, onClose }) {
  const [email, setEmail] = useState(user?.email || "")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleUpdate = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    try {
      if (email !== user.email) {
        await changeUserEmail(currentPassword, email)
        setSuccess("Correo electrónico actualizado correctamente.")
      }

      if (newPassword) {
        await changeUserPassword(currentPassword, newPassword)
        setSuccess((prev) =>
          prev ? `${prev} Contraseña actualizada.` : "Contraseña actualizada."
        )
      }

      setCurrentPassword("")
      setNewPassword("")
    } catch (err) {
      console.error("Error al actualizar perfil:", err)
      setError(err.message || "Hubo un error al actualizar el perfil.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#2f3e2e] text-xl font-bold hover:text-red-600"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center text-[#2f3e2e] mb-4">
          Editar perfil
        </h2>

        {success && <p className="text-green-600 text-sm text-center mb-2">{success}</p>}
        {error && <p className="text-red-600 text-sm text-center mb-2">{error}</p>}

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm text-[#2f3e2e] font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-[#2f3e2e] font-medium mb-1">
              Nueva contraseña (opcional)
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-[#2f3e2e] font-medium mb-1">
              Contraseña actual <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2f3e2e] text-white py-2 rounded hover:bg-[#3f513d] transition cursor-pointer"
          >
            {loading ? "Guardando cambios..." : "Guardar cambios"}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
