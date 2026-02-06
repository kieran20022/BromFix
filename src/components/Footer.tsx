import { Link } from 'react-router-dom'
import { Wrench, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold text-white">
                Brom<span className="text-primary-500">Fix</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Specialist in scooter en brommer reparatie, onderhoud en verkoop. Snel, deskundig en betaalbaar.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Snel Navigeren</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/diensten" className="hover:text-primary-400 transition-colors">Diensten</Link></li>
              <li><Link to="/prijslijst" className="hover:text-primary-400 transition-colors">Prijslijst</Link></li>
              <li><Link to="/verkoop" className="hover:text-primary-400 transition-colors">Verkoop Scooters</Link></li>
              <li><Link to="/over-ons" className="hover:text-primary-400 transition-colors">Over Ons</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Location 1 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Berkel en Rodenrijs</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span>Industrieweg 124a<br />Berkel en Rodenrijs</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Ma-Za: Op afspraak</span>
              </li>
            </ul>
          </div>

          {/* Location 2 */}
          <div>
            <h3 className="text-white font-semibold mb-4">Terneuzen</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span>Bij Auto Tinus<br />Hughersluys 9, 4536 HM<br />Terneuzen</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Bel voor afspraak</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span>info@bromfix.nl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BromFix. Alle rechten voorbehouden.</p>
          <p className="text-xs">Specialist Chinese 4-takt scooters</p>
        </div>
      </div>
    </footer>
  )
}
