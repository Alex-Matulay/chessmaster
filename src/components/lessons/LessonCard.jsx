import { Link } from 'react-router-dom'
import { Clock, BookOpen } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'

const categoryIcons = {
  'Chess Basics': '&#9812;',
  'Openings': '&#9816;',
  'Tactics': '&#9813;',
  'Endgame': '&#9814;',
}

export function LessonCard({ lesson }) {
  return (
    <Link to={`/lessons/${lesson.slug}`} className="no-underline">
      <Card className="h-full flex flex-col">
        <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center relative">
          <span
            className="text-6xl text-white/20"
            dangerouslySetInnerHTML={{ __html: categoryIcons[lesson.category] || '&#9812;' }}
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge>{lesson.category}</Badge>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-base font-bold text-slate-900 mb-1">{lesson.title}</h3>
          <p className="text-sm text-slate-500 mb-3 flex-1">{lesson.shortDescription}</p>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="flex items-center gap-1"><Clock size={12} />{lesson.duration}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><BookOpen size={12} />{lesson.lessonsCount} lessons</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
