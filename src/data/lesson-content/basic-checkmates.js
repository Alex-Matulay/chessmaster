export const lessonContent = {
  slug: 'basic-checkmates',
  sections: [
    {
      id: 'king-and-queen-vs-king',
      title: 'King + Queen vs King',
      section: 'Queen Checkmates',
      content: [
        {
          type: 'text',
          value: 'The King and Queen vs lone King is the most fundamental checkmate to learn. With correct play, you can always force checkmate regardless of where the pieces are on the board. The key principle is simple: **use your Queen to restrict the enemy King to the edge of the board, then bring your King up to help deliver checkmate**.'
        },
        {
          type: 'board',
          caption: 'Starting position -- the black King is in the center and must be driven to the edge',
          position: {
            e1: 'K', d1: 'Q',
            e5: 'k',
          }
        },
        {
          type: 'text',
          value: 'The Queen alone cannot deliver checkmate -- you need your King to assist. The general plan has three steps:'
        },
        {
          type: 'list',
          items: [
            '**Step 1:** Use the Queen to restrict the enemy King, cutting off ranks or files',
            '**Step 2:** Bring your own King closer to support the Queen',
            '**Step 3:** Force the enemy King to the edge and deliver checkmate',
          ]
        },
        {
          type: 'board',
          caption: 'The Queen on e4 cuts the black King off from the bottom half of the board',
          position: {
            g1: 'K', e4: 'Q',
            d6: 'k',
          },
          highlights: ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4']
        },
        {
          type: 'text',
          value: 'Notice how the Queen on e4 creates an invisible wall along the 4th rank. The black King cannot cross to the bottom half of the board. From here, White will bring the King up and push Black further toward the edge.'
        },
        {
          type: 'tip',
          value: 'Never rush with the Queen alone! Always bring your King up to support. The Queen needs the King\'s help to deliver the final checkmate.'
        }
      ]
    },
    {
      id: 'the-box-method',
      title: 'The Box Method',
      section: 'Queen Checkmates',
      content: [
        {
          type: 'text',
          value: 'The **Box Method** (also called the "shrinking box") is the easiest technique for beginners to deliver checkmate with King and Queen. The idea is to use the Queen to create a "box" around the enemy King, then make the box smaller and smaller until the King is trapped on the edge.'
        },
        {
          type: 'definition',
          term: 'The Box',
          value: 'An imaginary rectangle formed by the Queen\'s control of ranks and files. The enemy King is confined inside this box and cannot escape. Each move should aim to **shrink the box** until the King is on the edge.'
        },
        {
          type: 'board',
          caption: 'Step 1: Queen on d5 creates a box -- the black King is confined to the top-right area',
          position: {
            e1: 'K', d5: 'Q',
            g7: 'k',
          },
          highlights: ['d5', 'd6', 'd7', 'd8', 'e5', 'f5', 'g5', 'h5']
        },
        {
          type: 'text',
          value: 'The black King is trapped in the rectangle from d5 to h8. Now White brings the King closer while maintaining the box.'
        },
        {
          type: 'board',
          caption: 'Step 2: White King advances to f3, maintaining the box with the Queen',
          position: {
            f3: 'K', d5: 'Q',
            g7: 'k',
          }
        },
        {
          type: 'board',
          caption: 'Step 3: Shrink the box -- Queen moves to d7, pushing the King to the 8th rank',
          position: {
            f5: 'K', d7: 'Q',
            g8: 'k',
          },
          highlights: ['d7', 'd8', 'e7', 'f7', 'g7', 'h7']
        },
        {
          type: 'board',
          caption: 'Step 4: Bring the King closer for the final checkmate',
          position: {
            f6: 'K', d7: 'Q',
            h8: 'k',
          }
        },
        {
          type: 'board',
          caption: 'Checkmate! The Queen delivers the final blow on g7',
          position: {
            f6: 'K', g7: 'Q',
            h8: 'k',
          },
          highlights: ['g7']
        },
        {
          type: 'text',
          value: 'The black King has no escape: g8, h7, and g7 are all controlled. This is checkmate!'
        },
        {
          type: 'tip',
          value: 'When shrinking the box, always check if the enemy King can escape to the other side. If it can, reposition your Queen to maintain the box before continuing.'
        }
      ]
    },
    {
      id: 'avoiding-stalemate',
      title: 'Avoiding Stalemate',
      section: 'Queen Checkmates',
      content: [
        {
          type: 'text',
          value: 'The biggest danger when checkmating with King and Queen is **stalemate**. Because the Queen is so powerful, it is easy to accidentally take away all of the enemy King\'s legal moves without actually putting it in check -- resulting in a draw!'
        },
        {
          type: 'definition',
          term: 'Stalemate',
          value: 'A position where the player to move has **no legal moves** but is **not in check**. The game is immediately drawn. This is different from checkmate, where the King IS in check with no escape.'
        },
        {
          type: 'board',
          caption: 'STALEMATE! Black to move has no legal moves but is NOT in check -- the game is a draw',
          position: {
            f6: 'K', f7: 'Q',
            h8: 'k',
          },
          highlights: ['f7', 'f6']
        },
        {
          type: 'text',
          value: 'In the position above, the black King on h8 cannot move to g8 (controlled by the Queen), h7 (controlled by the Queen), or g7 (controlled by the Queen and King). But the King is NOT in check, so this is stalemate -- a draw! White threw away the win.'
        },
        {
          type: 'board',
          caption: 'Another common stalemate trap -- the Queen is too close and takes away every square',
          position: {
            c6: 'K', b6: 'Q',
            a8: 'k',
          },
          highlights: ['b6', 'c6']
        },
        {
          type: 'text',
          value: 'Here the black King on a8 has no legal moves (a7 and b7 are controlled by the Queen and King, and b8 is controlled by the Queen) but is not in check. Stalemate again!'
        },
        {
          type: 'text',
          value: '### How to Avoid Stalemate'
        },
        {
          type: 'list',
          items: [
            '**Always check if the enemy King has at least one legal square** before making your move',
            '**Give the King some breathing room** -- do not bring the Queen too close too early',
            '**Use waiting moves** with the Queen if needed -- place it a Knight\'s move away from the enemy King to keep control without stalemate',
            '**When in doubt, check!** A move that gives check can never be stalemate',
          ]
        },
        {
          type: 'board',
          caption: 'Safe technique: place the Queen a Knight\'s move away from the enemy King, then bring your King up',
          position: {
            e6: 'K', f7: 'Q',
            h8: 'k',
            g8: '*', h7: '*',
          },
          highlights: ['g8', 'h7']
        },
        {
          type: 'text',
          value: 'Wait -- this is actually the stalemate position from above! The correct approach when the enemy King is on h8:'
        },
        {
          type: 'board',
          caption: 'Correct: Queen on g6 gives the King h8 as a legal square, while White\'s King approaches',
          position: {
            e6: 'K', g6: 'Q',
            h8: 'k',
          },
          highlights: ['g6']
        },
        {
          type: 'text',
          value: 'Now Black must play Kh8-g8 (the only legal move), and then White delivers checkmate with Qg7#. The key was giving Black exactly one legal move rather than zero.'
        },
        {
          type: 'tip',
          value: 'Before every move in a King + Queen endgame, ask yourself: "Does my opponent still have a legal move?" If the answer is no and you are not giving check, find a different move!'
        }
      ]
    },
    {
      id: 'king-and-rook-vs-king',
      title: 'King + Rook vs King',
      section: 'Rook Checkmates',
      content: [
        {
          type: 'text',
          value: 'King and Rook vs lone King is a slightly harder checkmate than with the Queen, but it follows the same basic idea: **drive the enemy King to the edge of the board**. The Rook can only cut off ranks or files (not diagonals), so the process takes a few more moves.'
        },
        {
          type: 'board',
          caption: 'Starting position -- the Rook cuts off the 5th rank, confining the black King',
          position: {
            e1: 'K', a5: 'R',
            e7: 'k',
          },
          highlights: ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5']
        },
        {
          type: 'text',
          value: 'The Rook on a5 creates a barrier along the 5th rank. The black King cannot cross below this line. Now the plan is:'
        },
        {
          type: 'list',
          items: [
            '**Step 1:** Cut off the enemy King with the Rook along a rank or file',
            '**Step 2:** Bring your King up to face the enemy King (opposition)',
            '**Step 3:** Push the enemy King back one rank at a time using Rook checks',
            '**Step 4:** Repeat until the King is on the edge, then deliver checkmate',
          ]
        },
        {
          type: 'definition',
          term: 'Opposition',
          value: 'When the two Kings face each other with one square between them on the same rank or file. The King that does NOT have to move has the "opposition" and can force the other King backward. This is essential in Rook endgames.'
        },
        {
          type: 'board',
          caption: 'White King on e5 takes opposition against the black King on e7 -- the Rook is ready',
          position: {
            e5: 'K', a6: 'R',
            e7: 'k',
          },
          highlights: ['e5', 'e7']
        },
        {
          type: 'text',
          value: 'With the Kings in opposition, Black must move sideways (e.g., Kd7 or Kf7). Then White advances the Rook to push the King further back.'
        },
        {
          type: 'board',
          caption: 'After Kd7, White plays Ra7+ forcing the King to the 8th rank',
          position: {
            e5: 'K', a7: 'R',
            d7: 'k',
          },
          highlights: ['a7']
        },
        {
          type: 'board',
          caption: 'The black King is pushed to the 8th rank -- checkmate is near',
          position: {
            e6: 'K', a7: 'R',
            d8: 'k',
          }
        },
        {
          type: 'board',
          caption: 'White takes opposition on e6, forcing Kd8 or Kf8, then Ra8# is checkmate',
          position: {
            e6: 'K', a8: 'R',
            e8: 'k',
          },
          highlights: ['a8']
        },
        {
          type: 'text',
          value: 'Checkmate! The Rook controls the entire 8th rank, and the White King prevents escape to d7, e7, and f7.'
        },
        {
          type: 'tip',
          value: 'Unlike the Queen, the Rook cannot deliver checkmate in the middle of the board. You MUST drive the King to the edge (rank 1, rank 8, a-file, or h-file).'
        }
      ]
    },
    {
      id: 'the-lawnmower-method',
      title: 'The Lawnmower Method',
      section: 'Rook Checkmates',
      content: [
        {
          type: 'text',
          value: 'The **Lawnmower Method** (also called the "Staircase" or "Ladder" method) is an elegant technique when you have **two Rooks** (or a Queen and Rook). The two pieces take turns pushing the enemy King rank by rank, like a lawnmower cutting grass row by row.'
        },
        {
          type: 'definition',
          term: 'Lawnmower Method',
          value: 'A checkmating technique where two major pieces alternate checking the enemy King, pushing it one rank (or file) at a time toward the edge. No King assistance is needed -- the two pieces do all the work.'
        },
        {
          type: 'board',
          caption: 'Step 1: Rook on a5 cuts off the 5th rank. Rook on b1 is ready to help.',
          position: {
            e1: 'K', a5: 'R', b1: 'R',
            e6: 'k',
          },
          highlights: ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5']
        },
        {
          type: 'board',
          caption: 'Step 2: Rb6+ pushes the King to the 7th rank',
          position: {
            e1: 'K', a5: 'R', b6: 'R',
            e7: 'k',
          },
          highlights: ['b6']
        },
        {
          type: 'board',
          caption: 'Step 3: Ra7+ pushes the King to the 8th rank',
          position: {
            e1: 'K', a7: 'R', b6: 'R',
            e8: 'k',
          },
          highlights: ['a7']
        },
        {
          type: 'board',
          caption: 'Step 4: Rb8# is checkmate! The lawnmower is complete.',
          position: {
            e1: 'K', a7: 'R', b8: 'R',
            e8: 'k',
          },
          highlights: ['b8']
        },
        {
          type: 'text',
          value: 'The beauty of the Lawnmower is its simplicity: the Rooks alternate, each one checking and pushing the King one rank further. No calculation needed -- just take turns!'
        },
        {
          type: 'text',
          value: '### What if the King Attacks a Rook?'
        },
        {
          type: 'text',
          value: 'If the enemy King approaches one of your Rooks, simply move that Rook to the **other side of the board** on the same rank, keeping the barrier intact. Then continue the lawnmower with the other Rook.'
        },
        {
          type: 'board',
          caption: 'If the King approaches (Kd6), slide the Rook away: Ra5 moves to h5',
          position: {
            e1: 'K', h5: 'R', b4: 'R',
            d6: 'k',
          },
          highlights: ['h5']
        },
        {
          type: 'tip',
          value: 'The Lawnmower Method works with any combination of two major pieces: two Rooks, Queen + Rook, or even two Queens. The technique is identical -- alternate checks to push the King to the edge.'
        }
      ]
    },
    {
      id: 'two-rooks-checkmate',
      title: 'Two Rooks Checkmate',
      section: 'Two Piece Checkmates',
      content: [
        {
          type: 'text',
          value: 'With two Rooks against a lone King, checkmate is straightforward using the Lawnmower Method. However, let us look at the technique more carefully and discuss some nuances that arise in practice.'
        },
        {
          type: 'board',
          caption: 'A practical starting position with two Rooks vs King',
          position: {
            a1: 'R', h1: 'R', e1: 'K',
            d5: 'k',
          }
        },
        {
          type: 'text',
          value: 'The strategy is simple: place the Rooks on adjacent ranks and use them like a staircase to push the King to the edge.'
        },
        {
          type: 'board',
          caption: 'Rooks on the 4th and 5th ranks create a wall -- the King is confined',
          position: {
            e1: 'K', a5: 'R', h6: 'R',
            d7: 'k',
          },
          highlights: ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', 'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6']
        },
        {
          type: 'text',
          value: 'Now alternate checks: Ra7+ pushes the King to the 8th rank, then Rh8# delivers checkmate.'
        },
        {
          type: 'board',
          caption: 'Ra7+ forces the King to the back rank',
          position: {
            e1: 'K', a7: 'R', h6: 'R',
            d8: 'k',
          },
          highlights: ['a7']
        },
        {
          type: 'board',
          caption: 'Rh8# -- checkmate! One Rook checks, the other guards the 7th rank',
          position: {
            e1: 'K', a7: 'R', h8: 'R',
            d8: 'k',
          },
          highlights: ['h8']
        },
        {
          type: 'text',
          value: '### Key Principles'
        },
        {
          type: 'list',
          items: [
            '**Keep your Rooks connected** -- they protect each other when on the same rank or file',
            '**Move the Rook that is NOT being threatened** -- if the King attacks one Rook, check with the other',
            '**Your King does not need to participate** -- the two Rooks can do the job alone (though the King can help speed things up)',
            '**Typical number of moves:** About 10-15 moves from any starting position',
          ]
        },
        {
          type: 'tip',
          value: 'Two Rooks checkmate is impossible to stalemate by accident since the Rooks only control ranks and files. This makes it the safest major-piece checkmate to execute.'
        }
      ]
    },
    {
      id: 'two-bishops-checkmate',
      title: 'Two Bishops Checkmate',
      section: 'Two Piece Checkmates',
      content: [
        {
          type: 'text',
          value: 'The King and two Bishops vs lone King checkmate is more challenging. Unlike Rooks, Bishops cannot cut off ranks or files directly. The technique requires **driving the enemy King to a corner** using a coordinated diagonal barrier. This checkmate typically takes around 15-20 moves.'
        },
        {
          type: 'text',
          value: '### The Diagonal Barrier'
        },
        {
          type: 'text',
          value: 'The two Bishops work together by forming a diagonal wall. Since one Bishop controls light squares and the other controls dark squares, together they create a barrier the King cannot cross.'
        },
        {
          type: 'board',
          caption: 'Two Bishops on adjacent diagonals form a wall -- the black King is confined to the corner',
          position: {
            d4: 'K', c3: 'B', d3: 'B',
            b1: 'k',
          },
          highlights: ['c3', 'd3']
        },
        {
          type: 'text',
          value: 'The dark-squared Bishop on c3 controls b2, d2, a1, and other dark squares. The light-squared Bishop on d3 controls c2, e2, c4, and other light squares. Together, the King cannot escape the corner.'
        },
        {
          type: 'text',
          value: '### Step-by-Step Technique'
        },
        {
          type: 'list',
          items: [
            '**Step 1:** Centralize your King and Bishops -- get them working together near the center',
            '**Step 2:** Use the Bishops to form a diagonal barrier, confining the enemy King',
            '**Step 3:** Gradually push the diagonal barrier toward a corner, using your King to support',
            '**Step 4:** Force the King into the corner and deliver checkmate',
          ]
        },
        {
          type: 'board',
          caption: 'Bishops form a diagonal barrier in the center -- the King is restricted to the upper-left area',
          position: {
            e4: 'K', c4: 'B', d5: 'B',
            b7: 'k',
          },
          highlights: ['c4', 'd5', 'b3', 'a2', 'd4', 'e3', 'c6', 'b7', 'e6', 'f7', 'g8']
        },
        {
          type: 'board',
          caption: 'The barrier tightens -- Bishops on b5 and c5 push the King toward the a8 corner',
          position: {
            c6: 'K', b5: 'B', c5: 'B',
            a7: 'k',
          },
          highlights: ['b5', 'c5']
        },
        {
          type: 'board',
          caption: 'Checkmate! The King is trapped in the corner with no escape',
          position: {
            b6: 'K', c6: 'B', a7: 'B',
            a8: 'k',
          },
          highlights: ['c6', 'a7']
        },
        {
          type: 'text',
          value: 'The black King on a8 has no legal moves: a7 is controlled by the Bishop on b7 and the King on b6, and b8 is controlled by the Bishop on a4. Checkmate!'
        },
        {
          type: 'tip',
          value: 'The two Bishops can only checkmate in a corner. Unlike Rooks, you cannot checkmate on the edge of the board in the middle. Be patient and methodically push the King to the corner using diagonal barriers.'
        }
      ]
    },
    {
      id: 'practice-positions',
      title: 'Practice Positions',
      section: 'Two Piece Checkmates',
      content: [
        {
          type: 'text',
          value: 'Now it is time to review what you have learned! Study the following positions and identify the checkmating ideas. In each position, think about what White should play and why.'
        },
        {
          type: 'text',
          value: '### Position 1: Queen Checkmate in One'
        },
        {
          type: 'board',
          caption: 'White to move -- find checkmate in one move with the Queen',
          position: {
            g6: 'K', h3: 'Q',
            h8: 'k',
          }
        },
        {
          type: 'text',
          value: 'The answer is **Qh7#**. The Queen controls all escape squares (g8, h7) and delivers check. The White King covers g7. This is the standard King + Queen checkmate pattern on the edge.'
        },
        {
          type: 'board',
          caption: 'Solution: Qh7# -- a classic Queen checkmate on the edge',
          position: {
            g6: 'K', h7: 'Q',
            h8: 'k',
          },
          highlights: ['h7']
        },
        {
          type: 'text',
          value: '### Position 2: Avoid the Stalemate Trap'
        },
        {
          type: 'board',
          caption: 'White to move -- what is the WRONG move here?',
          position: {
            a6: 'K', c5: 'Q',
            a8: 'k',
          }
        },
        {
          type: 'text',
          value: 'The wrong move is **Qb6??** which is stalemate -- the black King would have no legal moves but is not in check. The correct move is **Qb7#**, delivering checkmate. Always double-check that the King has no squares before playing a non-checking move!'
        },
        {
          type: 'board',
          caption: 'Correct: Qb7# delivers checkmate without stalemate',
          position: {
            a6: 'K', b7: 'Q',
            a8: 'k',
          },
          highlights: ['b7']
        },
        {
          type: 'text',
          value: '### Position 3: Rook Checkmate in One'
        },
        {
          type: 'board',
          caption: 'White to move -- deliver checkmate with the Rook',
          position: {
            e6: 'K', a1: 'R',
            e8: 'k',
          }
        },
        {
          type: 'text',
          value: 'The answer is **Ra8#**. The Rook controls the entire 8th rank, and the White King on e6 controls d7, e7, and f7. The black King has no escape squares.'
        },
        {
          type: 'board',
          caption: 'Solution: Ra8# -- the standard Rook checkmate pattern',
          position: {
            e6: 'K', a8: 'R',
            e8: 'k',
          },
          highlights: ['a8']
        },
        {
          type: 'text',
          value: '### Position 4: Two Rooks Lawnmower'
        },
        {
          type: 'board',
          caption: 'White to move -- finish the lawnmower checkmate',
          position: {
            e1: 'K', a7: 'R', h6: 'R',
            f8: 'k',
          }
        },
        {
          type: 'text',
          value: 'The answer is **Rh8#**. The Rook on h6 moves to h8 delivering check. The Rook on a7 covers the entire 7th rank, preventing the King from escaping. Classic lawnmower finish!'
        },
        {
          type: 'board',
          caption: 'Solution: Rh8# -- the lawnmower is complete',
          position: {
            e1: 'K', a7: 'R', h8: 'R',
            f8: 'k',
          },
          highlights: ['h8']
        },
        {
          type: 'text',
          value: '### Key Takeaways'
        },
        {
          type: 'table',
          headers: ['Checkmate Type', 'Difficulty', 'Key Technique', 'Common Mistake'],
          rows: [
            ['King + Queen vs King', 'Easy', 'Box Method -- shrink the box to the edge', 'Stalemate by putting the Queen too close'],
            ['King + Rook vs King', 'Medium', 'Opposition + Rook checks to push King to edge', 'Not using your King -- the Rook cannot do it alone'],
            ['Two Rooks vs King', 'Easy', 'Lawnmower -- alternate checks rank by rank', 'Leaving a Rook where the King can approach it'],
            ['Two Bishops vs King', 'Hard', 'Diagonal barrier -- push the King to a corner', 'Not coordinating the Bishops on adjacent diagonals'],
          ]
        },
        {
          type: 'tip',
          value: 'Practice these checkmates until they become second nature. In a real game, you will often reach endgames where these techniques decide the winner. Set up the starting positions on a board and practice delivering checkmate against a friend or computer!'
        }
      ]
    },
  ]
}
