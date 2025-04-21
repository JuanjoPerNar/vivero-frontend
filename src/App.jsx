import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Catalogo from './pages/Catalogo'
import Comunidad from './pages/Comunidad'
import Talleres from './pages/Talleres'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'
import PlantsTrefle from './pages/PlantsTrefle'
import Login from './pages/Login'
import Register from './pages/Register'
import NuevoProducto from './pages/NuevoProducto'
import DashboardAdmin from './pages/DashboardAdmin'
import NuevaActividad from './pages/NuevaActividad'
import NuevoServicio from './pages/NuevoServicio'
import Mensajes from './pages/Mensajes'
import Perfil from './pages/Perfil'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import PoliticaCookies from './pages/PoliticaCookies'
import AvisoLegal from './pages/AvisoLegal'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/plantas" element={<PlantsTrefle />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/admin/producto-nuevo" element={<NuevoProducto />} />
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/admin/nueva-actividad" element={<NuevaActividad />} />
          <Route path="/admin/servicio-nuevo" element={<NuevoServicio />} />
          <Route path="/admin/mensajes" element={<Mensajes />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

