import { Lightbulb } from 'lucide-react'
import { ChessBoard } from './ChessBoard'

function renderMarkdown(text) {
  // Simple markdown: bold, italic
  let html = text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/###\s+(.+)/g, '<h3 class="text-lg font-bold text-slate-900 mt-6 mb-2">$1</h3>')
  return html
}

function TextBlock({ value }) {
  return (
    <div
      className="text-slate-600 leading-relaxed mb-4"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
    />
  )
}

function TipBlock({ value }) {
  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4 flex gap-3">
      <Lightbulb className="text-emerald-600 shrink-0 mt-0.5" size={20} />
      <div
        className="text-emerald-800 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
      />
    </div>
  )
}

function DefinitionBlock({ term, value }) {
  return (
    <div className="bg-slate-50 border-l-4 border-emerald-500 p-4 mb-4 rounded-r-lg">
      <dt className="font-bold text-slate-900 mb-1">{term}</dt>
      <dd
        className="text-slate-600 text-sm leading-relaxed ml-0"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
      />
    </div>
  )
}

function ListBlock({ items }) {
  return (
    <ul className="space-y-2 mb-4 pl-0 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
          <span className="text-emerald-500 mt-1 shrink-0">&#9654;</span>
          <span dangerouslySetInnerHTML={{ __html: renderMarkdown(item) }} />
        </li>
      ))}
    </ul>
  )
}

function TableBlock({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-slate-800 text-white">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2.5 text-left font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 border-b border-slate-200 text-slate-600">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function LessonContentRenderer({ content, lessonSlug, sectionId, boardOffset = 0 }) {
  let boardIdx = boardOffset
  return (
    <div>
      {content.map((block, i) => {
        switch (block.type) {
          case 'text':
            return <TextBlock key={i} value={block.value} />
          case 'tip':
            return <TipBlock key={i} value={block.value} />
          case 'definition':
            return <DefinitionBlock key={i} term={block.term} value={block.value} />
          case 'board': {
            const imageSrc = lessonSlug ? `boards/${lessonSlug}__${sectionId}__${boardIdx}.svg` : null
            boardIdx++
            return <ChessBoard key={i} imageSrc={imageSrc} caption={block.caption} />
          }
          case 'list':
            return <ListBlock key={i} items={block.items} />
          case 'table':
            return <TableBlock key={i} headers={block.headers} rows={block.rows} />
          default:
            return null
        }
      })}
    </div>
  )
}
