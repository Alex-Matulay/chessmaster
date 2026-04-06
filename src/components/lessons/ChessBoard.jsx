export function ChessBoard({ imageSrc, caption }) {
  return (
    <div className="my-6">
      {imageSrc ? (
        <img
          src={`${import.meta.env.BASE_URL}${imageSrc}`}
          alt={caption || 'Chess board position'}
          className="rounded-lg shadow-sm border border-slate-200"
          style={{ maxWidth: 360 }}
        />
      ) : (
        <div className="w-[360px] h-[360px] bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
          Board not available
        </div>
      )}

      {caption && (
        <p className="text-sm text-slate-500 mt-2 italic">{caption}</p>
      )}
    </div>
  )
}
