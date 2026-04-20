import ProductCard from '../components/ProductCard.jsx'
import Hero from '../components/Hero.jsx'
import { useState } from 'react'

const products = [
  {
    id: 'sixpack-helles',
    category: 'Biere',
    name: '6er-Pack Helles',
    description: 'Sechs Flaschen unseres klassischen Helles à 0,5L.',
    price: 8.99,
    emoji: '🍺',
    gradient: 'linear-gradient(135deg, #F5E642, #D4A017)',
    variants: ['0,5L Flasche', '0,33L Flasche'],
  },
  {
    id: 'sixpack-weizen',
    category: 'Biere',
    name: '6er-Pack Weizen',
    description: 'Sechs Flaschen naturtrübes Hefeweizen à 0,5L.',
    price: 9.99,
    emoji: '🍺',
    gradient: 'linear-gradient(135deg, #F0C060, #C8872B)',
    variants: ['0,5L Flasche'],
  },
  {
    id: 'mixed-case',
    category: 'Biere',
    name: 'Probierpaket (12er-Kiste)',
    description: 'Je 2 Flaschen Helles, Weizen, Dunkel, Märzen, Bock und Radler.',
    price: 22.99,
    emoji: '📦',
    gradient: 'linear-gradient(135deg, #D4B483, #C8872B)',
  },
  {
    id: 'tshirt',
    category: 'Merchandise',
    name: 'Hellensteiner T-Shirt',
    description: 'Hochwertiges Baumwoll-T-Shirt mit dem Hellensteiner Bräu Logo.',
    price: 24.99,
    emoji: '👕',
    gradient: 'linear-gradient(135deg, #1C1410, #2D2315)',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: ['Natur', 'Dunkelbraun', 'Schwarz'],
  },
  {
    id: 'hoodie',
    category: 'Merchandise',
    name: 'Brauerei Hoodie',
    description: 'Gemütlicher Fleece-Hoodie mit gesticktem Logo.',
    price: 49.99,
    emoji: '🧥',
    gradient: 'linear-gradient(135deg, #2D1A08, #1C1410)',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    variants: ['Dunkelbraun', 'Schwarz'],
  },
  {
    id: 'cap',
    category: 'Merchandise',
    name: 'Brauerei Cap',
    description: 'Klassische Baseball-Cap mit besticktem Hellensteiner Logo.',
    price: 19.99,
    emoji: '🧢',
    gradient: 'linear-gradient(135deg, #D4B483, #8B6A3A)',
    variants: ['Beige', 'Dunkelbraun'],
  },
  {
    id: 'glass-set',
    category: 'Merchandise',
    name: 'Bierglas Set (4 Stück)',
    description: '4 hochwertige Weizengläser mit Hellensteiner Gravur, 0,5L.',
    price: 34.99,
    emoji: '🍻',
    gradient: 'linear-gradient(135deg, #F0F0F0, #D4B483)',
  },
  {
    id: 'tray',
    category: 'Merchandise',
    name: 'Holz-Serviertablett',
    description: 'Handgefertigtes Eichenholz-Tablett mit Hellensteiner Brennstempel.',
    price: 29.99,
    emoji: '🪵',
    gradient: 'linear-gradient(135deg, #8B5E3C, #5C3D1E)',
  },
  {
    id: 'advent',
    category: 'Sonderedition',
    name: 'Bier-Adventskalender 2025',
    description: '24 Türchen – 24 verschiedene Hellensteiner Bierspezialitäten. Das perfekte Weihnachtsgeschenk.',
    price: 59.99,
    emoji: '🎄',
    gradient: 'linear-gradient(135deg, #1C5C1C, #8B0000)',
  },
]

const categories = ['Alle', 'Biere', 'Merchandise', 'Sonderedition']

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('Alle')
  const filtered = activeCategory === 'Alle' ? products : products.filter(p => p.category === activeCategory)

  return (
    <div>
      <Hero
        title="Hellensteiner Shop"
        subtitle="Biere, Merchandise und mehr – direkt vom Brauer"
        fullHeight={false}
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors text-sm ${activeCategory === cat ? 'bg-amber text-white' : 'bg-white border-2 border-gold text-text-dark hover:border-amber'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
