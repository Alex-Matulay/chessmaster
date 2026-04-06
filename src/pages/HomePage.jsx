import { useState } from 'react'
import { Hero } from '../components/home/Hero'
import { FeaturedLessons } from '../components/home/FeaturedLessons'
import { Users, BookOpen, Award, TrendingUp, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Users, label: 'Students', value: '2,500+' },
  { icon: BookOpen, label: 'Lessons', value: '50+' },
  { icon: Award, label: 'Resources', value: '100+' },
  { icon: TrendingUp, label: 'Avg Rating', value: '4.8' },
]

export function HomePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email || submitting) return
    setSubmitting(true)
    try {
      await fetch('https://formsubmit.co/ajax/sani.matulay@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'New ChessMaster Subscriber' }),
      })
      setSubmitted(true)
      setEmail('')
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

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

      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Chess Journey?</h2>
          <p className="text-emerald-100 mb-6">Join thousands of beginners who have improved their game with our structured approach.</p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircle size={20} />
              <span className="font-medium">Thanks for subscribing! Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 border-none focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors cursor-pointer border-none disabled:opacity-50"
              >
                {submitting ? 'Sending...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-xs text-emerald-200 mt-3">Get free tips and updates. No spam, unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
