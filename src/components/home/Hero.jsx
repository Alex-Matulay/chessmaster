import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { BookOpen } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">&#9812;</div>
        <div className="absolute top-20 right-20 text-7xl">&#9822;</div>
        <div className="absolute bottom-10 left-1/4 text-9xl">&#9814;</div>
        <div className="absolute bottom-20 right-1/3 text-6xl">&#9821;</div>
        <div className="absolute top-1/3 left-1/2 text-8xl">&#9815;</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            New lessons added weekly
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Master Chess<br />
            <span className="text-emerald-400">from Zero</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Structured lessons, tactical training, and expert resources designed to take you from complete beginner to confident player.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lessons">
              <Button size="lg" className="w-full sm:w-auto">
                <BookOpen size={18} />
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
