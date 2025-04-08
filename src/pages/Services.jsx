import ServiceCard from "../components/ServiceCard"

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
        <main className="min-h-screen px-4 py-10 bg-[#F4F9EF]">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-[#2f3e2e] mb-6 text-center">
                    Nuestros servicios
                </h1>
                <p className="text-[#2f3e2e] text-center max-w-2xl mx-auto mb-10">
                    En Raíces de La Dolo ofrecemos soluciones verdes a medida para hogares, empresas y espacios públicos.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
        </main>
    )
}