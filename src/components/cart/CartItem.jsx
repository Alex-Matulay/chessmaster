import { Trash2 } from 'lucide-react'
import { useCart } from '../../hooks/useCart'
import { formatCurrency } from '../../lib/formatCurrency'

export function CartItem({ item }) {
  const { removeItem } = useCart()

  return (
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-bold text-sm shrink-0">
        {item.itemType === 'lesson' ? 'L' : 'P'}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-900 truncate">{item.title}</p>
        <p className="text-xs text-slate-500 capitalize">{item.itemType}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-slate-900">
          {item.price === 0 ? 'Free' : formatCurrency(item.price)}
        </span>
        <button
          onClick={() => removeItem(item.id, item.itemType)}
          className="p-1 text-slate-400 hover:text-red-500 transition-colors cursor-pointer bg-transparent border-none"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  )
}
