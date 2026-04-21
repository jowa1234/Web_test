import Hero from '../components/Hero.jsx'
import { useState } from 'react'

const articles = [
  {
    id: 1,
    date: '10. Januar 2025',
    category: 'Neuheiten',
    title: 'Neues Saisonbier: Frühlingsbock 2025 ab März erhältlich',
    teaser: 'Ab März ist unser beliebter Frühlingsbock wieder erhältlich – in limitierter Auflage. Der kräftige Bock mit 7,4% Vol. überzeugt mit reichen Malzaromen und einem Hauch Zitrusschale.',
    content: 'Der Hellensteiner Frühlingsbock 2025 ist unser Saisonhighlight für den März. Mit einer Stammwürze von 18° Plato und 7,4% Alkohol...',
    image: 'linear-gradient(135deg, #D4A017, #8B4513)',
    emoji: '🌸',
  },
  {
    id: 2,
    date: '5. Januar 2025',
    category: 'Auszeichnung',
    title: 'Goldmedaille beim Bayerischen Braupreis 2024',
    teaser: 'Wir sind stolz! Unser Hellensteiner Dunkel wurde beim Bayerischen Braupreis 2024 mit der Goldmedaille ausgezeichnet. Eine Bestätigung unserer jahrzehntelangen Arbeit.',
    content: 'Der Bayerische Braupreis ist eine der renommiertesten Auszeichnungen im deutschen Brauwesen...',
    image: 'linear-gradient(135deg, #D4B483, #8B6A3A)',
    emoji: '🏆',
  },
  {
    id: 3,
    date: '20. Dezember 2024',
    category: 'Nachhaltigkeit',
    title: 'Neue Solaranlage: 60% des Stroms aus eigener Erzeugung',
    teaser: 'Im Dezember haben wir unsere Photovoltaikanlage in Betrieb genommen. Ab sofort erzeugen wir 60% unseres Strombedarfs selbst – ein wichtiger Schritt zu einer nachhaltigeren Brauerei.',
    content: 'Die neue 480-kWp-Photovoltaikanlage auf dem Dach unserer Brauerei und des Lagergebäudes...',
    image: 'linear-gradient(135deg, #F0E060, #2D7D1A)',
    emoji: '☀️',
  },
  {
    id: 4,
    date: '15. November 2024',
    category: 'Veranstaltungen',
    title: 'Rückblick: Weihnachtsmarkt 2024 – über 3.000 Besucher!',
    teaser: 'Unser Weihnachtsmarkt 2024 war ein voller Erfolg! Über 3.000 Besucher kamen auf unser Brauereigelände und genossen Glühbier, Winterbock und weihnachtliche Stimmung.',
    content: 'Der Weihnachtsmarkt auf dem Hellensteiner Brauereigelände entwickelt sich zum Publikumsmagneten...',
    image: 'linear-gradient(135deg, #1C5C1C, #8B0000)',
    emoji: '🎄',
  },
]

export default function Aktuelles() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div>
      <Hero
        title="Aktuelles"
        subtitle="Neuigkeiten, Auszeichnungen und Geschichten aus der Brauerei"
        fullHeight={false}
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Blog</p>
            <h2 className="section-title">Neueste Beiträge</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map(article => (
              <article key={article.id} className="card bg-white overflow-hidden">
                <div className="h-48 flex items-center justify-center text-6xl"
                  style={{ background: article.image }}>
                  {article.emoji}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-amber/10 text-amber font-semibold px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h2 className="font-heading font-bold text-text-dark text-xl mb-3 leading-snug">{article.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.teaser}</p>

                  {expanded === article.id && (
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 border-t border-gold/20 pt-4">{article.content}</p>
                  )}

                  <button
                    onClick={() => setExpanded(expanded === article.id ? null : article.id)}
                    className="text-amber font-semibold text-sm hover:text-gold transition-colors"
                  >
                    {expanded === article.id ? '← Weniger anzeigen' : 'Weiterlesen →'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
