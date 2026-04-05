import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/Button'

export function CheckoutSuccessPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <CheckCircle size={64} className="text-emerald-500 mx-auto mb-6" />
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h1>
      <p className="text-slate-500 mb-8">
        Your purchase was successful. You will receive a confirmation email with download links shortly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/lessons">
          <Button>Continue Learning</Button>
        </Link>
        <Link to="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}
