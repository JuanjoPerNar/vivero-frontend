import { useState } from "react"
import api from "../utils/api"

export default function Contacto() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
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

    try {
      await api.post("/contacts", { name, email, message })
      setSuccess("Mensaje enviado correctamente. Gracias por contactarnos.")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      console.error("Error al enviar el mensaje:", err)
      setError("Hubo un error al enviar el mensaje. Inténtalo de nuevo.")
    }
  }

  return (
    <main className="min-h-screen bg-[#F4F9EF] py-16 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#2f3e2e]">
          Contáctanos
        </h1>

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

          <button
            type="submit"
            className="w-full bg-[#2f3e2e] text-white py-2 rounded hover:bg-[#3f513d] transition cursor-pointer"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </main>
  )
}
