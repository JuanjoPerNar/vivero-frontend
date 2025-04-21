import { motion } from "framer-motion"

export default function PoliticaPrivacidad() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#F4F9EF] min-h-screen py-16 px-4 text-[#2f3e2e] font-[Playfair]">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Política de Privacidad</h1>

        <p className="mb-4">
          En <strong>Raíces de La Dolo</strong> nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política
          explica cómo recopilamos, usamos y protegemos tus datos personales conforme al Reglamento General de Protección de Datos (RGPD).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Responsable del tratamiento</h2>
        <p className="mb-4">
          Nombre del responsable: <strong>Raíces de La Dolo</strong><br />
          Email de contacto: <strong>jjpereiranaranjo@gmail.com</strong>
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Datos que recopilamos</h2>
        <p className="mb-4">
          Podemos recopilar los siguientes datos a través de formularios, registros de Firebase o uso del sitio web:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Nombre y apellidos</li>
          <li>Correo electrónico</li>
          <li>Contenido de los mensajes de contacto</li>
          <li>Publicaciones en la comunidad</li>
          <li>Información de navegación (cookies)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Finalidad del tratamiento</h2>
        <p className="mb-4">
          Utilizamos los datos con el fin de gestionar las comunicaciones, mantener la seguridad de la comunidad,
          mejorar nuestros servicios y enviar información relevante sobre el vivero.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Derechos de los usuarios</h2>
        <p className="mb-4">
          Puedes solicitar el acceso, rectificación, cancelación o eliminación de tus datos escribiendo a
          <strong> contacto@raicesdeladolo.com</strong>. También puedes oponerte al tratamiento o solicitar la portabilidad.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Conservación de los datos</h2>
        <p className="mb-4">
          Conservamos los datos personales el tiempo estrictamente necesario para cumplir con la finalidad para la que fueron recabados.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Seguridad</h2>
        <p className="mb-4">
          Implementamos medidas técnicas y organizativas para proteger los datos personales, tanto en Firestore como en MongoDB Atlas.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Cambios en esta política</h2>
        <p className="mb-4">
          Nos reservamos el derecho a modificar esta política de privacidad en cualquier momento. Las actualizaciones estarán disponibles en esta misma página.
        </p>
      </div>
    </motion.section>
  )
}
