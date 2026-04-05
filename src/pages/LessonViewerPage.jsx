import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle, Circle, BookOpen, ChevronLeft } from 'lucide-react'
import lessons from '../data/lessons.json'
import { LessonContentRenderer } from '../components/lessons/LessonContentRenderer'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'

// Lesson content registry
const contentModules = {
  'how-pieces-move': () => import('../data/lesson-content/how-pieces-move.js'),
  'board-setup-and-rules': () => import('../data/lesson-content/board-setup-and-rules.js'),
  'italian-game': () => import('../data/lesson-content/italian-game.js'),
  'queens-gambit': () => import('../data/lesson-content/queens-gambit.js'),
  'forks-and-pins': () => import('../data/lesson-content/forks-and-pins.js'),
  'discovered-attacks': () => import('../data/lesson-content/discovered-attacks.js'),
  'king-and-pawn-endings': () => import('../data/lesson-content/king-and-pawn-endings.js'),
  'basic-checkmates': () => import('../data/lesson-content/basic-checkmates.js'),
}

const PROGRESS_KEY = 'chessmaster-lesson-progress'

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}
  } catch {
    return {}
  }
}

function saveProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
}

export function LessonViewerPage() {
  const { slug } = useParams()
  const lesson = lessons.find((l) => l.slug === slug)
  const [content, setContent] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [completedSections, setCompletedSections] = useState(new Set())
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const loader = contentModules[slug]
    if (loader) {
      loader().then((mod) => setContent(mod.lessonContent))
    }
  }, [slug])

  useEffect(() => {
    const progress = loadProgress()
    if (progress[slug]) {
      setCompletedSections(new Set(progress[slug]))
    }
  }, [slug])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeIndex])

  if (!lesson) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Lesson not found</h1>
        <Link to="/lessons" className="text-emerald-600">Back to Lessons</Link>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-6">&#9812;</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Lesson content coming soon!</h1>
        <p className="text-slate-500 mb-8">This lesson is still being prepared. Check back later.</p>
        <Link to={`/lessons/${slug}`}>
          <Button variant="outline">Back to Lesson Overview</Button>
        </Link>
      </div>
    )
  }

  const sections = content.sections
  const activeSection = sections[activeIndex]
  const progressPercent = Math.round((completedSections.size / sections.length) * 100)

  const markComplete = () => {
    const updated = new Set(completedSections)
    updated.add(activeSection.id)
    setCompletedSections(updated)

    const progress = loadProgress()
    progress[slug] = Array.from(updated)
    saveProgress(progress)

    if (activeIndex < sections.length - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }

  const goTo = (index) => {
    setActiveIndex(index)
    setSidebarOpen(false)
  }

  // Group sections by their parent section name
  const groupedSections = []
  let currentGroup = null
  sections.forEach((s, i) => {
    if (!currentGroup || currentGroup.name !== s.section) {
      currentGroup = { name: s.section, items: [] }
      groupedSections.push(currentGroup)
    }
    currentGroup.items.push({ ...s, index: i })
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-slate-900 text-white sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to={`/lessons/${slug}`} className="text-slate-400 hover:text-white transition-colors no-underline flex items-center gap-1 text-sm">
              <ChevronLeft size={16} /> Back
            </Link>
            <div className="hidden sm:block">
              <h1 className="text-sm font-semibold truncate max-w-md">{lesson.title}</h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-slate-400 text-xs">{progressPercent}%</span>
            </div>

            <button
              className="lg:hidden p-2 text-slate-400 hover:text-white cursor-pointer bg-transparent border-none"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <BookOpen size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:sticky top-[52px] left-0 h-[calc(100vh-52px)] w-72 bg-slate-50 border-r border-slate-200 overflow-y-auto shrink-0 z-20 transition-transform lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="py-4">
            {groupedSections.map((group, gi) => (
              <div key={gi} className="mb-4">
                <h3 className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {group.name}
                </h3>
                {group.items.map((item) => {
                  const isActive = item.index === activeIndex
                  const isCompleted = completedSections.has(item.id)

                  return (
                    <button
                      key={item.id}
                      onClick={() => goTo(item.index)}
                      className={`w-full text-left px-4 py-2.5 flex items-center gap-3 text-sm transition-colors cursor-pointer border-none ${
                        isActive
                          ? 'bg-emerald-50 text-emerald-700 font-medium border-r-2 border-emerald-600'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                      ) : (
                        <Circle size={16} className={`shrink-0 ${isActive ? 'text-emerald-400' : 'text-slate-300'}`} />
                      )}
                      <span className="truncate">{item.title}</span>
                    </button>
                  )
                })}
              </div>
            ))}
          </nav>
        </aside>

        {/* Sidebar overlay on mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/40 z-10 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8">
            <div className="mb-6">
              <Badge>{activeSection.section}</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-3 mb-1">
                {activeSection.title}
              </h2>
              <p className="text-sm text-slate-400">
                Lesson {activeIndex + 1} of {sections.length}
              </p>
            </div>

            <div className="mb-8">
              <LessonContentRenderer content={activeSection.content} />
            </div>

            {/* Navigation buttons */}
            <div className="border-t border-slate-200 pt-6 flex items-center justify-between gap-4">
              <div>
                {activeIndex > 0 && (
                  <Button variant="ghost" onClick={() => goTo(activeIndex - 1)}>
                    <ArrowLeft size={16} /> Previous
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-3">
                {!completedSections.has(activeSection.id) ? (
                  <Button onClick={markComplete}>
                    <CheckCircle size={16} />
                    {activeIndex < sections.length - 1 ? 'Complete & Next' : 'Complete Lesson'}
                  </Button>
                ) : activeIndex < sections.length - 1 ? (
                  <Button onClick={() => goTo(activeIndex + 1)}>
                    Next <ArrowRight size={16} />
                  </Button>
                ) : (
                  <Link to={`/lessons/${slug}`}>
                    <Button variant="secondary">
                      <CheckCircle size={16} /> Lesson Complete!
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Completion message */}
            {completedSections.size === sections.length && (
              <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">&#127942;</div>
                <h3 className="text-lg font-bold text-emerald-800 mb-2">Congratulations!</h3>
                <p className="text-emerald-700 text-sm mb-4">
                  You've completed all sections of "{lesson.title}". You now know how every chess piece moves!
                </p>
                <div className="flex justify-center gap-3">
                  <Link to="/lessons">
                    <Button size="sm">Browse More Lessons</Button>
                  </Link>
                  <Link to={`/lessons/${slug}`}>
                    <Button variant="outline" size="sm">Back to Overview</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
