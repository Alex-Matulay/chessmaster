import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import lessons from '../../data/lessons.json'
import { LessonCard } from '../lessons/LessonCard'

export function FeaturedLessons() {
  const featured = lessons.filter((l) => l.featured).slice(0, 3)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Popular Lessons</h2>
          <p className="text-slate-500 mt-1">Start your chess journey with these top-rated lessons</p>
        </div>
        <Link to="/lessons" className="hidden sm:flex items-center gap-1 text-emerald-600 font-medium text-sm no-underline hover:text-emerald-700">
          View all <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>

      <Link to="/lessons" className="sm:hidden flex items-center justify-center gap-1 text-emerald-600 font-medium text-sm no-underline mt-6">
        View all lessons <ArrowRight size={16} />
      </Link>
    </section>
  )
}
