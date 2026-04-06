import { useState } from 'react'
import { Hero } from '../components/home/Hero'
import { FeaturedLessons } from '../components/home/FeaturedLessons'
import { CheckCircle } from 'lucide-react'

export function HomePage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email || submitting) return
    setSubmitting(true)
    try {
      await fetch('https://script.google.com/macros/s/AKfycbw8NYGELNyr2za_p9K_oCKNMFAWNesJzkto0ui8Co4RybBEHhTnXM_85ZAe98chSKeA/exec', {
        method: 'POST',
        body: JSON.stringify({ email }),
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
