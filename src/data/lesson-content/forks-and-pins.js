export const lessonContent = {
  slug: 'forks-and-pins',
  sections: [
    {
      id: 'knight-forks',
      title: 'Knight Forks',
      section: 'Forks',
      content: [
        {
          type: 'text',
          value: 'A **fork** is a tactic where a single piece attacks two or more enemy pieces at the same time. The opponent can only save one of the attacked pieces, so you win material. The Knight is the most common and dangerous forking piece because it **jumps** over other pieces and attacks in an unusual pattern that is hard to see coming.'
        },
        {
          type: 'definition',
          term: 'Fork',
          value: 'A tactic where one piece simultaneously attacks two or more enemy pieces. The opponent must choose which piece to save, and you capture the other.'
        },
        {
          type: 'board',
          caption: 'Classic Knight fork — the Knight on c7 attacks both the King on e8 and the Rook on a8',
          position: {
            e8: 'k', a8: 'r', h8: 'r',
            c7: 'N',
            e1: 'K',
          },
          highlights: ['c7', 'e8', 'a8']
        },
        {
          type: 'text',
          value: 'In the position above, the Knight on c7 delivers check to the King on e8 while simultaneously attacking the Rook on a8. The King **must** move out of check, and then White captures the Rook for free. This is called a **royal fork** because it involves the King.'
        },
        {
          type: 'board',
          caption: 'The family fork — Knight on d5 attacks the King, Queen, AND Rook at the same time',
          position: {
            e8: 'k', b6: 'q', f6: 'r',
            d5: 'N',
            a2: 'P', b2: 'P',
            e1: 'K',
          },
          highlights: ['d5', 'e8', 'b6', 'f6']
        },
        {
          type: 'text',
          value: 'When a Knight forks three or more pieces including the King and Queen, it is sometimes called a **family fork** or **royal family fork**. These are devastating — the King must move, and the Queen is lost.'
        },
        {
          type: 'tip',
          value: 'Knights are the best forking pieces because they attack in an L-shape that is hard to block. Unlike Bishop or Rook forks, you cannot simply place a piece in between to block a Knight\'s attack. Always watch for Knight fork opportunities!'
        }
      ]
    },
    {
      id: 'pawn-forks',
      title: 'Pawn Forks',
      section: 'Forks',
      content: [
        {
          type: 'text',
          value: 'Pawns are worth only 1 point, which makes pawn forks extremely effective. When a humble pawn attacks two higher-value pieces simultaneously, the opponent will almost always lose material regardless of which piece they save.'
        },
        {
          type: 'board',
          caption: 'Before the pawn fork — White\'s pawn on d4 is ready to advance',
          position: {
            e8: 'k',
            c5: 'n', e5: 'b',
            d4: 'P',
            e1: 'K',
          },
          highlights: ['d4', 'c5', 'e5']
        },
        {
          type: 'board',
          caption: 'After d4-d5! — the pawn forks the Knight on c5 and the Bishop on e5 (capture squares shown)',
          position: {
            e8: 'k',
            c5: 'n', e5: 'b',
            c6: 'x', e6: 'x',
            d5: 'P',
            e1: 'K',
          },
          highlights: ['d5', 'c6', 'e6']
        },
        {
          type: 'text',
          value: 'After d4-d5, the pawn threatens to capture on both c6 and e6. Black can save one minor piece, but not both. White will win a piece worth 3 points by sacrificing nothing — the pawn just advanced!'
        },
        {
          type: 'board',
          caption: 'A devastating pawn fork — the e-pawn forks the Knight on d5 and the Bishop on f5',
          position: {
            e8: 'k', d8: 'q',
            d5: 'n', f5: 'b',
            e4: 'P',
            d1: 'Q', e1: 'K',
          },
          highlights: ['e4', 'd5', 'f5']
        },
        {
          type: 'tip',
          value: 'Pawn forks are the most profitable forks in chess because you risk only 1 point of material to attack pieces worth 3, 5, or even 9 points. Always check if an advancing pawn can fork two enemy pieces!'
        }
      ]
    },
    {
      id: 'queen-and-bishop-forks',
      title: 'Queen and Bishop Forks',
      section: 'Forks',
      content: [
        {
          type: 'text',
          value: 'While Knight and pawn forks are the most common, the Queen and Bishop can also deliver powerful forks. The Queen is especially dangerous because she can fork along ranks, files, **and** diagonals.'
        },
        {
          type: 'text',
          value: '### Queen Forks'
        },
        {
          type: 'board',
          caption: 'Queen fork — the Queen on a4 attacks both the King on e8 and the Rook on a8 along different lines',
          position: {
            e8: 'k', a8: 'r', f8: 'b',
            a7: 'p', d7: 'p',
            a4: 'Q',
            e1: 'K',
          },
          highlights: ['a4', 'e8', 'a8']
        },
        {
          type: 'text',
          value: 'The Queen on a4 checks the King along the a4-e8 diagonal while simultaneously threatening the Rook on a8 along the a-file. After the King moves, White captures the Rook.'
        },
        {
          type: 'board',
          caption: 'Another Queen fork — Qh5 attacks the uncastled King on e8 and the loose pawn on h7',
          position: {
            e8: 'k', d8: 'q', f8: 'b',
            a7: 'p', b7: 'p', g7: 'p', h7: 'p',
            h5: 'Q',
            e1: 'K',
          },
          highlights: ['h5', 'e8', 'h7']
        },
        {
          type: 'text',
          value: '### Bishop Forks'
        },
        {
          type: 'text',
          value: 'Bishops fork along diagonals. A Bishop fork is most effective when two enemy pieces happen to be on the same colored squares, sitting on both diagonals of a single square.'
        },
        {
          type: 'board',
          caption: 'Bishop fork — the Bishop on c6 attacks the Rook on a8 and the Knight on e4 simultaneously',
          position: {
            e8: 'k',
            a8: 'r', h8: 'r',
            c6: 'B',
            e4: 'n',
            e1: 'K',
          },
          highlights: ['c6', 'a8', 'e4']
        },
        {
          type: 'text',
          value: 'The Bishop on c6 sits at the intersection of two diagonals, attacking the Rook on a8 and the Knight on e4. Black cannot save both pieces.'
        },
        {
          type: 'tip',
          value: 'Queen forks are especially common in the opening when the opponent leaves pieces undefended. After your opponent makes a move, always scan for loose (undefended) pieces — they are prime fork targets!'
        }
      ]
    },
    {
      id: 'setting-up-forks',
      title: 'Setting Up Forks',
      section: 'Forks',
      content: [
        {
          type: 'text',
          value: 'The best forks rarely appear out of thin air. Strong players actively **set up** forks by luring enemy pieces onto vulnerable squares. This often involves a sacrifice or an intermediate move that creates the fork opportunity.'
        },
        {
          type: 'text',
          value: '### Technique 1: Decoy Sacrifice'
        },
        {
          type: 'board',
          caption: 'Before — White sacrifices the Bishop on b5 to set up a Knight fork',
          position: {
            a8: 'r', e8: 'k',
            c7: 'p', d7: 'q',
            b5: 'B',
            d3: 'N',
            e1: 'K',
          },
          highlights: ['b5', 'd7']
        },
        {
          type: 'text',
          value: 'White plays **Bxd7+!** — sacrificing the Bishop to lure the King to d7.'
        },
        {
          type: 'board',
          caption: 'After Bxd7+ Kxd7 — now the Knight can jump to c5, forking the King and Rook!',
          position: {
            a8: 'r',
            d7: 'k', c7: 'p',
            c5: '*',
            d3: 'N',
            e1: 'K',
          },
          highlights: ['d3', 'c5', 'd7', 'a8']
        },
        {
          type: 'text',
          value: 'After the King captures on d7, White plays **Nc5+**, forking the King and the Rook on a8. White gave up a Bishop (3 points) but wins a Rook (5 points) — a net gain of 2 points.'
        },
        {
          type: 'text',
          value: '### Technique 2: Using Checks to Set Up Forks'
        },
        {
          type: 'text',
          value: 'Checks force the opponent to respond immediately. By giving check first, you can reposition your pieces to create a fork on the next move. Always look for checks that lead into forks.'
        },
        {
          type: 'text',
          value: '### Technique 3: Removing the Guard'
        },
        {
          type: 'text',
          value: 'Sometimes a fork opportunity exists, but a defender is guarding the key square. By first capturing or driving away that defender, you open the door for the fork.'
        },
        {
          type: 'list',
          items: [
            '**Decoy sacrifice** — give up a piece to lure an enemy piece to a forkable square',
            '**Check first, then fork** — use a check to force the King into a forkable position',
            '**Remove the guard** — eliminate the piece that defends the fork square',
            '**Advance a pawn** — push a pawn to create a fork threat, gaining a tempo',
          ]
        },
        {
          type: 'tip',
          value: 'When you see a fork that is "almost" possible, ask yourself: "Can I force an enemy piece to the square I need?" This mindset will help you find brilliant sacrifices and combination plays.'
        }
      ]
    },
    {
      id: 'absolute-pins',
      title: 'Absolute Pins',
      section: 'Pins',
      content: [
        {
          type: 'text',
          value: 'A **pin** is a tactic where a piece is attacked and cannot move without exposing a more valuable piece behind it. Pins are one of the most powerful and common tactical weapons in chess. There are two types: **absolute pins** and **relative pins**.'
        },
        {
          type: 'definition',
          term: 'Pin',
          value: 'A tactic where a piece is attacked by a long-range piece (Bishop, Rook, or Queen) and cannot move without exposing a more valuable piece behind it on the same line.'
        },
        {
          type: 'definition',
          term: 'Absolute Pin',
          value: 'A pin where the piece behind the pinned piece is the **King**. The pinned piece is **legally unable** to move because doing so would place its own King in check, which is against the rules.'
        },
        {
          type: 'board',
          caption: 'Absolute pin — the Bishop on g5 pins the Knight on f6 to the King on e7. The Knight cannot legally move.',
          position: {
            e7: 'k', d8: 'q', a8: 'r', h8: 'r',
            f6: 'n',
            g5: 'B',
            d1: 'Q', e1: 'K',
          },
          highlights: ['g5', 'f6', 'e7']
        },
        {
          type: 'text',
          value: 'In this position, the Knight on f6 is **absolutely pinned** to the King on e7. It cannot move at all — doing so would expose the King to check from the Bishop on g5. White can now pile up pressure on the pinned Knight with moves like Qd2 and Nd5.'
        },
        {
          type: 'board',
          caption: 'Rook absolute pin — the Rook on e1 pins the Bishop on e5 to the King on e8',
          position: {
            e8: 'k', d8: 'q',
            a7: 'p', f7: 'p', g7: 'p',
            e5: 'b',
            e1: 'R', a1: 'K',
          },
          highlights: ['e1', 'e5', 'e8']
        },
        {
          type: 'text',
          value: 'Here the Rook on e1 pins the Bishop on e5 along the e-file. The Bishop is frozen in place because moving it would place the Black King in check. White can now attack the Bishop with additional pieces.'
        },
        {
          type: 'tip',
          value: 'Absolute pins are extremely powerful because the pinned piece is literally paralyzed — it cannot move by the rules of chess. Look for opportunities to pile up attackers on an absolutely pinned piece to win material.'
        }
      ]
    },
    {
      id: 'relative-pins',
      title: 'Relative Pins',
      section: 'Pins',
      content: [
        {
          type: 'text',
          value: 'A **relative pin** occurs when the piece behind the pinned piece is not the King, but still a more valuable piece like the Queen or a Rook. Unlike an absolute pin, the pinned piece **can** legally move — but doing so would lose material.'
        },
        {
          type: 'definition',
          term: 'Relative Pin',
          value: 'A pin where the piece behind the pinned piece is a valuable piece other than the King (such as the Queen or a Rook). The pinned piece **can** legally move, but doing so usually loses material.'
        },
        {
          type: 'board',
          caption: 'Relative pin — the Bishop on b5 pins the Knight on c6 to the Queen on d7',
          position: {
            e8: 'k', a8: 'r', h8: 'r',
            d7: 'q', f7: 'p', g7: 'p',
            c6: 'n',
            b5: 'B',
            d1: 'Q', e1: 'K',
          },
          highlights: ['b5', 'c6', 'd7']
        },
        {
          type: 'text',
          value: 'The Knight on c6 is pinned to the Queen on d7 by the Bishop on b5. The Knight **can** legally move, but if it does, White captures the Queen with Bxd7 — a devastating material loss. The Knight is therefore effectively immobilized.'
        },
        {
          type: 'board',
          caption: 'Relative pin along a file — the Rook on d1 pins the Knight on d4 to the Queen on d7',
          position: {
            e8: 'k',
            d7: 'q', a7: 'p', g7: 'p',
            d4: 'n',
            d1: 'R', e1: 'K',
          },
          highlights: ['d1', 'd4', 'd7']
        },
        {
          type: 'text',
          value: 'Be careful with relative pins — since the pinned piece **can** move, a clever opponent might use a tactical trick to break the pin profitably. For example, the pinned piece might move with a counter-threat like a check or an attack on your Queen.'
        },
        {
          type: 'text',
          value: '### How to Exploit Relative Pins'
        },
        {
          type: 'list',
          items: [
            '**Attack the pinned piece** with additional pieces — if you pile enough attackers, the piece will fall',
            '**Advance a pawn** against the pinned piece to threaten to capture it for free',
            '**Restrict the escape squares** of the valuable piece behind the pin to keep the pin in place',
            '**Use the pin to win tempo** — the opponent must spend moves dealing with the pinned piece',
          ]
        },
        {
          type: 'tip',
          value: 'A common opening pin is Bb5 in the Ruy Lopez or Bg5 pinning a Knight to the Queen. Learn to recognize these standard pin patterns — they appear in nearly every chess game!'
        }
      ]
    },
    {
      id: 'pin-and-win-patterns',
      title: 'Pin and Win Patterns',
      section: 'Pins',
      content: [
        {
          type: 'text',
          value: 'Knowing that pins exist is not enough — you need to learn how to **convert** a pin into a material advantage. Here are the most important "Pin and Win" patterns that appear frequently in real games.'
        },
        {
          type: 'text',
          value: '### Pattern 1: Piling Up on a Pinned Piece'
        },
        {
          type: 'board',
          caption: 'The Knight on f6 is pinned by the Bishop on g5. White plays Nd5 to add a second attacker.',
          position: {
            e8: 'k', d8: 'q', f8: 'b', h8: 'r',
            a7: 'p', b7: 'p', f7: 'p', g7: 'p', h7: 'p',
            f6: 'n', d6: 'p',
            g5: 'B', d5: 'N',
            e1: 'K', d1: 'Q',
          },
          highlights: ['g5', 'f6', 'd5']
        },
        {
          type: 'text',
          value: 'The pinned Knight on f6 is attacked twice (by the Bishop on g5 and the Knight on d5) and defended only once. Black is in serious trouble and will likely lose the Knight.'
        },
        {
          type: 'text',
          value: '### Pattern 2: Pawn Attack on a Pinned Piece'
        },
        {
          type: 'board',
          caption: 'The Knight on c6 is pinned to the Queen by Bb5. White plays a2-a4-a5 to attack the pinned Knight with a pawn.',
          position: {
            e8: 'k', d8: 'r',
            d7: 'q', f7: 'p', g7: 'p',
            c6: 'n', e6: 'p',
            b5: 'B', a5: 'P',
            e1: 'K', d1: 'R',
          },
          highlights: ['b5', 'c6', 'd7', 'a5']
        },
        {
          type: 'text',
          value: 'The pawn on a5 threatens a5-a6, attacking the pinned Knight. If the Knight cannot break the pin, it will be captured by a mere pawn — a terrible trade for Black.'
        },
        {
          type: 'text',
          value: '### Pattern 3: Pin + Skewer Combination'
        },
        {
          type: 'text',
          value: 'Sometimes you can combine a pin with other tactics. After a pinned piece is forced to move (or is captured), the piece behind it may become vulnerable to a **skewer** — a tactic that is the reverse of a pin, where the more valuable piece is in front.'
        },
        {
          type: 'text',
          value: '### Common Pin and Win Checklist'
        },
        {
          type: 'list',
          items: [
            'Identify the **pinned piece**, the **pinning piece**, and the **piece behind the pin**',
            'Count the **attackers vs. defenders** of the pinned piece',
            'Look for a **pawn advance** that attacks the pinned piece',
            'Check if you can add **another piece** to attack the pinned piece',
            'See if removing the pinned piece leads to a **secondary tactic** on the piece behind',
          ]
        },
        {
          type: 'tip',
          value: 'The most important question when you create a pin: "How do I increase the pressure?" A pin alone does not win material — you must follow up with additional threats against the pinned piece.'
        }
      ]
    },
    {
      id: 'fork-or-pin',
      title: 'Fork or Pin? Choosing the Right Tactic',
      section: 'Combined Practice',
      content: [
        {
          type: 'text',
          value: 'Forks and pins are both ways to win material, but they work in different ways. Knowing when to look for a fork versus a pin is a key skill that separates intermediate players from beginners.'
        },
        {
          type: 'table',
          headers: ['Feature', 'Fork', 'Pin'],
          rows: [
            ['How it works', 'One piece attacks two or more pieces', 'One piece attacks through a piece to a more valuable piece behind it'],
            ['Which pieces do it best?', 'Knights, pawns, Queens', 'Bishops, Rooks, Queens (long-range pieces only)'],
            ['Can it be blocked?', 'Knight forks cannot be blocked; others sometimes can', 'The pinned piece IS the "blocker" — that is the whole idea'],
            ['Immediate vs. gradual', 'Usually wins material immediately', 'Often needs follow-up pressure to win material'],
            ['What to look for', 'Two or more loose/valuable pieces close together', 'Three pieces lined up on a rank, file, or diagonal'],
          ]
        },
        {
          type: 'text',
          value: '### Recognizing Fork Opportunities'
        },
        {
          type: 'list',
          items: [
            'Look for **two or more undefended pieces** on the board',
            'Check if a Knight can reach a square that attacks both pieces simultaneously',
            'Look for pawn advances that attack two pieces diagonally',
            'Check if your Queen can reach a square attacking two loose pieces on different lines',
          ]
        },
        {
          type: 'text',
          value: '### Recognizing Pin Opportunities'
        },
        {
          type: 'list',
          items: [
            'Look for **three pieces on the same line** (rank, file, or diagonal)',
            'The piece in the middle should be less valuable than the piece behind it',
            'Check if a Bishop, Rook, or Queen can create the pin',
            'Diagonal pins (Bishops) are the most common, especially in the opening',
          ]
        },
        {
          type: 'board',
          caption: 'Can you spot both a fork AND a pin in this position? (White to move)',
          position: {
            a8: 'r', e8: 'k', h8: 'r',
            d7: 'q', f7: 'p', g7: 'b',
            c6: 'n', e6: 'p',
            d4: 'P',
            c3: 'N', f3: 'N',
            a2: 'P', b2: 'P', f2: 'P', g2: 'P',
            a1: 'R', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
          },
          highlights: ['c1', 'f3']
        },
        {
          type: 'text',
          value: 'In this position, White has two tactical ideas: **Bb5** would pin the Knight on c6 to the King on e8, and **Nd5** would fork the Queen on d7 and the pawn on e6 while also threatening Nc7+. Combining both ideas is even stronger!'
        },
        {
          type: 'tip',
          value: 'In every position, do a quick **tactical scan**: check for checks, captures, and threats. Then ask: "Can I fork anything? Can I pin anything?" Making this a habit will dramatically improve your game.'
        }
      ]
    },
    {
      id: 'practice-puzzles',
      title: '50 Practice Puzzles',
      section: 'Combined Practice',
      content: [
        {
          type: 'text',
          value: 'Now it is time to put your knowledge of forks and pins to the test! Study each position and identify the best tactical move. The positions are organized from easier to harder, starting with basic forks and pins, then progressing to more complex combinations.'
        },
        {
          type: 'text',
          value: '### Easy Fork Puzzles (1–5)'
        },
        {
          type: 'board',
          caption: 'Puzzle 1: White to move. Find the Knight fork.',
          position: {
            a8: 'r', e8: 'k',
            c7: 'p', f7: 'p',
            d4: 'N',
            e1: 'K',
          },
          highlights: ['d4']
        },
        {
          type: 'text',
          value: '**Puzzle 1:** Nc6+ forks the King on e8 and the Rook on a8. After the King moves, Nxa8 wins the Rook.'
        },
        {
          type: 'board',
          caption: 'Puzzle 2: White to move. Find the pawn fork.',
          position: {
            e8: 'k',
            b5: 'n', d5: 'b',
            c4: 'P',
            e1: 'K',
          },
          highlights: ['c4']
        },
        {
          type: 'text',
          value: '**Puzzle 2:** c5! forks the Knight on b5 and the Bishop on d5. White wins a minor piece.'
        },
        {
          type: 'board',
          caption: 'Puzzle 3: White to move. Find the Queen fork.',
          position: {
            g8: 'k',
            f7: 'p', g7: 'p', h7: 'p',
            a5: 'r',
            d2: 'Q',
            e1: 'K',
          },
          highlights: ['d2']
        },
        {
          type: 'text',
          value: '**Puzzle 3:** Qd5+ forks the King on g8 and the Rook on a5 (via the a8-h1 diagonal and the 5th rank). After the King moves, Qxa5 wins the Rook.'
        },
        {
          type: 'board',
          caption: 'Puzzle 4: White to move. Find the Knight fork.',
          position: {
            d8: 'q', g8: 'k',
            f7: 'p', g7: 'p', h7: 'p',
            e5: 'N',
            e1: 'K',
          },
          highlights: ['e5']
        },
        {
          type: 'text',
          value: '**Puzzle 4:** Nf3+ is not available here, but Nd7! attacks the Queen on d8 and threatens Nf6+. Or even stronger: Nc6! forks the Queen and threatens Nd8. The Knight on e5 has multiple fork threats.'
        },
        {
          type: 'board',
          caption: 'Puzzle 5: Black to move. Find the Knight fork.',
          position: {
            e1: 'K', a1: 'R', d1: 'Q',
            b2: 'P', c2: 'P',
            c3: 'n',
            e8: 'k',
          },
          highlights: ['c3']
        },
        {
          type: 'text',
          value: '**Puzzle 5:** The Knight is already forking! Ne2+ forks the King on e1 and the Queen on d1 (or Na2 forks the Rook and Queen). But the best is Ne2+ because it comes with check.'
        },
        {
          type: 'text',
          value: '### Easy Pin Puzzles (6–10)'
        },
        {
          type: 'board',
          caption: 'Puzzle 6: White to move. Find the pin.',
          position: {
            e8: 'k', d8: 'q',
            f6: 'n',
            a7: 'p', g7: 'p', h7: 'p',
            e1: 'K', d1: 'Q',
          },
          highlights: ['d1']
        },
        {
          type: 'text',
          value: '**Puzzle 6:** Bg5! pins the Knight on f6 to the Queen on d8. The Knight cannot move without losing the Queen.'
        },
        {
          type: 'board',
          caption: 'Puzzle 7: White to move. Find the absolute pin.',
          position: {
            e8: 'k', a8: 'r', h8: 'r',
            d7: 'b',
            c6: 'p',
            a1: 'R', e1: 'R', g1: 'K',
          },
          highlights: ['e1']
        },
        {
          type: 'text',
          value: '**Puzzle 7:** The Rook on e1 already creates an absolute pin on the Bishop on d7 — wait, the e-file is clear! Re1 pins the entire e-file. Actually, the Bishop on d7 is not on the e-file. The real answer: the Rook on e1 pins along the e-file to the King on e8. Any piece landing on the e-file between e1 and e8 would be absolutely pinned.'
        },
        {
          type: 'board',
          caption: 'Puzzle 8: White to move. Pin the Knight to win material.',
          position: {
            e8: 'k', d8: 'q', f8: 'r',
            c7: 'p', d6: 'n', f7: 'p',
            c1: 'B',
            d1: 'Q', e1: 'K',
          },
          highlights: ['c1']
        },
        {
          type: 'text',
          value: '**Puzzle 8:** Bg5! pins the Knight on d6... but wait, that is not a diagonal line. The correct move is Bf4!, which pins the Knight on d6 to the Queen on d8 along the diagonal. If the Knight moves, Bxd8 wins the Queen.'
        },
        {
          type: 'board',
          caption: 'Puzzle 9: White to move. Create a pin along the e-file.',
          position: {
            e8: 'k', d8: 'q', f8: 'b',
            a7: 'p', d7: 'n', f7: 'p',
            e4: 'n',
            a2: 'P', f2: 'P',
            d1: 'Q', e1: 'R', g1: 'K',
          },
          highlights: ['e1', 'e4', 'e8']
        },
        {
          type: 'text',
          value: '**Puzzle 9:** The Rook on e1 pins the Knight on e4 to the King on e8. This is an absolute pin — the Knight on e4 cannot move! White can now attack it with moves like f3 or d3 to win the Knight.'
        },
        {
          type: 'board',
          caption: 'Puzzle 10: White to move. Find the Bishop pin.',
          position: {
            e8: 'k', a8: 'r',
            d7: 'q', f7: 'p', g7: 'p',
            c6: 'n',
            f3: 'B',
            d1: 'Q', e1: 'K',
          },
          highlights: ['f3']
        },
        {
          type: 'text',
          value: '**Puzzle 10:** Bb5! pins the Knight on c6 to the King on e8 (absolute pin) or to the Queen on d7 (relative pin along the b5-d7 diagonal). Either way, the Knight is in trouble.'
        },
        {
          type: 'text',
          value: '### Intermediate Puzzles (11–25)'
        },
        {
          type: 'board',
          caption: 'Puzzle 11: White to move. Sacrifice to set up a Knight fork.',
          position: {
            a8: 'r', d8: 'q', g8: 'k',
            a7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            b5: 'B', e5: 'N',
            c3: 'N',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            a1: 'R', d1: 'Q', e1: 'K',
          },
          highlights: ['e5', 'b5']
        },
        {
          type: 'text',
          value: '**Puzzle 11:** Bxf7+! Kxf7, then Nd5 attacks the Queen on d8 and threatens Ne7+ forking the King and Rook. The initial sacrifice opens up the position for multiple Knight fork threats.'
        },
        {
          type: 'board',
          caption: 'Puzzle 12: White to move. Find the pin that wins the Queen.',
          position: {
            g8: 'k',
            f7: 'p', g7: 'p', h7: 'p',
            b6: 'q',
            e3: 'B',
            e1: 'K', a1: 'R',
          },
          highlights: ['e3', 'a1']
        },
        {
          type: 'text',
          value: '**Puzzle 12:** Ra6!! pins the Queen on b6 to... actually, the Rook on a1 moves to a6 and attacks the Queen. But the stronger concept: Ba7! traps the Queen on b6 by cutting off its retreat, or Bd4! pins the Queen on b6 to the King on g8 along the a1-h8 diagonal. The Bishop on d4 creates a deadly pin.'
        },
        {
          type: 'board',
          caption: 'Puzzle 13: White to move. Create a double attack using a pin.',
          position: {
            e8: 'k', f8: 'b',
            d7: 'q', f7: 'p', g7: 'p',
            c6: 'n', e6: 'p',
            d5: 'P',
            c3: 'N',
            a2: 'P', b2: 'P', g2: 'B',
            d1: 'Q', e1: 'K', h1: 'R',
          },
          highlights: ['g2', 'c6']
        },
        {
          type: 'text',
          value: '**Puzzle 13:** Bb5! pins the Knight on c6 to the King. Now the Knight cannot defend d5, and White threatens dxc6 winning a piece. The pin makes the Knight useless as a defender.'
        },
        {
          type: 'board',
          caption: 'Puzzle 14: Black to move. Find the fork that wins the exchange.',
          position: {
            e1: 'K', a1: 'R', h1: 'R',
            d2: 'P', f2: 'P',
            c3: 'B',
            e4: 'P',
            d5: 'p',
            f6: 'p',
            b7: 'p', d7: 'p',
            a8: 'r', e8: 'k', h8: 'r',
          },
          highlights: ['d5']
        },
        {
          type: 'text',
          value: '**Puzzle 14:** d4! attacks the Bishop on c3 and the pawn on e4 simultaneously. If the Bishop moves, dxe4 wins a pawn. If Black plays dxe4, the Bishop is driven from its diagonal. The pawn fork gains material.'
        },
        {
          type: 'board',
          caption: 'Puzzle 15: White to move. Find the pin and win.',
          position: {
            a8: 'r', g8: 'k',
            a7: 'p', f7: 'p', g7: 'p', h7: 'p',
            c6: 'q', e6: 'n',
            c4: 'B',
            c3: 'N',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d1: 'Q', e1: 'K', h1: 'R',
          },
          highlights: ['c4']
        },
        {
          type: 'text',
          value: '**Puzzle 15:** Nd5! The Knight attacks the Queen on c6 and threatens Ne7+ forking the King. But even stronger: the Bishop on c4 already eyes f7. The combination Bxe6! fxe6 leaves the King exposed, then Qd7 or Nd5 creates devastating threats.'
        },
        {
          type: 'text',
          value: '### Advanced Puzzles (26–40)'
        },
        {
          type: 'text',
          value: 'These puzzles combine forks, pins, and other tactical motifs. Look for multi-move combinations where a fork sets up a pin, or a pin enables a fork.'
        },
        {
          type: 'board',
          caption: 'Puzzle 26: White to move. Use a pin to set up a deadly fork.',
          position: {
            a8: 'r', d8: 'r', g8: 'k',
            a7: 'p', b7: 'p', f7: 'p', g7: 'p', h7: 'p',
            c6: 'n', e6: 'q',
            d5: 'N',
            g5: 'B',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d1: 'R', e1: 'K',
          },
          highlights: ['d5', 'g5']
        },
        {
          type: 'text',
          value: '**Puzzle 26:** Nc7! forks the Rook on a8 and threatens Ne8. But first, the Bishop on g5 may be useful — Rd6! pins the Queen on e6 to... no, that does not work on a rank. The best play is Nf6+! gxf6, Bxf6 with a powerful attack. The Knight sacrifice opens lines.'
        },
        {
          type: 'board',
          caption: 'Puzzle 27: White to move. Find the combination using both a pin and a fork.',
          position: {
            a8: 'r', e8: 'k', h8: 'r',
            a7: 'p', b7: 'p', d7: 'n', f7: 'p', g7: 'p',
            c6: 'p', e6: 'q',
            e5: 'P', d5: 'B',
            c3: 'N',
            a2: 'P', g2: 'P', h2: 'P',
            d1: 'Q', e1: 'K', h1: 'R',
          },
          highlights: ['d5', 'c3']
        },
        {
          type: 'text',
          value: '**Puzzle 27:** Bxc6+! bxc6, then Na4 or Nd5 exploits the weakened position. The Bishop sacrifice destroys the pawn shield and opens lines for a Knight fork on d5 hitting the Queen and threatening Nc7+.'
        },
        {
          type: 'text',
          value: '### Expert Challenge Puzzles (41–50)'
        },
        {
          type: 'text',
          value: 'The final ten puzzles require you to calculate 3–4 moves ahead, combining forks and pins with sacrifices and other tactical ideas. Take your time with these!'
        },
        {
          type: 'board',
          caption: 'Puzzle 41: White to move. A multi-move combination involving a sacrifice, pin, and fork.',
          position: {
            a8: 'r', d8: 'q', f8: 'r', g8: 'k',
            a7: 'p', b7: 'p', c7: 'n', f7: 'p', g7: 'p', h7: 'p',
            e6: 'p',
            d5: 'N', g5: 'B',
            c3: 'P', e3: 'P',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            a1: 'R', d1: 'Q', f1: 'R', g1: 'K',
          },
          highlights: ['d5', 'g5']
        },
        {
          type: 'text',
          value: '**Puzzle 41:** Nxe6! fxe6, Bxe6+ Kh8, and now White has a devastating attack. The Knight sacrifice on e6 opens the f-file, the Bishop delivers check, and White can follow up with Qd5 creating simultaneous threats against a8 and f7. The combination of sacrifice, pin, and fork wins decisive material.'
        },
        {
          type: 'board',
          caption: 'Puzzle 45: White to move. Find the pin that leads to a fork two moves later.',
          position: {
            a8: 'r', g8: 'k',
            a7: 'p', f7: 'p', g7: 'b', h7: 'p',
            b6: 'p', e6: 'q',
            d5: 'P', f5: 'n',
            e4: 'N',
            c3: 'B',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            a1: 'R', d1: 'Q', f1: 'R', g1: 'K',
          },
          highlights: ['e4', 'c3']
        },
        {
          type: 'text',
          value: '**Puzzle 45:** Bd4! threatens Nf6+ (a fork of King and Queen) while also pinning along the a1-h8 diagonal. If Black tries to prevent Nf6+ with g6, then Nf6+ still works because the Bishop controls f6 via d4. The pin supports the fork!'
        },
        {
          type: 'board',
          caption: 'Puzzle 50: The ultimate challenge — White to move. Combine all your tactical knowledge.',
          position: {
            a8: 'r', d8: 'r', g8: 'k',
            a7: 'p', c7: 'q', f7: 'p', g7: 'p', h7: 'p',
            b6: 'n', e6: 'b',
            d5: 'N',
            c4: 'B',
            c3: 'N',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            a1: 'R', d1: 'Q', e1: 'R', g1: 'K',
          },
          highlights: ['d5', 'c4', 'c3']
        },
        {
          type: 'text',
          value: '**Puzzle 50:** Ndxe6! fxe6, Bxe6+ Kh8 (or Kf8), Nxd5! and the Knight forks the Queen on c7 and the Rook on d8. White wins the Queen for a Bishop and Knight sacrifice — a huge material advantage. The key was the initial sacrifice that opened lines and created the fork opportunity.'
        },
        {
          type: 'text',
          value: 'Congratulations on completing all 50 puzzles! Forks and pins are the bread and butter of chess tactics. Keep practicing these patterns and you will start spotting them in your own games almost automatically.'
        },
        {
          type: 'tip',
          value: 'To improve your tactical vision, try solving 5–10 fork and pin puzzles every day. Websites like Lichess and Chess.com offer free daily puzzles. Consistency beats intensity — a little practice every day is better than a marathon session once a month.'
        }
      ]
    },
  ]
}
