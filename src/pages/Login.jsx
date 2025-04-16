import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../services/authService"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      await loginUser(email, password)
      navigate("/")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <main className="min-h-screen bg-[#F4F9EF] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#2f3e2e] mb-6 text-center">Iniciar sesión</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}

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

        <button type="submit" className="w-full bg-[#2f3e2e] text-white py-2 rounded-lg hover:bg-[#3f513d] cursor-pointer">
          Acceder
        </button>
      </form>
    </main>
  )
}
