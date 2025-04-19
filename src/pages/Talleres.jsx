import { useState } from "react"
import { motion } from "framer-motion"
import useActivities from "../hooks/useActivities"
import ActivityModal from "../components/ActivityModal"

export default function Talleres() {
  const { activities, loading, error, refetch } = useActivities()
  const [selectedActivity, setSelectedActivity] = useState(null)

  const formatDate = (isoDate) => {
    const date = new Date(isoDate)
    return date.toLocaleDateString("es-ES")
  }

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

      <section className="px-4 py-16 max-w-7xl mx-auto">
        {loading && <p className="text-center">Cargando actividades...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div
              key={activity._id}
              onClick={() => setSelectedActivity(activity)}
              className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer"
            >
              {activity.image && (
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}
              <h3 className="text-lg font-bold text-[#2f3e2e] mb-1">{activity.title}</h3>
              <p className="text-sm text-[#2f3e2e] mb-2 font-medium">
                Fecha: {formatDate(activity.date)}
              </p>
              <p className="text-sm text-[#2f3e2e]">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
          refetch={refetch}
        />
      )}
    </main>
  )
}
