import { useState } from 'react'
import logoIlustrado from '../assets/logo-ilustrado.png'
import logoTexto from '../assets/logo-texto.png'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMenu = () => {
    setMobileOpen((prev) => !prev)
  }

  return (
    <header className="bg-[#C7DD9F] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logoIlustrado} alt="Logo Raíces de La Dolo" className="h-24 w-auto" />
          <img src={logoTexto} alt="Texto Raíces de La Dolo" className="h-24 w-auto" />
        </div>

        {/* Menú escritorio */}
        <nav className="hidden md:flex gap-6 text-[#2f3e2e] font-semibold text-sm">
          <a href="#" className="hover:text-green-800">Inicio</a>
          <a href="#" className="hover:text-green-800">Catálogo</a>
          <a href="#" className="hover:text-green-800">Talleres</a>
          <a href="#" className="hover:text-green-800">Contacto</a>
        </nav>

        {/* Perfil escritorio */}
        <div className="hidden md:flex items-center gap-2">
          <img
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"
            alt="Perfil"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm text-[#2f3e2e] font-medium">Mi perfil</span>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          className="block md:hidden text-[#2f3e2e] focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-2 text-[#2f3e2e] font-medium text-sm">
            <a href="#" className="hover:text-green-800">Inicio</a>
            <a href="#" className="hover:text-green-800">Catálogo</a>
            <a href="#" className="hover:text-green-800">Talleres</a>
            <a href="#" className="hover:text-green-800">Contacto</a>
          </nav>
          <div className="mt-4 flex items-center gap-2">
            <img
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"
              alt="Perfil"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm text-[#2f3e2e] font-medium">Mi perfil</span>
          </div>
        </div>
      )}
    </header>
  )
}
