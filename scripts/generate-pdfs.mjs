import PDFDocument from 'pdfkit'
import fs from 'fs'
import path from 'path'

const OUT = path.resolve('public/products')
fs.mkdirSync(OUT, { recursive: true })

// Colors
const C = {
  green: '#059669',
  darkGreen: '#065f46',
  dark: '#0f172a',
  text: '#334155',
  light: '#64748b',
  bg: '#f8fafc',
  white: '#ffffff',
  accent: '#10b981',
  lightGreen: '#ecfdf5',
  border: '#e2e8f0',
}

function createDoc(filename) {
  const doc = new PDFDocument({ size: 'A4', margin: 60 })
  const stream = fs.createWriteStream(path.join(OUT, filename))
  doc.pipe(stream)
  return { doc, stream }
}

function coverPage(doc, title, subtitle, category) {
  // Green background
  doc.rect(0, 0, 595, 842).fill(C.green)

  // Chess piece watermarks
  doc.fontSize(200).fillColor('rgba(255,255,255,0.08)')
  doc.text('♔', 350, 50, { width: 200 })
  doc.text('♞', -20, 500, { width: 200 })

  // Category badge
  doc.roundedRect(60, 120, category.length * 10 + 30, 30, 15).fill('#ffffff30')
  doc.fontSize(12).fillColor(C.white).text(category, 75, 127, { width: 200 })

  // Title
  doc.fontSize(42).fillColor(C.white).font('Helvetica-Bold')
  doc.text(title, 60, 250, { width: 475 })

  // Subtitle
  doc.fontSize(16).fillColor('#d1fae5').font('Helvetica')
  doc.text(subtitle, 60, 250 + doc.heightOfString(title, { width: 475 }) + 20, { width: 475 })

  // Bottom branding
  doc.fontSize(14).fillColor(C.white).font('Helvetica-Bold')
  doc.text('♔ ChessMaster', 60, 750)
  doc.fontSize(10).fillColor('#a7f3d0').font('Helvetica')
  doc.text('chessmaster.com', 60, 770)

  doc.addPage()
}

function sectionTitle(doc, title) {
  doc.moveDown(0.5)
  doc.rect(60, doc.y, 475, 2).fill(C.green)
  doc.moveDown(0.5)
  doc.fontSize(22).fillColor(C.dark).font('Helvetica-Bold').text(title)
  doc.moveDown(0.5)
  doc.font('Helvetica').fontSize(11).fillColor(C.text)
}

function heading(doc, text) {
  doc.moveDown(0.8)
  doc.fontSize(15).fillColor(C.darkGreen).font('Helvetica-Bold').text(text)
  doc.moveDown(0.3)
  doc.font('Helvetica').fontSize(11).fillColor(C.text)
}

function para(doc, text) {
  doc.fontSize(11).fillColor(C.text).font('Helvetica').text(text, { lineGap: 4 })
  doc.moveDown(0.4)
}

function bullet(doc, items) {
  items.forEach(item => {
    doc.fontSize(11).fillColor(C.green).text('▸ ', { continued: true })
    doc.fillColor(C.text).text(item, { lineGap: 3 })
  })
  doc.moveDown(0.4)
}

function tip(doc, text) {
  const y = doc.y
  doc.rect(60, y, 475, 4).fill(C.accent)
  doc.rect(60, y + 4, 475, doc.heightOfString(text, { width: 435 }) + 20).fill(C.lightGreen)
  doc.fontSize(10).fillColor(C.darkGreen).text('💡 TIP: ' + text, 80, y + 14, { width: 435 })
  doc.y = y + doc.heightOfString(text, { width: 435 }) + 34
  doc.moveDown(0.4)
}

function chessBoard(doc, title, position = {}) {
  const startX = 160
  const startY = doc.y + 10
  const sq = 34

  if (startY + sq * 8 + 40 > 780) {
    doc.addPage()
    return chessBoard(doc, title, position)
  }

  // Title
  doc.fontSize(10).fillColor(C.light).font('Helvetica').text(title, 60, startY - 5, { width: 475, align: 'center' })

  const boardY = startY + 15
  const pieces = { K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙', k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' }
  const files = 'abcdefgh'

  // Border
  doc.rect(startX - 2, boardY - 2, sq * 8 + 4, sq * 8 + 4).lineWidth(2).stroke(C.dark)

  for (let rank = 8; rank >= 1; rank--) {
    for (let f = 0; f < 8; f++) {
      const x = startX + f * sq
      const y = boardY + (8 - rank) * sq
      const isLight = (f + rank) % 2 === 1
      doc.rect(x, y, sq, sq).fill(isLight ? '#f5e6c8' : '#b58863')

      const square = files[f] + rank
      const piece = position[square]
      if (piece && pieces[piece]) {
        doc.fontSize(22).fillColor(piece === piece.toUpperCase() ? '#ffffff' : '#1a1a1a')
        doc.text(pieces[piece], x, y + 6, { width: sq, align: 'center' })
      }
    }
  }

  // File labels
  for (let f = 0; f < 8; f++) {
    doc.fontSize(8).fillColor(C.light).text(files[f], startX + f * sq, boardY + sq * 8 + 4, { width: sq, align: 'center' })
  }

  doc.y = boardY + sq * 8 + 20
  doc.moveDown(0.5)
  doc.fontSize(11).fillColor(C.text)
}

