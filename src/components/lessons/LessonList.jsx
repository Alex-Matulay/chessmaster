import { LessonCard } from './LessonCard'

function sortLessons(lessons, sort) {
  const sorted = [...lessons]
  switch (sort) {
    case 'price-asc': return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc': return sorted.sort((a, b) => b.price - a.price)
    case 'rating': return sorted.sort((a, b) => b.rating - a.rating)
    default: return sorted.sort((a, b) => b.reviewsCount - a.reviewsCount)
  }
}

export function LessonList({ lessons, sort }) {
  const sorted = sortLessons(lessons, sort)

  if (sorted.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p className="text-lg font-medium">No lessons found</p>
        <p className="text-sm mt-1">Try adjusting your filters</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sorted.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  )
}
