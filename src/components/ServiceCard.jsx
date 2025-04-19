export default function ServiceCard({ service, onClick }) {
  const isClickable = typeof onClick === "function"

  return (
    <div
      onClick={isClickable ? () => onClick(service) : undefined}
      className={`bg-white rounded-lg shadow p-4 transition 
        ${isClickable ? 'hover:shadow-lg cursor-pointer' : 'hover:scale-[1.02]'}`}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold text-[#2f3e2e] mb-1">
        {service.title}
      </h3>
      <p className="text-sm text-[#2f3e2e]">{service.description}</p>
    </div>
  )
}