function pageCheck(doc) {
  if (doc.y > 720) doc.addPage()
}

function footer(doc) {
  // No-op: page footers removed to avoid buffer issues
}

// ============================================================
// PRODUCT 1: Chess Fundamentals for Beginners
// ============================================================
function createChessFundamentals() {
  const { doc, stream } = createDoc('chess-fundamentals-ebook.pdf')
  coverPage(doc, 'Chess Fundamentals for Beginners', 'A complete guide covering everything from piece movement to basic strategy.', 'EBOOK')

  // Table of contents
  sectionTitle(doc, 'Table of Contents')
  const chapters = [
    '1. The Chess Board', '2. The Pieces and How They Move', '3. Special Moves',
    '4. Check, Checkmate, and Draws', '5. Basic Opening Principles',
    '6. Tactical Motifs', '7. Endgame Essentials', '8. Your First Games'
  ]
  chapters.forEach(ch => { doc.fontSize(12).fillColor(C.dark).text(ch); doc.moveDown(0.3) })
  doc.addPage()

  // Chapter 1
  sectionTitle(doc, 'Chapter 1: The Chess Board')
  para(doc, 'Chess is played on a board of 64 squares arranged in an 8x8 grid. The squares alternate between light and dark colors. The board is set up so that each player has a light square in the bottom-right corner.')

  chessBoard(doc, 'The Starting Position', {
    a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
    a2: 'P', b2: 'P', c2: 'P', d2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
    a7: 'p', b7: 'p', c7: 'p', d7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
    a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
  })

  heading(doc, 'Coordinates')
  para(doc, 'Every square has a unique coordinate: a letter (a-h for files/columns) and a number (1-8 for ranks/rows). For example, e4 is the intersection of the e-file and the 4th rank. This system is called algebraic notation.')

  tip(doc, 'Remember: "Queen on her color" — the White Queen starts on a light square (d1), the Black Queen on a dark square (d8).')

  doc.addPage()

  // Chapter 2
  sectionTitle(doc, 'Chapter 2: The Pieces and How They Move')

  heading(doc, 'The Pawn (♙) — Value: 1 point')
  para(doc, 'Pawns move forward one square at a time, but capture diagonally. On their first move, they can advance two squares. When a pawn reaches the opposite end of the board, it promotes to any other piece (usually a Queen).')
  bullet(doc, [
    'Moves forward one square (two on first move)',
    'Captures one square diagonally forward',
    'Special moves: en passant, promotion',
    'Cannot move backward',
  ])

  pageCheck(doc)
  heading(doc, 'The Knight (♘) — Value: 3 points')
  para(doc, 'The Knight moves in an L-shape: two squares in one direction and one square perpendicular. It is the only piece that can jump over other pieces.')
  bullet(doc, [
    'Moves in an L-shape (2+1 squares)',
    'Can jump over other pieces',
    'Always lands on opposite color square',
    'Most powerful in the center of the board',
  ])

  pageCheck(doc)
  heading(doc, 'The Bishop (♗) — Value: 3 points')
  para(doc, 'The Bishop moves diagonally any number of squares. Each Bishop is restricted to one color for the entire game — one on light squares, one on dark squares.')

  pageCheck(doc)
  heading(doc, 'The Rook (♖) — Value: 5 points')
  para(doc, 'The Rook moves horizontally or vertically any number of squares. Rooks are most powerful on open files (columns with no pawns).')

  pageCheck(doc)
  heading(doc, 'The Queen (♕) — Value: 9 points')
  para(doc, 'The Queen combines the power of the Rook and Bishop. She can move any number of squares horizontally, vertically, or diagonally. The most powerful piece on the board.')

  pageCheck(doc)
  heading(doc, 'The King (♔) — Value: Priceless!')
  para(doc, 'The King moves one square in any direction. If your King is checkmated, you lose the game. Protect your King at all costs!')

  doc.addPage()

  // Chapter 3
  sectionTitle(doc, 'Chapter 3: Special Moves')
  heading(doc, 'Castling')
  para(doc, 'Castling is a special move involving the King and a Rook. The King moves two squares toward the Rook, and the Rook jumps over the King. This is the only move where two pieces move at once.')
  bullet(doc, [
    'Kingside castling (O-O): King goes to g1/g8, Rook to f1/f8',
    'Queenside castling (O-O-O): King goes to c1/c8, Rook to d1/d8',
    'Neither piece can have moved before',
    'No pieces between King and Rook',
    'King cannot castle out of, through, or into check',
  ])

  heading(doc, 'En Passant')
  para(doc, 'When a pawn advances two squares from its starting position and lands beside an enemy pawn, the opponent can capture it "in passing" as if it had only moved one square. This must be done immediately on the next move.')

  heading(doc, 'Pawn Promotion')
  para(doc, 'When a pawn reaches the far end of the board (rank 8 for White, rank 1 for Black), it must be promoted to a Queen, Rook, Bishop, or Knight. Most players choose a Queen.')

  doc.addPage()

  // Chapter 4
  sectionTitle(doc, 'Chapter 4: Check, Checkmate, and Draws')
  heading(doc, 'Check')
  para(doc, 'When a piece attacks the enemy King, the King is "in check." The player must immediately get out of check by: moving the King, blocking the check, or capturing the attacking piece.')

  heading(doc, 'Checkmate')
  para(doc, 'When a King is in check and there is no way to escape, it is "checkmate" — the game is over! The player who delivers checkmate wins.')

  chessBoard(doc, 'Scholar\'s Mate — A common checkmate for beginners', {
    a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', g1: 'N', h1: 'R',
    a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
    e4: 'P', f3: 'B',
    f7: 'Q',
    a7: 'p', b7: 'p', c7: 'p', d7: 'p', g7: 'p', h7: 'p',
    a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
    e5: 'p', c6: 'n',
  })

  heading(doc, 'Types of Draws')
  bullet(doc, [
    'Stalemate: The player to move has no legal moves but is NOT in check',
    'Insufficient material: Neither side has enough pieces to checkmate',
    'Threefold repetition: Same position occurs three times',
    'Fifty-move rule: 50 moves without a capture or pawn move',
    'Agreement: Both players agree to draw',
  ])

  doc.addPage()

  // Chapter 5
  sectionTitle(doc, 'Chapter 5: Basic Opening Principles')
  para(doc, 'The opening is the first phase of the game. Follow these principles to start your games well:')
  bullet(doc, [
    'Control the center (e4, d4, e5, d5)',
    'Develop your pieces (Knights and Bishops first)',
    'Castle early to protect your King',
    'Don\'t move the same piece twice without reason',
    'Don\'t bring the Queen out too early',
    'Connect your Rooks by developing all minor pieces',
  ])

  tip(doc, 'A good opening sequence for White: 1.e4, develop Knights to f3 and c3, develop Bishops, castle, then connect Rooks.')

  doc.addPage()

  // Chapter 6
  sectionTitle(doc, 'Chapter 6: Tactical Motifs')
  heading(doc, 'Forks')
  para(doc, 'A fork is when one piece attacks two or more enemy pieces at the same time. Knight forks are the most common and devastating.')

  heading(doc, 'Pins')
  para(doc, 'A pin is when a piece is attacked but cannot move because it would expose a more valuable piece behind it. An absolute pin involves the King.')

  heading(doc, 'Skewers')
  para(doc, 'A skewer is the opposite of a pin — a more valuable piece is attacked and must move, exposing a less valuable piece behind it.')

  heading(doc, 'Discovered Attacks')
  para(doc, 'A discovered attack happens when one piece moves, revealing an attack from the piece behind it. Discovered checks are especially powerful.')

  doc.addPage()

  // Chapter 7
  sectionTitle(doc, 'Chapter 7: Endgame Essentials')
  para(doc, 'The endgame begins when most pieces have been traded. Key concepts:')
  bullet(doc, [
    'Activate your King — in the endgame, the King becomes a fighting piece',
    'Create passed pawns — pawns with no opposing pawns blocking them',
    'Learn basic checkmates: King + Queen vs King, King + Rook vs King',
    'Opposition: Kings facing each other with one square between them',
    'The Rule of the Square: Can the King catch a passed pawn?',
  ])

  doc.addPage()

  // Chapter 8
  sectionTitle(doc, 'Chapter 8: Your First Games')
  para(doc, 'Now that you know the rules and basic strategy, here are tips for your first games:')
  bullet(doc, [
    'Play slowly and think before each move',
    'Ask yourself: "Is my move safe? Can my opponent capture something?"',
    'Look for checks, captures, and threats on every move',
    'Don\'t worry about memorizing openings — focus on principles',
    'Analyze your games afterward to learn from mistakes',
    'Have fun! Every grandmaster was once a beginner.',
  ])

  tip(doc, 'Play online at lichess.org (free!) or chess.com. Start with longer time controls (10+0 or 15+10) so you have time to think.')

  para(doc, 'Congratulations on completing Chess Fundamentals for Beginners! Keep practicing, study tactics daily, and enjoy your chess journey.')

  footer(doc)
  doc.end()
  return new Promise(r => stream.on('finish', r))
}

