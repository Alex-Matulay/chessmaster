import { X, ShoppingBag } from 'lucide-react'
import { useCart } from '../../hooks/useCart'
import { useStripeCheckout } from '../../hooks/useStripeCheckout'
import { CartItem } from './CartItem'
import { CartSummary } from './CartSummary'

export function CartDrawer({ open, onClose }) {
  const { items } = useCart()
  const { checkout } = useStripeCheckout()

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 transition-opacity" onClick={onClose} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">Shopping Cart</h2>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 cursor-pointer bg-transparent border-none">
              <X size={20} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400 p-8">
              <ShoppingBag size={48} className="mb-4" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm mt-1">Add lessons or products to get started</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {items.map((item) => (
                  <CartItem key={`${item.itemType}-${item.id}`} item={item} />
                ))}
              </div>
              <CartSummary onCheckout={() => { checkout(); onClose(); }} />
            </>
          )}
        </div>
      </div>
    </>
  )
}
