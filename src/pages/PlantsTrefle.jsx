import { useEffect, useState } from "react"
import { getPlants, searchPlantsByName } from "../utils/trefleApi"
import { motion } from "framer-motion"
import PlantModal from "../components/PlantModal"

export default function PlantsTrefle() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [page, setPage] = useState(1)

  const [selectedPlant, setSelectedPlant] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (plant) => {
    setSelectedPlant(plant)
    setIsModalOpen(true)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError("")
    try {
      const data = await searchPlantsByName(query, page)
      setResults(data)
    } catch (err) {
      setError(err.message)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const fetchInitialPlants = async () => {
    setLoading(true)
    setError("")
    try {
      const data = await getPlants(page)
      setResults(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (query.trim()) {
      handleSearch(new Event("submit"))
    } else {
      fetchInitialPlants()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const handleNextPage = () => setPage((prev) => prev + 1)
  const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1))

  return (
    <main className="min-h-screen bg-[#F9FAF8] text-[#1C2B2D] font-['Playfair_Display']">
      <section className="min-h-[30vh] bg-gradient-to-r from-[#EDF4EC] to-[#E2EFE3] flex flex-col items-center justify-center px-6 py-16 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explora plantas con la API de Trefle
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Busca por nombre común o científico y descubre la biodiversidad vegetal del mundo.
        </motion.p>
      </section>

      <section className="px-4 py-12">
        <form onSubmit={handleSearch} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Nombre común o científico"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border border-[#2f3e2e] px-4 py-2 rounded shadow-sm"
          />
          <button
            type="submit"
            className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition"
          >
            Buscar
          </button>
        </form>

        {loading && <p className="text-center text-[#2f3e2e]">Cargando plantas...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
          {results.map((plant) => (
            <div
              key={plant.id}
              onClick={() => handleOpenModal(plant)}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-md text-center transition-transform hover:scale-[1.02] duration-300"
            >
              <h2 className="text-xl font-semibold mb-1 font-['Playfair_Display']">
                {plant.common_name || "Sin nombre común"}
              </h2>
              <p className="text-sm italic text-gray-500 mb-2">{plant.scientific_name}</p>
              {plant.image_url && (
                <img
                  src={plant.image_url}
                  alt={plant.common_name}
                  className="w-full h-40 object-cover rounded-lg"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-12 gap-6">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-5 py-2 bg-[#a6bc8a] text-white rounded disabled:opacity-50 cursor-pointer"
          >
            ← Anterior
          </button>
          <span className="text-lg font-semibold">Página {page}</span>
          <button
            onClick={handleNextPage}
            className="px-5 py-2 bg-[#a6bc8a] text-white rounded cursor-pointer"
          >
            Siguiente →
          </button>
        </div>
      </section>

      {isModalOpen && selectedPlant && (
        <PlantModal
          plant={selectedPlant}
          onClose={() => {
            setIsModalOpen(false)
            setSelectedPlant(null)
          }}
        />
      )}
    </main>
  )
}