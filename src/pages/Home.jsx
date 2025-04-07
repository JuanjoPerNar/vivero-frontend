export default function Home() {
    return (
        <section className="min-h-screen px-4 py-10">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl font-bold text-[#2f3e2e]">
                    Bienvenido a Raíces de La Dolo
                </h1>
                <p className="mt-4 text-base sm:text-lg text-[#2f3e2e]">
                    Conecta con la naturaleza a través de nuestras plantas, talleres y comunidad 
                </p>
            </div>
            <section className="mt-16">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl font-semibold text-[#2f3e2e] mb-4 text-center">
                        Planta destacada del mes
                    </h2>
                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <p className="text-lg font-medium text-[#2f3e2e] mb-2">Ficus lyrata</p>
                        <p className="text-sm text-[#2f3e2e] mb-4">
                            También conocida como higuera de hoja de violín, es perfecta para interior por su porte elegante
                        </p>
                        <button className="bg-[#2f3e2e] text-white px-4 py-2 rounded hover:bg-green-900 transition">
                            Ver más
                        </button>
                    </div>
                </div>
            </section>
        </section>
    )
}