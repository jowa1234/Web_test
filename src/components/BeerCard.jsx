import { useCart } from './CartContext.jsx'

const beerColors = {
  'Helles': 'linear-gradient(135deg, #F5E642, #D4A017)',
  'Weizen': 'linear-gradient(135deg, #F0C060, #C8872B)',
  'Dunkel': 'linear-gradient(135deg, #6B3A2A, #3D1A0A)',
  'Märzen': 'linear-gradient(135deg, #D4703A, #8B3A1A)',
  'Bock': 'linear-gradient(135deg, #4A1A0A, #1C0A05)',
  'Radler': 'linear-gradient(135deg, #E8E040, #BCBC20)',
}

export default function BeerCard({ beer }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: `beer-${beer.name}`,
      name: `Hellensteiner ${beer.name}`,
      price: beer.price,
      variant: '0,5L',
    })
  }

  return (
    <div className="card bg-white">
      <div
        className="h-48 flex items-center justify-center"
        style={{ background: beerColors[beer.type] || beerColors['Helles'] }}
      >
        <div className="text-center">
          <div className="text-6xl mb-2">🍺</div>
          <span className="text-white/80 text-sm font-semibold bg-black/20 px-3 py-1 rounded-full">{beer.abv}% Vol.</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading font-bold text-text-dark text-lg">{beer.name}</h3>
          <span className="text-xs bg-amber/10 text-amber font-semibold px-2 py-1 rounded">{beer.type}</span>
        </div>
        <div className="flex gap-3 mb-3 text-xs text-gray-500">
          <span>🍺 {beer.abv}% Vol.</span>
          <span>🌿 {beer.ibu} IBU</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{beer.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-heading font-bold text-xl text-amber">{beer.price.toFixed(2)} €</span>
          <button onClick={handleAddToCart} className="btn-primary text-sm py-2 px-4 rounded-lg">
            + In den Warenkorb
          </button>
        </div>
      </div>
    </div>
  )
}
