const categories = ['All', 'Ebooks', 'Cheat Sheets', 'Opening Guides', 'Bundles']

export function ProductFilters({ category, sort, onCategoryChange, onSortChange }) {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <div>
        <label className="block text-xs font-medium text-slate-500 mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-500 mb-1">Sort by</label>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="popular">Most Popular</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </div>
  )
}
