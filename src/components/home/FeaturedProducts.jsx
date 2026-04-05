import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import products from '../../data/products.json'
import { ProductCard } from '../products/ProductCard'

export function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 4)

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Digital Resources</h2>
            <p className="text-slate-500 mt-1">Ebooks, cheat sheets, and bundles to accelerate your learning</p>
          </div>
          <Link to="/products" className="hidden sm:flex items-center gap-1 text-emerald-600 font-medium text-sm no-underline hover:text-emerald-700">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Link to="/products" className="sm:hidden flex items-center justify-center gap-1 text-emerald-600 font-medium text-sm no-underline mt-6">
          View all products <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