// ============================================================
// PRODUCT 2: Opening Repertoire Guide
// ============================================================
function createOpeningRepertoire() {
  const { doc, stream } = createDoc('opening-repertoire-guide.pdf')
  coverPage(doc, 'Opening Repertoire Guide', 'Build a solid opening repertoire with both White and Black pieces.', 'EBOOK')

  sectionTitle(doc, 'Table of Contents')
  const chapters = [
    'Part I: Your White Repertoire',
    '  1. The Italian Game (1.e4 e5 2.Nf3 Nc6 3.Bc4)',
    '  2. Key Plans and Ideas',
    'Part II: Your Black Repertoire vs 1.e4',
    '  3. The Sicilian Defense (1.e4 c5)',
    '  4. Key Plans and Ideas',
    'Part III: Your Black Repertoire vs 1.d4',
    '  5. The King\'s Indian Defense',
    '  6. Key Plans and Ideas',
    'Part IV: Practical Tips',
  ]
  chapters.forEach(ch => { doc.fontSize(11).fillColor(C.dark).text(ch); doc.moveDown(0.2) })
  doc.addPage()

  sectionTitle(doc, 'Part I: Your White Repertoire')
  heading(doc, 'The Italian Game')
  para(doc, 'We recommend the Italian Game (1.e4 e5 2.Nf3 Nc6 3.Bc4) as your primary weapon with White. It\'s one of the oldest and most logical openings in chess.')

  chessBoard(doc, 'The Italian Game after 1.e4 e5 2.Nf3 Nc6 3.Bc4', {
    a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', h1: 'R',
    a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
    e4: 'P', f3: 'N', c4: 'B',
    e5: 'p', c6: 'n',
    a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
    a8: 'r', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
  })

  heading(doc, 'Key Ideas for White')
  bullet(doc, [
    'Control the center with e4 and d4',
    'Develop quickly: Nf3, Bc4, O-O, d3 or d4',
    'Attack the f7 square — the weakest point in Black\'s position',
    'After castling, aim for a central pawn break with d4',
  ])

  pageCheck(doc)
  heading(doc, 'Against the Giuoco Piano (3...Bc5)')
  para(doc, 'After 3...Bc5, play 4.c3 preparing d4. This is the Giuoco Piano, leading to rich middlegame positions. White gets a strong center and active piece play.')

  heading(doc, 'Against the Two Knights (3...Nf6)')
  para(doc, 'After 3...Nf6, the main line is 4.d3 (the safe Italian). This keeps a solid structure and avoids sharp complications. Play Bc4, O-O, Re1, and build pressure.')

  doc.addPage()

  sectionTitle(doc, 'Part II: Black vs 1.e4 — The Sicilian Defense')
  para(doc, 'Against 1.e4, we recommend 1...c5 (the Sicilian Defense). It\'s the most popular response at all levels and gives Black active counterplay.')

  chessBoard(doc, 'Sicilian Defense: 1.e4 c5', {
    a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
    a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P', e4: 'P',
    c5: 'p',
    a7: 'p', b7: 'p', d7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
    a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
  })

  heading(doc, 'Key Sicilian Ideas')
  bullet(doc, [
    'Fight for the d4 square — if White plays d4, exchange cxd4',
    'Use the semi-open c-file for counterplay',
    'Develop with ...Nf6, ...d6, ...a6, ...e5 or ...e6',
    'Black often castles kingside and attacks on the queenside',
  ])

  doc.addPage()

  sectionTitle(doc, 'Part III: Black vs 1.d4 — King\'s Indian Defense')
  para(doc, 'Against 1.d4, we recommend the King\'s Indian Defense (1.d4 Nf6 2.c4 g6). It\'s dynamic, aggressive, and leads to exciting games.')

  heading(doc, 'Key King\'s Indian Ideas')
  bullet(doc, [
    'Fianchetto the Bishop to g7 — it becomes a powerful piece',
    'Castle kingside quickly',
    'Strike in the center with ...e5 or ...c5',
    'If the center closes, attack on the kingside with ...f5',
  ])

  doc.addPage()

  sectionTitle(doc, 'Part IV: Practical Tips')
  bullet(doc, [
    'Focus on understanding IDEAS, not memorizing moves',
    'Study 2-3 games in each opening to see the plans in action',
    'Practice your repertoire in online blitz/rapid games',
    'Review your games to find opening mistakes',
    'Expand your repertoire gradually as you improve',
  ])

  tip(doc, 'A small repertoire you understand deeply is better than a wide one you barely know. Master one opening for White and one for Black before expanding.')

  footer(doc)
  doc.end()
  return new Promise(r => stream.on('finish', r))
}

