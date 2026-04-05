import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import lessons from '../data/lessons.json'
import { LessonFilters } from '../components/lessons/LessonFilters'
import { LessonList } from '../components/lessons/LessonList'

export function LessonsPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'

  const [category, setCategory] = useState(initialCategory)
  const [level, setLevel] = useState('All')
  const [sort, setSort] = useState('popular')

  const filtered = lessons.filter((l) => {
    if (category !== 'All' && l.category !== category) return false
    if (level !== 'All' && l.level !== level) return false
    return true
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Chess Lessons</h1>
        <p className="text-slate-500 mt-1">Structured lessons from basics to advanced tactics</p>
      </div>

      <div className="mb-8">
        <LessonFilters
          category={category}
          level={level}
          sort={sort}
          onCategoryChange={setCategory}
          onLevelChange={setLevel}
          onSortChange={setSort}
        />
      </div>

      <div className="mb-4 text-sm text-slate-400">
        {filtered.length} lesson{filtered.length !== 1 ? 's' : ''} found
      </div>

      <LessonList lessons={filtered} sort={sort} />
    </div>
  )
}
