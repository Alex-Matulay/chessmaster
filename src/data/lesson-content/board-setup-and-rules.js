export const lessonContent = {
  slug: 'board-setup-and-rules',
  sections: [
    {
      id: 'correct-board-orientation',
      title: 'Correct Board Orientation',
      section: 'Board Setup',
      content: [
        {
          type: 'text',
          value: 'Before placing a single piece, you need to make sure the board itself is oriented correctly. This is one of the most common mistakes beginners make, and it can throw off the entire game.'
        },
        {
          type: 'board',
          caption: 'An empty board oriented correctly -- notice the light square in each player\'s bottom-right corner',
          position: {
            // empty board
          }
        },
        {
          type: 'definition',
          term: 'The Golden Rule',
          value: 'The board must be placed so that each player has a **light-colored square in the bottom-right corner**. For White, this is the h1 square. For Black, this is the a8 square.'
        },
        {
          type: 'text',
          value: 'An easy way to remember: **"light on right."** If you look down at your side of the board, the corner square closest to your right hand should be a light square.'
        },
        {
          type: 'text',
          value: 'The board also has a specific coordinate system. The **files** (columns) are labeled **a through h** from left to right from White\'s perspective. The **ranks** (rows) are numbered **1 through 8** from White\'s side to Black\'s side.'
        },
        {
          type: 'tip',
          value: 'If you ever see a chess board where both players have a dark square in the bottom-right corner, the board is rotated 90 degrees. Simply turn it so the light square is on the right!'
        }
      ]
    },
    {
      id: 'placing-the-pieces',
      title: 'Placing the Pieces',
      section: 'Board Setup',
      content: [
        {
          type: 'text',
          value: 'Each player begins with **16 pieces**: 1 King, 1 Queen, 2 Rooks, 2 Bishops, 2 Knights, and 8 Pawns. Setting them up correctly is the first step in every chess game.'
        },
        {
          type: 'board',
          caption: 'The correct starting position with all 32 pieces placed',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'text',
          value: '**Step 1 -- Place the Rooks in the corners:**'
        },
        {
          type: 'text',
          value: 'White Rooks go on **a1** and **h1**. Black Rooks go on **a8** and **h8**. The Rooks always sit in the four corners of the board.'
        },
        {
          type: 'text',
          value: '**Step 2 -- Place the Knights next to the Rooks:**'
        },
        {
          type: 'text',
          value: 'White Knights go on **b1** and **g1**. Black Knights go on **b8** and **g8**. The Knights stand right beside the Rooks.'
        },
        {
          type: 'text',
          value: '**Step 3 -- Place the Bishops next to the Knights:**'
        },
        {
          type: 'text',
          value: 'White Bishops go on **c1** and **f1**. Black Bishops go on **c8** and **f8**. Each player has one Bishop on a light square and one on a dark square.'
        },
        {
          type: 'text',
          value: '**Step 4 -- Place the Queen on her own color:**'
        },
        {
          type: 'text',
          value: 'The White Queen goes on **d1** (a light square). The Black Queen goes on **d8** (a dark square). Remember: **"the Queen gets her color."**'
        },
        {
          type: 'text',
          value: '**Step 5 -- Place the King on the remaining square:**'
        },
        {
          type: 'text',
          value: 'The White King goes on **e1** and the Black King goes on **e8**. The King takes the last empty square on the back rank, right next to the Queen.'
        },
        {
          type: 'text',
          value: '**Step 6 -- Line up the Pawns:**'
        },
        {
          type: 'text',
          value: 'All 8 White Pawns fill up **rank 2** (a2 through h2). All 8 Black Pawns fill up **rank 7** (a7 through h7). The Pawns form a wall in front of the other pieces.'
        },
        {
          type: 'tip',
          value: 'A simple order to remember the back rank from left to right: **R-N-B-Q-K-B-N-R** (Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook). Notice it is symmetric except for the Queen and King in the center!'
        }
      ]
    },
    {
      id: 'common-setup-mistakes',
      title: 'Common Setup Mistakes',
      section: 'Board Setup',
      content: [
        {
          type: 'text',
          value: 'Even experienced players occasionally set up the board incorrectly. Here are the most common mistakes to watch out for:'
        },
        {
          type: 'definition',
          term: 'Swapped King and Queen',
          value: 'This is the **most common mistake**. Players put the King where the Queen should be and vice versa. Remember: **the Queen always starts on her own color** -- White Queen on a light square (d1), Black Queen on a dark square (d8).'
        },
        {
          type: 'board',
          caption: 'WRONG -- the King and Queen are swapped! The White Queen is on the dark square e1 instead of light square d1.',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'K', e1: 'Q', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'k', e8: 'q', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'definition',
          term: 'Wrong Board Orientation',
          value: 'If the board is rotated so that a **dark square** is in the bottom-right corner, the entire setup is wrong. Always check for **"light on right"** before placing any pieces.'
        },
        {
          type: 'definition',
          term: 'Swapped Bishops and Knights',
          value: 'Some beginners mix up where the Bishops and Knights go. Remember: **Knights stand next to the Rooks** in the corners, and **Bishops stand next to the Queen and King** in the center.'
        },
        {
          type: 'definition',
          term: 'Reversed Colors',
          value: 'Make sure White\'s pieces are on ranks 1 and 2 (the bottom) and Black\'s pieces are on ranks 7 and 8 (the top). White always starts at the bottom of the board.'
        },
        {
          type: 'tip',
          value: 'Before starting a game, do a quick three-point check: (1) Light square on the right? (2) Queen on her own color? (3) Rooks in the corners? If all three are correct, your setup is almost certainly right!'
        }
      ]
    },
    {
      id: 'taking-turns',
      title: 'Taking Turns',
      section: 'Rules of Play',
      content: [
        {
          type: 'text',
          value: 'Chess is a turn-based game with a strict alternating structure. Understanding how turns work is fundamental to playing correctly.'
        },
        {
          type: 'definition',
          term: 'White Moves First',
          value: '**White always makes the first move.** After that, players alternate turns -- White, Black, White, Black, and so on. You may never skip a turn or pass.'
        },
        {
          type: 'definition',
          term: 'One Move Per Turn',
          value: 'On each turn, a player must make **exactly one move**. You move one of your own pieces to a legal square. You cannot move two pieces in one turn (except during castling, which counts as a single King move).'
        },
        {
          type: 'text',
          value: 'There are a few important rules about making moves:'
        },
        {
          type: 'list',
          items: [
            '**You must move** -- you cannot skip your turn, even if every move available to you is bad',
            '**Touch-move rule** (in tournament play) -- if you touch a piece, you must move it (if a legal move exists)',
            '**Capturing is optional** -- you are never forced to capture an enemy piece (unlike checkers)',
            '**Illegal moves** -- you cannot make a move that leaves your own King in check',
          ]
        },
        {
          type: 'definition',
          term: 'Zugzwang',
          value: 'A German word meaning **"compulsion to move."** It describes a situation where a player would prefer to pass their turn because every available move makes their position worse. Since you cannot skip a turn in chess, being in zugzwang can be decisive!'
        },
        {
          type: 'tip',
          value: 'The fact that White moves first gives a small but real advantage. At the highest levels of chess, White wins slightly more often than Black. But for beginners, this advantage is negligible -- focus on learning the game rather than worrying about who goes first!'
        }
      ]
    },
    {
      id: 'check-and-checkmate',
      title: 'Check and Checkmate',
      section: 'Rules of Play',
      content: [
        {
          type: 'text',
          value: 'The ultimate goal of chess is to **checkmate** your opponent\'s King. Understanding check and checkmate is the most important part of learning the rules.'
        },
        {
          type: 'definition',
          term: 'Check',
          value: 'When a piece **directly attacks the enemy King**, the King is said to be "in check." The player whose King is in check **must** deal with the threat on their very next move. You are not allowed to leave your King in check.'
        },
        {
          type: 'board',
          caption: 'The Black King on e8 is in check from the White Queen on e5. Black must respond to this threat.',
          position: {
            e1: 'K', a1: 'R', h1: 'R',
            e5: 'Q',
            e8: 'k', a8: 'r', h8: 'r', d8: 'q',
            a7: 'p', b7: 'p', f7: 'p', g7: 'p', h7: 'p',
          }
        },
        {
          type: 'text',
          value: 'When your King is in check, you have **three possible ways** to escape:'
        },
        {
          type: 'list',
          items: [
            '**Move the King** to a safe square that is not attacked by any enemy piece',
            '**Block the check** by placing one of your own pieces between the attacker and your King',
            '**Capture the attacking piece** to remove the threat entirely',
          ]
        },
        {
          type: 'definition',
          term: 'Checkmate',
          value: 'When the King is in check and there is **no legal way to escape** -- the King cannot move to safety, no piece can block the attack, and the attacker cannot be captured -- the game is over. The player who delivers checkmate **wins the game**.'
        },
        {
          type: 'board',
          caption: 'Checkmate! The Black King on h8 is attacked by the White Queen on h7. The King has no escape and no piece can help.',
          position: {
            h7: 'Q', g6: 'K',
            h8: 'k',
          }
        },
        {
          type: 'text',
          value: 'In the diagram above, the Black King on h8 is attacked by the White Queen on h7. The King cannot move to g8 because the White Queen controls that square. It cannot move to g7 because the White King controls that square. There is no piece that can capture the Queen or block the check. This is **checkmate** -- White wins!'
        },
        {
          type: 'board',
          caption: 'Back-rank checkmate -- the White Rook on e8 checkmates the Black King trapped behind its own pawns',
          position: {
            e8: 'R', e1: 'K',
            f7: 'p', g7: 'p', h7: 'p',
            h8: 'k',
          }
        },
        {
          type: 'text',
          value: 'The **back-rank mate** shown above is one of the most common checkmate patterns. The Black King is trapped on h8 by its own pawns on f7, g7, and h7, and the White Rook delivers check on e8 with no escape.'
        },
        {
          type: 'tip',
          value: 'You do not have to say "check" out loud when you attack the opponent\'s King -- it is not required by the rules. However, many casual players do announce it as a courtesy. In tournament play, your opponent is expected to notice the check on their own.'
        }
      ]
    },
    {
      id: 'stalemate-and-draws',
      title: 'Stalemate and Draws',
      section: 'Rules of Play',
      content: [
        {
          type: 'text',
          value: 'Not every chess game ends with a winner. There are several ways a game can end in a **draw** (a tie), and understanding them is essential to playing correctly.'
        },
        {
          type: 'definition',
          term: 'Stalemate',
          value: 'When a player whose turn it is to move has **no legal moves** but their King is **not in check**, the game immediately ends in a draw. This is called stalemate. It is one of the most important rules in chess and catches many beginners by surprise!'
        },
        {
          type: 'board',
          caption: 'Stalemate! It is Black\'s turn, but the Black King on a8 has no legal moves and is NOT in check. The game is a draw.',
          position: {
            a6: 'Q', c7: 'K',
            a8: 'k',
          }
        },
        {
          type: 'text',
          value: 'In the diagram above, the Black King on a8 cannot move to a7 or b8 because the White Queen controls those squares, and it cannot move to b7 because the White King controls that square. However, the Black King is **not in check** -- the Queen is not directly attacking it. Since Black has no pieces other than the King and no legal moves, this is **stalemate** and the game is a draw.'
        },
        {
          type: 'text',
          value: 'Besides stalemate, there are several other ways a game can be drawn:'
        },
        {
          type: 'definition',
          term: 'Draw by Agreement',
          value: 'Both players can agree to a draw at any point during the game. One player offers a draw, and if the opponent accepts, the game ends. This is the most common type of draw in tournament chess.'
        },
        {
          type: 'definition',
          term: 'Threefold Repetition',
          value: 'If the **same position** occurs **three times** during a game (with the same player to move), either player can claim a draw. This often happens when pieces are shuffling back and forth with no progress being made.'
        },
        {
          type: 'definition',
          term: 'Fifty-Move Rule',
          value: 'If **50 consecutive moves** are made by both players without any pawn move or capture, either player can claim a draw. This rule prevents games from going on forever in positions where no progress is being made.'
        },
        {
          type: 'definition',
          term: 'Insufficient Material',
          value: 'The game is automatically drawn if neither player has enough pieces to deliver checkmate. For example: **King vs. King**, **King and Bishop vs. King**, or **King and Knight vs. King** are all automatic draws because checkmate is impossible.'
        },
        {
          type: 'table',
          headers: ['Draw Type', 'Condition', 'Who Claims It'],
          rows: [
            ['Stalemate', 'No legal moves, King not in check', 'Automatic -- game ends immediately'],
            ['Agreement', 'Both players consent', 'Either player offers, opponent accepts'],
            ['Threefold Repetition', 'Same position occurs 3 times', 'Either player can claim'],
            ['Fifty-Move Rule', '50 moves with no pawn move or capture', 'Either player can claim'],
            ['Insufficient Material', 'Neither side can checkmate', 'Automatic -- game ends immediately'],
          ]
        },
        {
          type: 'tip',
          value: 'If you are winning, be careful not to accidentally stalemate your opponent! Before making a move that restricts the enemy King, always check that your opponent still has at least one legal move. Many games have been thrown away by an accidental stalemate when a win was guaranteed.'
        }
      ]
    },
  ]
}