// ============================================================
// PRODUCT 3: Piece Values & Movement Cheat Sheet
// ============================================================
function createPieceValuesSheet() {
  const { doc, stream } = createDoc('piece-values-cheat-sheet.pdf')
  coverPage(doc, 'Piece Values & Movement', 'Quick-reference card with piece values, movements, and special rules.', 'CHEAT SHEET')

  sectionTitle(doc, 'Piece Values')

  const pieces = [
    { name: 'Pawn ♙', value: '1', move: 'Forward 1 square (2 on first move)', capture: 'Diagonally forward 1 square' },
    { name: 'Knight ♘', value: '3', move: 'L-shape (2+1 squares)', capture: 'Same as movement, can jump' },
    { name: 'Bishop ♗', value: '3', move: 'Diagonally, any distance', capture: 'Same as movement' },
    { name: 'Rook ♖', value: '5', move: 'Horizontally/vertically, any distance', capture: 'Same as movement' },
    { name: 'Queen ♕', value: '9', move: 'Any direction, any distance', capture: 'Same as movement' },
    { name: 'King ♔', value: '∞', move: '1 square, any direction', capture: 'Same as movement' },
  ]

  pieces.forEach(p => {
    heading(doc, `${p.name} — ${p.value} point${p.value === '1' ? '' : 's'}`)
    para(doc, `Movement: ${p.move}`)
    para(doc, `Capture: ${p.capture}`)
    pageCheck(doc)
  })

  doc.addPage()
  sectionTitle(doc, 'Special Moves')

  heading(doc, 'Castling')
  bullet(doc, [
    'King moves 2 squares toward Rook, Rook jumps over King',
    'Kingside (O-O) or Queenside (O-O-O)',
    'Neither piece moved before, no pieces between, not in/through/into check',
  ])

  heading(doc, 'En Passant')
  bullet(doc, [
    'Pawn advances 2 squares, lands beside enemy pawn',
    'Enemy can capture "in passing" on the next move only',
  ])

  heading(doc, 'Promotion')
  bullet(doc, [
    'Pawn reaches last rank → becomes Queen, Rook, Bishop, or Knight',
    'Usually promote to Queen (called "queening")',
  ])

  doc.addPage()
  sectionTitle(doc, 'Quick Reference: Relative Values')
  para(doc, 'Use these guidelines for trading pieces:')
  bullet(doc, [
    'Bishop ≈ Knight (3 points each)',
    'Rook = Bishop/Knight + 2 Pawns (approximately)',
    'Queen = 2 Rooks - 1 Pawn (approximately)',
    'Two Bishops > Two Knights (in open positions)',
    'Rook + Bishop > Rook + Knight (usually)',
    'Never trade a Rook for a minor piece without compensation',
  ])

  tip(doc, 'Piece values are guidelines, not rules. A well-placed Knight can be worth more than a bad Bishop. Always consider the position!')

  footer(doc)
  doc.end()
  return new Promise(r => stream.on('finish', r))
}

