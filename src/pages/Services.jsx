import ServiceCard from "../components/ServiceCard"
import { motion } from "framer-motion"

const services = [
  {
    title: 'Diseño y creación de jardines',
    description: 'Creamos espacios verdes personalizados desde cero, adaptados a tu espacio y estilo.',
    icon: '🌿',
  },
  {
    title: 'Instalación de jardines verticales',
    description: 'Ideal para balcones y paredes interiores. Verde donde parecía imposible.',
    icon: '🧱',
  },
  {
    title: 'Mantenimiento periódico',
    description: 'Nos encargamos de tus plantas: riego, abono, poda, salud y belleza garantizadas.',
    icon: '🧤',
  },
  {
    title: 'Sistemas de riego eficientes',
    description: 'Instalamos riego automático o por goteo para mantener tu jardín sin esfuerzo.',
    icon: '💧',
  },
  {
    title: 'Decoración para eventos',
    description: 'Plantas vivas y arreglos verdes para bodas, eventos y sesiones fotográficas.',
    icon: '🌸',
  },
  {
    title: 'Asesoramiento botánico',
    description: 'Te guiamos para elegir y cuidar las plantas más adecuadas para tu entorno.',
    icon: '📚',
  },
]

export default function Services() {
  return (
    <main className="bg-[#F9FAF8] text-[#1C2B2D] font-['Playfair_Display']">
      <section className="min-h-[40vh] bg-gradient-to-r from-[#EDF4EC] to-[#E2EFE3] flex flex-col items-center justify-center px-6 py-16 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nuestros servicios
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          En Raíces de La Dolo ofrecemos soluciones verdes a medida para hogares, empresas y espacios públicos.
        </motion.p>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 
