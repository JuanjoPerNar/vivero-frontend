import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { loginUser } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await loginUser(email, password)
      navigate('/')
    } catch (err) {
      setError('Error al iniciar sesión. Verifica tus credenciales.')
    }
  }

  return (
    <main className="min-h-screen bg-[#F9FAF8] flex flex-col justify-center items-center px-4 py-12 text-[#1C2B2D] font-['Playfair_Display']">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#2f3e2e]">Iniciar sesión</h2>
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md"
            required
          />
          <button type="submit" className="w-full bg-[#2f3e2e] text-white py-2 rounded hover:bg-[#3f513d] transition">
            Entrar
          </button>
        </form>
      </div>
    </main>
  )
}
