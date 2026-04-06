export const lessonContent = {
  slug: 'tactics-training',
  sections: [
    {
      id: 'what-are-tactics',
      title: 'What Are Chess Tactics?',
      section: 'Tactical Foundations',
      content: [
        {
          type: 'text',
          value: 'Chess tactics are **short combinations** of moves — usually two to five — that win material or deliver checkmate. Unlike strategy, which involves long-term plans and positional maneuvering, tactics are concrete sequences where you force your opponent into a losing situation right now.'
        },
        {
          type: 'definition',
          term: 'Tactic',
          value: 'A short, forcing sequence of moves that exploits a specific weakness in the opponent\'s position to win material or deliver checkmate.'
        },
        {
          type: 'definition',
          term: 'Strategy',
          value: 'A long-term plan based on positional factors such as pawn structure, piece activity, and king safety. Strategy sets the stage; tactics deliver the knockout blow.'
        },
        {
          type: 'text',
          value: 'The key difference: **strategy** is about creating favorable conditions over many moves, while **tactics** are about exploiting those conditions with precise, forced moves. A positional advantage means nothing if you miss a tactic that loses your Queen!'
        },
        {
          type: 'tip',
          value: 'At every level of chess — from beginner to grandmaster — games are decided by tactics more often than by strategy. Studies show that the vast majority of amateur games are won or lost because of tactical mistakes. Sharpening your tactical vision is the single fastest way to improve your rating.'
        },
        {
          type: 'list',
          title: 'Tactical themes covered in this course',
          items: [
            'Skewers — attacking a valuable piece to win one behind it',
            'Deflection and Decoy — forcing defenders out of position',
            'Back Rank Tactics — exploiting a trapped King',
            'Removing the Guard — eliminating a key defender',
            'Multi-move Combinations — chaining multiple tactics together'
          ]
        }
      ]
    },
    {
      id: 'pattern-recognition',
      title: 'Pattern Recognition',
      section: 'Tactical Foundations',
      content: [
        {
          type: 'text',
          value: 'Tactics don\'t appear randomly — they arise from specific **patterns** in the position. Learning to spot these patterns quickly is the core skill of tactical play. There are three main signals that a tactic might be available.'
        },
        {
          type: 'list',
          title: 'Three signals that a tactic exists',
          items: [
            '**Undefended pieces** — any piece without a defender is a potential target for a fork, skewer, or double attack',
            '**Overloaded defenders** — a piece defending two things at once can often be exploited because it cannot handle both duties',
            '**Pieces on the same line** — two pieces on the same rank, file, or diagonal are vulnerable to pins, skewers, and discovered attacks'
          ]
        },
        {
          type: 'definition',
          term: 'Checks, Captures, Threats (CCT)',
          value: 'A systematic thinking method: on every move, first consider all checks, then all captures, then all threats. This ensures you never miss a forcing move.'
        },
        {
          type: 'text',
          value: 'The **CCT method** (Checks, Captures, Threats) is the most effective way to find tactics. Before deciding on a move, mentally scan: "Can I give check? Can I capture something? Can I create a threat my opponent must answer?" This disciplined approach catches tactics that intuition alone would miss.'
        },
        {
          type: 'board',
          caption: 'Apply CCT here — White\'s Knight on e3 can capture the undefended Queen on d5!',
          position: {
            a8: 'r', e8: 'k', h8: 'r',
            a7: 'p', d7: 'b', f7: 'p', g7: 'p',
            d5: 'q', f5: 'p',
            e3: 'N', c3: 'B',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            a1: 'R', e1: 'R', g1: 'K',
          },
          highlights: ['e3', 'd5']
        },
        {
          type: 'text',
          value: 'Applying CCT: **Captures** — can White capture anything valuable? A Knight on e3 attacks c2, c4, d1, d5, f1, f5, g2, and g4. The Queen sits on d5 — and **Nxd5!** captures her outright! The Queen is undefended, and the CCT method finds this instantly. Always scan for captures before looking at anything else.'
        },
        {
          type: 'tip',
          value: 'Train yourself to scan for CCT on every single move — yours AND your opponent\'s. With practice, pattern recognition becomes automatic and you will spot tactics in seconds that used to take you minutes.'
        }
      ]
    },
    {
      id: 'skewer-tactics',
      title: 'Skewers',
      section: 'Core Tactics',
      content: [
        {
          type: 'text',
          value: 'A **skewer** is the reverse of a pin: you attack a valuable piece along a line, and when it moves, you capture a less valuable piece behind it. The key difference from a pin is that in a skewer, the **more** valuable piece is closer to the attacker and is forced to move.'
        },
        {
          type: 'definition',
          term: 'Skewer',
          value: 'An attack on a valuable piece that forces it to move, exposing a piece behind it on the same line to capture. The more valuable piece is in front; the less valuable piece is behind.'
        },
        {
          type: 'board',
          caption: 'Rook skewer on the h-file — Rh1+ checks the King on h4. After the King moves, White plays Rxh8, winning the Rook.',
          position: {
            h8: 'r',
            f7: 'p', g7: 'p',
            h4: 'k',
            a2: 'P', f2: 'P', g2: 'P',
            h1: 'R', g1: 'K',
          },
          highlights: ['h1', 'h4', 'h8']
        },
        {
          type: 'text',
          value: 'The White Rook on h1 checks the Black King on h4 along the h-file. The path h1-h2-h3-h4 is clear, so this is a valid check. The King **must** move — for example to g3 or g5. Once the King steps off the h-file, the Rook on h8 is exposed, and White plays **Rxh8**, winning the Rook. This is a textbook Rook skewer: the valuable piece (King) is in front and forced to move, exposing the piece behind it.'
        },
        {
          type: 'board',
          caption: 'Bishop skewer — White plays Bb3+! checking the King on d5. After the King moves, Bxg8 wins the Rook.',
          position: {
            g8: 'r',
            h7: 'p',
            d5: 'k', e5: 'p',
            a2: 'B',
            f2: 'P', g2: 'P', h2: 'P',
            e1: 'K',
          },
          highlights: ['a2', 'd5', 'g8']
        },
        {
          type: 'text',
          value: 'White plays **Bb3+!** — the Bishop moves from a2 to b3, delivering check to the King on d5 along the diagonal (b3-c4-d5). The King must move off this diagonal. Once it does, the diagonal continues through e6, f7, and g8 — where the Black Rook sits undefended. White plays **Bxg8**, winning the Rook. The squares e6 and f7 between d5 and g8 are both empty, so the Bishop\'s path is clear once the King steps aside.'
        },
        {
          type: 'tip',
          value: 'Skewers are especially common in endgames when the board is open and long-range pieces can exploit alignments. Always check if your opponent\'s King and another piece are on the same rank, file, or diagonal — with the King closer to your piece. That alignment is a potential skewer.'
        }
      ]
    },
    {
      id: 'deflection-decoy',
      title: 'Deflection and Decoy',
      section: 'Core Tactics',
      content: [
        {
          type: 'text',
          value: '**Deflection** and **Decoy** are closely related tactics that manipulate enemy pieces. Deflection forces a defender away from its duty; a decoy lures a piece to a square where it can be exploited.'
        },
        {
          type: 'definition',
          term: 'Deflection',
          value: 'Forcing a defensive piece away from the square or line it needs to guard, leaving its defensive duty unfulfilled.'
        },
        {
          type: 'definition',
          term: 'Decoy',
          value: 'Luring an enemy piece to a specific square where it becomes vulnerable to a tactic such as a fork, pin, or checkmate.'
        },
        {
          type: 'text',
          value: '### Deflection Example'
        },
        {
          type: 'board',
          caption: 'Deflection — Qxf8+! removes the back-rank defender. After Kxf8, Re8# is checkmate (Knight covers e7, Bishop covers e8).',
          position: {
            f8: 'r', g8: 'k',
            f7: 'p', g7: 'p', h7: 'p',
            b5: 'B', c5: 'Q', d5: 'N',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e1: 'R', g1: 'K',
          },
          highlights: ['c5', 'f8', 'e1', 'd5', 'b5']
        },
        {
          type: 'text',
          value: 'The Black Rook on f8 is the sole guardian of the back rank. White plays **Qxf8+!** — the Queen moves from c5 to f8 along the diagonal (c5-d6-e7-f8), sacrificing herself to deflect the defender. After **Kxf8**, White delivers **Re8#** — checkmate! The Rook on e8 checks the King on f8 along the 8th rank. The King cannot escape: g8 is controlled by the Rook (same rank), g7 is blocked by Black\'s own pawn, e7 is covered by the Knight on d5, and the King cannot capture the Rook because the Bishop on b5 defends e8.'
        },
        {
          type: 'text',
          value: '### Decoy Example'
        },
        {
          type: 'board',
          caption: 'Decoy — Qd7+! lures the King to d7. Then Nb6+ forks the King on d7 and the Rook on a8.',
          position: {
            a8: 'r', e8: 'k',
            a7: 'p', c7: 'p', f7: 'p', g7: 'p',
            f5: 'Q',
            a4: 'N',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e1: 'K',
          },
          highlights: ['f5', 'e8', 'a4', 'a8']
        },
        {
          type: 'text',
          value: 'White plays **Qd7+!** — the Queen moves from f5 to d7 along the diagonal, sacrificing herself with check to the King on e8. Black must capture: **Kxd7**. Now White plays **Nb6+!** — a Knight on b6 attacks a4, a8, c4, c8, d5, and d7. It delivers check to the King on d7 while simultaneously attacking the Rook on a8. After the King moves, **Nxa8** wins the Rook. The Queen sacrifice decoyed the King to d7 — exactly the square where the Knight fork works.'
        },
        {
          type: 'tip',
          value: 'When you see an enemy piece performing an important defensive job, ask yourself: "Can I force that piece to abandon its post?" That question is the heart of both deflection and decoy tactics.'
        }
      ]
    },
    {
      id: 'back-rank-tactics',
      title: 'Back Rank Tactics',
      section: 'Checkmate Patterns',
      content: [
        {
          type: 'text',
          value: 'The **back rank mate** is one of the most common tactical patterns in chess. It occurs when a King is trapped on the back rank by its own pawns, and an enemy Rook or Queen delivers checkmate along that rank.'
        },
        {
          type: 'definition',
          term: 'Back Rank Mate',
          value: 'Checkmate delivered by a Rook or Queen on the opponent\'s back rank (1st or 8th), where the King is trapped by its own pawns with no escape square.'
        },
        {
          type: 'board',
          caption: 'Classic back rank mate — Rd8#! The King on g8 is trapped by pawns on f7, g7, and h7.',
          position: {
            g8: 'k',
            f7: 'p', g7: 'p', h7: 'p',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d1: 'R', g1: 'K',
          },
          highlights: ['d1', 'g8']
        },
        {
          type: 'text',
          value: 'White plays **Rd8#**. The Rook slides to d8, delivering check along the 8th rank. The path d8-e8-f8-g8 is completely clear, so the check reaches the King. The King on g8 cannot escape: f7, g7, and h7 are all blocked by Black\'s own pawns, and f8 and h8 are both controlled by the Rook on d8. No piece can capture or block. Checkmate!'
        },
        {
          type: 'text',
          value: '### Preventing Back Rank Mate: Creating Luft'
        },
        {
          type: 'definition',
          term: 'Luft',
          value: 'A German word meaning "air." In chess, it refers to an escape square created for the King by advancing one of the pawns in front of it (typically h3/h6 or g3/g6).'
        },
        {
          type: 'board',
          caption: 'Creating luft — Black played h7-h6, giving the King an escape route to h7.',
          position: {
            f8: 'r', g8: 'k',
            f7: 'p', g7: 'p', h6: 'p',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d1: 'R', g1: 'K',
          },
          highlights: ['h6', 'h7', 'g8']
        },
        {
          type: 'text',
          value: 'Here Black has wisely played **h7-h6**, creating an escape square on h7. Now if White tries Rd8, the Rook on f8 captures Rxd8 — and even without the Rook, the King could flee to h7. This small prophylactic pawn move prevents back rank disasters and is well worth the tempo.'
        },
        {
          type: 'board',
          caption: 'Queen sacrifice into back rank mate — Qxf8+! Kxf8, Rd8#. Knight covers e7, Bishop covers d8.',
          position: {
            f8: 'r', g8: 'k',
            f7: 'p', g7: 'p', h7: 'p',
            b5: 'B', c5: 'Q', d5: 'N',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d1: 'R', g1: 'K',
          },
          highlights: ['c5', 'f8', 'd1', 'd5', 'b5']
        },
        {
          type: 'text',
          value: 'White plays **Qxf8+!** — the Queen moves from c5 to f8 diagonally, a stunning sacrifice. After **Kxf8**, the back rank is exposed and White delivers **Rd8#** — checkmate. The Rook checks along the 8th rank, and the King on f8 is trapped: g8 is controlled by the Rook, g7 is blocked by a pawn, and the escape square e7 is covered by the Knight on d5. The Queen sacrifice was the key to removing the back rank defender.'
        },
        {
          type: 'tip',
          value: 'Always be alert to back rank weaknesses — yours and your opponent\'s. If your King is boxed in by pawns with no escape, make time to create luft with h3 (or h6). If your opponent\'s King is trapped, look for Rook or Queen sacrifices that crack open the 8th rank.'
        }
      ]
    },
    {
      id: 'removal-of-guard',
      title: 'Removing the Guard',
      section: 'Checkmate Patterns',
      content: [
        {
          type: 'text',
          value: '**Removing the guard** (also called "removing the defender") is a tactic where you capture or drive away a piece performing a critical defensive role. Once the guard is eliminated, the position it protected collapses.'
        },
        {
          type: 'definition',
          term: 'Removing the Guard',
          value: 'A tactic where you capture, exchange, or deflect a key defensive piece, exposing a weakness (such as a checkmate or hanging piece) that the defender was preventing.'
        },
        {
          type: 'text',
          value: '### Capturing the Defender Delivers Checkmate'
        },
        {
          type: 'board',
          caption: 'The Knight on g7 shields the King. Qxg7#! captures the guard and delivers checkmate (Bishop on c3 defends g7).',
          position: {
            g8: 'k',
            f7: 'p', g7: 'n', h7: 'p',
            h6: 'Q',
            c3: 'B',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            g1: 'K',
          },
          highlights: ['h6', 'g7', 'g8', 'c3']
        },
        {
          type: 'text',
          value: 'The Black Knight on g7 shields the King by occupying the g7 square. White plays **Qxg7#!** — capturing the Knight and delivering checkmate simultaneously. The Queen on g7 checks the King on g8. Can the King escape? f8 is controlled by the Queen (g7 attacks f8 diagonally), and h8 is also controlled by the Queen (g7 attacks h8 diagonally). Can the King capture the Queen? No — the Bishop on c3 defends g7 along the c3-d4-e5-f6-g7 diagonal. The King is trapped — checkmate! Removing the guard and delivering the killing blow were one and the same move.'
        },
        {
          type: 'text',
          value: '### Overloading the Defender Wins Material'
        },
        {
          type: 'board',
          caption: 'The Black Queen on d7 must guard both the Knight on b5 and the back rank. She is overloaded — something must fall.',
          position: {
            d8: 'r', g8: 'k',
            a7: 'p', d7: 'q', f7: 'p', g7: 'p', h7: 'p',
            b5: 'n',
            c4: 'B',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d1: 'R', g1: 'K',
          },
          highlights: ['d1', 'd7', 'b5', 'd8']
        },
        {
          type: 'text',
          value: 'The Black Queen on d7 has two jobs: she defends the Rook on d8 (preventing Rxd8+) and protects the Knight on b5 (preventing Bxb5). She is **overloaded** — she cannot abandon either duty without losing material. White can exploit this with a move like **Bxb5!** — after **Qxb5**, the Queen has left the d-file and **Rxd8+** wins the Rook. Alternatively, if Black plays **Rxd1+** first, after **Rxd1** the back rank threat is resolved but the Knight on b5 is still hanging. The overloaded defender cannot hold everything together.'
        },
        {
          type: 'tip',
          value: 'When analyzing a position, ask: "Which enemy piece is holding the position together? Can I capture it, deflect it, or give it a second job it cannot handle?" This systematic thinking reveals removal-of-the-guard opportunities.'
        }
      ]
    },
    {
      id: 'combinations',
      title: 'Multi-Move Combinations',
      section: 'Advanced Tactics',
      content: [
        {
          type: 'text',
          value: 'The most spectacular tactics involve **combinations** — sequences where two or more tactical themes work together. A combination often begins with a sacrifice that sets up a devastating follow-up using a different tactic.'
        },
        {
          type: 'definition',
          term: 'Combination',
          value: 'A forced sequence of moves, usually involving a sacrifice, that uses two or more tactical themes to achieve a concrete advantage such as winning material or delivering checkmate.'
        },
        {
          type: 'text',
          value: '### Fork + Pin Combination'
        },
        {
          type: 'board',
          caption: 'Nd5! forks the Queen on b6 and the Rook on f6. The Rook is pinned to the King on e8 by the Rook on f1.',
          position: {
            e8: 'k',
            a7: 'p', f7: 'p',
            b6: 'q', f6: 'r',
            d5: 'N',
            a2: 'P', g2: 'P', h2: 'P',
            f1: 'R', g1: 'K',
          },
          highlights: ['d5', 'b6', 'f6', 'f1', 'e8']
        },
        {
          type: 'text',
          value: 'White plays **Nd5!** — a devastating move combining two themes. A Knight on d5 attacks b4, b6, c3, c7, e3, e7, f4, and f6. It simultaneously **forks** the Queen on b6 and the Rook on f6. But there is more: the Rook on f6 is **pinned** to the King on e8 by White\'s Rook on f1 along the f-file. The Rook cannot move without exposing the King to check. The Queen must retreat, and White captures the helpless Rook with **Nxf6+**, winning the exchange with check.'
        },
        {
          type: 'text',
          value: '### Decoy Sacrifice + Knight Fork'
        },
        {
          type: 'board',
          caption: 'Qd7+! Kxd7, Nb6+ forks the King and Rook. A sacrifice sets up the Knight fork.',
          position: {
            a8: 'r', e8: 'k',
            a7: 'p', c7: 'p', f7: 'p', g7: 'p',
            f5: 'Q',
            a4: 'N',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e1: 'K',
          },
          highlights: ['f5', 'a4', 'e8', 'a8']
        },
        {
          type: 'text',
          value: 'White plays **Qd7+!**, sacrificing the Queen to lure the King to d7. After **Kxd7**, White unleashes **Nb6+** — a Knight on b6 attacks a4, a8, c4, c8, d5, and d7. It checks the King on d7 and attacks the Rook on a8 simultaneously. After the King moves, **Nxa8** wins the Rook. This combination chains a **decoy sacrifice** (the Queen lures the King) with a **Knight fork** (the Knight exploits the King\'s new position). White sacrificed 9 points (Queen) but won 5 points (Rook) — the net material loss is compensated by the resulting position where White\'s Knight is dominant and Black\'s King is exposed.'
        },
        {
          type: 'tip',
          value: 'To find combinations, look for positions where multiple tactical themes overlap. The key question: "If I sacrifice something, does a forcing sequence emerge that wins even more?" Willingness to calculate sacrifices is what separates tactical players from passive ones.'
        }
      ]
    },
    {
      id: 'puzzle-rush',
      title: 'Puzzle Rush: Find the Best Move',
      section: 'Practice',
      content: [
        {
          type: 'text',
          value: 'Test your tactical vision! In each position below, it is **White to move**. Try to find the best move before reading the solution. These puzzles cover all the tactical themes from this course.'
        },
        {
          type: 'text',
          value: '### Puzzle 1: Mate in One'
        },
        {
          type: 'board',
          caption: 'Puzzle 1 — White to move. Checkmate in one!',
          position: {
            g8: 'k',
            f7: 'p', g7: 'p', h7: 'p',
            b4: 'n',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d1: 'R', g1: 'K',
          },
          highlights: ['d1', 'g8']
        },
        {
          type: 'text',
          value: '**Solution: Rd8#!** The back rank is completely unguarded. The Rook slides to d8 and the King on g8 is checkmated — trapped by its own pawns on f7, g7, and h7 with no piece able to capture or block. Always check for unguarded back ranks!'
        },
        {
          type: 'text',
          value: '### Puzzle 2: Knight Fork'
        },
        {
          type: 'board',
          caption: 'Puzzle 2 — White to move. Win the Queen with a Knight fork!',
          position: {
            e8: 'k',
            a7: 'p', b7: 'q', f7: 'p', g7: 'p',
            e4: 'N',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            a1: 'R', e1: 'K',
          },
          highlights: ['e4', 'e8', 'b7']
        },
        {
          type: 'text',
          value: '**Solution: Nd6+!** From e4, the Knight moves to d6. A Knight on d6 attacks b5, b7, c4, c8, e4, e8, f5, and f7. It checks the King on e8 and simultaneously attacks the Queen on b7! After the King moves, White plays Nxb7, winning the Queen.'
        },
        {
          type: 'text',
          value: '### Puzzle 3: Skewer'
        },
        {
          type: 'board',
          caption: 'Puzzle 3 — White to move. Win a Rook with a Bishop skewer!',
          position: {
            g8: 'r',
            h7: 'p',
            d5: 'k', e5: 'p',
            f2: 'P', g2: 'P', h2: 'P',
            a2: 'B', e1: 'K',
          },
          highlights: ['a2', 'd5', 'g8']
        },
        {
          type: 'text',
          value: '**Solution: Bb3+!** The Bishop moves from a2 to b3, checking the King on d5 along the b3-c4-d5 diagonal. The King must step off the diagonal (e.g., Kc6 or Ke4). Then the Bishop continues along the same diagonal to capture the Rook: **Bxg8**. The path from b3 through e6 and f7 to g8 is clear, so the Rook is lost.'
        },
        {
          type: 'text',
          value: '### Puzzle 4: Removal of the Guard'
        },
        {
          type: 'board',
          caption: 'Puzzle 4 — White to move. Remove the guard and checkmate!',
          position: {
            g8: 'k',
            f7: 'p', g7: 'n', h7: 'p',
            h6: 'Q',
            c3: 'B',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            g1: 'K',
          },
          highlights: ['h6', 'g7', 'g8', 'c3']
        },
        {
          type: 'text',
          value: '**Solution: Qxg7#!** The Queen captures the Knight on g7, removing the guard and delivering checkmate in one move. The Queen on g7 checks the King on g8, and all escape squares are covered: f8 and h8 are both attacked by the Queen diagonally. The King cannot capture the Queen because the Bishop on c3 defends g7.'
        },
        {
          type: 'text',
          value: '### Puzzle 5: Deflection + Back Rank'
        },
        {
          type: 'board',
          caption: 'Puzzle 5 — White to move. Sacrifice and checkmate in two!',
          position: {
            f8: 'r', g8: 'k',
            f7: 'p', g7: 'p', h7: 'p',
            b5: 'B', c5: 'Q', d5: 'N',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e1: 'R', g1: 'K',
          },
          highlights: ['c5', 'f8', 'e1']
        },
        {
          type: 'text',
          value: '**Solution: Qxf8+! Kxf8, Re8#.** The Queen sacrifices on f8, forcing the King to capture. Then the Rook delivers back rank checkmate on e8. The King on f8 is trapped: g8 is controlled by the Rook, g7 is blocked by a pawn, e7 is covered by the Knight on d5, and the King cannot capture the Rook because the Bishop on b5 defends e8. A two-move combination using deflection and back rank mate.'
        },
        {
          type: 'text',
          value: '### Puzzle 6: Decoy + Fork'
        },
        {
          type: 'board',
          caption: 'Puzzle 6 — White to move. Sacrifice the Queen and win material!',
          position: {
            a8: 'r', e8: 'k',
            a7: 'p', c7: 'p', f7: 'p', g7: 'p',
            f5: 'Q',
            a4: 'N',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e1: 'K',
          },
          highlights: ['f5', 'a4', 'e8']
        },
        {
          type: 'text',
          value: '**Solution: Qd7+! Kxd7, Nb6+** and then **Nxa8.** The Queen sacrifices on d7 with check, decoying the King to d7. Then the Knight leaps to b6, forking the King on d7 and the Rook on a8. After the King moves, Nxa8 wins the Rook. A beautiful decoy sacrifice into a Knight fork!'
        },
        {
          type: 'tip',
          value: 'Solving tactical puzzles daily is the single most effective way to improve your chess. Aim for at least 10-15 minutes of puzzle training every day. Over time, these patterns will become second nature and you will spot them instantly in your own games.'
        }
      ]
    }
  ]
};
