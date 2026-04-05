import { Star } from 'lucide-react'

export function StarRating({ rating, reviewsCount }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            className={star <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
          />
        ))}
      </div>
      <span className="text-sm text-slate-500">
        {rating} ({reviewsCount})
      </span>
    </div>
  )
}
