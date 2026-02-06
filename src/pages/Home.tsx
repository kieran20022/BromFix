import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Wrench,
  Settings,
  Truck,
  ShieldCheck,
  Gauge,
  Battery,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Reparatie',
    desc: 'Van lekke banden tot motorblok vervanging. Wij repareren alle merken scooters en brommers.',
  },
  {
    icon: Settings,
    title: 'Onderhoud',
    desc: 'Grote en kleine onderhoudsbeurten om je scooter in topconditie te houden.',
  },
  {
    icon: Truck,
    title: 'Haal & Breng',
    desc: 'Pech onderweg? Wij halen je scooter op en brengen hem gerepareerd terug.',
  },
  {
    icon: ShieldCheck,
    title: 'APK & Keuring',
    desc: 'Controle en keuring van je scooter of brommer voor veilig rijden.',
  },
  {
    icon: Gauge,
    title: 'Opvoeren',
    desc: 'Professioneel opvoeren van je scooter met de juiste afstelling.',
  },
  {
    icon: Battery,
    title: 'Elektrisch',
    desc: 'Accu vervangen, startproblemen en elektrische storingen verhelpen.',
  },
]

const brands = [
  'Kymco', 'SYM', 'AGM', 'BTC', 'Peugeot', 'La Souris',
  'Berini', 'Boatian', 'Znen', 'Santini', 'Turbho',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3806255/pexels-photo-3806255.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Scooter werkplaats"
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60 dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-900/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
                  <Star className="w-3.5 h-3.5" />
                  Specialist Chinese 4-takt scooters
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                  Jouw scooter in{' '}
                  <span className="text-primary-500">topvorm</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                  BromFix repareert, onderhoudt en verkoopt scooters en brommers in Berkel en Rodenrijs en Terneuzen. Snel, deskundig en betaalbaar.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-primary-500/25"
                  >
                    Vraag Offerte Aan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/diensten"
                    className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-semibold transition-colors border border-gray-200 dark:border-gray-700"
                  >
                    Bekijk Diensten
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center gap-6 mt-10 text-sm text-gray-500 dark:text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span>2 Locaties</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-500" />
                  <span>Gratis Prijsopgave</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-primary-500" />
                  <span>Haal & Breng Service</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-300/20 rounded-2xl blur-2xl" />
                <img
                  src="https://images.pexels.com/photos/1192330/pexels-photo-1192330.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Scooter"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Onze Diensten
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Van eenvoudige reparaties tot complete revisies. Wij helpen je met alles rondom je scooter of brommer.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-primary-50 dark:hover:bg-primary-950/30 border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 transition-all"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                  <service.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/diensten"
              className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
            >
              Alle diensten bekijken
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Merken die wij repareren
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Snorscooters en scooters met blauw of geel kenteken
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {brands.map((brand) => (
              <span
                key={brand}
                className="px-5 py-2.5 bg-white dark:bg-gray-800 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-all cursor-default"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Haal & Breng */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3822784/pexels-photo-3822784.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Scooter reparatie werkplaats"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                Haal & Breng Service
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Scooter met pech onderweg blijven staan? Geen probleem! Met onze haal en breng service maken we het je gemakkelijk. Wij halen je scooter op, repareren hem in onze werkplaats en brengen hem weer terug.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Ophalen op locatie bij pech',
                  'Terugbezorgen na reparatie',
                  'Beschikbaar in regio Berkel en Rodenrijs',
                  'Ook in Zeeuws-Vlaanderen',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="w-5 h-5 bg-primary-100 dark:bg-primary-900/40 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Contact Opnemen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500 dark:bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Scooter kapot? Wij helpen je!
            </h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              Vraag vrijblijvend een prijsopgave aan voor de reparatie van jouw scooter of brommer. Snel en deskundig geholpen.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Gratis Prijsopgave
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/prijslijst"
                className="inline-flex items-center gap-2 bg-primary-600 dark:bg-primary-700 hover:bg-primary-700 dark:hover:bg-primary-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors border border-primary-400"
              >
                Bekijk Prijslijst
              </Link>
            </div>
          </motion.div>
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
              Onze Locaties
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Berkel en Rodenrijs</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">Industrieweg 124a</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Gemeente Lansingerland</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Vlakbij station Randstadrail Rodenrijs. Bereikbaar vanuit Bergschenhoek, Bleiswijk, Pijnacker, Nootdorp, Rotterdam, Zoetermeer, Den Haag en Delft.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/40 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Terneuzen</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">Bij Auto Tinus</p>
              <p className="text-gray-600 dark:text-gray-400 mb-1">Hughersluys 9</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">4536 HM Terneuzen</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Regelmatig aanwezig in Zeeuws-Vlaanderen. Neem contact op voor beschikbaarheid.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
