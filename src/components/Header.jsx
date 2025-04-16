import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import logoIlustrado from '../assets/logo-ilustrado.png'
import { useAuth } from '../context/authContext'
import { logoutUser } from '../services/authService'

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)
  const { user } = useAuth()
  const isLoggedIn = user !== null

  useEffect(() => {
    setActiveMenu(null)
    setMobileMenuOpen(false)
  }, [location.pathname])

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

  if (user === undefined) return null

  return (
    <header className="bg-[#C7DD9F] shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between" ref={menuRef}>
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={logoIlustrado} alt="Logo Raíces de La Dolo" className="h-24 w-auto" />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center gap-6 text-[#2f3e2e] font-semibold text-sm relative">
          <Link to="/" className="hover:text-green-800 cursor-pointer">Inicio</Link>

          <div className="relative">
            <button
              onClick={() => toggleMenu('catalogo')}
              className={`cursor-pointer ${activeMenu === 'catalogo' ? 'text-green-800 font-bold' : 'hover:text-green-800'}`}
            >
              Catálogo
            </button>
            {activeMenu === 'catalogo' && (
              <ul className="absolute bg-[#f0f8e2] border border-[#d0e2c2] rounded-xl shadow-lg mt-2 w-56 text-left z-10">
                <li><Link to="/catalogo" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-t-xl font-medium">Ver todo el catálogo</Link></li>
                <li><Link to="/catalogo?category=plantas" className="block px-4 py-2 hover:bg-[#e5f3d5]">Plantas</Link></li>
                <li><Link to="/catalogo?category=macetas" className="block px-4 py-2 hover:bg-[#e5f3d5]">Macetas</Link></li>
                <li><Link to="/catalogo?category=herramientas" className="block px-4 py-2 hover:bg-[#e5f3d5]">Herramientas</Link></li>
                <li><Link to="/catalogo?category=fertilizantes" className="block px-4 py-2 hover:bg-[#e5f3d5]">Fertilizantes</Link></li>
                <li><Link to="/catalogo?category=kits" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-b-xl">Kits</Link></li>
              </ul>
            )}
          </div>

          <Link to="/plantas" className="hover:text-green-800 cursor-pointer">Plantas (Trefle)</Link>

          <div className="relative">
            <button
              onClick={() => toggleMenu('servicios')}
              className={`cursor-pointer ${activeMenu === 'servicios' ? 'text-green-800 font-bold' : 'hover:text-green-800'}`}
            >
              Servicios
            </button>
            {activeMenu === 'servicios' && (
              <ul className="absolute bg-[#f0f8e2] border border-[#d0e2c2] rounded-xl shadow-lg mt-2 w-72 text-left z-10">
                <li><Link to="/servicios" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-t-xl">Todos los servicios</Link></li>
                {[
                  "jardines", "verticales", "mantenimiento", "riego",
                  "asesoramiento", "alquiler", "reciclaje", "rescate"
                ].map((slug, index) => (
                  <li key={slug}>
                    <Link to={`/servicios?tipo=${slug}`} className={`block px-4 py-2 hover:bg-[#e5f3d5] ${index === 7 ? 'rounded-b-xl' : ''}`}>
                      {[
                        "Diseño y creación de jardines",
                        "Jardines verticales",
                        "Mantenimiento periódico",
                        "Instalación de riego eficiente",
                        "Asesoramiento personalizado",
                        "Alquiler de plantas para eventos",
                        "Reciclaje de macetas",
                        "Rescate/adopción de plantas"
                      ][index]}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => toggleMenu('eventos')}
              className={`cursor-pointer ${activeMenu === 'eventos' ? 'text-green-800 font-bold' : 'hover:text-green-800'}`}
            >
              Actividades y eventos
            </button>
            {activeMenu === 'eventos' && (
              <ul className="absolute bg-[#f0f8e2] border border-[#d0e2c2] rounded-xl shadow-lg mt-2 w-64 text-left z-10">
                <li><Link to="/talleres" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-t-xl">Todas las actividades</Link></li>
                <li><Link to="/talleres?tipo=cursos" className="block px-4 py-2 hover:bg-[#e5f3d5]">Cursos</Link></li>
                <li><Link to="/talleres?tipo=talleres" className="block px-4 py-2 hover:bg-[#e5f3d5]">Talleres</Link></li>
                <li><Link to="/talleres?tipo=exposiciones" className="block px-4 py-2 hover:bg-[#e5f3d5]">Exposiciones</Link></li>
                <li><Link to="/talleres?tipo=otros" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-b-xl">Otros eventos</Link></li>
              </ul>
            )}
          </div>

          <Link to="/comunidad" className="hover:text-green-800 cursor-pointer">Comunidad</Link>
          <Link to="/nosotros" className="hover:text-green-800 cursor-pointer">Sobre nosotros</Link>
          <Link to="/contacto" className="hover:text-green-800 cursor-pointer">Contacto</Link>
        </nav>

        <div className="hidden md:flex gap-4 items-center text-sm">
          {isLoggedIn && (
            <Link to="/carrito" className="hover:text-green-800 text-xl flex items-center gap-1">
              <FiShoppingCart className="w-5 h-5" />
            </Link>
          )}

          <div className="relative">
            <button
              onClick={() => toggleMenu('cuenta')}
              className={`cursor-pointer ${activeMenu === 'cuenta' ? 'text-green-800 font-bold' : 'hover:text-green-800'}`}
            >
              Cuenta
            </button>
            {activeMenu === 'cuenta' && (
              <ul className="absolute right-0 bg-[#f0f8e2] border border-[#d0e2c2] rounded-xl shadow-lg mt-2 w-44 text-left z-10">
                {isLoggedIn ? (
                  <>
                    <li><Link to="/perfil" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-t-xl">Mi perfil</Link></li>
                    <li>
                      <button
                        onClick={async () => {
                          await logoutUser()
                          window.location.href = "/"
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-[#e5f3d5] rounded-b-xl cursor-pointer"
                      >
                        Cerrar sesión
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li><Link to="/login" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-t-xl">Iniciar sesión</Link></li>
                    <li><Link to="/register" className="block px-4 py-2 hover:bg-[#e5f3d5] rounded-b-xl">Registrarse</Link></li>
                  </>
                )}
              </ul>
            )}
          </div>
        </div>

        <button
          className="md:hidden text-[#2f3e2e] focus:outline-none cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#C7DD9F] text-[#2f3e2e] font-medium text-sm space-y-2">
          <Link to="/" className="block py-2 hover:text-green-800">Inicio</Link>
          <Link to="/catalogo" className="block py-2 hover:text-green-800">Catálogo</Link>
          <Link to="/plantas" className="block py-2 hover:text-green-800">Plantas (Trefle)</Link>
          <Link to="/servicios" className="block py-2 hover:text-green-800">Servicios</Link>
          <Link to="/talleres" className="block py-2 hover:text-green-800">Actividades y eventos</Link>
          <Link to="/comunidad" className="block py-2 hover:text-green-800">Comunidad</Link>
          <Link to="/nosotros" className="block py-2 hover:text-green-800">Sobre nosotros</Link>
          <Link to="/contacto" className="block py-2 hover:text-green-800">Contacto</Link>
          <hr className="border-[#a6bc8a]" />
          {isLoggedIn && (
            <Link to="/carrito" className="flex items-center gap-2 py-2 hover:text-green-800">
              <ShoppingCart className="w-5 h-5" />
              Carrito
            </Link>
          )}
          {isLoggedIn ? (
            <Link to="/perfil" className="block py-2 hover:text-green-800">Mi perfil</Link>
          ) : (
            <>
              <Link to="/login" className="block py-2 hover:text-green-800">Iniciar sesión</Link>
              <Link to="/register" className="block py-2 hover:text-green-800">Registrarse</Link>
            </>
          )}
        </div>
      )}
    </header>
  )
}
