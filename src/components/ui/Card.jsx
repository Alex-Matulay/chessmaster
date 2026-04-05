export function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-shadow hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
