const pieceSymbols = {
  K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙',
  k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟',
  '*': '·',
  'x': '✕',
}

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const ranks = [8, 7, 6, 5, 4, 3, 2, 1]

export function ChessBoard({ position = {}, highlights = [], caption }) {
  const highlightSet = new Set(highlights)

  return (
    <div className="my-6">
      <div className="inline-block border-2 border-slate-700 rounded-lg overflow-hidden">
        {/* Top file labels */}
        <div className="flex">
          <div className="w-6 h-6" />
          {files.map((f) => (
            <div key={f} className="w-12 h-6 flex items-center justify-center text-xs font-medium text-slate-400">
              {f}
            </div>
          ))}
          <div className="w-6 h-6" />
        </div>

        {ranks.map((rank) => (
          <div key={rank} className="flex">
            {/* Left rank label */}
            <div className="w-6 h-12 flex items-center justify-center text-xs font-medium text-slate-400">
              {rank}
            </div>

            {files.map((file, fileIdx) => {
              const square = `${file}${rank}`
              const isLight = (fileIdx + rank) % 2 === 1
              const piece = position[square]
              const isHighlight = highlightSet.has(square)
              const isDot = piece === '*'
              const isCapture = piece === 'x'
              const isActualPiece = piece && !isDot && !isCapture

              let bgColor
              if (isHighlight && isLight) {
                bgColor = 'bg-emerald-200'
              } else if (isHighlight && !isLight) {
                bgColor = 'bg-emerald-400'
              } else if (isLight) {
                bgColor = 'bg-amber-100'
              } else {
                bgColor = 'bg-amber-800'
              }

              const textColor = isActualPiece
                ? piece === piece.toUpperCase()
                  ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                  : 'text-slate-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]'
                : ''

              return (
                <div
                  key={square}
                  className={`w-12 h-12 flex items-center justify-center relative ${bgColor}`}
                >
                  {isDot && (
                    <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
                  )}
                  {isCapture && (
                    <div className="w-10 h-10 rounded-full border-[3px] border-red-500/50 flex items-center justify-center">
                    </div>
                  )}
                  {isActualPiece && (
                    <span className={`text-3xl select-none ${textColor}`}>
                      {pieceSymbols[piece] || piece}
                    </span>
                  )}
                </div>
              )
            })}

            {/* Right rank label */}
            <div className="w-6 h-12 flex items-center justify-center text-xs font-medium text-slate-400">
              {rank}
            </div>
          </div>
        ))}

        {/* Bottom file labels */}
        <div className="flex">
          <div className="w-6 h-6" />
          {files.map((f) => (
            <div key={f} className="w-12 h-6 flex items-center justify-center text-xs font-medium text-slate-400">
              {f}
            </div>
          ))}
          <div className="w-6 h-6" />
        </div>
      </div>

      {caption && (
        <p className="text-sm text-slate-500 mt-2 italic">{caption}</p>
      )}
    </div>
  )
}
