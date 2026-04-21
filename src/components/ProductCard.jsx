import { useState } from 'react'
import { useCart } from './CartContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[0] : null
  )
  const [selectedSize, setSelectedSize] = useState(
    product.sizes ? product.sizes[0] : null
  )

  const handleAddToCart = () => {
    const variantStr = [selectedSize, selectedVariant].filter(Boolean).join(' / ')
    addToCart({
      id: `product-${product.id}`,
      name: product.name,
      price: product.price,
      variant: variantStr || undefined,
    })
  }

  return (
    <div className="card bg-white">
      <div
        className="h-48 flex items-center justify-center text-4xl"
        style={{ background: product.gradient || 'linear-gradient(135deg, #D4B483, #C8872B)' }}
      >
        {product.emoji || '📦'}
      </div>
      <div className="p-5">
        <span className="text-xs text-amber font-semibold uppercase tracking-wide">{product.category}</span>
        <h3 className="font-heading font-bold text-text-dark text-lg mt-1 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>

        {product.sizes && (
          <div className="mb-3">
            <label className="text-xs font-semibold text-gray-500 block mb-1">Größe:</label>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-xs px-3 py-1 rounded border transition-colors ${selectedSize === size ? 'bg-amber text-white border-amber' : 'border-gray-300 hover:border-amber'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {product.variants && (
          <div className="mb-3">
            <label className="text-xs font-semibold text-gray-500 block mb-1">Variante:</label>
            <div className="flex gap-2 flex-wrap">
              {product.variants.map(v => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`text-xs px-3 py-1 rounded border transition-colors ${selectedVariant === v ? 'bg-amber text-white border-amber' : 'border-gray-300 hover:border-amber'}`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <span className="font-heading font-bold text-xl text-amber">{product.price.toFixed(2)} €</span>
          <button onClick={handleAddToCart} className="btn-primary text-sm py-2 px-4 rounded-lg">
            + In den Warenkorb
          </button>
        </div>
      </div>
    </div>
  )
}
