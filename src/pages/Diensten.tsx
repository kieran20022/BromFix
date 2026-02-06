import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Wrench,
  Settings,
  Disc,
  Wind,
  Zap,
  Gauge,
  Eye,
  Shield,
  Paintbrush,
  ArrowRight,
} from 'lucide-react'

const serviceCategories = [
  {
    title: 'Onderhoud',
    icon: Settings,
    color: 'primary',
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
    icon: Disc,
    color: 'blue',
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
    icon: Gauge,
    color: 'red',
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
    icon: Shield,
    color: 'green',
    services: [
      'Remmen repareren',
      'Remkabel repareren',
      'Schokbrekers vervangen',
      'Gaskabel repareren',
    ],
  },
  {
    title: 'Elektrisch',
    icon: Zap,
    color: 'yellow',
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
    icon: Eye,
    color: 'purple',
    services: [
      'Lampjes vervangen',
      'Knipperlichten repareren',
      'Remlicht repareren',
      'Overige verlichting controleren',
    ],
  },
  {
    title: 'Carrosserie',
    icon: Paintbrush,
    color: 'pink',
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
    icon: Wrench,
    color: 'orange',
    services: [
      'Kabels repareren of vervangen',
      'Slot repareren',
      'Spiegel vervangen',
      'Standaard repareren',
      'Diverse kleine reparaties',
    ],
  },
]

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  primary: {
    bg: 'bg-primary-50 dark:bg-primary-950/30',
    icon: 'bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400',
    border: 'border-primary-100 dark:border-primary-900/50',
  },
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    icon: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
    border: 'border-blue-100 dark:border-blue-900/50',
  },
  red: {
    bg: 'bg-red-50 dark:bg-red-950/30',
    icon: 'bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400',
    border: 'border-red-100 dark:border-red-900/50',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-950/30',
    icon: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400',
    border: 'border-green-100 dark:border-green-900/50',
  },
  yellow: {
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    icon: 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400',
    border: 'border-amber-100 dark:border-amber-900/50',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    icon: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
    border: 'border-purple-100 dark:border-purple-900/50',
  },
  pink: {
    bg: 'bg-pink-50 dark:bg-pink-950/30',
    icon: 'bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400',
    border: 'border-pink-100 dark:border-pink-900/50',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    icon: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400',
    border: 'border-orange-100 dark:border-orange-900/50',
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5 },
  }),
}

export default function Diensten() {
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
              Onze Diensten
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              BromFix biedt een breed scala aan reparaties en onderhoud voor alle merken scooters en brommers. Van een simpele bandenwissel tot een complete motorrevisie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vespa/Piaggio note */}
      <section className="bg-white dark:bg-gray-950 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
            <p className="text-sm text-blue-800 dark:text-blue-300">
              <strong>Let op:</strong> Aan Vespa en Piaggio scooters doen wij alleen eenvoudige reparaties, zoals banden plakken of vervangen, verlichting, kabels, bougie of uitlaat vervangen.
            </p>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {serviceCategories.map((cat, i) => {
              const colors = colorMap[cat.color]
              return (
                <motion.div
                  key={cat.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`rounded-2xl border p-6 ${colors.border} ${colors.bg}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.icon}`}>
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.services.map((service) => (
                      <li key={service} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Wind className="w-3.5 h-3.5 mt-0.5 text-gray-400 dark:text-gray-500 shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Reparatie nodig?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Vraag vrijblijvend een prijsopgave aan of bekijk onze prijslijst voor een indicatie.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Contact Opnemen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/prijslijst"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-semibold transition-colors border border-gray-200 dark:border-gray-700"
            >
              Bekijk Prijslijst
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
