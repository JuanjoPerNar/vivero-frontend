import React from 'react'
import logoIlustrado from '../assets/logo-ilustrado.png'
import { motion } from 'framer-motion'

export default function Nosotros() {
  return (
    <main className="bg-[#F9FAF8] text-[#1C2B2D] font-['Playfair_Display']">
      <section className="min-h-[50vh] bg-gradient-to-r from-[#EDF4EC] to-[#E2EFE3] flex flex-col items-center justify-center px-6 py-20 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sobre nosotros
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Un proyecto con raíces profundas, donde florece la conexión entre naturaleza y personas.
        </motion.p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra historia</h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              “Raíces de La Dolo” nace del recuerdo de una mujer que supo reunir a su familia como nadie. Mi abuela Dolores no era jardinera ni vivía rodeada de plantas, pero tenía el don de hacer que todos nos sintiéramos parte de algo más grande, de unas raíces comunes que nos siguen sosteniendo.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Algunos la recuerdan en el campo, otros en casa, en una reunión o en una anécdota que aún hace reír. No importa el escenario: su presencia dejaba huella, unía generaciones y daba sentido a lo cotidiano.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Lo hacía sin alzar la voz, sin quejarse nunca, siempre pensando en los demás. Cuidaba sin hacer ruido, con esa serenidad que solo tienen las personas que entienden la vida desde la entrega y el cariño sincero.
            </p>
            <p className="text-base md:text-lg mb-6 leading-relaxed">
              Este vivero es un homenaje a ese legado. A esa forma de estar presente, de sembrar vínculos que siguen creciendo hoy, y de recordar que lo más valioso, muchas veces, no se ve, pero se siente.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              “Raíces de La Dolo” no es solo un nombre. Es una forma de entender lo que importa, lo que perdura, lo que nos conecta.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-8">Nuestros valores</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left mb-16 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Cuidado consciente</h3>
              <p>Cuidamos las plantas y a las personas con respeto, dedicación y atención a lo esencial.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Calidez y cercanía</h3>
              <p>Queremos que quien se acerque al vivero se sienta como en casa, en un espacio amable y humano.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Sencillez natural</h3>
              <p>Valoramos lo auténtico y lo sencillo, porque en lo simple también florece lo importante.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Compromiso con el entorno</h3>
              <p>Actuamos con responsabilidad ambiental, fomentando prácticas sostenibles y respeto por la naturaleza.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Comunidad y conexión</h3>
              <p>Creemos en el poder de lo colectivo: crecer en comunidad es sembrar relaciones duraderas.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-2">Legado emocional</h3>
              <p>Honramos nuestras raíces familiares y construimos desde la memoria, el cariño y la gratitud.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold mb-4">El equipo</h2>
            <p>Somos un grupo de personas apasionadas por la jardinería, la educación ambiental y el diseño verde.</p>
          </div>

          <img 
            src={logoIlustrado}
            alt="Ilustración Raíces de La Dolo" 
            className="w-80 mx-auto rounded-lg shadow-md"
          />

          <p className="mt-10 text-sm text-[#4f5e4a] text-center">
            *Este vivero es ficticio y ha sido creado con fines educativos.
          </p>
        </div>
      </section>
    </main>
  )
}