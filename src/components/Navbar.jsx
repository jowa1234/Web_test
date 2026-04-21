import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from './CartContext.jsx'

const LOGO_URL = 'https://github.com/user-attachments/assets/fb4568b1-45ca-4d84-bb03-3ad76a815e56'

const navLinks = [
  { to: '/biere', label: 'Biere' },
  { to: '/shop', label: 'Shop' },
  { to: '/brauerei', label: 'Brauerei' },
  { to: '/veranstaltungen', label: 'Veranstaltungen' },
  { to: '/aktuelles', label: 'Aktuelles' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const { cartCount, setCartOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${scrolled ? 'bg-dark-brown shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={LOGO_URL} alt="Hellensteiner Bräu" className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold ${isActive ? 'text-gold' : scrolled ? 'text-cream' : 'text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative text-white hover:text-gold transition-colors"
              aria-label="Warenkorb öffnen"
            >
              <span className="text-2xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white hover:text-gold transition-colors"
              aria-label="Menü"
            >
              <span className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-dark-brown border-t border-gold/20">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors hover:text-gold py-2 border-b border-gold/10 ${isActive ? 'text-gold' : 'text-cream'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
