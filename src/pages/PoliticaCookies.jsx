import { motion } from "framer-motion"

export default function PoliticaCookies() {
  return (
    <motion.section 
      className="bg-[#F4F9EF] min-h-screen py-16 px-4 text-[#2f3e2e]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">Política de Cookies</h1>

        <p className="mb-4">
          En <strong>Raíces de La Dolo</strong> utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, personalizar el contenido y analizar el tráfico del sitio.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Qué son las cookies?</h2>
        <p className="mb-4">
          Las cookies son pequeños archivos que se descargan en tu dispositivo al acceder a determinadas páginas web. Estas permiten a un sitio web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación del usuario o su equipo.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Tipos de cookies que utilizamos</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento básico del sitio web.</li>
          <li><strong>Cookies de personalización:</strong> permiten recordar tus preferencias (idioma, tipo de navegador, etc.).</li>
          <li><strong>Cookies analíticas:</strong> nos ayudan a comprender cómo interactúan los usuarios con el sitio mediante Google Analytics u otras herramientas similares.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">¿Cómo puedo gestionar las cookies?</h2>
        <p className="mb-4">
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador. Ten en cuenta que desactivar las cookies puede afectar al funcionamiento de algunas funcionalidades del sitio.
        </p>

        <p className="mt-6">
          Para más información sobre cómo gestionamos tus datos personales, visita nuestra <a href="/politica-privacidad" className="underline font-medium">Política de Privacidad</a>.
        </p>
      </div>
    </motion.section>
  )
}
