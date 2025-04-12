import formatPrice from "../utils/formatPrice"

export default function ProductCard({ name, description, price, category, size, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-[#2f3e2e] text-center transition-transform hover:scale-[1.02] duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 font-['Playfair_Display']">{name}</h3>
      <p className="text-sm mb-2 leading-relaxed">{description}</p>
      <p className="text-sm mb-1">
        <span className="font-medium">Categoría:</span> {category}
      </p>
      <p className="text-sm mb-1">
        <span className="font-medium">Tamaño:</span> {size}
      </p>
      <p className="text-base font-bold mt-3 text-[#3f513d]">{formatPrice(price)}</p>
    </div>
  )
} 
