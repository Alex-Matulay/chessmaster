import { useCart } from '../../hooks/useCart'
import { formatCurrency } from '../../lib/formatCurrency'
import { Button } from '../ui/Button'

export function CartSummary({ onCheckout }) {
  const { cartTotal, cartCount } = useCart()

  return (
    <div className="border-t border-slate-200 p-4 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-slate-600">Subtotal ({cartCount} items)</span>
        <span className="text-xl font-bold text-slate-900">{formatCurrency(cartTotal)}</span>
      </div>
      <Button onClick={onCheckout} size="lg" className="w-full">
        Proceed to Checkout
      </Button>
    </div>
  )
}
