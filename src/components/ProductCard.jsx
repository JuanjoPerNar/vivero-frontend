import formatPrice from "../utils/formatPrice"

export default function ProductCard({ name, description, price, category, size, image }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-[#2f3e2e] text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm mb-2">{description}</p>
      <p className="text-sm mb-1">
        <span className="font-medium">Categoría:</span> {category}
      </p>
      <p className="text-sm mb-1">
        <span className="font-medium">Tamaño:</span> {size}
      </p>
      <p className="text-base font-bold mt-3">{formatPrice(price)}</p>
    </div>
  )
}
