import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShoppingBag,
  ArrowRight,
  CheckCircle,
  ArrowLeftRight,
  Truck,
  ShieldCheck,
} from 'lucide-react'

const scooterExamples = [
  {
    image: 'https://images.pexels.com/photos/1192330/pexels-photo-1192330.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Kymco Agility',
    year: '2021',
    price: 'Verkocht',
    sold: true,
  },
  {
    image: 'https://images.pexels.com/photos/3061638/pexels-photo-3061638.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'SYM Orbit II',
    year: '2020',
    price: 'Verkocht',
    sold: true,
  },
  {
    image: 'https://images.pexels.com/photos/240222/pexels-photo-240222.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'AGM VX50',
    year: '2022',
    price: 'Verkocht',
    sold: true,
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Volledig Nagekeken',
    desc: 'Elke scooter wordt grondig gecontroleerd en waar nodig gerepareerd in onze werkplaats.',
  },
  {
    icon: CheckCircle,
    title: 'Eerlijke Prijs',
    desc: 'Kwalitatieve gebruikte scooters voor een redelijke en transparante prijs.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Inkoop & Ruil',
    desc: 'Wij kopen jouw oude scooter in of ruilen hem voor een andere. Ook defecte scooters.',
  },
  {
    icon: Truck,
    title: 'Ophaalservice',
    desc: 'Scooter doet het niet meer? Wij kunnen hem bij je komen ophalen.',
  },
]

export default function Verkoop() {
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
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
                Verkoop
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              BromFix verkoopt regelmatig gebruikte scooters die eerst grondig zijn nagekeken in onze werkplaats. Op zoek naar een betrouwbare tweedehands scooter? Of wil je jouw scooter verkopen?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 bg-primary-50 dark:bg-primary-950/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Eerder Verkocht
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Hieronder een selectie van eerder door ons verkochte scooters. Neem contact op om te informeren naar het huidige aanbod.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scooterExamples.map((scooter, i) => (
              <motion.div
                key={scooter.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={scooter.image}
                    alt={scooter.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {scooter.sold && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Verkocht
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white">{scooter.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Bouwjaar {scooter.year}</p>
                  <p className="text-lg font-bold text-primary-600 dark:text-primary-400 mt-2">{scooter.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                Scooter verkopen of inruilen?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Wil je je scooter verkopen? Of ruilen voor een ander exemplaar? Neem dan contact met ons op. Wij kopen ook defecte scooters in. Als je scooter het niet meer doet en je wilt hem verkopen, kunnen wij hem ophalen.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Eerlijke inkoopprijs',
                  'Inruilen voor een andere scooter mogelijk',
                  'Ook defecte scooters',
                  'Ophaalservice beschikbaar',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Neem Contact Op
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/159192/pexels-photo-159192.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Scooter te koop"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
