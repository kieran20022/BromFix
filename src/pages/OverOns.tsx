import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

export default function OverOns() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-900 py-10 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Over BromFix
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            Leer meer over de oprichter, onze werkplaats en waarom klanten ons vertrouwen.
          </p>
        </div>
      </section>

      {/* About Roland */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
                alt="Werkplaats"
                className="rounded-lg w-full object-cover aspect-[3/4]"
              />
            </div>
            <div className="lg:col-span-3">
              <p className="text-xs text-primary-600 dark:text-primary-400 font-medium uppercase tracking-wider mb-2">De Oprichter</p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
                Roland van der Louw
              </h2>
              <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                <p>
                  BromFix.nl is opgericht door Roland van der Louw. Roland volgt de opleiding auto-, scooter- en brommermonteur aan het Techniek College Rotterdam en sleutelt al jaren aan de scooters en brommers van buren, familie, kennissen en vrienden.
                </p>
                <p>
                  Wat begon als een hobby groeide uit tot een professionele reparatieservice met twee locaties. Roland is gespecialiseerd in Chinese 4-takt scooters en kent deze motoren door en door.
                </p>
                <p>
                  Roland rijdt zelf op een Kymco New Dink en met een brommobiel JDM Abaca en verzorgt daar ook het onderhoud van.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Waar wij voor staan</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Vakmanschap', desc: 'Jarenlange ervaring. Opgeleid aan het Techniek College Rotterdam.' },
              { title: 'Passie', desc: 'Begonnen vanuit passie voor het sleutelen aan scooters van buren en vrienden.' },
              { title: 'Persoonlijk', desc: 'Bij BromFix ben je geen nummer. Persoonlijke service en eerlijk advies.' },
              { title: 'Kwaliteit', desc: 'Wij leveren kwaliteit en staan achter ons werk. Goede onderdelen, eerlijke prijzen.' },
            ].map((v) => (
              <div key={v.title}>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{v.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Twee Locaties</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-gray-900 dark:bg-gray-800 rounded-lg text-white">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary-400" />
                <h3 className="font-semibold">Berkel en Rodenrijs</h3>
              </div>
              <p className="text-sm text-gray-300 mb-1">Industrieweg 124a</p>
              <p className="text-sm text-gray-300 mb-3">Gemeente Lansingerland</p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Vlakbij het station Randstadrail Rodenrijs. Goed bereikbaar vanuit Bergschenhoek, Bleiswijk, Pijnacker, Nootdorp, Rotterdam, Zoetermeer, Den Haag en Delft.
              </p>
            </div>
            <div className="p-6 bg-gray-900 dark:bg-gray-800 rounded-lg text-white">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary-400" />
                <h3 className="font-semibold">Terneuzen</h3>
              </div>
              <p className="text-sm text-gray-300 mb-1">Bij Auto Tinus</p>
              <p className="text-sm text-gray-300 mb-1">Hughersluys 9, 4536 HM</p>
              <p className="text-xs text-gray-400 leading-relaxed mt-2">
                Regelmatig aanwezig in Zeeuws-Vlaanderen. Neem contact op voor beschikbaarheid en afspraken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Wil je meer weten?</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Neem gerust contact op voor vragen, een prijsopgave of het maken van een afspraak.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded font-medium text-sm transition-colors"
          >
            Neem Contact Op <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
