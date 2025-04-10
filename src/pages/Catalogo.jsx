import { useState } from "react"
import useProducts from "../hooks/useProducts"
import useFilteredProducts from "../hooks/useFilteredProducts"
import ProductCard from "../components/ProductCard"

export default function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState("")

  const {
    products: allProducts,
    loading: allLoading,
    error: allError
  } = useProducts()

  const {
    products: filteredProducts,
    loading: filteredLoading,
    error: filteredError
  } = useFilteredProducts(selectedCategory)

  const categories = [
    { value: "", label: "Todos los productos" },
    { value: "planta", label: "Plantas" },
    { value: "maceta", label: "Macetas" },
    { value: "herramienta", label: "Herramientas" },
    { value: "fertilizante", label: "Fertilizantes" },
    { value: "kit", label: "Kits" },
  ]

  const productsToShow = selectedCategory ? filteredProducts : allProducts
  const isLoading = selectedCategory ? filteredLoading : allLoading
  const error = selectedCategory ? filteredError : allError

  return (
    <section className="bg-[#F4F9EF] min-h-screen px-4 py-10 mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#2f3e2e] mb-6 text-center">
          Catálogo completo de productos
        </h2>

        <div className="mb-8 text-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-[#2f3e2e] rounded px-4 py-2 text-sm text-[#2f3e2e] bg-white focus:outline-none focus:ring-2 focus:ring-[#a6bc8a] hover:bg-[#f4f9ef] transition"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {isLoading && (
          <p className="text-center text-[#2f3e2e]">Cargando productos...</p>
        )}

        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}

        {!isLoading && productsToShow.length === 0 && (
          <p className="text-center text-[#2f3e2e]">No hay productos disponibles.</p>
        )}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {productsToShow.map((product) => (
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
