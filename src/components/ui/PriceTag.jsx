import { formatCurrency } from '../../lib/formatCurrency'

export function PriceTag({ price, originalPrice, currency = 'usd' }) {
  if (price === 0) {
    return <span className="text-lg font-bold text-emerald-600">Free</span>
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold text-slate-900">{formatCurrency(price, currency)}</span>
      {originalPrice && (
        <span className="text-sm text-slate-400 line-through">{formatCurrency(originalPrice, currency)}</span>
      )}
    </div>
  )
}
