import { useState } from "react"
import useFilteredProducts from "../hooks/useFilteredProducts"

export default function FilteredTest() {
  const [category, setCategory] = useState("todos")
  const { products, loading, error } = useFilteredProducts(category)

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Filtrado de productos por categoría</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded p-2 mb-4"
      >
        <option value="todos">Todos los productos</option>
        <option value="planta">Plantas</option>
        <option value="maceta">Macetas</option>
        <option value="herramienta">Herramientas</option>
        <option value="fertilizante">Fertilizantes</option>
        <option value="kit">Kits</option>
      </select>

      {loading && <p>Cargando productos...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <ul className="mt-4 list-disc pl-6">
        {products.map((product) => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}
