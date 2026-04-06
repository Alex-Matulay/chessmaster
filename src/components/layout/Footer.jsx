import { Link } from 'react-router-dom'
import { Crown } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <Crown className="text-emerald-400" size={24} />
              <span className="text-lg font-bold">ChessMaster</span>
            </div>
            <p className="text-sm">Learn chess from zero to hero with structured lessons, tactical training, and expert-crafted resources.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Learn</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/lessons" className="text-sm text-slate-400 hover:text-white no-underline transition-colors">All Lessons</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Categories</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><Link to="/lessons?category=Chess+Basics" className="text-sm text-slate-400 hover:text-white no-underline transition-colors">Chess Basics</Link></li>
              <li><Link to="/lessons?category=Openings" className="text-sm text-slate-400 hover:text-white no-underline transition-colors">Openings</Link></li>
              <li><Link to="/lessons?category=Tactics" className="text-sm text-slate-400 hover:text-white no-underline transition-colors">Tactics</Link></li>
              <li><Link to="/lessons?category=Endgame" className="text-sm text-slate-400 hover:text-white no-underline transition-colors">Endgame</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} ChessMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
