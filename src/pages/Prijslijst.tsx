import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Prijslijst
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hieronder vind je een indicatie van onze prijzen. De exacte prijs is afhankelijk van het type scooter en de benodigde onderdelen. Vraag vrijblijvend een prijsopgave aan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-white dark:bg-gray-950 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 bg-primary-50 dark:bg-primary-950/30 border border-primary-200 dark:border-primary-800 rounded-xl p-5">
            <Info className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm text-primary-800 dark:text-primary-300 font-medium">Prijzen zijn indicatief</p>
              <p className="text-sm text-primary-700 dark:text-primary-400 mt-1">
                Alle genoemde prijzen zijn inclusief arbeidsloon, tenzij anders vermeld. Onderdelen worden apart berekend. Neem contact op voor een exacte prijsopgave voor jouw scooter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price tables */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {priceCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                  <h3 className="font-bold text-gray-900 dark:text-white">{cat.title}</h3>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  {cat.items.map((item) => (
                    <div
                      key={item.service}
                      className="flex items-center justify-between px-6 py-3.5 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item.service}</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Haal & Breng */}
      <section className="py-8 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-gray-900 dark:text-white">Haal & Breng Service</h3>
            </div>
            <div className="px-6 py-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Kosten voor het ophalen en terugbrengen van je scooter zijn afhankelijk van de afstand. Neem contact op voor een prijsindicatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Vrijblijvend een prijsopgave?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Wil je precies weten wat de reparatie van jouw scooter of brommer kost? Neem contact met ons op voor een vrijblijvende offerte.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Vraag Offerte Aan
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
