import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  GraduationCap,
  Heart,
  MapPin,
  Wrench,
  Users,
  Award,
} from 'lucide-react'

const values = [
  {
    icon: Wrench,
    title: 'Vakmanschap',
    desc: 'Jarenlange ervaring met het repareren van scooters en brommers. Opgeleid aan het Techniek College Rotterdam.',
  },
  {
    icon: Heart,
    title: 'Passie',
    desc: 'Begonnen vanuit passie voor het sleutelen aan scooters van buren, familie en vrienden.',
  },
  {
    icon: Users,
    title: 'Persoonlijk',
    desc: 'Bij BromFix ben je geen nummer. Persoonlijke service en eerlijk advies staan voorop.',
  },
  {
    icon: Award,
    title: 'Kwaliteit',
    desc: 'Wij leveren kwaliteit en staan achter ons werk. Goede onderdelen tegen eerlijke prijzen.',
  },
]

export default function OverOns() {
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
              Over BromFix
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Leer meer over de oprichter, onze werkplaats en waarom klanten ons vertrouwen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Roland */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3817784/pexels-photo-3817784.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Werkplaats BromFix"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
                <GraduationCap className="w-3.5 h-3.5" />
                De Oprichter
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                Roland van der Louw
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Waar wij voor staan
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-primary-50 dark:bg-primary-950/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Twee Locaties
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              BromFix is actief op twee locaties in Nederland
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 text-white"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <MapPin className="w-8 h-8 mb-4 text-primary-200" />
              <h3 className="text-2xl font-bold mb-3">Berkel en Rodenrijs</h3>
              <p className="text-primary-100 mb-2">Industrieweg 124a</p>
              <p className="text-primary-100 mb-4">Gemeente Lansingerland</p>
              <p className="text-sm text-primary-200 leading-relaxed">
                Vlakbij het station Randstadrail Rodenrijs. Goed bereikbaar vanuit Bergschenhoek, Bleiswijk, Pijnacker, Nootdorp, Rotterdam, Zoetermeer, Den Haag en Delft.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 p-8 text-white"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <MapPin className="w-8 h-8 mb-4 text-gray-400" />
              <h3 className="text-2xl font-bold mb-3">Terneuzen</h3>
              <p className="text-gray-300 mb-2">Bij Auto Tinus</p>
              <p className="text-gray-300 mb-1">Hughersluys 9</p>
              <p className="text-gray-300 mb-4">4536 HM Terneuzen</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Regelmatig aanwezig in Zeeuws-Vlaanderen. Neem contact op voor beschikbaarheid en afspraken.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Wil je meer weten?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Neem gerust contact met ons op voor vragen, een prijsopgave of het maken van een afspraak.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Neem Contact Op
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
