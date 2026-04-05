import { ProductCard } from './ProductCard'

function sortProducts(products, sort) {
  const sorted = [...products]
  switch (sort) {
    case 'price-asc': return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc': return sorted.sort((a, b) => b.price - a.price)
    case 'rating': return sorted.sort((a, b) => b.rating - a.rating)
    default: return sorted.sort((a, b) => b.reviewsCount - a.reviewsCount)
  }
}

export function ProductList({ products, sort }) {
  const sorted = sortProducts(products, sort)

  if (sorted.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p className="text-lg font-medium">No products found</p>
        <p className="text-sm mt-1">Try adjusting your filters</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {sorted.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
