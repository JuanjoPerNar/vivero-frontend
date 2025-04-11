import { useState } from "react"

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
    <section className="bg-[#F4F9EF] min-h-screen px-4 py-10 mt-16">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold text-[#2f3e2e] mb-6 text-center">Contáctanos</h1>

        <p className="text-[#2f3e2e] text-center text-sm mb-6 max-w-xl mx-auto">
          ¿Tienes alguna duda sobre nuestras plantas, servivios o eventos? Rellena el formulario y nos pondremos en contacto contigo lo antes posible. 
          ¡Gracias por confiar en <strong>Raíces de La Dolo</strong>!
        </p>

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
  )
}
