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
          <Route path="/admin/producto-nuevo" element={<NuevoProducto />} />
          <Route path="/admin" element={<DashboardAdmin />} />
          <Route path="/admin/nueva-actividad" element={<NuevaActividad />} />
          <Route path="/admin/servicio-nuevo" element={<NuevoServicio />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App

