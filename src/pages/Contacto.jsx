import { useState } from "react"
import { motion } from "framer-motion"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })

  const [formError, setFormError] = useState("")
  const [formSuccess, setFormSuccess] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setFormError("Todos los campos son obligatorios.")
      setFormSuccess("")
      return
    }

    console.log("Datos enviados:", formData)

    setFormSuccess("Mensaje enviado correctamente. ¡Gracias por contactarnos!")
    setFormError("")
    setFormData({ nombre: "", email: "", mensaje: "" })
  }

  return (
    <main className="bg-[#F9FAF8] text-[#1C2B2D] font-['Playfair_Display']">
      {/* HERO */}
      <section className="min-h-[40vh] bg-gradient-to-r from-[#EDF4EC] to-[#E2EFE3] flex flex-col items-center justify-center px-6 py-16 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contáctanos
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          ¿Tienes dudas sobre nuestras plantas, servicios o eventos? Escríbenos y nos pondremos en contacto contigo.
        </motion.p>
      </section>

      {/* FORMULARIO */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Formulario de contacto</h2>

          {formError && <p className="text-red-600 mb-4 text-sm text-center">{formError}</p>}
          {formSuccess && <p className="text-green-700 mb-4 text-sm text-center">{formSuccess}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-[#2f3e2e]">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border border-[#2f3e2e] rounded px-4 py-2 text-sm text-[#2f3e2e]"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-[#2f3e2e]">Correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#2f3e2e] rounded px-4 py-2 text-sm text-[#2f3e2e]"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-[#2f3e2e]">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="5"
                className="w-full border border-[#2f3e2e] rounded px-4 py-2 text-sm text-[#2f3e2e]"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition cursor-pointer"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
} 