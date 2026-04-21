import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BeerCard from '../components/BeerCard.jsx'

const LOGO_URL = 'https://github.com/user-attachments/assets/fb4568b1-45ca-4d84-bb03-3ad76a815e56'

const featuredBeers = [
  {
    name: 'Helles',
    type: 'Helles',
    abv: 4.9,
    ibu: 20,
    description: 'Unser klassisches Helles – goldklar, mild und erfrischend. Das perfekte Alltagsbier.',
    price: 1.59,
  },
  {
    name: 'Weizen',
    type: 'Weizen',
    abv: 5.4,
    ibu: 14,
    description: 'Traditionelles Hefeweizen mit fruchtiger Note und cremigem Schaum.',
    price: 1.79,
  },
  {
    name: 'Märzen',
    type: 'Märzen',
    abv: 5.8,
    ibu: 22,
    description: 'Vollmundiges Märzenbier mit karamelligem Malzaroma – der Klassiker zum Oktoberfest.',
    price: 1.69,
  },
]

const events = [
  { date: '15. Feb 2025', title: 'Brauerei-Führung', desc: 'Entdecken Sie die Geheimnisse unserer Braukunst.' },
  { date: '22. März 2025', title: 'Frühlingsfest', desc: 'Feiern Sie den Frühling mit uns im Biergarten.' },
  { date: '19. Apr 2025', title: 'Bierkurs für Einsteiger', desc: 'Lernen Sie alles über Bier und Brautradition.' },
]

const news = [
  {
    date: '10. Jan 2025',
    title: 'Neues Saisonbier: Frühlingsbock 2025',
    teaser: 'Ab März ist unser beliebter Frühlingsbock wieder erhältlich. Limitierte Auflage – jetzt vorbestellen!',
  },
  {
    date: '05. Jan 2025',
    title: 'Auszeichnung: Bayerischer Braupreis 2024',
    teaser: 'Wir freuen uns über die Goldmedaille für unser Dunkel beim Bayerischen Braupreis 2024.',
  },
]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1C1410 0%, #2D1A08 40%, #1C1410 100%)' }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #D4B483 0, #D4B483 1px, transparent 0, transparent 50%)', backgroundSize: '30px 30px' }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-96 h-96 rounded-full border-4 border-gold" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <img src={LOGO_URL} alt="Hellensteiner Bräu" className="h-32 md:h-40 w-auto mx-auto mb-8 drop-shadow-2xl" />
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight">
            Braukunst seit<br /><span className="text-gold">1850</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 mb-4 font-light tracking-wide">
            Seit 1850 – Bier wie es sein soll.
          </p>
          <p className="text-lg text-gold mb-10">
            Gebraut nach dem deutschen Reinheitsgebot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/biere" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg">
              Unsere Biere entdecken
            </Link>
            <Link to="/brauerei" className="btn-secondary text-lg px-8 py-4 rounded-lg">
              Zur Brauerei
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="text-gold text-3xl">↓</span>
        </div>
      </section>

      {/* Featured Beers */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Unsere Bestseller</p>
            <h2 className="section-title">Beliebte Biere</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jedes unserer Biere wird mit Leidenschaft und nach traditionellen Rezepten gebraut – für unverwechselbaren Geschmack.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBeers.map(beer => (
              <BeerCard key={beer.name} beer={beer} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/biere" className="btn-primary text-lg px-8 py-3 rounded-lg">
              Alle Biere ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-dark-brown text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Über uns</p>
              <h2 className="font-heading text-4xl font-bold text-cream mb-6">175 Jahre Brautradition</h2>
              <p className="text-cream/80 leading-relaxed mb-4">
                Im Jahr 1850 gründete Josef Hellensteiner unsere Brauerei in Altötting. Seitdem wird nach denselben Grundsätzen gebraut: Qualität, Leidenschaft und das deutsche Reinheitsgebot.
              </p>
              <p className="text-cream/80 leading-relaxed mb-8">
                Heute brauen wir in vierter Generation und verbinden Tradition mit modernen Braumethoden – für Bier, das seinen Namen verdient.
              </p>
              <Link to="/brauerei" className="btn-secondary py-3 px-6 rounded-lg">
                Unsere Geschichte
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #2D2315 0%, #C8872B 50%, #1C1410 100%)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-cream/30">
                    <div className="text-8xl mb-4">🏰</div>
                    <p className="text-xl font-heading">Hellensteiner Bräu</p>
                    <p className="text-sm">Seit 1850</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber text-white p-6 rounded-xl shadow-xl">
                <div className="font-heading font-bold text-3xl">1850</div>
                <div className="text-sm">Gegründet</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reinheitsgebot Badge */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🌾', title: 'Reinheitsgebot', desc: 'Nur Wasser, Malz, Hopfen und Hefe – seit 1516.' },
              { icon: '🏆', title: 'Mehrfach ausgezeichnet', desc: 'Gewinner des Bayerischen Braupreises 2024.' },
              { icon: '🌱', title: 'Regional & Nachhaltig', desc: 'Zutaten aus der Region, umweltfreundliche Produktion.' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl border-2 border-gold/20 hover:border-gold/50 transition-colors bg-white shadow-sm">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading font-bold text-text-dark text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Teaser */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #2D2315 0%, #1C1410 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Kalender</p>
            <h2 className="font-heading text-4xl font-bold text-cream mb-4">Kommende Veranstaltungen</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <div key={i} className="bg-white/10 border border-gold/20 rounded-xl p-6 hover:bg-white/20 transition-colors">
                <p className="text-amber text-sm font-semibold mb-2">{event.date}</p>
                <h3 className="font-heading text-cream font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-cream/70 text-sm">{event.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/veranstaltungen" className="btn-secondary py-3 px-8 rounded-lg">
              Alle Veranstaltungen
            </Link>
          </div>
        </div>
      </section>

      {/* News Teaser */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Neuigkeiten</p>
            <h2 className="section-title">Aktuelles aus der Brauerei</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((article, i) => (
              <div key={i} className="card bg-white p-6">
                <p className="text-amber text-xs font-semibold uppercase tracking-wide mb-2">{article.date}</p>
                <h3 className="font-heading text-xl font-bold text-text-dark mb-3">{article.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.teaser}</p>
                <Link to="/aktuelles" className="text-amber font-semibold text-sm hover:text-gold transition-colors">
                  Weiterlesen →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-amber">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-dark-brown mb-4">Bleiben Sie informiert!</h2>
          <p className="text-dark-brown/80 mb-8 text-lg">
            Abonnieren Sie unseren Newsletter und erhalten Sie als Erster Neuigkeiten zu neuen Bieren, Veranstaltungen und exklusiven Angeboten.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-transparent focus:border-dark-brown focus:outline-none"
            />
            <button type="submit" className="bg-dark-brown text-cream px-6 py-3 rounded-lg font-semibold hover:bg-text-dark transition-colors whitespace-nowrap">
              Anmelden
            </button>
          </form>
          <p className="text-xs text-dark-brown/60 mt-4">Kein Spam. Jederzeit abmeldbar. Datenschutzkonform.</p>
        </div>
      </section>
    </div>
  )
}
