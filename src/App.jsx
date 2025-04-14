import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Catalogo from './pages/Catalogo'
import Comunidad from './pages/Comunidad'
import PostDetail from './pages/PostDetail'
import Talleres from './pages/Talleres'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'
import PlantsTrefle from './pages/PlantsTrefle'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/plantas" element={<PlantsTrefle />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/comunidad/:id" element={<PostDetail />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