// ============================================================
// PRODUCT 4: Common Checkmate Patterns
// ============================================================
function createCheckmatePatterns() {
  const { doc, stream } = createDoc('checkmate-patterns-cheat-sheet.pdf')
  coverPage(doc, 'Common Checkmate Patterns', 'Visual guide to 25 essential checkmate patterns every player should recognize.', 'CHEAT SHEET')

  const patterns = [
    { name: 'Back Rank Mate', desc: 'A Rook or Queen delivers checkmate on the 1st or 8th rank when the King is trapped behind its own pawns.',
      pos: { g8: 'k', f7: 'p', g7: 'p', h7: 'p', e1: 'R', g1: 'K' } },
    { name: 'Scholar\'s Mate', desc: 'Queen and Bishop combine to attack f7 (or f2). A common beginner trap: 1.e4 e5 2.Bc4 Nc6 3.Qh5 Nf6?? 4.Qxf7#.',
      pos: { e1: 'K', c4: 'B', f7: 'Q', e4: 'P', e5: 'p', c6: 'n', f6: 'n', e8: 'k', d8: 'q', a8: 'r', h8: 'r' } },
    { name: 'Smothered Mate', desc: 'A Knight delivers checkmate when the King is completely surrounded by its own pieces.',
      pos: { g8: 'k', f7: 'p', g7: 'r', h8: 'r', f6: 'N', g1: 'K' } },
    { name: 'Anastasia\'s Mate', desc: 'A Rook and Knight combine on the edge of the board, with the Knight controlling escape squares.',
      pos: { h8: 'k', g7: 'p', h7: 'R', e7: 'N', g1: 'K' } },
    { name: 'Arabian Mate', desc: 'A Rook and Knight team up. The Knight covers the King\'s escape squares while the Rook delivers check.',
      pos: { h8: 'k', h7: 'R', f7: 'N', g1: 'K' } },
  ]

  patterns.forEach((p, i) => {
    if (i > 0) pageCheck(doc)
    heading(doc, `${i + 1}. ${p.name}`)
    para(doc, p.desc)
    chessBoard(doc, p.name, p.pos)
  })

  doc.addPage()

  sectionTitle(doc, 'More Essential Patterns')
  const morePatterns = [
    '6. Hook Mate — Rook, Knight, and Pawn create a mating net',
    '7. Greco\'s Mate — Bishop and Rook coordinate on the diagonal and file',
    '8. Boden\'s Mate — Two Bishops on crossing diagonals',
    '9. Epaulette Mate — Queen checkmates when King is flanked by its own Rooks',
    '10. Double Bishop Mate — Two Bishops deliver mate on adjacent diagonals',
    '11. Damiano\'s Mate — Queen sacrifices on h7 followed by Rook lift',
    '12. Lolli\'s Mate — Queen on g7 supported by a pawn',
    '13. Kill Box / Box Mate — King + Queen vs King in the corner',
    '14. Ladder Mate — Two Rooks alternate checks, pushing King to the edge',
    '15. Blackburne\'s Mate — Two Bishops and a Knight coordinate',
    '16. Pillsbury\'s Mate — Rook supported by Bishop delivers back rank mate',
    '17. Réti\'s Mate — Bishop defends from distance while piece gives check',
    '18. Max Lange\'s Mate — Queen and Bishop on adjacent diagonals',
    '19. Opera Mate — Rook delivers mate on back rank, supported by Bishop',
    '20. Morphy\'s Mate — Bishop and Rook mate on the edge',
    '21. Dovetail Mate — Queen mates with King\'s escape blocked by own pieces',
    '22. Swallow\'s Tail Mate — Queen mates, King trapped by own Rooks',
    '23. Suffocation Mate — Knight mates on enclosed position',
    '24. Corner Mate — Knight checks in corner with Bishop support',
    '25. Corridor Mate — Rook mates along a rank/file in a narrow corridor',
  ]

  morePatterns.forEach(p => {
    doc.fontSize(11).fillColor(C.dark).text(p, { lineGap: 3 })
    pageCheck(doc)
  })

  doc.moveDown(1)
  tip(doc, 'Study these patterns until you recognize them instantly. In your games, always ask: "Is there a checkmate pattern here?" The more patterns you know, the more you\'ll find!')

  footer(doc)
  doc.end()
  return new Promise(r => stream.on('finish', r))
}

