import ProductForm from "../components/ProductForm"
import { useAuth } from "../context/authContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function NuevoProducto() {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/")
    }
  }, [user])

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F4F9EF]">
        <p className="text-[#2f3e2e] text-center">Cargando usuario...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#F4F9EF] py-8 px-4">
      <ProductForm />
    </main>
  )
}
