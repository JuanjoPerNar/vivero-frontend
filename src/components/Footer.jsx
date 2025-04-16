import { Link } from 'react-router-dom'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FiMail, FiPhone } from 'react-icons/fi'
import logoIlustrado from '../assets/logo-ilustrado.png'

export default function Footer() {
  return (
    <footer className="bg-[#C7DD9F] text-[#2f3e2e] font-playfair mt-10">

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div>
          <img
            src={logoIlustrado}
            alt="Logo Raíces de La Dolo"
            className="h-16 w-auto mb-3"
          />
          <h3 className="font-bold text-md mb-2">Raíces de La Dolo</h3>
          <p className="text-sm">
            Vivero de plantas, cursos y naturaleza
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Enlaces rápidos</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:text-green-800">Inicio</Link></li>
            <li><Link to="/catalogo" className="hover:text-green-800">Catálogo</Link></li>
            <li><Link to="/plantas" className="hover:text-green-800">Plantas (Trefle)</Link></li>
            <li><Link to="/servicios" className="hover:text-green-800">Servicios</Link></li>
            <li><Link to="/talleres" className="hover:text-green-800">Actividades y eventos</Link></li>
            <li><Link to="/comunidad" className="hover:text-green-800">Comunidad</Link></li>
            <li><Link to="/nosotros" className="hover:text-green-800">Sobre nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-green-800">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Legal</h4>
          <ul className="text-sm space-y-1">
            <li>
              <Link
                to="/politica-privacidad"
                className="hover:text-green-800"
              >
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link
                to="/politica-cookies"
                className="hover:text-green-800"
              >
                Política de cookies
              </Link>
            </li>
            <li>
              <Link
                to="/aviso-legal"
                className="hover:text-green-800"
              >
                Aviso legal
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Contacto</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FiMail className="w-4 h-4" />
              <a
                href="mailto:info@raicesdeladolo.com"
                className="hover:text-green-800"
              >
                jjpereiranaranjo@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="w-4 h-4" />
              <span>+34 687 243 518</span>
            </li>
            <li className="flex gap-4 items-center mt-2">
              <a
                href="https://github.com/JuanjoPerNar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-green-800"
              >
                <SiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/juanjopereira/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-green-800"
              >
                <SiLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#a6bc8a] text-xs text-[#2f3e2e] text-center py-3">
        © {new Date().getFullYear()} Raíces de La Dolo · Todos los derechos reservados
      </div>
    </footer>
  )
}
