import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import api from "../utils/api"

export default function Contacto() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [accepted, setAccepted] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!name || !email || !message) {
      setError("Todos los campos son obligatorios.")
      return
    }

    if (!accepted) {
      setError("Debes aceptar la política de privacidad.")
      return
    }

    try {
      await api.post("/contacts", { name, email, message })
      setSuccess("Mensaje enviado correctamente. Gracias por contactarnos.")
      setName("")
      setEmail("")
      setMessage("")
      setAccepted(false)
    } catch (err) {
      console.error("Error al enviar el mensaje:", err)
      setError("Hubo un error al enviar el mensaje. Inténtalo de nuevo.")
    }
  }

  return (
    <main className="min-h-screen bg-[#F4F9EF] text-[#2f3e2e] font-['Playfair_Display']">
      <section className="min-h-[30vh] bg-gradient-to-r from-[#E8F3E4] to-[#D8EAD3] flex flex-col items-center justify-center px-6 py-16 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ¿En qué podemos ayudarte?
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Si tienes dudas sobre nuestras plantas, servicios, actividades o productos, o necesitas información adicional sobre el vivero, escríbenos. Estaremos encantados de ayudarte.
        </motion.p>
      </section>

      <section className="px-4 py-12 max-w-xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#2f3e2e]">
            Contáctanos
          </h2>

          {success && <p className="text-green-600 mb-4 text-sm text-center">{success}</p>}
          {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-[#ccc] p-3 rounded"
            />

            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-[#ccc] p-3 rounded"
            />

            <textarea
              placeholder="Tu mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
              className="w-full border border-[#ccc] p-3 rounded"
            ></textarea>

            <div className="flex items-start gap-2 text-sm text-[#2f3e2e]">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                required
              />
              <label>
                He leído y acepto la{" "}
                <Link
                  to="/politica-privacidad"
                  className="underline text-[#2f3e2e] hover:text-[#3f513d]"
                >
                  política de privacidad
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2f3e2e] text-white py-2 rounded hover:bg-[#3f513d] transition cursor-pointer"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
