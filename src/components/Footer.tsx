import { Link } from "react-router-dom";
import { MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="dark:bg-gray-950 dark:text-gray-400 border-t dark:border-gray-800 border-gray-200 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-3">
              <span
                className="text-lg font-bold text-white"
                style={{ textShadow: "1px 1px 0 black" }}
              >
                Brom<span className="text-primary-500">Fix</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Reparatie, onderhoud en verkoop van scooters en brommers.
              Specialist in Chinese 4-takt scooters.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Pagina's</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link
                  to="/diensten"
                  className="hover:text-white transition-colors"
                >
                  Diensten
                </Link>
              </li>
              <li>
                <Link
                  to="/prijslijst"
                  className="hover:text-white transition-colors"
                >
                  Prijslijst
                </Link>
              </li>
              <li>
                <Link
                  to="/verkoop"
                  className="hover:text-white transition-colors"
                >
                  Verkoop
                </Link>
              </li>
              <li>
                <Link
                  to="/over-ons"
                  className="hover:text-white transition-colors"
                >
                  Over Ons
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Location 1 */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">
              Berkel en Rodenrijs
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-gray-500 shrink-0" />
                <span>
                  Industrieweg 124a
                  <br />
                  Berkel en Rodenrijs
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                <span>Op afspraak</span>
              </li>
            </ul>
          </div>

          {/* Location 2 */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Terneuzen</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-gray-500 shrink-0" />
                <span>
                  Bij Auto Tinus
                  <br />
                  Hughersluys 9, 4536 HM
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                <span>info@bromfix.nl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800/60 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            &copy; {new Date().getFullYear()} BromFix. Alle rechten
            voorbehouden.
          </p>
          <p>KvK: 12345678</p>
        </div>
      </div>
    </footer>
  );
}
