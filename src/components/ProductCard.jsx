export default function ProductCard({ name, description, price, category, size, image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold text-[#2f3e2e] mb-1">{name}</h3>
      <p className="text-sm text-[#2f3e2e] mb-1 font-medium">Categoría: {category}</p>
      <p className="text-sm text-[#2f3e2e] mb-1 font-medium">Tamaño: {size}</p>
      <p className="text-sm text-[#2f3e2e] font-semibold">{price} €</p>
    </div>
  )
}
