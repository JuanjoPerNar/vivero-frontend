import { motion } from "framer-motion"

export default function Talleres() {
  return (
    <main className="bg-[#F9FAF8] text-[#1C2B2D] font-['Playfair_Display']">
      <section className="min-h-[40vh] bg-gradient-to-r from-[#EDF4EC] to-[#E2EFE3] flex flex-col items-center justify-center px-6 py-16 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Actividades y eventos
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Cursos, talleres, exposiciones e iniciativas que nos reúnen para aprender, compartir y conectar con la naturaleza.
        </motion.p>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg">Muy pronto podrás descubrir aquí todas nuestras actividades presenciales y online.</p>
        </div>
      </section>
    </main>
  )
} 
