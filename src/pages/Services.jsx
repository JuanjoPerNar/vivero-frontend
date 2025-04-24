import { useState } from "react"
import useServices from "../hooks/useServices"
import ServiceCard from "../components/ServiceCard"
import ServiceModal from "../components/ServiceModal"
import { motion } from "framer-motion"

export default function Services() {
  const { services, loading, error, refetch } = useServices()
  const [selectedService, setSelectedService] = useState(null)

  const handleOpenModal = (service) => {
    setSelectedService(service)
  }

  const handleCloseModal = () => {
    setSelectedService(null)
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
          Nuestros servicios
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Descubre los servicios que ofrecemos para ayudarte a cuidar, diseñar y disfrutar de tu espacio verde.
        </motion.p>
      </section>

        <div className="text-center mt-12">
          <p className="text-lg mb-4">
            ¿Tienes dudas sobre nuestros servicios o necesitas algo personalizado?
          </p>
          <a
            href="/contacto"
            className="inline-block px-6 py-2 bg-[#2f3e2e] text-white rounded hover:bg-[#3f513d] transition"
          >
            Contacta con nosotros
          </a>
        </div>
        
      <section className="px-4 py-12 max-w-7xl mx-auto">
        {loading && <p className="text-center">Cargando servicios...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading && services.length === 0 && (
          <p className="text-center">No hay servicios disponibles en este momento.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              service={service}
              onClick={handleOpenModal}
            />
          ))}
        </div>


      </section>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={handleCloseModal}
          refetch={refetch}
        />
      )}
    </main>
  )
}
