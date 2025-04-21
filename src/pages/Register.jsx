import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../services/authService"
import { motion } from "framer-motion"

export default function Register() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [acceptPolicy, setAcceptPolicy] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!acceptPolicy) {
      setError("Debes aceptar la política de privacidad para continuar.")
      return
    }

    try {
      await registerUser(email, password, name, surname)
      navigate("/")
    } catch (err) {
      setError(err.message)
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
          Crear una cuenta
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Únete a nuestra comunidad verde y accede a contenido exclusivo, publica en el foro, participa en eventos y mucho más.
        </motion.p>
      </section>

      <section className="flex items-center justify-center px-4 py-12">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-[#2f3e2e] mb-6 text-center">Registro</h2>
          {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}

          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <input
            type="text"
            placeholder="Apellido"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mb-6 p-3 border rounded-lg"
          />

          <div className="flex items-center mb-4 text-sm">
            <input
              type="checkbox"
              id="acceptPolicy"
              checked={acceptPolicy}
              onChange={(e) => setAcceptPolicy(e.target.checked)}
              className="mr-2"
              required
            />
            <label htmlFor="acceptPolicy" className="text-gray-700">
              He leído y acepto la{" "}
              <a href="/aviso-legal" className="underline hover:text-green-800">
                política de privacidad
              </a>.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2f3e2e] text-white py-2 rounded-lg hover:bg-[#3f513d] cursor-pointer"
          >
            Registrarse
          </button>
        </form>
      </section>
    </main>
  )
}
