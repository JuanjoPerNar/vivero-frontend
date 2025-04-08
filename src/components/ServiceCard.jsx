export default function ServiceCard({ title, description, icon }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-[#2f3e2e] hover:shadow-lg transition">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
        </div>
    )
}