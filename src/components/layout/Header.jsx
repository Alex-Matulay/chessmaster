import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Menu, X, Crown } from 'lucide-react'
import { useCart } from '../../hooks/useCart'

export function Header({ onCartClick }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount } = useCart()
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/lessons', label: 'Lessons' },
    { to: '/products', label: 'Products' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-slate-900 no-underline">
            <Crown className="text-emerald-600" size={28} />
            <span className="text-xl font-bold">ChessMaster</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium no-underline transition-colors ${
                  isActive(link.to) ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer bg-transparent border-none"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 text-slate-600 cursor-pointer bg-transparent border-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-100 pt-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-sm font-medium no-underline ${
                  isActive(link.to) ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
