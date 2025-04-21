import { motion } from "framer-motion"

export default function AvisoLegal() {
  return (
    <motion.section
      className="bg-[#F4F9EF] min-h-screen py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-xl text-[#2f3e2e]">
        <h1 className="text-3xl font-bold mb-6 text-center">Aviso Legal</h1>

        <p className="mb-4">
          Este sitio web, <strong>Raíces de La Dolo</strong>, tiene como finalidad ofrecer información
          sobre productos y servicios relacionados con jardinería y plantas. Aunque se presenta con
          apariencia comercial, su objetivo principal es educativo y de demostración, como parte de un proyecto académico.
        </p>

        <p className="mb-4">
          La titularidad del sitio corresponde a un alumno en formación, y no representa una entidad comercial
          real registrada. No se realizan transacciones económicas ni se almacena información financiera.
        </p>

        <p className="mb-4">
          El uso de este sitio implica la aceptación de los términos aquí descritos. Se prohíbe el uso indebido
          de los contenidos, imágenes o código sin autorización expresa del autor.
        </p>

        <p className="mb-4">
          Para cualquier consulta o solicitud relacionada con este aviso, puede utilizar el formulario de contacto
          disponible en la web.
        </p>

        <p className="mt-6 text-sm italic text-center">
          Última actualización: abril 2025
        </p>
      </div>
    </motion.section>
  )
}
