import Hero from '../components/Hero.jsx'
import { useState } from 'react'

export default function Kontakt() {
  const [formData, setFormData] = useState({ name: '', email: '', betreff: '', nachricht: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <Hero
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihre Nachricht"
        fullHeight={false}
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Schreiben Sie uns</p>
              <h2 className="section-title mb-6">Kontaktformular</h2>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-heading font-bold text-xl text-green-700 mb-2">Nachricht gesendet!</h3>
                  <p className="text-green-600">Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-4 btn-primary text-sm py-2 px-4 rounded-lg">
                    Neue Nachricht
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ihr vollständiger Name"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-2">E-Mail *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ihre@email.de"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">Betreff *</label>
                    <input
                      type="text"
                      required
                      value={formData.betreff}
                      onChange={e => setFormData({ ...formData, betreff: e.target.value })}
                      placeholder="Worum geht es?"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-2">Nachricht *</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.nachricht}
                      onChange={e => setFormData({ ...formData, nachricht: e.target.value })}
                      placeholder="Ihre Nachricht an uns..."
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-amber focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-lg rounded-lg">
                    Nachricht senden
                  </button>
                  <p className="text-xs text-gray-400">* Pflichtfelder. Ihre Daten werden vertraulich behandelt.</p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Besuchen Sie uns</p>
              <h2 className="section-title mb-6">Anschrift & Öffnungszeiten</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gold/20">
                  <h3 className="font-heading font-bold text-text-dark text-lg mb-3">📍 Adresse</h3>
                  <address className="not-italic text-gray-600 leading-relaxed">
                    Hellensteiner Bräu GmbH<br />
                    Brauereigasse 1<br />
                    84503 Altötting<br />
                    Bayern, Deutschland
                  </address>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gold/20">
                  <h3 className="font-heading font-bold text-text-dark text-lg mb-3">🕑 Öffnungszeiten</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Montag – Freitag</span>
                      <span className="font-semibold">09:00 – 17:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samstag</span>
                      <span className="font-semibold">10:00 – 14:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sonntag & Feiertage</span>
                      <span className="font-semibold text-red-500">Geschlossen</span>
                    </div>
                    <div className="pt-2 mt-2 border-t border-gray-100">
                      <span className="text-xs text-amber font-semibold">Brauereiführungen nach Voranmeldung</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gold/20">
                  <h3 className="font-heading font-bold text-text-dark text-lg mb-3">📞 Kontakt</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-semibold">Telefon:</span> +49 (0) 8671 / 12345</p>
                    <p><span className="font-semibold">Fax:</span> +49 (0) 8671 / 12346</p>
                    <p><span className="font-semibold">E-Mail:</span> info@hellensteiner.de</p>
                    <p><span className="font-semibold">Web:</span> www.hellensteiner-braeu.de</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-sm border border-gold/20 h-48 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #e8f4ea, #c8e6c9)' }}>
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-sm font-semibold">Altötting, Bayern</p>
                    <p className="text-xs">Brauereigasse 1, 84503</p>
                    <a
                      href="https://www.google.com/maps/search/Altötting+Bayern"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber hover:text-gold mt-1 inline-block transition-colors"
                    >
                      In Google Maps öffnen →
                    </a>
                  </div>
                </div>

                <div className="bg-dark-brown rounded-xl p-6">
                  <h3 className="font-heading font-bold text-gold text-lg mb-3">Social Media</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: '📘', label: 'Facebook', href: '#' },
                      { icon: '📷', label: 'Instagram', href: '#' },
                      { icon: '🐦', label: 'Twitter', href: '#' },
                      { icon: '▶️', label: 'YouTube', href: '#' },
                    ].map(social => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="flex flex-col items-center gap-1 text-cream/70 hover:text-gold transition-colors"
                      >
                        <span className="text-2xl">{social.icon}</span>
                        <span className="text-xs">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
