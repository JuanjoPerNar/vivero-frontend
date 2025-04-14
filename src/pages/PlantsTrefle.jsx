import { useState } from "react"
import { searchPlantsByName } from "../utils/trefleApi"

export default function PlantsTrefle() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError('')
    setResults([])

    try {
      const data = await searchPlantsByName(query)
      setResults(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F9FAF8] text-[#1C2B2D] font-['Playfair_Display'] px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Buscar plantas con Trefle API</h1>

      <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Escribe el nombre de la planta"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-[#2f3e2e] px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-[#2f3e2e] text-white px-6 py-2 rounded hover:bg-[#3f513d] transition"
        >
          Buscar
        </button>
      </form>

      {loading && <p className="text-center">Buscando plantas...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
        {results.map((plant) => (
          <div key={plant.id} className="bg-white p-4 rounded shadow text-center">
            <h2 className="text-lg font-semibold">{plant.common_name || "Sin nombre común"}</h2>
            <p className="text-sm italic text-gray-500">{plant.scientific_name}</p>
            {plant.image_url && (
              <img
                src={plant.image_url}
                alt={plant.common_name}
                className="w-full h-40 object-cover mt-2 rounded"
              />
            )}
          </div>
        ))}
      </div>
    </main>
  )
}
