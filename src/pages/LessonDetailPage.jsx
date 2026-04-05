import { useParams, Link } from 'react-router-dom'
import { Clock, BookOpen, User, BarChart3, ArrowLeft, Play } from 'lucide-react'
import lessons from '../data/lessons.json'
import { useCart } from '../hooks/useCart'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { StarRating } from '../components/ui/StarRating'
import { PriceTag } from '../components/ui/PriceTag'
import { CurriculumAccordion } from '../components/lessons/CurriculumAccordion'

export function LessonDetailPage() {
  const { slug } = useParams()
  const { addItem, items } = useCart()
  const lesson = lessons.find((l) => l.slug === slug)

  if (!lesson) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Lesson not found</h1>
        <Link to="/lessons" className="text-emerald-600 hover:text-emerald-700">Back to Lessons</Link>
      </div>
    )
  }

  const inCart = items.some((item) => item.id === lesson.id && item.itemType === 'lesson')

  const handleAddToCart = () => {
    addItem({
      id: lesson.id,
      title: lesson.title,
      price: lesson.price,
      itemType: 'lesson',
      slug: lesson.slug,
      paymentLink: lesson.paymentLink,
    })
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
            {lesson.price === 0 && <Badge>Free</Badge>}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{lesson.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            <StarRating rating={lesson.rating} reviewsCount={lesson.reviewsCount} />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8">
            <span className="flex items-center gap-1.5"><User size={16} />{lesson.instructor}</span>
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
            <div className="mb-4">
              <PriceTag price={lesson.price} originalPrice={lesson.originalPrice} />
            </div>

            {lesson.originalPrice && (
              <p className="text-sm text-emerald-600 font-medium mb-4">
                Save {Math.round((1 - lesson.price / lesson.originalPrice) * 100)}% off
              </p>
            )}

            <Link to={`/lessons/${lesson.slug}/learn`} className="no-underline block mb-3">
              <Button size="lg" className="w-full">
                <Play size={16} /> Start Lesson
              </Button>
            </Link>

            {lesson.price > 0 && (
              <Button
                onClick={handleAddToCart}
                disabled={inCart}
                size="lg"
                className="w-full mb-4"
                variant={inCart ? 'ghost' : 'outline'}
              >
                {inCart ? 'Added to Cart' : 'Add to Cart'}
              </Button>
            )}

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
              <div className="flex justify-between">
                <span>Instructor</span>
                <span className="font-medium text-slate-900">{lesson.instructor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
