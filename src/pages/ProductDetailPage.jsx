import { useParams, Link } from 'react-router-dom'
import { FileText, Download, ArrowLeft, Eye } from 'lucide-react'
import products from '../data/products.json'
import { useCart } from '../hooks/useCart'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { StarRating } from '../components/ui/StarRating'
import { PriceTag } from '../components/ui/PriceTag'
import { ProductCard } from '../components/products/ProductCard'

export function ProductDetailPage() {
  const { slug } = useParams()
  const { addItem, items } = useCart()
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Product not found</h1>
        <Link to="/products" className="text-emerald-600 hover:text-emerald-700">Back to Products</Link>
      </div>
    )
  }

  const inCart = items.some((item) => item.id === product.id && item.itemType === 'product')

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      itemType: 'product',
      slug: product.slug,
      paymentLink: product.paymentLink,
    })
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 no-underline mb-6">
        <ArrowLeft size={16} /> Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Badge className="mb-4">{product.category}</Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{product.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <StarRating rating={product.rating} reviewsCount={product.reviewsCount} />
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
            <span className="flex items-center gap-1.5"><FileText size={16} />{product.format}</span>
            <span className="flex items-center gap-1.5"><Download size={16} />{product.fileSize}</span>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Description</h2>
            <p className="text-slate-600 leading-relaxed">{product.description}</p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="mb-4">
              <PriceTag price={product.price} originalPrice={product.originalPrice} />
            </div>

            {product.originalPrice && (
              <p className="text-sm text-emerald-600 font-medium mb-4">
                Save {Math.round((1 - product.price / product.originalPrice) * 100)}% off
              </p>
            )}

            <Button
              onClick={handleAddToCart}
              disabled={inCart}
              size="lg"
              className="w-full mb-3"
              variant={inCart ? 'ghost' : 'primary'}
            >
              {inCart ? 'Added to Cart' : 'Add to Cart'}
            </Button>

            {product.pdfFile && (
              <a
                href={`${import.meta.env.BASE_URL}products/${product.pdfFile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 mb-4 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors no-underline"
              >
                <Eye size={16} />
                Preview PDF
              </a>
            )}

            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Format</span>
                <span className="font-medium text-slate-900">{product.format}</span>
              </div>
              <div className="flex justify-between">
                <span>File Size</span>
                <span className="font-medium text-slate-900">{product.fileSize}</span>
              </div>
              <div className="flex justify-between">
                <span>Instant Download</span>
                <span className="font-medium text-emerald-600">Yes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
