import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wrench,
  Settings,
  Truck,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";
import workshop from "../assets/images/workshop.png";

const services = [
  {
    icon: Wrench,
    title: "Reparatie",
    desc: "Alle merken scooters en brommers. Van lekke banden tot motorblok vervanging.",
  },
  {
    icon: Settings,
    title: "Onderhoud",
    desc: "Grote en kleine onderhoudsbeurten om je scooter in topconditie te houden.",
  },
  {
    icon: Truck,
    title: "Haal & Breng",
    desc: "Pech onderweg? Wij halen je scooter op en brengen hem gerepareerd terug.",
  },
  {
    icon: ShieldCheck,
    title: "APK & Keuring",
    desc: "Controle en keuring voor veilig rijden op de openbare weg.",
  },
];

const brands = [
  "Kymco",
  "SYM",
  "AGM",
  "BTC",
  "Peugeot",
  "La Souris",
  "Berini",
  "Boatian",
  "Znen",
  "Santini",
  "Turbho",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={workshop}
            alt=""
            className="w-full h-full object-cover opacity-40 blur-xs"
          />
          <div className="absolute inset-0 bg-linear-to-t dark:from-gray-950 dark:via-gray-950/40 dark:to-gray-950/20" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Scooter reparatie &amp; onderhoud
            </h1>
            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
              BromFix repareert, onderhoudt en verkoopt scooters en brommers in
              Berkel en Rodenrijs en Terneuzen. Snel, deskundig en betaalbaar.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded font-medium text-sm transition-colors"
              >
                Gratis Prijsopgave
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/diensten"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 rounded font-medium text-sm transition-colors border border-white/20"
              >
                Bekijk Diensten
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> 2 locaties
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> Gratis prijsopgave
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" /> Haal &amp; breng service
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Wat wij doen
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg text-sm">
            Van eenvoudige reparaties tot complete revisies. Specialist in
            Chinese 4-takt scooters.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-5 border border-gray-150 dark:border-gray-800 rounded-lg hover:border-primary-300 dark:hover:border-primary-700 transition-colors group"
              >
                <s.icon className="w-5 h-5 text-primary-600 dark:text-primary-500 mb-3" />
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/diensten"
            className="inline-flex items-center gap-1 text-sm text-primary-600 dark:text-primary-400 font-medium mt-6 hover:underline"
          >
            Alle diensten bekijken <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Haal & Breng + Image */}
      <section className="py-14 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
                alt="Monteur aan het werk"
                className="rounded-lg w-full object-cover aspect-[3/4]"
              />
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Haal &amp; Breng Service
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                Scooter met pech onderweg blijven staan? Geen probleem. Wij
                halen je scooter op, repareren hem in onze werkplaats en brengen
                hem weer terug. Beschikbaar in de regio Berkel en Rodenrijs en
                Zeeuws-Vlaanderen.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-baseline gap-2">
                  <span className="w-1 h-1 bg-primary-500 rounded-full shrink-0 mt-1.5" />
                  Ophalen op locatie bij pech
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="w-1 h-1 bg-primary-500 rounded-full shrink-0 mt-1.5" />
                  Terugbezorgen na reparatie
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="w-1 h-1 bg-primary-500 rounded-full shrink-0 mt-1.5" />
                  Regio Lansingerland &amp; Zeeuws-Vlaanderen
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-5 py-2.5 rounded font-medium text-sm transition-colors"
              >
                Contact Opnemen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-10 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-medium mb-4">
            Merken die wij repareren
          </p>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <span
                key={brand}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium text-gray-600 dark:text-gray-400"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-14 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Onze locaties
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Berkel en Rodenrijs
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Industrieweg 124a
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Gemeente Lansingerland
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Vlakbij station Randstadrail Rodenrijs. Bereikbaar vanuit
                Bergschenhoek, Bleiswijk, Pijnacker, Nootdorp, Rotterdam,
                Zoetermeer, Den Haag en Delft.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Terneuzen
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Bij Auto Tinus
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Hughersluys 9, 4536 HM Terneuzen
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                Regelmatig aanwezig in Zeeuws-Vlaanderen. Neem contact op voor
                beschikbaarheid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold dark:text-white mb-1">
              Scooter kapot?
            </h2>
            <p className="text-gray-400 text-sm">
              Vraag vrijblijvend een prijsopgave aan. Snel en deskundig
              geholpen.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded font-medium text-sm transition-colors shrink-0"
            >
              Gratis Prijsopgave <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/prijslijst"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 rounded font-medium text-sm transition-colors border border-white/20 shrink-0"
            >
              Prijslijst
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
