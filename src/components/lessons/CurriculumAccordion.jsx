import { useState } from 'react'
import { ChevronDown, PlayCircle } from 'lucide-react'

export function CurriculumAccordion({ curriculum }) {
  const [openSections, setOpenSections] = useState([0])

  const toggle = (index) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <div className="space-y-3">
      {curriculum.map((section, index) => (
        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer border-none text-left"
          >
            <div>
              <span className="font-semibold text-slate-900 text-sm">{section.section}</span>
              <span className="text-xs text-slate-400 ml-2">{section.lessons.length} lessons</span>
            </div>
            <ChevronDown
              size={18}
              className={`text-slate-400 transition-transform ${openSections.includes(index) ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.includes(index) && (
            <div className="divide-y divide-slate-100">
              {section.lessons.map((lesson, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3">
                  <PlayCircle size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-600">{lesson}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
