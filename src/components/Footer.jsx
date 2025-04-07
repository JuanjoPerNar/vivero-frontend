export default function Footer() {
    return (
        <footer className="bg-[#C7DD9F] text-[#2f3e2e] py-8 mt-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <h3 className="font-bold text-md mb-2">Raíces de La Dolo</h3>
                    <p className="text-sm">Vivero de plantas, cursos y naturaleza</p>
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-1">Legal</h4>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:text-green-800">Aviso legal</a></li>
                        <li><a href="#" className="hover:text-green-800"></a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-1">Contacto</h4>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:text-green-800">info@raicesdeladolo.com</a></li>
                        <li><a href="#" className="hover:text-green-800">Linkedin</a></li>
                        <li><a href="#" className="hover:text-green-800">Instagram</a></li>
                        <li><a href="#" className="hover:text-green-800">WhatsApp</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-1">Sobre nosotros</h4>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:text-green-800">Nuestra historia</a></li>
                        <li><a href="#" className="hover:text-green-800">El equipo</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-xs text-[#2f3e2e] mt-8">
                © {new Date().getFullYear()} Raíces de La Dolo · Todos los derechos reservados
            </div>

        </footer>
    )
}