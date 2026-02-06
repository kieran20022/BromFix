import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const scooterExamples = [
  {
    image: 'https://images.unsplash.com/photo-1571188654248-7a89013e986a?w=600&q=80',
    title: 'Kymco Agility',
    year: '2021',
  },
  {
    image: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?w=600&q=80',
    title: 'SYM Orbit II',
    year: '2020',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    title: 'AGM VX50',
    year: '2022',
  },
]

export default function Verkoop() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-900 py-10 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Verkoop
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            BromFix verkoopt regelmatig gebruikte scooters die grondig zijn nagekeken. Op zoek naar een betrouwbare tweedehands scooter? Of wil je jouw scooter verkopen?
          </p>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-10 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Volledig Nagekeken', desc: 'Elke scooter wordt grondig gecontroleerd en waar nodig gerepareerd.' },
              { title: 'Eerlijke Prijs', desc: 'Kwalitatieve scooters voor een redelijke en transparante prijs.' },
              { title: 'Inkoop & Ruil', desc: 'Wij kopen jouw oude scooter in of ruilen hem. Ook defecte scooters.' },
              { title: 'Ophaalservice', desc: 'Scooter doet het niet meer? Wij kunnen hem bij je komen ophalen.' },
            ].map((item) => (
              <div key={item.title} className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previously sold */}
      <section className="py-10 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Eerder Verkocht</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Een selectie van eerder verkochte scooters. Neem contact op voor het huidige aanbod.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {scooterExamples.map((scooter) => (
              <div
                key={scooter.title}
                className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={scooter.image}
                    alt={scooter.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-gray-900/80 text-white text-xs font-medium px-2 py-0.5 rounded">
                    Verkocht
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm">{scooter.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Bouwjaar {scooter.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sell/Trade section */}
      <section className="py-10 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Scooter verkopen of inruilen?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed text-sm">
                Wil je je scooter verkopen? Of ruilen voor een ander exemplaar? Neem contact met ons op. Wij kopen ook defecte scooters in. Als je scooter het niet meer doet en je wilt hem verkopen, kunnen wij hem ophalen.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'Eerlijke inkoopprijs',
                  'Inruilen voor een andere scooter mogelijk',
                  'Ook defecte scooters',
                  'Ophaalservice beschikbaar',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-5 py-2.5 rounded font-medium text-sm transition-colors"
              >
                Neem Contact Op <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1600240644455-3edc55c375fe?w=800&q=80"
                alt="Scooter"
                className="rounded-lg w-full object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
