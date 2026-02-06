import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Wrench,
} from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-900 py-10 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Contact
          </h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            Vraag, afspraak of vrijblijvende prijsopgave? Neem gerust contact met ons op.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-10 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Stuur ons een bericht
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/50 rounded-lg p-6 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Bedankt voor je bericht!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We nemen zo snel mogelijk contact met je op.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-sm text-primary-600 dark:text-primary-400 hover:underline font-medium"
                  >
                    Nog een bericht versturen
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition"
                        placeholder="Je naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition"
                        placeholder="je@email.nl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition"
                      placeholder="06 - 12345678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Scooter merk &amp; type
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition"
                      placeholder="Bijv. Kymco Agility 50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Bericht *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition resize-none"
                      placeholder="Beschrijf je vraag of het probleem met je scooter..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded font-medium text-sm transition-colors"
                  >
                    Verstuur Bericht <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Contactgegevens
              </h2>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <Mail className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">E-mail</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">info@bromfix.nl</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <Phone className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Telefoon</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Bel voor een afspraak</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <Clock className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Openingstijden</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Op afspraak</p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mt-6 mb-3">Onze Locaties</h3>

              <div className="space-y-3">
                <div className="p-3 rounded bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Berkel en Rodenrijs</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Industrieweg 124a</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Gemeente Lansingerland</p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-primary-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Terneuzen</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Bij Auto Tinus, Hughersluys 9, 4536 HM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              <div className="mt-4 p-4 rounded bg-primary-50 dark:bg-primary-950/20 border border-primary-200 dark:border-primary-800/50">
                <div className="flex items-center gap-2 mb-1">
                  <Wrench className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Pech onderweg?</p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Neem direct contact op! Wij kunnen je scooter ophalen met onze haal en breng service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="bg-gray-50 dark:bg-gray-900 py-10 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Vind Ons</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-64">
              <iframe
                title="BromFix Berkel en Rodenrijs"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.5!2d4.475!3d51.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU5JzI0LjAiTiA0wrAyOCczMC4wIkU!5e0!3m2!1snl!2snl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-64">
              <iframe
                title="BromFix Terneuzen"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.5!2d3.83!3d51.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIwJzI0LjAiTiAzwrA0OScwMC4wIkU!5e0!3m2!1snl!2snl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