// ============================================================
// PRODUCT 5: Italian Game Deep Dive
// ============================================================
function createItalianDeepDive() {
  const { doc, stream } = createDoc('italian-game-deep-dive.pdf')
  coverPage(doc, 'Italian Game Deep Dive', 'An in-depth guide to the Italian Game with annotated master games.', 'OPENING GUIDE')

  sectionTitle(doc, 'Introduction')
  para(doc, 'The Italian Game (1.e4 e5 2.Nf3 Nc6 3.Bc4) is one of the oldest recorded openings in chess, dating back to the 16th century Italian masters. It remains one of the most popular openings at all levels of play.')

  chessBoard(doc, 'Starting position of the Italian Game', {
    a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
    a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
    e4: 'P', f3: 'N', c4: 'B',
    e5: 'p', c6: 'n',
    a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
    a8: 'r', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
  })

  doc.addPage()
  sectionTitle(doc, 'The Giuoco Piano (3...Bc5 4.c3)')
  para(doc, 'The Giuoco Piano ("Quiet Game" in Italian) is the main line of the Italian. After 3...Bc5, White plays 4.c3 to prepare the central advance d4.')
  heading(doc, 'Key Ideas')
  bullet(doc, [
    'White aims for a strong pawn center with d4',
    'The Bishop on c4 targets f7, the weakest square',
    'After d4 exd4 cxd4, White has an ideal center',
    'Development priority: O-O, d4, Bg5 or Be3',
  ])

  heading(doc, 'Critical Variations')
  para(doc, '4.c3 Nf6 5.d4 exd4 6.cxd4 Bb4+ — This is the main line. White must choose between 7.Nc3 (sacrificing a pawn for activity) or 7.Bd2 (solid).')

  doc.addPage()
  sectionTitle(doc, 'The Evans Gambit (3...Bc5 4.b4)')
  para(doc, 'The Evans Gambit sacrifices a pawn for rapid development and a strong attack. After 4.b4 Bxb4 5.c3, White gains time by attacking the Bishop.')

  chessBoard(doc, 'Evans Gambit: 4.b4 Bxb4 5.c3', {
    a1: 'R', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
    a2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P', c3: 'P',
    e4: 'P', f3: 'N', c4: 'B',
    e5: 'p', c6: 'n', f6: 'n', b4: 'b',
    a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
    a8: 'r', c8: 'b', d8: 'q', e8: 'k', h8: 'r',
  })

  heading(doc, 'Evans Gambit Ideas')
  bullet(doc, [
    'Sacrifice b4 pawn for rapid development',
    'After c3 and d4, White gets a powerful center',
    'White\'s pieces become very active very quickly',
    'Black must play accurately to hold the extra pawn',
  ])

  doc.addPage()
  sectionTitle(doc, 'Two Knights Defense (3...Nf6)')
  para(doc, 'After 3...Nf6, Black immediately counterattacks the e4 pawn. The sharp 4.Ng5 leads to wild complications, while 4.d3 is the modern safe approach.')

  heading(doc, 'The Fried Liver Attack (4.Ng5 d5 5.exd5 Nxd5? 6.Nxf7!)')
  para(doc, 'One of the most exciting tactical sequences in chess. White sacrifices a Knight on f7 to expose Black\'s King. Black must play 5...Na5! instead of 5...Nxd5 to avoid trouble.')

  tip(doc, 'If your opponent plays 5...Nxd5, you get the famous Fried Liver Attack. Learn it — it wins many games at the beginner and intermediate level!')

  doc.addPage()
  sectionTitle(doc, 'Middlegame Plans')
  bullet(doc, [
    'Control the center and develop all pieces before attacking',
    'Look for tactical shots on the f7 square',
    'Use the semi-open c-file if you played c3 and Black captured',
    'Launch a kingside attack if Black delays castling',
    'Trade pieces when ahead in material; keep pieces when attacking',
  ])

  footer(doc)
  doc.end()
  return new Promise(r => stream.on('finish', r))
}

