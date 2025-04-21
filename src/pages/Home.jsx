import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import useProducts from '../hooks/useProducts'
import usePosts from '../hooks/usePosts'
import useServices from '../hooks/useServices'
import useActivities from '../hooks/useActivities'

import PlantCard from '../components/PlantCard'
import PostCard from '../components/PostCard'
import ServiceCard from '../components/ServiceCard'

import imagenPortada from '../assets/imagen-portada.png'

export default function Home() {
  const { products } = useProducts()
  const { posts, loading: loadingPosts, error: errorPosts } = usePosts()
  const { services } = useServices()
  const { activities } = useActivities()

  const [currentSlide, setCurrentSlide] = useState(0)

  const plantProducts = products.filter((p) => p.category === 'planta')

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % plantProducts.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + plantProducts.length) % plantProducts.length)

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 6000)
    return () => clearInterval(interval)
  }, [plantProducts.length])

  return (
    <main className="bg-[#F9FAF8] text-[#1C2B2D] font-['Playfair_Display']">
      <section className="min-h-[70vh] bg-gradient-to-r from-[#EDF4EC] to-[#E2EFE3] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
        <div className="max-w-xl">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Raíces de La Dolo
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl mb-6">
            Un vivero donde florecen las historias, las personas y lo natural.
          </motion.p>
          <Link to="/catalogo" className="inline-block bg-[#2f3e2e] text-white px-6 py-3 rounded-lg hover:bg-[#3f513d] transition">
            Descubrir nuestras plantas
          </Link>
        </div>
        <motion.img
          src={imagenPortada}
          alt="Imagen Portada"
          className="mt-10 md:mt-0 w-full max-w-xl rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      <section className="my-20 px-4">
        <div className="max-w-5xl mx-auto relative rounded-xl overflow-hidden shadow-lg group">
          {plantProducts.length > 0 && (
            <>
              <img
                src={plantProducts[currentSlide].image}
                alt={plantProducts[currentSlide].name}
                className="w-full h-72 object-cover rounded-xl transition duration-700 ease-in-out"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-5 py-3 rounded-full shadow text-sm font-medium">
                {plantProducts[currentSlide].name}
              </div>
              <button onClick={prevSlide} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-xl bg-white p-2 rounded-full shadow hover:bg-[#f1f5f0]">‹</button>
              <button onClick={nextSlide} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-xl bg-white p-2 rounded-full shadow hover:bg-[#f1f5f0]">›</button>
            </>
          )}
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nuestra historia</h2>
          <p className="text-lg leading-relaxed">
            “Raíces de La Dolo” nace del recuerdo de una mujer que supo reunir a su familia como nadie. Mi abuela Dolores no era jardinera, pero tenía el don de sembrar vínculos. Este vivero es una forma de cuidar, de estar presente y de conectar con lo esencial.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#F2F7F3]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">Nuestro catálogo</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {products.slice(-3).reverse().map((product) => (
              <PlantCard key={product._id} {...product} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/catalogo" className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition">
              Ver todo el catálogo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">Comunidad Verde: ideas y proyectos</h2>
          {loadingPosts && <p className="text-center text-[#2f3e2e]">Cargando publicaciones...</p>}
          {errorPosts && <p className="text-center text-red-600">{errorPosts}</p>}
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

      <section className="py-20 px-4 bg-[#EAF2EA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">Nuestros servicios</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {services.slice(-3).reverse().map((service) => (
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
          <h2 className="text-2xl font-semibold text-center mb-12">Actividades y eventos</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {activities.slice(-3).reverse().map((activity) => (
              <div key={activity._id} className="bg-white rounded-lg shadow p-4 hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold text-[#2f3e2e] mb-1">{activity.title}</h3>
                <p className="text-sm text-[#2f3e2e] mb-2 font-medium">
                  Fecha: {new Date(activity.date).toLocaleDateString("es-ES")}
                </p>
                <p className="text-sm text-[#2f3e2e]">{activity.description}</p>
              </div>
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
