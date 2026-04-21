import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import Home from './pages/Home.jsx'
import Biere from './pages/Biere.jsx'
import Shop from './pages/Shop.jsx'
import Brauerei from './pages/Brauerei.jsx'
import Veranstaltungen from './pages/Veranstaltungen.jsx'
import Aktuelles from './pages/Aktuelles.jsx'
import Kontakt from './pages/Kontakt.jsx'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/Web_test">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Cart />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/biere" element={<Biere />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/brauerei" element={<Brauerei />} />
              <Route path="/veranstaltungen" element={<Veranstaltungen />} />
              <Route path="/aktuelles" element={<Aktuelles />} />
              <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}
