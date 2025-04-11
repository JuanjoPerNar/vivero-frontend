import PlantCard from '../components/PlantCard'
import EventCard from '../components/EventCard'
import PostCard from '../components/PostCard'
import ServiceCard from '../components/ServiceCard'

import usePosts from "../hooks/usePosts"
import { Link } from 'react-router-dom'

import ficus from '../assets/ficus.jpg'
import monstera from '../assets/monstera.jpg'
import sanserviera from '../assets/sanserviera.jpg'

const plants = [
  {
    name: 'Ficus lyrata',
    description: 'Ideal para interior. Requiere luz indirecta y riego moderado.',
    image: ficus,
  },
  {
    name: 'Monstera deliciosa',
    description: 'Planta tropical de interior con hojas grandes y vistosas.',
    image: monstera,
  },
  {
    name: 'Sansevieria trifasciata',
    description: 'Resistente y perfecta para principiantes. Poca agua.',
    image: sanserviera,
  },
]

const events = [
  {
    title: 'Taller de huerto urbano',
    date: 'Sábado 20 de abril',
    description: 'Aprende a montar tu propio huerto en casa con materiales sostenibles.',
    image: ficus,
  },
  {
    title: 'Curso de plantas medicinales',
    date: 'Miércoles 24 de abril',
    description: 'Identifica y cuida plantas curativas que puedes tener en tu jardín.',
    image: ficus,
  },
  {
    title: 'Intercambio de esquejes',
    date: 'Domingo 28 de abril',
    description: 'Trae tus esquejes y llévate nuevas especies para tu colección.',
    image: ficus,
  },
]

const services = [
  {
    title: 'Diseño de jardines',
    description: 'Creamos espacios verdes a medida según tus necesidades.',
    icon: '🌿',
  },
  {
    title: 'Jardines verticales',
    description: 'Instalamos jardines verticales para espacios pequeños.',
    icon: '🧱',
  },
  {
    title: 'Mantenimiento',
    description: 'Nos encargamos del cuidado periódico de tus plantas.',
    icon: '🧤',
  },
]

export default function Home() {
  const { posts, loading, error } = usePosts()

  return (
    <section className="bg-[#F4F9EF] min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#2f3e2e]">
          Bienvenido a Raíces de La Dolo
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#2f3e2e]">
          Conecta con la naturaleza a través de nuestras plantas, talleres y comunidad 
        </p>
      </div>

      {/* PLANTA DESTACADA */}
      <section className="mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#2f3e2e] mb-4 text-center">
            Planta destacada del mes
          </h2>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-lg font-medium text-[#2f3e2e] mb-2">Ficus lyrata</p>
            <p className="text-sm text-[#2f3e2e] mb-4">
              También conocida como higuera de hoja de violín, es perfecta para interior por su porte elegante
            </p>
            <div className="mt-6 text-center">
              <Link
                to="/catalogo"
                className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition"
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#2f3e2e] mb-6 text-center">
            Nuestro catálogo
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {plants.map((plant, index) => (
              <PlantCard 
                key={index}
                name={plant.name}
                description={plant.description}
                image={plant.image}
              />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/catalogo"
              className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition"
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTOS Y TALLERES */}
      <section className="mt-16 mb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#2f3e2e] mb-6 text-center">
            Próximos eventos y talleres
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {events.map((event, index) => (
              <EventCard 
                key={index}
                title={event.title}
                date={event.date}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/talleres"
              className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition"
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>

      {/* COMUNIDAD VERDE */}
      <section className="mt-16 mb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#2f3e2e] mb-6 text-center">
            Comunidad Verde: ideas y proyectos
          </h2>

          {loading && <p className="text-center text-[#2f3e2e]">Cargando publicaciones...</p>}
          {error && <p className="text-center text-red-600">{error}</p>}

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {posts.slice(-3).reverse().map((post) => (
              <PostCard
                key={post._id}
                title={post.title}
                author={post.author}
                description={post.description}
                image={post.image}
              />
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/comunidad"
              className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition"
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mt-16 mb-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-[#2f3e2e] mb-6 text-center">
            Nuestros servicios
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              to="/servicios"
              className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition"
            >
              Ver más
            </Link>
          </div>
        </div>
      </section>
    </section>
  )
}
