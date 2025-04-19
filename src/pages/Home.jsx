import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import PlantCard from '../components/PlantCard'
import EventCard from '../components/EventCard'
import PostCard from '../components/PostCard'
import ServiceCard from '../components/ServiceCard'

import monstera from '../assets/monstera.jpg'

import useProducts from "../hooks/useProducts"
import usePosts from "../hooks/usePosts"
import useServices from "../hooks/useServices"
import useActivities from "../hooks/useActivities"

export default function Home() {
  const { products } = useProducts()
  const { posts, loading, error } = usePosts()
  const { services } = useServices()
  const { activities } = useActivities()

  const [currentSlide, setCurrentSlide] = useState(0)

  const plants = products.filter(p => p.category?.toLowerCase() === "planta")

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % plants.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + plants.length) % plants.length)

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 6000)
    return () => clearInterval(interval)
  }, [plants.length])

  return (
    <main className="bg-[#F9FAF8] text-[#1C2B2D] font-['Playfair_Display']">
      <section className="min-h-[70vh] bg-gradient-to-r from-[#EDF4EC] to-[#E2EFE3] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
        <div className="max-w-xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Raíces de La Dolo
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Un vivero donde florecen las historias, las personas y lo natural.
          </motion.p>
          <Link to="/catalogo" className="inline-block bg-[#2f3e2e] text-white px-6 py-3 rounded-lg hover:bg-[#3f513d] transition">
            Descubrir nuestras plantas
          </Link>
        </div>
        <motion.img
          src={monstera}
          alt="Monstera"
          className="mt-10 md:mt-0 w-full max-w-sm rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {plants.length > 0 && (
        <section className="my-20 px-4">
          <div className="max-w-5xl mx-auto relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src={plants[currentSlide].image}
              alt={plants[currentSlide].name}
              className="w-full h-72 object-cover rounded-xl transition duration-700 ease-in-out"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-5 py-3 rounded-full shadow text-sm font-medium">
              {plants[currentSlide].name}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-xl bg-white p-2 rounded-full shadow hover:bg-[#f1f5f0]">‹</button>
            <button onClick={nextSlide} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl bg-white p-2 rounded-full shadow hover:bg-[#f1f5f0]">›</button>
          </div>
        </section>
      )}

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nuestra historia</h2>
          <p className="text-lg leading-relaxed">
            “Raíces de La Dolo” nace del recuerdo de una mujer que supo reunir a su familia como nadie. Mi abuela Dolores no era jardinera, pero tenía el don de sembrar vínculos. Este vivero es una forma de cuidar, de estar presente y de conectar con lo esencial.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">Comunidad Verde: ideas y proyectos</h2>
          {loading && <p className="text-center text-[#2f3e2e]">Cargando publicaciones...</p>}
          {error && <p className="text-center text-red-600">{error}</p>}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {posts.slice(-3).reverse().map((post) => (
              <PostCard key={post._id} {...post} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/comunidad" className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition">
              Ver más publicaciones
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#F2F7F3]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">Nuestros servicios</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/servicios" className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition">
              Más información
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">Actividades y talleres</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {activities.slice(-3).reverse().map((activity) => (
              <EventCard key={activity._id} {...activity} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/talleres" className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition">
              Ver todas las actividades
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#2f3e2e] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Te unes a nuestra comunidad verde?</h2>
          <p className="mb-6 text-lg">Comparte tu pasión, inspírate con otras personas y sigue cultivando contigo mismo.</p>
          <Link to="/contacto" className="inline-block bg-white text-[#2f3e2e] font-semibold px-6 py-2 rounded hover:bg-[#f4f9ef] transition">
            Contacta con nosotros
          </Link>
        </div>
      </section>
    </main>
  )
}
