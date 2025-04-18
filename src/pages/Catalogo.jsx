import { useState } from "react"
import useProducts from "../hooks/useProducts"
import useFilteredProducts from "../hooks/useFilteredProducts"
import ProductCard from "../components/ProductCard"
import ProductModal from "../components/ProductModal"
import { motion } from "framer-motion"

export default function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const {
    products: allProducts,
    loading: allLoading,
    error: allError,
    refetch
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
    <main className="bg-[#F9FAF8] text-[#1C2B2D] font-['Playfair_Display']">
      <section className="min-h-[40vh] bg-gradient-to-r from-[#EDF4EC] to-[#E2EFE3] flex flex-col items-center justify-center px-6 py-16 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Catálogo completo de productos
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Descubre todas nuestras plantas, herramientas, fertilizantes y kits para tu espacio verde ideal.
        </motion.p>
      </section>

      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
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

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {productsToShow.map((product) => (
              <ProductCard
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                category={product.category}
                size={product.size}
                image={product.image}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          refetch={refetch}
        />
      )}
    </main>
  )
}
