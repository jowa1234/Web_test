import Hero from '../components/Hero.jsx'

const events = [
  {
    id: 1,
    date: '15. Februar 2025',
    time: '14:00 – 16:30 Uhr',
    title: 'Brauerei-Führung',
    category: 'Führung',
    desc: 'Erleben Sie hautnah, wie unser Bier entsteht. Unsere erfahrenen Brauer führen Sie durch alle Stationen der Produktion – vom Malzhaus bis zum Abfüllung. Inklusive Bierprobe.',
    price: '12,00 €',
    seats: '20 Plätze',
    emoji: '🏭',
  },
  {
    id: 2,
    date: '22. März 2025',
    time: '15:00 – 22:00 Uhr',
    title: 'Biergartenfest',
    category: 'Fest',
    desc: 'Begrüßen Sie den Frühling mit uns! Live-Musik, traditionelle bayerische Küche und natürlich unsere besten Biere. Eintritt frei!',
    price: 'Eintritt frei',
    seats: 'Unbegrenzt',
    emoji: '🌸',
  },
  {
    id: 3,
    date: '20. September – 5. Oktober 2025',
    time: 'Täglich ab 11:00 Uhr',
    title: 'Oktoberfest im Brauereigasthof',
    category: 'Fest',
    desc: 'Das Oktoberfest direkt in der Brauerei! Wiesntracht, Hendl, Brezn und unser spezielles Märzenbier frisch vom Fass. Reservierungen empfohlen.',
    price: 'Eintritt frei',
    seats: '200 Plätze',
    emoji: '🎪',
  },
  {
    id: 4,
    date: '6. Dezember 2025',
    time: '14:00 – 20:00 Uhr',
    title: 'Weihnachtsmarkt',
    category: 'Markt',
    desc: 'Stimmungsvoller Weihnachtsmarkt auf dem Brauereigelände. Glühbier, Winterbock, Kunsthandwerk und festliche Stimmung für die ganze Familie.',
    price: 'Eintritt frei',
    seats: 'Unbegrenzt',
    emoji: '🎄',
  },
  {
    id: 5,
    date: '19. April 2025',
    time: '10:00 – 14:00 Uhr',
    title: 'Bierkurs für Einsteiger',
    category: 'Kurs',
    desc: 'Lernen Sie alles über Bier: Rohstoffe, Brauprozess, Bierstile und Verkostungstechniken. Mit praktischer Übung – brauen Sie Ihr eigenes Bier!',
    price: '65,00 €',
    seats: '12 Plätze',
    emoji: '🎓',
  },
  {
    id: 6,
    date: '7. Juni 2025',
    time: '18:00 – 22:00 Uhr',
    title: 'Bier & Speisen Dinner',
    category: 'Dinner',
    desc: 'Ein besonderes Abendessen mit Gängen, die perfekt auf unsere Biersorten abgestimmt sind. Geführte Verkostung mit unserem Braumeister.',
    price: '85,00 €',
    seats: '30 Plätze',
    emoji: '🍽️',
  },
]

const categoryColors = {
  'Führung': 'bg-blue-100 text-blue-700',
  'Fest': 'bg-green-100 text-green-700',
  'Markt': 'bg-purple-100 text-purple-700',
  'Kurs': 'bg-orange-100 text-orange-700',
  'Dinner': 'bg-red-100 text-red-700',
}

export default function Veranstaltungen() {
  return (
    <div>
      <Hero
        title="Veranstaltungen"
        subtitle="Erleben Sie Hellensteiner Bräu hautnah – Events für jeden Geschmack"
        fullHeight={false}
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Kalender 2025</p>
            <h2 className="section-title">Kommende Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Von Brauereiführungen über Bierfeste bis zu Bierkursen – bei uns ist immer etwas los. Buchen Sie jetzt Ihren Platz!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <div key={event.id} className="card bg-white overflow-hidden">
                <div className="h-40 flex items-center justify-center text-6xl"
                  style={{ background: 'linear-gradient(135deg, #1C1410, #2D2315)' }}>
                  {event.emoji}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${categoryColors[event.category]}`}>
                      {event.category}
                    </span>
                    <span className="text-xs text-gray-400">{event.seats}</span>
                  </div>
                  <h3 className="font-heading font-bold text-text-dark text-xl mb-1">{event.title}</h3>
                  <div className="flex flex-col gap-1 mb-3">
                    <p className="text-amber font-semibold text-sm">📅 {event.date}</p>
                    <p className="text-gray-500 text-xs">🕑 {event.time}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{event.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-xl text-amber">{event.price}</span>
                    <button className="btn-primary text-sm py-2 px-4 rounded-lg">
                      Jetzt buchen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber text-dark-brown">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Privatveranstaltungen</h2>
          <p className="text-dark-brown/80 text-lg mb-6">
            Feiern Sie Ihre Firmenfeier, Geburtstagsparty oder Hochzeit in unserem historischen Brauereigebäude. Wir organisieren alles für Sie.
          </p>
          <a href="mailto:events@hellensteiner.de" className="bg-dark-brown text-cream px-8 py-3 rounded-lg font-semibold hover:bg-text-dark transition-colors inline-block">
            Anfrage stellen
          </a>
        </div>
      </section>
    </div>
  )
}
