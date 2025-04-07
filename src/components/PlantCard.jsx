export default function PlantCard({name, description, image}) {
    return (
        <div className="bg-white rounded-lg shadow p-4 text-center">
            <a href={image} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer hover:opacity-80 transition" />
            </a>
            <h3 className="text-lg font-semibold ">{name}</h3>
            <p className="text-sm text-[#2f3e2e]">{description}</p>
        </div>
    )
}