import { Hero } from '../components/home/Hero'
import { FeaturedLessons } from '../components/home/FeaturedLessons'
import { FeaturedProducts } from '../components/home/FeaturedProducts'
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Students', value: '2,500+' },
  { icon: BookOpen, label: 'Lessons', value: '50+' },
  { icon: Award, label: 'Resources', value: '100+' },
  { icon: TrendingUp, label: 'Avg Rating', value: '4.8' },
]

export function HomePage() {
  return (
    <div>
      <Hero />

      <div className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon className="mx-auto mb-2 text-emerald-600" size={24} />
                <div className="text-2xl font-bold text-slate-900">{value}</div>
                <div className="text-sm text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FeaturedLessons />
      <FeaturedProducts />

      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Chess Journey?</h2>
          <p className="text-emerald-100 mb-6">Join thousands of beginners who have improved their game with our structured approach.</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 border-none focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors cursor-pointer border-none">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-emerald-200 mt-3">Get free tips and updates. No spam, unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
