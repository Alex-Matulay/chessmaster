import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="text-8xl mb-6">&#9812;</div>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h1>
      <p className="text-slate-500 mb-8">
        Looks like this page has been captured! Let's get you back to safety.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
        <Link to="/lessons">
          <Button variant="outline">Browse Lessons</Button>
        </Link>
      </div>
    </div>
  )
}
