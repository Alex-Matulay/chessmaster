import { useParams, Link } from 'react-router-dom'
import { Clock, BookOpen, BarChart3, ArrowLeft, Play } from 'lucide-react'
import lessons from '../data/lessons.json'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { CurriculumAccordion } from '../components/lessons/CurriculumAccordion'

export function LessonDetailPage() {
  const { slug } = useParams()
  const lesson = lessons.find((l) => l.slug === slug)

  if (!lesson) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Lesson not found</h1>
        <Link to="/lessons" className="text-emerald-600 hover:text-emerald-700">Back to Lessons</Link>
      </div>
    )
  }

  const totalLessons = lesson.curriculum.reduce((sum, s) => sum + s.lessons.length, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/lessons" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700 no-underline mb-6">
        <ArrowLeft size={16} /> Back to Lessons
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>{lesson.category}</Badge>
            <Badge>{lesson.level}</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{lesson.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8">
            <span className="flex items-center gap-1.5"><Clock size={16} />{lesson.duration}</span>
            <span className="flex items-center gap-1.5"><BookOpen size={16} />{totalLessons} lessons</span>
            <span className="flex items-center gap-1.5"><BarChart3 size={16} />{lesson.level}</span>
          </div>

          <div className="prose prose-slate max-w-none mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">About This Course</h2>
            <p className="text-slate-600 leading-relaxed">{lesson.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Curriculum</h2>
            <CurriculumAccordion curriculum={lesson.curriculum} />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <Link to={`/lessons/${lesson.slug}/learn`} className="no-underline block mb-4">
              <Button size="lg" className="w-full">
                <Play size={16} /> Start Lesson
              </Button>
            </Link>

            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Duration</span>
                <span className="font-medium text-slate-900">{lesson.duration}</span>
              </div>
              <div className="flex justify-between">
                <span>Lessons</span>
                <span className="font-medium text-slate-900">{totalLessons}</span>
              </div>
              <div className="flex justify-between">
                <span>Level</span>
                <span className="font-medium text-slate-900">{lesson.level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
