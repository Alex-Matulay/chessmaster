export const lessonContent = {
  slug: 'king-and-pawn-endings',
  sections: [
    {
      id: 'the-rule-of-the-square',
      title: 'The Rule of the Square',
      section: 'Fundamentals',
      content: [
        {
          type: 'text',
          value: 'The **Rule of the Square** is one of the most practical tools in King and Pawn endings. It lets you instantly determine whether a King can catch a passed pawn without needing to calculate every move.'
        },
        {
          type: 'definition',
          term: 'The Rule of the Square',
          value: 'Draw an imaginary square from the pawn to its promotion square, extending sideways by the same number of ranks. If the opposing King can step **inside this square** on its turn, it can catch the pawn. If not, the pawn will promote.'
        },
        {
          type: 'board',
          caption: 'White pawn on a5. The "square" stretches from a5 to a8 to e8 to e5. Black King on g7 is outside the square — the pawn promotes!',
          position: {
            a5: 'P',
            g7: 'k',
            a6: '*', a7: '*', a8: '*',
          },
          highlights: ['a5', 'a6', 'a7', 'a8', 'b8', 'c8', 'd8', 'e8', 'b5', 'c5', 'd5', 'e5', 'b6', 'c6', 'd6', 'e6', 'b7', 'c7', 'd7', 'e7']
        },
        {
          type: 'text',
          value: 'In the diagram above, the White pawn on a5 needs only 3 moves to promote (a5-a6-a7-a8). The square extends from a5 to e5 to e8 to a8. The Black King on g7 is **outside** this square, so even with Black to move, the King cannot catch the pawn in time.'
        },
        {
          type: 'board',
          caption: 'Now the Black King is on d7 — inside the square. If it is Black\'s turn, the King catches the pawn.',
          position: {
            a5: 'P',
            d7: 'k',
            a6: '*', a7: '*', a8: '*',
          },
          highlights: ['a5', 'b5', 'c5', 'd5', 'e5', 'b6', 'c6', 'd6', 'e6', 'b7', 'c7', 'd7', 'e7', 'b8', 'c8', 'd8', 'e8', 'a6', 'a7', 'a8']
        },
        {
          type: 'text',
          value: 'Here the Black King on d7 is **inside** the square. If it is Black\'s move, the King can approach and eventually capture or block the pawn. This quick visual check saves you from counting move-by-move.'
        },
        {
          type: 'tip',
          value: 'The Rule of the Square works for any passed pawn. Always check the square before deciding whether to push a pawn or use your King. Remember: if it is the pawn\'s side to move, advance the pawn one square first, then draw the square from the pawn\'s new position.'
        }
      ]
    },
    {
      id: 'opposition',
      title: 'Opposition',
      section: 'Fundamentals',
      content: [
        {
          type: 'text',
          value: 'Opposition is the single most important concept in King and Pawn endings. When two Kings face each other with one square between them, the player who does **not** have to move has the **opposition** — a critical advantage.'
        },
        {
          type: 'definition',
          term: 'Opposition',
          value: 'A position where two Kings stand on the same rank, file, or diagonal with one square between them. The side that does NOT have to move holds the opposition, because the opponent must step aside, granting access to key squares.'
        },
        {
          type: 'board',
          caption: 'Direct opposition on the e-file. If it is Black to move, White has the opposition — Black must step aside.',
          position: {
            e4: 'K',
            e6: 'k',
          },
          highlights: ['e4', 'e5', 'e6']
        },
        {
          type: 'text',
          value: 'In the diagram, the Kings face each other on the e-file with one square between them. If it is **Black to move**, Black must step aside (to d6, f6, d5, or f5), and White can advance to e5, gaining ground. White "has the opposition."'
        },
        {
          type: 'board',
          caption: 'Opposition in action: White King on e5 and pawn on e4 vs Black King on e7. White to move loses the opposition; Black to move lets White break through.',
          position: {
            e5: 'K',
            e4: 'P',
            e7: 'k',
          },
          highlights: ['e5', 'e6', 'e7']
        },
        {
          type: 'text',
          value: 'When escorting a pawn, opposition often determines whether you can promote. With the Kings facing off as above and **Black to move**, Black must yield (e.g., ...Kd7 or ...Kf7), and White plays Kd6 or Kf6, keeping the pawn protected from ahead. If it were **White to move**, White cannot make progress without losing ground.'
        },
        {
          type: 'tip',
          value: 'A simple rule of thumb: **the King should march ahead of its pawn**, not behind it. Lead with the King, use opposition to force the enemy King aside, and only then push the pawn forward.'
        }
      ]
    },
    {
      id: 'key-squares',
      title: 'Key Squares',
      section: 'Fundamentals',
      content: [
        {
          type: 'text',
          value: 'Every pawn has a set of **key squares** — squares that, if the friendly King reaches them, guarantee the pawn will promote regardless of the opponent\'s play. Knowing these squares lets you evaluate a position instantly.'
        },
        {
          type: 'definition',
          term: 'Key Squares',
          value: 'The critical squares in front of a pawn. If the stronger side\'s King occupies one of these squares, the pawn will promote by force. For a pawn that has not yet crossed the midpoint, the key squares are **two ranks ahead** of the pawn, on the same file and the two adjacent files.'
        },
        {
          type: 'board',
          caption: 'Pawn on e4: the key squares are d6, e6, and f6 (two ranks ahead). If the White King reaches any of these squares, the pawn promotes.',
          position: {
            e4: 'P',
            d6: '*', e6: '*', f6: '*',
          },
          highlights: ['d6', 'e6', 'f6']
        },
        {
          type: 'text',
          value: 'For a pawn on the **4th rank or below**, the key squares are the three squares **two ranks** ahead. For a pawn on e4, those are d6, e6, and f6. Once the White King stands on any of these, the pawn promotes no matter what Black does.'
        },
        {
          type: 'board',
          caption: 'Pawn on e5: now the key squares shift to d6, e6, f6, d7, e7, and f7.',
          position: {
            e5: 'P',
            d6: '*', e6: '*', f6: '*',
            d7: '*', e7: '*', f7: '*',
          },
          highlights: ['d6', 'e6', 'f6', 'd7', 'e7', 'f7']
        },
        {
          type: 'text',
          value: 'As the pawn advances past the midpoint, **more key squares** appear. A pawn on the 5th rank has six key squares (the three squares on the 6th and 7th ranks). The closer the pawn gets to promotion, the easier it becomes.'
        },
        {
          type: 'tip',
          value: 'Rook pawns (a-file and h-file) are the exception. Because the King cannot go beyond the edge of the board, many rook pawn endings are drawn even when the stronger side has an extra pawn. Always be cautious with rook pawns!'
        }
      ]
    },
    {
      id: 'single-pawn-endings',
      title: 'Single Pawn Endings',
      section: 'Pawn Endings',
      content: [
        {
          type: 'text',
          value: 'King and single pawn versus King is the most fundamental endgame. Whether the pawn promotes or the game is drawn depends on the **position of the Kings** and whose turn it is to move.'
        },
        {
          type: 'board',
          caption: 'A winning position: White King on d6 ahead of the pawn. The King controls the key squares, and the pawn will promote.',
          position: {
            d6: 'K',
            d4: 'P',
            e8: 'k',
          },
          highlights: ['c7', 'd7', 'e7']
        },
        {
          type: 'text',
          value: 'When the White King stands **ahead of its pawn** and controls the key squares, promotion is guaranteed. Here, White plays Kc7 or Ke7 depending on Black\'s reply, always staying ahead of the pawn.'
        },
        {
          type: 'board',
          caption: 'A drawn position: White King behind the pawn on e1, pawn on e4, Black King on e6. Black maintains the opposition and draws.',
          position: {
            e2: 'K',
            e4: 'P',
            e6: 'k',
          },
          highlights: ['e2', 'e4', 'e6']
        },
        {
          type: 'text',
          value: 'When the defending King stands **directly in front of the pawn** and the attacking King is behind or beside the pawn, the game is often drawn. The defender uses opposition to block the King from reaching the key squares.'
        },
        {
          type: 'list',
          items: [
            '**King ahead of the pawn** = almost always winning',
            '**King beside or behind the pawn** = often drawn (if the defender plays correctly)',
            '**Rook pawns** (a or h file) are drawn if the defending King reaches the corner, because the attacking King gets trapped on the edge',
          ]
        },
        {
          type: 'tip',
          value: 'When you have the extra pawn, activate your King first! Push it toward the key squares before advancing the pawn. When defending, head straight for the square in front of the pawn and use opposition.'
        }
      ]
    },
    {
      id: 'passed-pawns',
      title: 'Passed Pawns',
      section: 'Pawn Endings',
      content: [
        {
          type: 'text',
          value: 'A **passed pawn** is a pawn with no opposing pawns blocking its path or guarding the squares in front of it. Passed pawns are enormously powerful in the endgame because they threaten to promote.'
        },
        {
          type: 'definition',
          term: 'Passed Pawn',
          value: 'A pawn that has no enemy pawns on its file or on the adjacent files ahead of it. No opposing pawn can block or capture it — only the enemy King or pieces can stop it.'
        },
        {
          type: 'board',
          caption: 'White\'s d5 pawn is a passed pawn — no Black pawns on the c, d, or e files can stop it. The e5 pawn is NOT passed because Black has a pawn on f7.',
          position: {
            d5: 'P', e5: 'P', a2: 'P',
            a7: 'p', f7: 'p', h7: 'p',
            e1: 'K', e8: 'k',
          },
          highlights: ['d5', 'd6', 'd7', 'd8']
        },
        {
          type: 'text',
          value: 'The great endgame teacher Aron Nimzowitsch taught that a passed pawn must be **advanced** and **supported**. His rule: "A passed pawn is a criminal that must be kept under lock and key." For the defender, restraining and blockading passed pawns is essential.'
        },
        {
          type: 'list',
          items: [
            '**Create** passed pawns by exchanging or advancing pawns',
            '**Support** passed pawns with your King — escort them from behind or beside',
            '**Blockade** enemy passed pawns by placing your King directly in front of them',
            '**Connected passed pawns** (two passed pawns on adjacent files) are extremely powerful and often unstoppable',
          ]
        },
        {
          type: 'board',
          caption: 'Connected passed pawns on c5 and d5 supported by the White King. These two pawns together are very difficult to stop.',
          position: {
            c5: 'P', d5: 'P',
            d4: 'K',
            b7: 'k',
          },
          highlights: ['c5', 'c6', 'c7', 'c8', 'd5', 'd6', 'd7', 'd8']
        },
        {
          type: 'tip',
          value: 'In King and Pawn endings, a passed pawn often acts as a **decoy**. Push it forward to distract the enemy King, then use your own King to gobble up pawns on the other side of the board.'
        }
      ]
    },
    {
      id: 'pawn-breakthroughs',
      title: 'Pawn Breakthroughs',
      section: 'Pawn Endings',
      content: [
        {
          type: 'text',
          value: 'A **pawn breakthrough** is a tactical device where you sacrifice one or more pawns to create an unstoppable passed pawn. These breakthroughs can turn a seemingly equal position into a decisive win.'
        },
        {
          type: 'board',
          caption: 'The classic breakthrough position. White has pawns on a5, b5, c5 vs Black pawns on a7, b7, c7. White to move wins!',
          position: {
            a5: 'P', b5: 'P', c5: 'P',
            a7: 'p', b7: 'p', c7: 'p',
            h1: 'K', h8: 'k',
          },
          highlights: ['a5', 'b5', 'c5']
        },
        {
          type: 'text',
          value: 'In this famous position, White wins with **b6!** — a pawn sacrifice. After ...axb6 (or ...cxb6), one of the other White pawns races through:'
        },
        {
          type: 'list',
          items: [
            'After **b6! axb6**, White plays **c6!** and the c-pawn promotes — Black\'s b7 pawn is gone and the b-pawn covers c7',
            'After **b6! cxb6**, White plays **a6!** and the a-pawn promotes — same idea on the other side',
            'After **b6! a6**, White plays **c6! bxc6** then **b7** and the pawn promotes',
          ]
        },
        {
          type: 'text',
          value: 'The key idea is that the **middle pawn sacrifices itself** to deflect whichever Black pawn captures, allowing the other White pawn to break through. The Kings are too far away to intervene.'
        },
        {
          type: 'tip',
          value: 'Always look for breakthrough possibilities when both sides have pawn majorities on the same side of the board. Count the tempos carefully — even one extra move can make the difference between a win and a draw.'
        }
      ]
    },
    {
      id: 'outside-passed-pawn',
      title: 'Outside Passed Pawn',
      section: 'Pawn Endings',
      content: [
        {
          type: 'text',
          value: 'An **outside passed pawn** is a passed pawn that is far from the main group of pawns. It is one of the most decisive advantages in King and Pawn endings because it forces the enemy King to chase it, leaving the other pawns undefended.'
        },
        {
          type: 'definition',
          term: 'Outside Passed Pawn',
          value: 'A passed pawn located far away from the remaining pawns on the board. Its power lies in its ability to **decoy** the opposing King away from the main theater of battle.'
        },
        {
          type: 'board',
          caption: 'White\'s a-pawn is an outside passed pawn. Black must chase it with the King, and White\'s King then feasts on Black\'s kingside pawns.',
          position: {
            a5: 'P', f4: 'P', g3: 'P', h4: 'P',
            f5: 'p', g4: 'p', h5: 'p',
            c3: 'K', f7: 'k',
          },
          highlights: ['a5', 'a6', 'a7', 'a8']
        },
        {
          type: 'text',
          value: 'In the diagram, the kingside pawns are locked. White pushes the a-pawn: **a6, a7**. Black\'s King must run over to stop it (Ke7-d7-c7). Meanwhile, White\'s King marches to the kingside (Kd4-e5-f6) and captures Black\'s pawns. This is the classic outside passed pawn strategy:'
        },
        {
          type: 'list',
          items: [
            '**Step 1**: Push the outside passed pawn to force the enemy King away',
            '**Step 2**: March your King to the opposite side of the board',
            '**Step 3**: Capture undefended pawns while the enemy King is busy',
            '**Step 4**: Create a new passed pawn or promote with your extra material',
          ]
        },
        {
          type: 'tip',
          value: 'When you have an outside passed pawn, do not rush to promote it. Use it as a **decoy** — push it just enough to pull the enemy King away, then pivot your own King to the other flank. Timing is everything.'
        }
      ]
    },
    {
      id: 'triangulation',
      title: 'Triangulation',
      section: 'Advanced Concepts',
      content: [
        {
          type: 'text',
          value: 'Triangulation is a subtle King maneuver used to **lose a tempo** — effectively passing the move to your opponent. By moving the King in a triangle (three moves to return to the same square), you reach the same position but with the opponent to move.'
        },
        {
          type: 'definition',
          term: 'Triangulation',
          value: 'A technique where the King moves in a triangle pattern (e.g., d3-e3-d2-d3) to reach the same position with the other side to move. This is used to gain the opposition or put the opponent in **zugzwang**.'
        },
        {
          type: 'board',
          caption: 'White needs to triangulate. From d4, White plays Kd3-e3-d4, returning to d4 but with Black to move.',
          position: {
            d4: 'K',
            d5: 'P',
            d6: 'k',
            c6: 'p',
          },
          highlights: ['d3', 'e3', 'd4']
        },
        {
          type: 'text',
          value: 'In this position, if it is White to move, White cannot make progress — Ke4 or Kc4 allows Black to maintain the opposition. But White can **triangulate**: **Kd3!** then after ...Kd7, **Ke3!** and after ...Kd6, **Kd4!** — the same position, but now it is Black\'s turn. Black must yield the opposition.'
        },
        {
          type: 'text',
          value: 'Triangulation works because the King can reach certain squares in **two different route lengths**. The King has more flexibility than the opponent, so it can "waste" a move while the opponent cannot. This is one of the deepest ideas in endgame play.'
        },
        {
          type: 'tip',
          value: 'Triangulation is possible because the King can sometimes reach the same square in either 1 move or 3 moves. Look for triangulation opportunities whenever you need to transfer the move to your opponent in a critical position.'
        }
      ]
    },
    {
      id: 'zugzwang',
      title: 'Zugzwang',
      section: 'Advanced Concepts',
      content: [
        {
          type: 'text',
          value: 'Zugzwang is a German word meaning "compulsion to move." It describes a position where the player whose turn it is to move would **prefer to pass** — every possible move worsens their position. In King and Pawn endings, zugzwang is extremely common and often decisive.'
        },
        {
          type: 'definition',
          term: 'Zugzwang',
          value: 'A position where the obligation to move is a disadvantage. The player to move has no good moves — every legal move makes their position worse. If they could "skip" their turn, they would be fine.'
        },
        {
          type: 'board',
          caption: 'Classic zugzwang: Black to move must step aside, letting the White King advance. If White were to move, it would be White in zugzwang.',
          position: {
            d5: 'K',
            d4: 'P',
            d6: 'k',
          },
          highlights: ['c7', 'e7', 'c6', 'e6']
        },
        {
          type: 'text',
          value: 'With **Black to move**, Black must play ...Kc6, ...Ke6, or ...Kc7/Ke7. In each case, White\'s King advances to a key square and the pawn promotes. Black is in zugzwang — any move loses. If it were White to move, pushing d5 is met by ...Kd7 and Black holds the draw.'
        },
        {
          type: 'board',
          caption: 'Mutual zugzwang: whoever has to move here is at a disadvantage. Both sides want to pass!',
          position: {
            e5: 'K',
            e4: 'P',
            e7: 'k',
          },
          highlights: ['e5', 'e6', 'e7']
        },
        {
          type: 'text',
          value: 'In **mutual zugzwang**, both sides would prefer not to move. If Black moves, White wins by maintaining the opposition and advancing. If White moves, Black draws by keeping the opposition. These positions are the reason opposition and triangulation matter so much.'
        },
        {
          type: 'tip',
          value: 'In King and Pawn endings, always ask yourself: "Would my opponent prefer to pass?" If the answer is yes, you have achieved zugzwang. Use opposition and triangulation to create these positions.'
        }
      ]
    },
    {
      id: 'practical-examples',
      title: 'Practical Examples',
      section: 'Advanced Concepts',
      content: [
        {
          type: 'text',
          value: 'Let us tie together all the concepts from this lesson with practical positions you are likely to encounter in real games. Mastering these patterns will give you a huge advantage in the endgame.'
        },
        {
          type: 'text',
          value: '### Example 1: King Race'
        },
        {
          type: 'board',
          caption: 'Both sides have a passed pawn. Use the Rule of the Square to determine who wins the race!',
          position: {
            a5: 'P', h4: 'p',
            c3: 'K', f6: 'k',
          },
          highlights: ['a5', 'a6', 'a7', 'a8', 'h4', 'h3', 'h2', 'h1']
        },
        {
          type: 'text',
          value: 'Both sides have a passed pawn racing to promote. The White pawn needs 3 moves (a6-a7-a8). The Black pawn also needs 3 moves (h3-h2-h1). But we must check: can the opposing King enter the square? White\'s King on c3 is **inside** the square of the h-pawn (h4-h1-d1-d4), so White catches it. Black\'s King on f6 is **outside** the square of the a-pawn (a5-a8-d8-d5), so Black cannot catch it. White wins!'
        },
        {
          type: 'text',
          value: '### Example 2: Opposition to Draw'
        },
        {
          type: 'board',
          caption: 'Black is down a pawn but can draw by taking the opposition. Black to move: ...Ke7! directly facing the White King.',
          position: {
            e5: 'K',
            e4: 'P',
            e8: 'k',
          },
          highlights: ['e5', 'e6', 'e7']
        },
        {
          type: 'text',
          value: 'Black to move plays **...Ke7!**, taking the opposition (Kings on e5 and e7 with one square between them). Now White must move: Kd5 is met by ...Kd7 (opposition again), Kf5 is met by ...Kf7. White can never outflank the Black King. The game is drawn.'
        },
        {
          type: 'text',
          value: '### Example 3: Winning with the Outside Passed Pawn'
        },
        {
          type: 'board',
          caption: 'White wins by advancing the a-pawn to lure the Black King away, then capturing on the kingside.',
          position: {
            a4: 'P', f2: 'P', g2: 'P',
            f7: 'p', g7: 'p',
            d3: 'K', e7: 'k',
          },
          highlights: ['a4', 'a5', 'a6', 'a7', 'a8']
        },
        {
          type: 'text',
          value: 'White plays **a5, a6** to force the Black King toward the queenside. Once the Black King goes to the a-file or b-file to stop the pawn, White\'s King marches to g7 via e4-f5-g6-g7, winning both Black pawns. The outside passed pawn serves as the perfect decoy.'
        },
        {
          type: 'text',
          value: '### Key Takeaways'
        },
        {
          type: 'list',
          items: [
            '**Activate your King early** in the endgame — it is a fighting piece, not a liability',
            '**Lead with the King**, not the pawn — get your King to the key squares before pushing the pawn',
            '**Use the Rule of the Square** to quickly assess pawn races',
            '**Fight for the opposition** when Kings are in direct confrontation',
            '**Create passed pawns** and use them as decoys to win material elsewhere',
            '**Look for zugzwang** — force your opponent into positions where every move is bad',
          ]
        },
        {
          type: 'tip',
          value: 'The endgame is where games are won and lost. Many players study openings for hours but neglect the endgame. Mastering King and Pawn endings will win you more games than memorizing any opening line!'
        }
      ]
    },
  ]
}
