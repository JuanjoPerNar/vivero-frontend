import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function DashboardAdmin() {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (user && user.role !== "admin") {
      navigate("/")
    }
  }, [user, navigate])

  if (!user) return null
  if (user.role !== "admin") return null

  const cards = [
    {
      title: "Nuevo Producto",
      description: "Crea un nuevo producto para el catálogo.",
      link: "/admin/producto-nuevo",
    },
    {
      title: "Nueva Actividad",
      description: "Agrega una nueva actividad o evento.",
      link: "/admin/nueva-actividad",
    },
    {
      title: "Nuevo Servicio",
      description: "Publica un nuevo servicio personalizado.",
      link: "/admin/servicio-nuevo",
    },
    {
      title: "Publicaciones",
      description: "Revisa y gestiona las publicaciones de la comunidad.",
      link: "/comunidad",
    },
    {
      title: "Mensajes de contacto",
      description: "Consulta los mensajes enviados por los usuarios.",
      link: "/admin/mensajes",
    },
  ]

  return (
    <main className="min-h-screen bg-[#F4F9EF] text-[#2f3e2e] font-['Playfair_Display'] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Panel de Administración
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-sm mb-4 text-[#2f3e2e]">{card.description}</p>
              <Link
                to={card.link}
                className="inline-block mt-auto px-4 py-2 rounded bg-[#2f3e2e] text-white hover:bg-[#3f513d] transition cursor-pointer"
              >
                Acceder
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
