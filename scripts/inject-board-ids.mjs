// Adds 'image' field to each board block in lesson content files
import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const contentDir = join(import.meta.dirname, '..', 'src', 'data', 'lesson-content')
const files = await readdir(contentDir)

for (const file of files.filter(f => f.endsWith('.js'))) {
  const filePath = join(contentDir, file)
  let source = await readFile(filePath, 'utf-8')

  // Dynamic import to get slug
  const { pathToFileURL } = await import('url')
  const mod = await import(pathToFileURL(filePath).href)
  const slug = mod.lessonContent.slug

  let boardIdx = 0
  const sections = mod.lessonContent.sections

  for (const section of sections) {
    for (const block of section.content) {
      if (block.type === 'board') {
        const id = `${slug}__${section.id}__${boardIdx}`
        boardIdx++

        // Find this board block in source and add image field after type: 'board'
        // We'll do a simpler approach: find caption string and add image before it
        if (block.caption) {
          const captionEscaped = block.caption.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          const regex = new RegExp(`(type:\\s*'board',\\s*\\n\\s*)caption:`)
          // This is fragile, let's use a different approach
        }
      }
    }
  }
}

// Actually let's take a different, more robust approach:
// Instead of modifying lesson files, we create a mapping file that the ChessBoard component uses

const boards = JSON.parse(await readFile(join(import.meta.dirname, 'boards.json'), 'utf-8'))

// Create a mapping: lesson-slug -> section-id -> board-index -> image-path
const mapping = {}
for (const board of boards) {
  const { lesson, section, id } = board
  if (!mapping[lesson]) mapping[lesson] = {}
  if (!mapping[lesson][section]) mapping[lesson][section] = []
  mapping[lesson][section].push(`/boards/${id}.svg`)
}

await writeFile(
  join(import.meta.dirname, '..', 'src', 'data', 'board-images.json'),
  JSON.stringify(mapping, null, 2)
)
console.log('Created src/data/board-images.json')
