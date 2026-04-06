const categories = ['All', 'Chess Basics', 'Openings', 'Tactics', 'Endgame']
const levels = ['All', 'Beginner', 'Intermediate']

export function LessonFilters({ category, level, sort, onCategoryChange, onLevelChange, onSortChange }) {
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
        <label className="block text-xs font-medium text-slate-500 mb-1">Level</label>
        <select
          value={level}
          onChange={(e) => onLevelChange(e.target.value)}
          className="border border-slate-200 rounded-lg px-3 py-2 text-sm bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {levels.map((l) => (
            <option key={l} value={l}>{l}</option>
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
        </select>
      </div>
    </div>
  )
}
