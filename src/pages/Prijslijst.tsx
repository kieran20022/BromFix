import { Link } from 'react-router-dom'
import { ArrowRight, Info } from 'lucide-react'

const priceCategories = [
  {
    title: 'Onderhoud',
    items: [
      { service: 'Kleine onderhoudsbeurt', price: 'Vanaf €45' },
      { service: 'Grote onderhoudsbeurt', price: 'Vanaf €85' },
      { service: 'Olie verversen', price: 'Vanaf €15' },
      { service: 'Bougie vervangen', price: 'Vanaf €10' },
      { service: 'Luchtfilter vervangen', price: 'Vanaf €15' },
      { service: 'Kleppen stellen', price: 'Vanaf €25' },
    ],
  },
  {
    title: 'Banden & Wielen',
    items: [
      { service: 'Band plakken', price: 'Vanaf €15' },
      { service: 'Band vervangen (incl. band)', price: 'Vanaf €35' },
      { service: 'Ventiel vervangen', price: 'Vanaf €10' },
      { service: 'Velg vervangen', price: 'Op aanvraag' },
    ],
  },
  {
    title: 'Motor & Aandrijving',
    items: [
      { service: 'V-snaar vervangen', price: 'Vanaf €35' },
      { service: 'Rolletjes vervangen', price: 'Vanaf €30' },
      { service: 'Carburateur schoonmaken', price: 'Vanaf €35' },
      { service: 'Carburateur afstellen', price: 'Vanaf €20' },
      { service: 'Motorblok vervangen', price: 'Op aanvraag' },
      { service: 'Uitlaat vervangen', price: 'Op aanvraag' },
    ],
  },
  {
    title: 'Remmen & Vering',
    items: [
      { service: 'Remblokken vervangen', price: 'Vanaf €25' },
      { service: 'Remkabel vervangen', price: 'Vanaf €20' },
      { service: 'Schokbreker vervangen', price: 'Vanaf €30' },
      { service: 'Gaskabel vervangen', price: 'Vanaf €20' },
    ],
  },
  {
    title: 'Elektrisch & Verlichting',
    items: [
      { service: 'Accu vervangen', price: 'Vanaf €30' },
      { service: 'Startprobleem diagnose', price: 'Vanaf €20' },
      { service: 'Lamp vervangen', price: 'Vanaf €10' },
      { service: 'Knipperlicht repareren', price: 'Vanaf €15' },
      { service: 'Kilometerteller repareren', price: 'Op aanvraag' },
    ],
  },
  {
    title: 'Carrosserie & Overig',
    items: [
      { service: 'Zadel vervangen', price: 'Op aanvraag' },
      { service: 'Kappen vervangen', price: 'Op aanvraag' },
      { service: 'Windscherm plaatsen', price: 'Op aanvraag' },
      { service: 'Spuiten', price: 'Op aanvraag' },
      { service: 'Lassen', price: 'Op aanvraag' },
      { service: 'Opvoeren', price: 'Op aanvraag' },
    ],
  },
]

export default function Prijslijst() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-900 py-10 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Prijslijst
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            Indicatie van onze prijzen. De exacte prijs hangt af van het type scooter en benodigde onderdelen.
          </p>
        </div>
      </section>

      {/* Note */}
      <section className="bg-white dark:bg-gray-950 pt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-3 bg-primary-50 dark:bg-primary-950/20 border border-primary-200 dark:border-primary-800/50 rounded px-4 py-3">
            <Info className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" />
            <p className="text-sm text-primary-800 dark:text-primary-300">
              Alle prijzen zijn inclusief arbeidsloon, tenzij anders vermeld. Onderdelen worden apart berekend. Neem contact op voor een exacte prijsopgave.
            </p>
          </div>
        </div>
      </section>

      {/* Price tables */}
      <section className="py-10 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-5">
            {priceCategories.map((cat) => (
              <div
                key={cat.title}
                className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-900 px-5 py-3 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{cat.title}</h3>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-800/60">
                  {cat.items.map((item) => (
                    <div
                      key={item.service}
                      className="flex items-center justify-between px-5 py-2.5"
                    >
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item.service}</span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Haal & Breng */}
          <div className="mt-5 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-900 px-5 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Haal &amp; Breng Service</h3>
            </div>
            <div className="px-5 py-3">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kosten voor het ophalen en terugbrengen zijn afhankelijk van de afstand. Neem contact op voor een prijsindicatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Exacte prijs nodig?
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Neem contact met ons op voor een vrijblijvende offerte voor jouw scooter.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded font-medium text-sm transition-colors"
          >
            Vraag Offerte Aan <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
