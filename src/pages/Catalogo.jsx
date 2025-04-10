import useProducts from "../hooks/useProducts"
import ProductCard from "../components/ProductCard"

export default function Catalogo() {
  const products = useProducts()

  return (
    <section className="bg-[#F4F9EF] min-h-screen px-4 py-10 mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#2f3e2e] mb-6 text-center">
          Catálogo completo de productos
        </h2>
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
