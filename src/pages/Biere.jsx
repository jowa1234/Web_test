import BeerCard from '../components/BeerCard.jsx'
import Hero from '../components/Hero.jsx'

const beers = [
  {
    name: 'Helles',
    type: 'Helles',
    abv: 4.9,
    ibu: 20,
    description: 'Unser klassisches Helles – goldklar, mild und erfrischend. Mit feiner Hopfennote und weichem Malzkörper. Das perfekte Bier für jeden Anlass.',
    price: 1.59,
  },
  {
    name: 'Weizen',
    type: 'Weizen',
    abv: 5.4,
    ibu: 14,
    description: 'Traditionelles Hefeweizen aus bayerischem Weizenmalz. Fruchtige Bananen- und Gewürznoten, cremiger Schaum, unfiltriert und naturtrüb.',
    price: 1.79,
  },
  {
    name: 'Dunkel',
    type: 'Dunkel',
    abv: 5.2,
    ibu: 22,
    description: 'Tiefdunkles Lagerbier mit angenehm röstigen Malzaromen. Schokoladen- und Karamellnoten verleihen diesem Bier seinen unverwechselbaren Charakter.',
    price: 1.69,
  },
  {
    name: 'Märzen',
    type: 'Märzen',
    abv: 5.8,
    ibu: 25,
    description: 'Vollmundiges Märzenbier mit kräftigem Malzkörper und feiner Bitterkeit. Der Klassiker zum Oktoberfest – fruchtig und würzig zugleich.',
    price: 1.69,
  },
  {
    name: 'Bock',
    type: 'Bock',
    abv: 7.2,
    ibu: 28,
    description: 'Starkes Bockbier mit tiefer Bernsteinfarbe. Intensive Malzsüße, Karamellaromen und angenehme Wärme. Nur im Winter erhältlich.',
    price: 2.29,
  },
  {
    name: 'Radler',
    type: 'Radler',
    abv: 2.5,
    ibu: 8,
    description: 'Erfrischende Mischung aus unserem Helles und natürlichem Zitronenlimonadenextrakt. Leicht, spritzig und perfekt für heiße Sommertage.',
    price: 1.39,
  },
]

export default function Biere() {
  return (
    <div>
      <Hero
        title="Unsere Biere"
        subtitle="Gebraut nach dem Reinheitsgebot – mit Leidenschaft seit 1850"
        fullHeight={false}
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber font-semibold tracking-widest uppercase text-sm mb-2">Bierkatalog</p>
            <h2 className="section-title">Alle Hellensteiner Biere</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ob kräftiger Bock oder leichter Radler – für jeden Geschmack und jeden Anlass haben wir das richtige Bier. Alle unsere Biere werden nach dem deutschen Reinheitsgebot gebraut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beers.map(beer => (
              <BeerCard key={beer.name} beer={beer} />
            ))}
          </div>
        </div>
      </section>

      {/* Reinheitsgebot Banner */}
      <section className="py-16 bg-dark-brown text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">🌾</div>
          <h2 className="font-heading text-3xl font-bold mb-4">Das Reinheitsgebot</h2>
          <p className="text-cream/80 text-lg leading-relaxed max-w-3xl mx-auto">
            Seit 1516 gilt in Bayern das Reinheitsgebot: Bier darf nur aus Wasser, Malz, Hopfen und Hefe gebraut werden. Wir halten dieses Versprechen seit 1850 – ohne Ausnahme.
          </p>
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {['💧 Wasser', '🌾 Malz', '🌿 Hopfen', '🔬 Hefe'].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-1">{item.split(' ')[0]}</div>
                <p className="text-gold font-semibold">{item.split(' ')[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
