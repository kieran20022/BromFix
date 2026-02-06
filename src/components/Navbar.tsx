import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/diensten', label: 'Diensten' },
  { to: '/prijslijst', label: 'Prijslijst' },
  { to: '/verkoop', label: 'Verkoop' },
  { to: '/over-ons', label: 'Over Ons' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200/80 dark:border-gray-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-1.5">
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Brom<span className="text-primary-600 dark:text-primary-500">Fix</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 text-[13px] font-medium rounded transition-colors ${
                    isActive
                      ? 'text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/40'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              to="/contact"
              className="ml-4 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-4 py-1.5 rounded text-[13px] font-medium transition-colors"
            >
              Afspraak Maken
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded text-gray-600 dark:text-gray-400"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-2 space-y-0.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 rounded text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 rounded text-sm font-medium text-center"
              >
                Afspraak Maken
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
