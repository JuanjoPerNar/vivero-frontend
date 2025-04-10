import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoIlustrado from '../assets/logo-ilustrado.png'
import logoTexto from '../assets/logo-texto.png'

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)

  // Cierra el menú desplegable al cambiar de ruta
  useEffect(() => {
    setActiveMenu(null)
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Cierra el menú desplegable al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMenu = (menuName) => {
    setActiveMenu(prev => prev === menuName ? null : menuName)
  }

  return (
    <header className="bg-[#C7DD9F] shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between" ref={menuRef}>
        {/* LOGOS */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={logoIlustrado} alt="Logo Raíces de La Dolo" className="h-24 w-auto" />
          </Link>
          <Link to="/">
            <img src={logoTexto} alt="Texto Raíces de La Dolo" className="h-24 w-auto" />
          </Link>
        </div>

        {/* MENÚ DE NAVEGACIÓN (ESCRITORIO) */}
        <div className="hidden md:flex flex-1 justify-center gap-6 text-[#2f3e2e] font-semibold text-sm relative">
          <Link to="/" className="hover:text-green-800 cursor-pointer">Inicio</Link>

          {/* Catálogo */}
          <div className="relative">
            <button onClick={() => toggleMenu('catalogo')} className="hover:text-green-800 cursor-pointer">
              Catálogo
            </button>
            {activeMenu === 'catalogo' && (
              <ul className="absolute bg-[#f0f8e2] border border-[#d0e2c2] rounded-xl shadow-lg mt-2 w-56 text-left z-10">
                <li><Link to="/catalogo" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-t-xl font-medium">Ver todo el catálogo</Link></li>
                <li><Link to="/catalogo" className="block px-4 py-2 hover:bg-[#e5f3d5]">Plantas</Link></li>
                <li><Link to="/catalogo" className="block px-4 py-2 hover:bg-[#e5f3d5]">Macetas</Link></li>
                <li><Link to="/catalogo" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-b-xl">Herramientas</Link></li>
              </ul>
            )}
          </div>

          {/* Servicios */}
          <div className="relative">
            <button onClick={() => toggleMenu('servicios')} className="hover:text-green-800 cursor-pointer">
              Servicios
            </button>
            {activeMenu === 'servicios' && (
              <ul className="absolute bg-[#f0f8e2] border border-[#d0e2c2] rounded-xl shadow-lg mt-2 w-60 text-left z-10">
                <li><Link to="/servicios" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-t-xl font-medium">Todos los servicios</Link></li>
                <li><Link to="/servicios" className="block px-4 py-2 hover:bg-[#e5f3d5]">Jardines</Link></li>
                <li><Link to="/servicios" className="block px-4 py-2 hover:bg-[#e5f3d5]">Verticales</Link></li>
                <li><Link to="/servicios" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-b-xl">Asesoramiento</Link></li>
              </ul>
            )}
          </div>

          {/* Talleres */}
          <div className="relative">
            <button onClick={() => toggleMenu('eventos')} className="hover:text-green-800 cursor-pointer">
              Talleres y eventos
            </button>
            {activeMenu === 'eventos' && (
              <ul className="absolute bg-[#f0f8e2] border border-[#d0e2c2] rounded-xl shadow-lg mt-2 w-60 text-left z-10">
                <li><Link to="/talleres" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-t-xl font-medium">Todos los talleres y eventos</Link></li>
                <li><Link to="/talleres" className="block px-4 py-2 hover:bg-[#e5f3d5]">Cursos</Link></li>
                <li><Link to="/talleres" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-b-xl">Eventos</Link></li>
              </ul>
            )}
          </div>

          <Link to="/comunidad" className="hover:text-green-800 cursor-pointer">Comunidad</Link>
          <Link to="/contacto" className="hover:text-green-800 cursor-pointer">Contacto</Link>
        </div>

        {/* MENÚ CUENTA */}
        <div className="hidden md:flex items-center ml-4 relative text-[#2f3e2e] font-semibold text-sm">
          <div className="relative">
            <button onClick={() => toggleMenu('cuenta')} className="hover:text-green-800 cursor-pointer">
              Cuenta
            </button>
            {activeMenu === 'cuenta' && (
              <ul className="absolute right-0 bg-[#f0f8e2] border border-[#d0e2c2] rounded-xl shadow-lg mt-2 w-44 text-left z-10">
                <li><a href="#" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-t-xl">Mi perfil</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-[#e5f3d5]">Iniciar sesión</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-b-xl">Registrarse</a></li>
              </ul>
            )}
          </div>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="md:hidden text-[#2f3e2e] focus:outline-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MENÚ RESPONSIVE */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#C7DD9F] text-[#2f3e2e] font-medium text-sm space-y-2">
          <Link to="/" className="block py-2 hover:text-green-800">Inicio</Link>
          <Link to="/catalogo" className="block py-2 hover:text-green-800">Catálogo</Link>
          <Link to="/servicios" className="block py-2 hover:text-green-800">Servicios</Link>
          <Link to="/talleres" className="block py-2 hover:text-green-800">Talleres y eventos</Link>
          <Link to="/comunidad" className="block py-2 hover:text-green-800">Comunidad</Link>
          <Link to="/contacto" className="block py-2 hover:text-green-800">Contacto</Link>
          <hr className="border-[#a6bc8a]" />
          <Link to="#" className="block py-2 hover:text-green-800">Mi perfil</Link>
          <Link to="#" className="block py-2 hover:text-green-800">Iniciar sesión</Link>
          <Link to="#" className="block py-2 hover:text-green-800">Registrarse</Link>
        </div>
      )}
    </header>
  )
}