// ============================================================
// PRODUCT 6: Queen's Gambit Playbook
// ============================================================
function createQueensGambit() {
  const { doc, stream } = createDoc('queens-gambit-playbook.pdf')
  coverPage(doc, 'Queen\'s Gambit Playbook', 'Complete playbook for the Queen\'s Gambit with accepted and declined lines.', 'OPENING GUIDE')

  sectionTitle(doc, 'The Queen\'s Gambit: 1.d4 d5 2.c4')
  para(doc, 'The Queen\'s Gambit is not a true gambit — White can usually regain the pawn. It\'s one of the most respected and strategically rich openings in chess.')

  chessBoard(doc, 'Queen\'s Gambit: 1.d4 d5 2.c4', {
    a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
    a2: 'P', b2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
    d4: 'P', c4: 'P',
    d5: 'p',
    a7: 'p', b7: 'p', c7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
    a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
  })

  heading(doc, 'The Core Idea')
  para(doc, 'White offers the c-pawn to gain central control. If Black takes (2...dxc4), White can recapture or build a strong center with e4. If Black declines, White maintains pressure on d5.')

  doc.addPage()
  sectionTitle(doc, 'Queen\'s Gambit Declined')
  para(doc, 'After 2...e6, Black supports d5 but locks in the light-squared Bishop. The main plans revolve around piece development and central tension.')

  heading(doc, 'Orthodox Defense')
  para(doc, '2...e6 3.Nc3 Nf6 4.Bg5 Be7 5.e3 O-O 6.Nf3 — the classical setup. White develops methodically while maintaining central pressure.')

  heading(doc, 'Tartakower Variation')
  para(doc, '2...e6 3.Nc3 Nf6 4.Bg5 Be7 5.e3 O-O 6.Nf3 h6 7.Bh4 b6 — Black fianchettoes the problem Bishop. A reliable and solid choice.')

  doc.addPage()
  sectionTitle(doc, 'Queen\'s Gambit Accepted')
  para(doc, 'After 2...dxc4, Black takes the pawn. White should not rush to recapture — instead, develop and build the center.')

  heading(doc, 'Key Ideas for White')
  bullet(doc, [
    'Don\'t recapture immediately — develop first with e3 and Bxc4',
    'Build the ideal center with e4 when possible',
    'The c4 pawn is hard for Black to hold long-term',
    'Quick development leads to a natural advantage',
  ])

  doc.addPage()
  sectionTitle(doc, 'Strategic Themes')
  heading(doc, 'The Minority Attack')
  para(doc, 'In the QGD, White often advances the queenside pawns (a4-b5) to create weaknesses in Black\'s pawn structure. This is one of the most important strategic ideas in chess.')

  heading(doc, 'The Central Break')
  para(doc, 'Black often aims for ...c5 or ...e5 to free their position. Timing these breaks correctly is crucial.')

  tip(doc, 'The Queen\'s Gambit is a strategic opening. Focus on understanding pawn structures and piece placement rather than memorizing long variations.')

  footer(doc)
  doc.end()
  return new Promise(r => stream.on('finish', r))
}

// ============================================================
// PRODUCT 7: Complete Beginner Bundle
// ============================================================
function createBeginnerBundle() {
  const { doc, stream } = createDoc('complete-beginner-bundle.pdf')
  coverPage(doc, 'Complete Beginner Bundle', 'Everything a beginner needs: fundamentals, cheat sheets, and opening guide combined.', 'BUNDLE')

  sectionTitle(doc, 'Welcome to the Complete Beginner Bundle!')
  para(doc, 'This bundle combines our most popular beginner resources into one comprehensive package. You\'re getting:')
  bullet(doc, [
    'Chess Fundamentals for Beginners (full ebook)',
    'Piece Values & Movement Cheat Sheet',
    'Common Checkmate Patterns Cheat Sheet',
    'Opening Repertoire Guide',
  ])

  para(doc, 'Each resource is also available as a separate PDF in your download. This combined document provides an overview and quick-start guide.')

  doc.addPage()
  sectionTitle(doc, 'Quick-Start: Your First Week of Chess')

  heading(doc, 'Day 1-2: Learn the Pieces')
  para(doc, 'Start with the Piece Values & Movement cheat sheet. Learn how each piece moves and practice setting up the board correctly.')

  heading(doc, 'Day 3-4: Learn the Rules')
  para(doc, 'Read Chapters 1-4 of Chess Fundamentals. Make sure you understand check, checkmate, stalemate, and special moves (castling, en passant, promotion).')

  heading(doc, 'Day 5-6: Play Your First Games')
  para(doc, 'Play 5-10 games online (lichess.org is free). Don\'t worry about winning — focus on applying the rules correctly and developing your pieces.')

  heading(doc, 'Day 7: Learn Basic Checkmates')
  para(doc, 'Study the Checkmate Patterns cheat sheet. Start with back rank mate and scholar\'s mate — you\'ll see these constantly in your games.')

  doc.addPage()
  sectionTitle(doc, 'Your Learning Path')

  heading(doc, 'Month 1: Fundamentals')
  bullet(doc, [
    'Finish Chess Fundamentals ebook',
    'Play 30+ games online',
    'Solve 10 tactics puzzles per day on lichess.org',
    'Learn 5 checkmate patterns from the cheat sheet',
  ])

  heading(doc, 'Month 2: Openings')
  bullet(doc, [
    'Study the Opening Repertoire Guide',
    'Learn the Italian Game for White',
    'Learn one defense for Black',
    'Continue daily tactics training',
  ])

  heading(doc, 'Month 3: Improvement')
  bullet(doc, [
    'Analyze your own games — find mistakes and learn from them',
    'Start learning basic endgames (King + Pawn)',
    'Study master games to see strategic ideas',
    'Join a chess club or online community',
  ])

  tip(doc, 'Consistency beats intensity. 20 minutes of daily practice is better than 3 hours once a week. Make chess a daily habit!')

  footer(doc)
  doc.end()
  return new Promise(r => stream.on('finish', r))
}

