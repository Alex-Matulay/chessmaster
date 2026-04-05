import { useState } from 'react'
import products from '../data/products.json'
import { ProductFilters } from '../components/products/ProductFilters'
import { ProductList } from '../components/products/ProductList'

export function ProductsPage() {
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('popular')

  const filtered = products.filter((p) => {
    if (category !== 'All' && p.category !== category) return false
    return true
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Digital Products</h1>
        <p className="text-slate-500 mt-1">Ebooks, cheat sheets, and bundles to accelerate your chess learning</p>
      </div>

      <div className="mb-8">
        <ProductFilters
          category={category}
          sort={sort}
          onCategoryChange={setCategory}
          onSortChange={setSort}
        />
      </div>

      <div className="mb-4 text-sm text-slate-400">
        {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
      </div>

      <ProductList products={filtered} sort={sort} />
    </div>
  )
}
