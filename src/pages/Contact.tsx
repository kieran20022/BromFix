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
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Contact
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Heb je een vraag, wil je een afspraak maken of een vrijblijvende prijsopgave ontvangen? Neem gerust contact met ons op.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Stuur ons een bericht
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center"
                  >
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Bedankt voor je bericht!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We nemen zo snel mogelijk contact met je op.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 font-medium"
                    >
                      Nog een bericht versturen
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Naam *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                          placeholder="Je naam"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                          placeholder="je@email.nl"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="06 - 12345678"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Scooter merk & type
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        placeholder="Bijv. Kymco Agility 50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Bericht *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                        placeholder="Beschrijf je vraag of het probleem met je scooter..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      Verstuur Bericht
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contactgegevens
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">E-mail</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">info@bromfix.nl</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Telefoon</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Bel voor een afspraak</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/40 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Openingstijden</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Op afspraak</p>
                    </div>
                  </div>
                </div>

                {/* Location cards */}
                <div className="pt-4 space-y-4">
                  <h3 className="font-bold text-gray-900 dark:text-white">Onze Locaties</h3>

                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Berkel en Rodenrijs</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Industrieweg 124a</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Gemeente Lansingerland</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Vlakbij station Randstadrail Rodenrijs
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Terneuzen</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Bij Auto Tinus</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Hughersluys 9, 4536 HM</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          Regelmatig aanwezig in Zeeuws-Vlaanderen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="pt-4">
                  <div className="p-5 rounded-xl bg-primary-50 dark:bg-primary-950/30 border border-primary-100 dark:border-primary-900/50">
                    <div className="flex items-center gap-3 mb-2">
                      <Wrench className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">Pech onderweg?</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Neem direct contact op! Wij kunnen je scooter ophalen met onze haal en breng service.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Vind Ons
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-72">
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
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-72">
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
