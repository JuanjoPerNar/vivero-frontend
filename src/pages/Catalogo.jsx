import useProducts from "../hooks/useProducts"
import ProductCard from "../components/ProductCard"
import { useState } from "react"

export default function Catalogo() {
  const [category, setCategory] = useState('')
  const products = useProducts(category)

  return (
    <section className="bg-[#F4F9EF] min-h-screen px-4 py-10 mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#2f3e2e] mb-6 text-center">
          Catálogo completo de productos
        </h2>
        <div className="mb-6 text-center">
          <label htmlFor="category" className="mr-2 text-[#2f3e2e] font-medium">
            Filtrar por categoría
          </label>
          <select 
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-[#2f3e2e] rounded px-3 py-1 text-sm text-[#2f3e2e]"
            >
              <option value="">Todas</option>
              <option value="planta">Plantas</option>
              <option value="maceta">Macetas</option>
              <option value="herramienta">Herramientas</option>
              <option value="fertilizante">Fertilizantes</option>
              <option value="kit">Kits</option>
            </select>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard 
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              category={product.category}
              size={product.size}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
