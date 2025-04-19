import { useState } from "react"
import useContacts from "../hooks/useContacts"
import MensajeModal from "../components/MensajeModal"
import { motion } from "framer-motion"

export default function Mensajes() {
  const { contacts, loading, error, refetch } = useContacts()
  const [selectedMensaje, setSelectedMensaje] = useState(null)

  const handleOpenModal = (mensaje) => {
    setSelectedMensaje(mensaje)
  }

  const handleCloseModal = () => {
    setSelectedMensaje(null)
  }

  return (
    <main className="min-h-screen bg-[#F4F9EF] text-[#2f3e2e] font-['Playfair_Display'] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Mensajes de contacto
        </h1>

        {loading && <p className="text-center">Cargando mensajes...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading && contacts.length === 0 && (
          <p className="text-center">No hay mensajes de contacto.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {contacts.map((msg) => (
            <motion.div
              key={msg._id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition"
              onClick={() => handleOpenModal(msg)}
            >
              <h3 className="font-semibold text-lg truncate">{msg.name}</h3>
              <p className="text-sm text-gray-500 truncate">{msg.email}</p>
              <p className="text-sm mt-2 line-clamp-2">{msg.message}</p>
              <p className="text-xs text-right text-gray-400 mt-4">
                {new Date(msg.createdAt).toLocaleDateString("es-ES")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedMensaje && (
        <MensajeModal
          mensaje={selectedMensaje}
          onClose={handleCloseModal}
          onDeleted={refetch}
        />
      )}
    </main>
  )
}
