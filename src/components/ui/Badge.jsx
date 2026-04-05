const colorMap = {
  'Chess Basics': 'bg-blue-100 text-blue-700',
  'Openings': 'bg-purple-100 text-purple-700',
  'Tactics': 'bg-red-100 text-red-700',
  'Endgame': 'bg-amber-100 text-amber-700',
  'Ebooks': 'bg-emerald-100 text-emerald-700',
  'Cheat Sheets': 'bg-cyan-100 text-cyan-700',
  'Opening Guides': 'bg-violet-100 text-violet-700',
  'Bundles': 'bg-orange-100 text-orange-700',
  'Beginner': 'bg-green-100 text-green-700',
  'Intermediate': 'bg-yellow-100 text-yellow-700',
  'Advanced': 'bg-red-100 text-red-700',
  'Free': 'bg-emerald-100 text-emerald-700',
}

export function Badge({ children, className = '' }) {
  const colors = colorMap[children] || 'bg-slate-100 text-slate-700'
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${colors} ${className}`}>
      {children}
    </span>
  )
}
