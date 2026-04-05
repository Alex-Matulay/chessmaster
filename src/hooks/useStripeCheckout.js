import { useCart } from './useCart'
import { formatCurrency } from '../lib/formatCurrency'

export function useStripeCheckout() {
  const { items, cartTotal, clearCart } = useCart()

  const checkout = () => {
    if (items.length === 0) return

    if (!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY) {
      alert(
        `Dev Mode: Would checkout ${items.length} item(s) for ${formatCurrency(cartTotal)}.\n\nTo enable real payments, set VITE_STRIPE_PUBLISHABLE_KEY in your .env file.`
      )
      clearCart()
      window.location.hash = '#/checkout/success'
      return
    }

    if (items.length === 1 && items[0].paymentLink) {
      window.location.href = items[0].paymentLink
      return
    }

    alert('Multi-item checkout requires a backend. For now, each item can be purchased individually via Stripe Payment Links.')
  }

  return { checkout }
}
