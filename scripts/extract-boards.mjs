// Extracts all board positions from lesson content files and outputs JSON
import { readdir } from 'fs/promises'
import { pathToFileURL } from 'url'
import { join } from 'path'
import { writeFileSync } from 'fs'

const contentDir = join(import.meta.dirname, '..', 'src', 'data', 'lesson-content')
const files = await readdir(contentDir)

const boards = []

for (const file of files.filter(f => f.endsWith('.js'))) {
  const url = pathToFileURL(join(contentDir, file)).href
  const mod = await import(url)
  const { lessonContent } = mod

  for (const section of lessonContent.sections) {
    for (const block of section.content) {
      if (block.type === 'board') {
        const id = `${lessonContent.slug}__${section.id}__${boards.filter(b => b.lesson === lessonContent.slug).length}`
        boards.push({
          id,
          lesson: lessonContent.slug,
          section: section.id,
          caption: block.caption || '',
          position: block.position || {},
          highlights: block.highlights || [],
        })
      }
    }
  }
}

console.log(`Extracted ${boards.length} boards from ${files.length} lesson files`)
writeFileSync(join(import.meta.dirname, 'boards.json'), JSON.stringify(boards, null, 2))
console.log('Written to scripts/boards.json')
