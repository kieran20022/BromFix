import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <Navbar />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/31612345678?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20mijn%20scooter"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-4 pr-5 py-3 rounded-full shadow-lg transition-colors"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