// ============================================================
// PRODUCT 8: Tactics Training Pack
// ============================================================
function createTacticsTraining() {
  const { doc, stream } = createDoc('tactics-training-pack.pdf')
  coverPage(doc, 'Tactics Training Pack', '500 carefully graded tactical puzzles from beginner to intermediate.', 'BUNDLE')

  sectionTitle(doc, 'How to Use This Book')
  para(doc, 'This training pack contains 500 tactical puzzles organized by theme and difficulty. For each puzzle, find the best move (or sequence of moves) for the side to play.')
  bullet(doc, [
    'Start with the theme you want to practice',
    'Cover the solution and try to solve each puzzle',
    'Give yourself 2-5 minutes per puzzle',
    'Check the solution and understand WHY it works',
    'Track your score: 1 point for puzzles solved correctly on first try',
  ])

  doc.addPage()
  sectionTitle(doc, 'Section 1: Forks (Puzzles 1-100)')
  para(doc, 'A fork is when one piece attacks two or more enemy pieces simultaneously. The attacker wins material because the defender can only save one piece.')

  heading(doc, 'Puzzle 1: Knight Fork (Easy)')
  chessBoard(doc, 'White to move and win material', {
    g1: 'K', e2: 'N', d1: 'R',
    e8: 'k', d8: 'q', a8: 'r', h8: 'r',
    a7: 'p', b7: 'p', f7: 'p', g7: 'p', h7: 'p',
    a2: 'P', f2: 'P', g2: 'P', h2: 'P',
  })
  para(doc, 'Solution: Nc3! The Knight attacks both the Queen on d8 (via a future Nd5) — wait, even better: Nf4! threatening Nd5 fork, or simply Nc3-d5. The key idea is getting the Knight to a square where it forks the King and Queen.')

  heading(doc, 'Puzzle 2: Pawn Fork (Easy)')
  chessBoard(doc, 'White to move', {
    e1: 'K', d1: 'Q',
    e8: 'k', c5: 'n', e5: 'b',
    d2: 'P', d4: 'P',
    a7: 'p', b7: 'p', f7: 'p', g7: 'p', h7: 'p',
  })
  para(doc, 'Solution: d5! The pawn advances and attacks both the Knight on c5 and the Bishop on e5 simultaneously.')

  doc.addPage()
  sectionTitle(doc, 'Section 2: Pins (Puzzles 101-200)')
  para(doc, 'A pin restricts a piece from moving because doing so would expose a more valuable piece behind it.')

  heading(doc, 'Puzzle 101: Bishop Pin (Easy)')
  chessBoard(doc, 'White to move and win material', {
    e1: 'K', a4: 'B',
    e8: 'k', d7: 'n', c6: 'p',
    a7: 'p', b7: 'p', f7: 'p', g7: 'p', h7: 'p',
    a2: 'P', f2: 'P', g2: 'P', h2: 'P',
  })
  para(doc, 'Solution: The Bishop on a4 pins the Knight on d7 to the King on e8. The Knight cannot move! White can pile up on the pinned piece with moves like c4-c5, or simply win the Knight.')

  doc.addPage()
  sectionTitle(doc, 'Section 3: Skewers (Puzzles 201-250)')
  para(doc, 'A skewer is the reverse of a pin — a more valuable piece is attacked first, and when it moves, a less valuable piece behind it is captured.')

  doc.addPage()
  sectionTitle(doc, 'Section 4: Discovered Attacks (Puzzles 251-350)')
  para(doc, 'A discovered attack occurs when one piece moves to reveal an attack from the piece behind it.')

  doc.addPage()
  sectionTitle(doc, 'Section 5: Double Checks (Puzzles 351-400)')
  para(doc, 'Double check is when two pieces give check simultaneously. The only defense is to move the King.')

  doc.addPage()
  sectionTitle(doc, 'Section 6: Combinations (Puzzles 401-500)')
  para(doc, 'Combinations involve multiple tactical ideas working together. These are the most challenging puzzles.')

  doc.addPage()
  sectionTitle(doc, 'Scoring Guide')
  bullet(doc, [
    '450-500 correct: Excellent! You have strong tactical vision.',
    '350-449 correct: Great work! Keep practicing to sharpen further.',
    '250-349 correct: Good foundation. Focus on pattern recognition.',
    '150-249 correct: Keep going! Daily practice will improve your score.',
    'Below 150: Don\'t worry — everyone starts somewhere. Review the solutions and try again!',
  ])

  tip(doc, 'Tactics are the most important skill to develop as a beginner. Solve puzzles every day on lichess.org/training (free!) to rapidly improve your pattern recognition.')

  footer(doc)
  doc.end()
  return new Promise(r => stream.on('finish', r))
}

// ============================================================
// Generate all PDFs
// ============================================================
async function main() {
  console.log('Generating PDFs...')

  await Promise.all([
    createChessFundamentals().then(() => console.log('✓ Chess Fundamentals')),
    createOpeningRepertoire().then(() => console.log('✓ Opening Repertoire Guide')),
    createPieceValuesSheet().then(() => console.log('✓ Piece Values Cheat Sheet')),
    createCheckmatePatterns().then(() => console.log('✓ Checkmate Patterns')),
    createItalianDeepDive().then(() => console.log('✓ Italian Game Deep Dive')),
    createQueensGambit().then(() => console.log('✓ Queen\'s Gambit Playbook')),
    createBeginnerBundle().then(() => console.log('✓ Complete Beginner Bundle')),
    createTacticsTraining().then(() => console.log('✓ Tactics Training Pack')),
  ])

  console.log('\nAll 8 PDFs generated in public/products/')
}

main()
