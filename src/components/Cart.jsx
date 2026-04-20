import { useCart } from './CartContext.jsx'

export default function Cart() {
  const { cartItems, cartOpen, setCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart()

  return (
    <>
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setCartOpen(false)}
        />
      )}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 bg-dark-brown text-cream">
          <h2 className="text-xl font-heading font-bold">Warenkorb</h2>
          <button onClick={() => setCartOpen(false)} className="text-2xl hover:text-gold transition-colors">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              <div className="text-6xl mb-4">🍺</div>
              <p className="font-heading text-xl">Ihr Warenkorb ist leer</p>
              <p className="text-sm mt-2">Fügen Sie Produkte hinzu, um fortzufahren.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                  <div className="w-16 h-16 rounded-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg, #D4B483, #C8872B)' }}></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-dark text-sm">{item.name}</h3>
                    {item.variant && <p className="text-xs text-gray-500">{item.variant}</p>}
                    <p className="text-amber font-bold">{item.price.toFixed(2)} €</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      className="w-7 h-7 rounded-full bg-gray-200 hover:bg-amber hover:text-white transition-colors flex items-center justify-center text-sm font-bold"
                    >−</button>
                    <span className="w-6 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      className="w-7 h-7 rounded-full bg-gray-200 hover:bg-amber hover:text-white transition-colors flex items-center justify-center text-sm font-bold"
                    >+</button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="text-gray-400 hover:text-red-500 transition-colors ml-1"
                  >🗑️</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="font-heading font-bold text-lg">Gesamtsumme</span>
              <span className="font-heading font-bold text-xl text-amber">{cartTotal.toFixed(2)} €</span>
            </div>
            <button className="w-full btn-primary text-center mb-3 py-4 text-lg rounded-lg">
              Zur Kasse
            </button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full btn-secondary text-center py-3 rounded-lg"
            >
              Weiter einkaufen
            </button>
          </div>
        )}
      </div>
    </>
  )
}
