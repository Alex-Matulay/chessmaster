export const lessonContent = {
  slug: 'how-pieces-move',
  sections: [
    {
      id: 'the-64-squares',
      title: 'The 64 Squares',
      section: 'Introduction to the Board',
      content: [
        {
          type: 'text',
          value: 'A chess board is made up of **64 squares** arranged in an 8x8 grid. The squares alternate between light and dark colors. This pattern is essential — it helps you visualize piece movement and plan your strategy.'
        },
        {
          type: 'board',
          caption: 'The empty chess board — 64 squares in an 8x8 grid',
          position: {
            // empty board
          }
        },
        {
          type: 'text',
          value: 'Every square on the board has a unique **coordinate** made up of a letter (a–h) and a number (1–8). The letters are called **files** (columns) and run from left to right. The numbers are called **ranks** (rows) and run from bottom to top.'
        },
        {
          type: 'tip',
          value: 'White always starts at the bottom (ranks 1–2), and Black starts at the top (ranks 7–8). The board should be set up so that each player has a **light square in the bottom-right corner**.'
        },
        {
          type: 'text',
          value: 'For example, the bottom-left square is **a1**, and the top-right square is **h8**. This coordinate system is used to record moves in chess — a language called **algebraic notation**.'
        }
      ]
    },
    {
      id: 'ranks-and-files',
      title: 'Ranks and Files',
      section: 'Introduction to the Board',
      content: [
        {
          type: 'text',
          value: 'Understanding ranks and files is crucial for describing piece movement and reading chess notation.'
        },
        {
          type: 'definition',
          term: 'File',
          value: 'A vertical column of squares, labeled **a** through **h** from left to right (from White\'s perspective). For example, the "e-file" is the fifth column from the left.'
        },
        {
          type: 'definition',
          term: 'Rank',
          value: 'A horizontal row of squares, numbered **1** through **8** from bottom to top. Rank 1 is White\'s back rank, and Rank 8 is Black\'s back rank.'
        },
        {
          type: 'definition',
          term: 'Diagonal',
          value: 'A line of squares running at a 45-degree angle. Diagonals are important for bishops and queens. Each diagonal contains only one color of squares.'
        },
        {
          type: 'text',
          value: 'When we say a Rook "controls a file," we mean it can move to any square along that vertical column. When a Bishop "controls a diagonal," it can move to any square along that diagonal line. These concepts become second nature as you play more games.'
        },
        {
          type: 'tip',
          value: 'Here\'s a memory trick: **F**ile = **F**ront to back (vertical), **R**ank = **R**ow (horizontal).'
        }
      ]
    },
    {
      id: 'setting-up-the-board',
      title: 'Setting Up the Board',
      section: 'Introduction to the Board',
      content: [
        {
          type: 'text',
          value: 'Each player starts with **16 pieces**: 1 King, 1 Queen, 2 Rooks, 2 Bishops, 2 Knights, and 8 Pawns. Here\'s how to set them up correctly:'
        },
        {
          type: 'board',
          caption: 'The starting position — all 32 pieces in their correct squares',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'text',
          value: '**Back rank (Rank 1 for White, Rank 8 for Black):**'
        },
        {
          type: 'list',
          items: [
            '**Rooks** go in the corners (a1, h1)',
            '**Knights** go next to the Rooks (b1, g1)',
            '**Bishops** go next to the Knights (c1, f1)',
            '**Queen** goes on her own color (White Queen on d1, a light square; Black Queen on d8, a dark square)',
            '**King** goes on the remaining square (e1 for White, e8 for Black)',
          ]
        },
        {
          type: 'text',
          value: '**Front rank (Rank 2 for White, Rank 7 for Black):** All 8 Pawns line up in a row in front of the other pieces.'
        },
        {
          type: 'tip',
          value: 'Remember: **"Queen on her own color"** — the White Queen starts on a light square (d1) and the Black Queen starts on a dark square (d8). This is the easiest way to make sure you\'ve set up correctly!'
        }
      ]
    },
    {
      id: 'pawns',
      title: 'Pawns — The Soul of Chess',
      section: 'Piece Movements',
      content: [
        {
          type: 'text',
          value: 'The great chess master Philidor once said, *"Pawns are the soul of chess."* Though they are the least powerful piece individually, pawns define the structure of the game and can promote to become any other piece.'
        },
        {
          type: 'board',
          caption: 'Pawn movement: forward one square, or two squares from starting position. Captures diagonally.',
          position: {
            e2: 'P', d5: 'P',
            e3: '*', e4: '*',
            c6: 'x', e6: 'x', d6: '*',
          },
          highlights: ['e3', 'e4', 'd6', 'c6', 'e6']
        },
        {
          type: 'definition',
          term: 'Basic Movement',
          value: 'Pawns move **forward one square** at a time. They can never move backward or sideways.'
        },
        {
          type: 'definition',
          term: 'First Move',
          value: 'On its very first move, a pawn has the option to advance **two squares** forward instead of one.'
        },
        {
          type: 'definition',
          term: 'Capturing',
          value: 'Pawns capture differently than they move — they capture **one square diagonally forward**. This is the only piece that captures differently from how it moves.'
        },
        {
          type: 'text',
          value: '### Special Pawn Rules'
        },
        {
          type: 'definition',
          term: 'Promotion',
          value: 'When a pawn reaches the opposite end of the board (rank 8 for White, rank 1 for Black), it **must** be promoted to a Queen, Rook, Bishop, or Knight. Most players choose a Queen since it\'s the most powerful piece.'
        },
        {
          type: 'definition',
          term: 'En Passant',
          value: 'If a pawn advances two squares from its starting position and lands beside an enemy pawn, the opponent can capture it "in passing" on the very next move, as if the pawn had only moved one square. This special capture can only be done immediately — you can\'t save it for later!'
        },
        {
          type: 'tip',
          value: 'Pawns may seem weak, but they control the center, create passed pawns, and can promote to a Queen. Never underestimate them!'
        }
      ]
    },
    {
      id: 'rooks',
      title: 'Rooks — Controlling Lines',
      section: 'Piece Movements',
      content: [
        {
          type: 'text',
          value: 'The Rook is a major piece worth approximately **5 points**. It moves in straight lines — horizontally or vertically — any number of squares, as long as nothing blocks its path.'
        },
        {
          type: 'board',
          caption: 'The Rook on d4 controls the entire d-file and the entire 4th rank',
          position: {
            d4: 'R',
            d1: '*', d2: '*', d3: '*', d5: '*', d6: '*', d7: '*', d8: '*',
            a4: '*', b4: '*', c4: '*', e4: '*', f4: '*', g4: '*', h4: '*',
          },
          highlights: ['d1', 'd2', 'd3', 'd5', 'd6', 'd7', 'd8', 'a4', 'b4', 'c4', 'e4', 'f4', 'g4', 'h4']
        },
        {
          type: 'list',
          items: [
            'Moves **horizontally** (along ranks) any number of squares',
            'Moves **vertically** (along files) any number of squares',
            'Cannot jump over other pieces',
            'Captures by moving to an occupied enemy square',
          ]
        },
        {
          type: 'text',
          value: '### Castling'
        },
        {
          type: 'text',
          value: 'The Rook has a special move with the King called **castling**. The King moves two squares toward a Rook, and the Rook jumps over the King to the other side. This move can only be done if:'
        },
        {
          type: 'list',
          items: [
            'Neither the King nor the Rook has moved previously',
            'No pieces stand between the King and Rook',
            'The King is not in check',
            'The King does not pass through or land on a square attacked by an enemy piece',
          ]
        },
        {
          type: 'tip',
          value: 'Rooks are most powerful on **open files** (files with no pawns). In the early game, develop your other pieces first, then bring the Rooks to open or semi-open files.'
        }
      ]
    },
    {
      id: 'knights',
      title: 'Knights — The Tricky Jumper',
      section: 'Piece Movements',
      content: [
        {
          type: 'text',
          value: 'The Knight is the most unusual piece in chess. Worth approximately **3 points**, it moves in an "L" shape and is the **only piece that can jump over other pieces**.'
        },
        {
          type: 'board',
          caption: 'A Knight on d4 can move to 8 possible squares in an L-shape pattern',
          position: {
            d4: 'N',
            c6: '*', e6: '*',
            b5: '*', f5: '*',
            b3: '*', f3: '*',
            c2: '*', e2: '*',
          },
          highlights: ['c6', 'e6', 'b5', 'f5', 'b3', 'f3', 'c2', 'e2']
        },
        {
          type: 'text',
          value: 'The Knight moves in an **L-shape**: two squares in one direction (horizontally or vertically) and then one square perpendicular to that. Think of it as: 2 + 1, making an "L."'
        },
        {
          type: 'list',
          items: [
            'Moves in an **L-shape**: 2 squares + 1 square (or 1 + 2)',
            '**Jumps over** all pieces in its way — the only piece that can do this',
            'Always lands on the **opposite color** square from where it started',
            'From the center of the board, a Knight can reach **8 squares**; from a corner, only **2 squares**',
          ]
        },
        {
          type: 'tip',
          value: '"A Knight on the rim is dim!" — Knights are much more powerful in the center of the board where they control more squares. Try to keep your Knights centralized.'
        }
      ]
    },
    {
      id: 'bishops',
      title: 'Bishops — Diagonal Dominators',
      section: 'Piece Movements',
      content: [
        {
          type: 'text',
          value: 'The Bishop is worth approximately **3 points** (same as a Knight) and moves diagonally any number of squares. Each Bishop is restricted to squares of one color for the entire game.'
        },
        {
          type: 'board',
          caption: 'A Bishop on d4 controls both diagonals — it can reach any square on these lines',
          position: {
            d4: 'B',
            a1: '*', b2: '*', c3: '*', e5: '*', f6: '*', g7: '*', h8: '*',
            a7: '*', b6: '*', c5: '*', e3: '*', f2: '*', g1: '*',
          },
          highlights: ['a1', 'b2', 'c3', 'e5', 'f6', 'g7', 'h8', 'a7', 'b6', 'c5', 'e3', 'f2', 'g1']
        },
        {
          type: 'list',
          items: [
            'Moves **diagonally** any number of squares',
            'Cannot jump over other pieces',
            'Each Bishop stays on **one color** for the entire game (light-squared or dark-squared)',
            'The **two Bishops together** (called the "Bishop pair") are very powerful because they cover both colors',
          ]
        },
        {
          type: 'text',
          value: 'Because each Bishop is limited to one color, your light-squared Bishop can never control dark squares, and vice versa. This is why having both Bishops (the **Bishop pair**) is considered an advantage — together they cover the entire board.'
        },
        {
          type: 'tip',
          value: 'Bishops thrive in **open positions** with few pawns blocking the diagonals. If the center is locked with pawns, Knights often perform better than Bishops.'
        }
      ]
    },
    {
      id: 'queen-and-king',
      title: 'Queen & King — The Royal Pair',
      section: 'Piece Movements',
      content: [
        {
          type: 'text',
          value: '### The Queen'
        },
        {
          type: 'text',
          value: 'The Queen is the **most powerful piece** on the board, worth approximately **9 points**. She combines the movement of the Rook and Bishop — she can move any number of squares horizontally, vertically, or diagonally.'
        },
        {
          type: 'board',
          caption: 'The Queen on d4 can move in 8 directions — combining Rook and Bishop movement',
          position: {
            d4: 'Q',
            d1: '*', d2: '*', d3: '*', d5: '*', d6: '*', d7: '*', d8: '*',
            a4: '*', b4: '*', c4: '*', e4: '*', f4: '*', g4: '*', h4: '*',
            a1: '*', b2: '*', c3: '*', e5: '*', f6: '*', g7: '*', h8: '*',
            a7: '*', b6: '*', c5: '*', e3: '*', f2: '*', g1: '*',
          },
          highlights: ['d1', 'd2', 'd3', 'd5', 'd6', 'd7', 'd8', 'a4', 'b4', 'c4', 'e4', 'f4', 'g4', 'h4', 'a1', 'b2', 'c3', 'e5', 'f6', 'g7', 'h8', 'a7', 'b6', 'c5', 'e3', 'f2', 'g1']
        },
        {
          type: 'list',
          items: [
            'Moves **horizontally, vertically, or diagonally** any number of squares',
            'Combines the power of both the Rook and the Bishop',
            'Cannot jump over other pieces',
            'The most powerful piece — worth about **9 points**',
          ]
        },
        {
          type: 'text',
          value: '### The King'
        },
        {
          type: 'text',
          value: 'The King is the most **important** piece — if your King is checkmated, you lose the game! The King can move one square in any direction.'
        },
        {
          type: 'board',
          caption: 'The King on e4 can move one square in any direction (8 possible squares)',
          position: {
            e4: 'K',
            d5: '*', e5: '*', f5: '*',
            d4: '*', f4: '*',
            d3: '*', e3: '*', f3: '*',
          },
          highlights: ['d5', 'e5', 'f5', 'd4', 'f4', 'd3', 'e3', 'f3']
        },
        {
          type: 'list',
          items: [
            'Moves **one square** in any direction (horizontally, vertically, or diagonally)',
            'Cannot move to a square that is **attacked** by an enemy piece',
            'Can participate in **castling** (a special move with the Rook)',
            'The game ends when the King is **checkmated** — trapped with no escape from attack',
          ]
        },
        {
          type: 'text',
          value: '### Piece Values Summary'
        },
        {
          type: 'table',
          headers: ['Piece', 'Symbol', 'Value', 'Movement'],
          rows: [
            ['Pawn', '♙', '1 point', 'Forward one square (two on first move), captures diagonally'],
            ['Knight', '♘', '3 points', 'L-shape (2+1), can jump over pieces'],
            ['Bishop', '♗', '3 points', 'Diagonally any number of squares'],
            ['Rook', '♖', '5 points', 'Horizontally or vertically any number of squares'],
            ['Queen', '♕', '9 points', 'Any direction, any number of squares'],
            ['King', '♔', 'Priceless!', 'One square in any direction'],
          ]
        },
        {
          type: 'tip',
          value: 'Even though the Queen is the most powerful piece, the King is the most important. Protect your King and attack the opponent\'s — that\'s the essence of chess!'
        }
      ]
    },
  ]
}
