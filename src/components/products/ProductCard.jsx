import { Link } from 'react-router-dom'
import { FileText, Download } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { StarRating } from '../ui/StarRating'
import { PriceTag } from '../ui/PriceTag'

const categoryIcons = {
  'Ebooks': '&#128214;',
  'Cheat Sheets': '&#128203;',
  'Opening Guides': '&#9816;',
  'Bundles': '&#127873;',
}

export function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.slug}`} className="no-underline">
      <Card className="h-full flex flex-col">
        <div className="h-32 bg-gradient-to-br from-emerald-700 to-emerald-600 flex items-center justify-center relative">
          <span
            className="text-5xl opacity-20"
            dangerouslySetInnerHTML={{ __html: categoryIcons[product.category] || '&#128214;' }}
          />
          <div className="absolute top-3 left-3">
            <Badge>{product.category}</Badge>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-sm font-bold text-slate-900 mb-1">{product.title}</h3>
          <p className="text-xs text-slate-500 mb-3 flex-1">{product.shortDescription}</p>

          <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1"><FileText size={12} />{product.format}</span>
            <span className="flex items-center gap-1"><Download size={12} />{product.fileSize}</span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100">
            <StarRating rating={product.rating} reviewsCount={product.reviewsCount} />
            <PriceTag price={product.price} originalPrice={product.originalPrice} />
          </div>
        </div>
      </Card>
    </Link>
  )
}
