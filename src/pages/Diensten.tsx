import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const serviceCategories = [
  {
    title: 'Onderhoud',
    services: [
      'Grote onderhoudsbeurt scooter',
      'Kleine onderhoudsbeurt scooter',
      'Luchtfilter schoonmaken of vervangen',
      'Bougie vervangen',
      'Olie verversen',
      'Stationair afstellen',
      'Kleppen stellen',
    ],
  },
  {
    title: 'Banden & Wielen',
    services: [
      'Lekke banden plakken',
      'Banden vervangen',
      'Ventiel van band vervangen',
      'Versleten scooter banden vervangen',
      'Velgen vervangen',
    ],
  },
  {
    title: 'Motor & Aandrijving',
    services: [
      'Carburateur afstellen of schoonmaken',
      'V-snaar vervangen',
      'Rolletjes vervangen',
      'Motorblok vervangen',
      'Opvoeren',
      'Uitlaat vervangen',
    ],
  },
  {
    title: 'Remmen & Vering',
    services: [
      'Remmen repareren',
      'Remkabel repareren',
      'Schokbrekers vervangen',
      'Gaskabel repareren',
    ],
  },
  {
    title: 'Elektrisch',
    services: [
      'Accu vervangen',
      'Startproblemen verhelpen',
      'Lampjes of knipperlichten repareren',
      'Remlicht repareren',
      'Overige verlichting repareren',
      'Kilometerteller repareren',
    ],
  },
  {
    title: 'Verlichting',
    services: [
      'Lampjes vervangen',
      'Knipperlichten repareren',
      'Remlicht repareren',
      'Overige verlichting controleren',
    ],
  },
  {
    title: 'Carrosserie',
    services: [
      'Kappen of kappenset vervangen',
      'Windscherm plaatsen of vervangen',
      'Zadel vervangen',
      'Spuiten',
      'Lassen',
    ],
  },
  {
    title: 'Overige Reparaties',
    services: [
      'Kabels repareren of vervangen',
      'Slot repareren',
      'Spiegel vervangen',
      'Standaard repareren',
      'Diverse kleine reparaties',
    ],
  },
]

export default function Diensten() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-900 py-10 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Onze Diensten
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            BromFix biedt een breed scala aan reparaties en onderhoud voor alle merken scooters en brommers.
          </p>
        </div>
      </section>

      {/* Vespa note */}
      <section className="bg-white dark:bg-gray-950 pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/50 rounded px-4 py-3">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Let op:</strong> Aan Vespa en Piaggio scooters doen wij alleen eenvoudige reparaties, zoals banden plakken of vervangen, verlichting, kabels, bougie of uitlaat vervangen.
            </p>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-10 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {serviceCategories.map((cat) => (
              <div
                key={cat.title}
                className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-900 px-5 py-3 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{cat.title}</h3>
                </div>
                <ul className="px-5 py-3 space-y-1.5">
                  {cat.services.map((service) => (
                    <li key={service} className="text-sm text-gray-600 dark:text-gray-400 flex items-baseline gap-2">
                      <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full shrink-0 mt-1.5" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Reparatie nodig?</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Vraag vrijblijvend een prijsopgave aan of bekijk onze prijslijst.</p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded font-medium text-sm transition-colors"
            >
              Contact <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/prijslijst"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-5 py-2.5 rounded font-medium text-sm transition-colors border border-gray-200 dark:border-gray-700"
            >
              Prijslijst
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
