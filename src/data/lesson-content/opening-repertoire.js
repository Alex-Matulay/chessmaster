export const lessonContent = {
  slug: 'opening-repertoire',
  sections: [
    {
      id: 'what-is-a-repertoire',
      title: 'What is an Opening Repertoire?',
      section: 'Repertoire Basics',
      content: [
        {
          type: 'definition',
          term: 'Opening Repertoire',
          value: 'A personal collection of openings that you study, practice, and play consistently. Instead of improvising every game, you have a prepared plan for what to play as White and how to respond as Black against the most common first moves.'
        },
        {
          type: 'text',
          value: 'Having a repertoire is like having a roadmap for the first phase of the game. Without one, you are making decisions from scratch every time, which wastes mental energy and leads to unfamiliar positions. With a repertoire, you reach positions you **understand** and have **practiced**, giving you a significant advantage over unprepared opponents.'
        },
        {
          type: 'text',
          value: '### Why You Need a Repertoire'
        },
        {
          type: 'list',
          items: [
            '**Consistency** — you reach familiar positions game after game, building deep understanding',
            '**Confidence** — knowing your openings reduces anxiety and lets you focus on playing good moves',
            '**Efficiency** — you save study time by focusing on a small set of openings rather than trying to learn everything',
            '**Pattern recognition** — repeatedly playing the same structures helps you recognize tactics and plans faster',
          ]
        },
        {
          type: 'text',
          value: '### Tips on Choosing Your Openings'
        },
        {
          type: 'list',
          items: [
            '**Pick openings based on principles, not tricks** — choose openings that develop pieces naturally and control the center',
            '**Keep it simple** — as a beginner, one system as White and one response as Black against each major first move is enough',
            '**Play what you enjoy** — if you like attacking, choose aggressive openings; if you like strategy, choose positional ones',
            '**Stick with your choices** — it takes many games to truly learn an opening, so resist the urge to switch constantly',
          ]
        },
        {
          type: 'tip',
          value: 'You do not need to memorize 20 moves of theory. A good beginner repertoire means knowing the first 4-6 moves and understanding the plans behind them. That is what this lesson will teach you.'
        }
      ]
    },
    {
      id: 'opening-principles',
      title: 'Opening Principles',
      section: 'Repertoire Basics',
      content: [
        {
          type: 'text',
          value: 'Before diving into specific openings, you need to understand the universal principles that guide good opening play. No matter which opening you choose, these rules will help you reach a solid position out of the opening.'
        },
        {
          type: 'list',
          items: [
            '**Control the center** — place pawns on e4/d4 (as White) or e5/d5 (as Black) to control the most important squares on the board',
            '**Develop your pieces** — bring Knights and Bishops out to active squares early; they do nothing sitting on the back rank',
            '**Castle early** — get your King to safety and connect your Rooks, ideally within the first 6-8 moves',
            '**Do not move the same piece twice** — unless there is a concrete reason (like avoiding a capture), each move should develop a new piece',
            '**Do not bring the Queen out too early** — the Queen is easily chased by your opponent\'s developing moves, wasting your time',
            '**Connect your Rooks** — once all minor pieces are developed and the King has castled, your Rooks should see each other along the back rank',
          ]
        },
        {
          type: 'board',
          caption: 'Ideal piece development after 5-6 moves — White has castled, developed Knights and Bishops, and controls the center',
          position: {
            a1: 'R', c1: 'B', d1: 'Q', f1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P', g1: 'K',
            e4: 'P', f3: 'N', c4: 'B', c3: 'N',
            e5: 'p', c6: 'n', f6: 'n',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', f8: 'r', g8: 'k',
          }
        },
        {
          type: 'text',
          value: 'In the position above, both sides have followed the opening principles well. White has played 1.e4, developed both Knights (Nf3 and Nc3), developed a Bishop (Bc4), and castled kingside. Black has responded with 1...e5, developed both Knights (Nc6 and Nf6), and castled. Both sides are ready for the middlegame.'
        },
        {
          type: 'tip',
          value: 'If you ever forget your preparation, fall back on these principles. A position where all your pieces are developed, your King is castled, and you control the center will almost always be playable, even if you did not follow any specific opening theory.'
        }
      ]
    },
    {
      id: 'white-e4-system',
      title: 'Your White Repertoire: 1.e4',
      section: 'Playing White',
      content: [
        {
          type: 'text',
          value: 'As a beginner, **1.e4** is the best first move to learn. It immediately occupies the center, opens lines for your Queen and Bishop, and leads to open, tactical positions where you can practice your attacking skills. Bobby Fischer famously called 1.e4 "best by test."'
        },
        {
          type: 'board',
          caption: 'After 1.e4 — White occupies the center and opens diagonals for the Queen and Bishop',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e4: 'P',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'After 1.e4, Black\'s two most common responses are **1...e5** and **1...c5** (the Sicilian Defense). We will build your White repertoire to handle both of these confidently. Your main weapon against 1...e5 is the **Italian Game**.'
        },
        {
          type: 'text',
          value: 'The Italian Game arises after **1.e4 e5 2.Nf3 Nc6 3.Bc4**. White develops naturally, aims the Bishop at the vulnerable f7 square, and prepares to castle. This is the ideal opening for beginners — principled, aggressive, and full of plans you can understand.'
        },
        {
          type: 'board',
          caption: 'The Italian Game after 1.e4 e5 2.Nf3 Nc6 3.Bc4 — your main weapon as White',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e4: 'P', f3: 'N', c4: 'B',
            e5: 'p', c6: 'n',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'list',
          items: [
            '**Against 1...e5** — play the Italian Game (2.Nf3 Nc6 3.Bc4), then choose between 4.d3 (quiet) or 4.c3 followed by d4 (aggressive)',
            '**Against 1...c5** — we cover this in the next section with the Closed Sicilian',
            '**Against other moves** (1...e6, 1...d5, 1...d6) — simply develop naturally with Nf3, Bc4 or Bb5, and castle; your principles will carry you through',
          ]
        },
        {
          type: 'tip',
          value: 'The Italian Game is one of the most important openings in chess. If you study only one opening as White, make it this one. It teaches development, center control, and attacking play all at once.'
        }
      ]
    },
    {
      id: 'handling-sicilian',
      title: 'Facing the Sicilian: 2.Nc3',
      section: 'Playing White',
      content: [
        {
          type: 'text',
          value: 'After **1.e4 c5**, Black has played the Sicilian Defense — the most popular response to 1.e4 at all levels. The Open Sicilian (2.Nf3 followed by 3.d4) leads to extremely complex positions that require heavy memorization. As a beginner, there is a much better approach: the **Closed Sicilian** with **2.Nc3**.'
        },
        {
          type: 'board',
          caption: 'After 1.e4 c5 2.Nc3 — the Closed Sicilian, a practical choice for beginners',
          position: {
            a1: 'R', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e4: 'P', c3: 'N',
            c5: 'p',
            a7: 'p', b7: 'p', d7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'The Closed Sicilian avoids the massive theory of the Open Sicilian and gives White a clear, easy-to-follow plan. The typical setup involves **f4**, **g3**, **Bg2**, **Nf3** (or Nge2), and **0-0**, building a strong kingside formation before launching an attack.'
        },
        {
          type: 'text',
          value: '### Key Plans in the Closed Sicilian'
        },
        {
          type: 'list',
          items: [
            '**f4** — supports the e4 pawn and prepares a kingside pawn advance; also opens the f-file after a future f5',
            '**g3 and Bg2** — the fianchettoed Bishop controls the long diagonal and supports the center from a distance',
            '**Castle kingside** — get the King safe and bring the Rook toward the f-file',
            '**Push f5 at the right moment** — this pawn break opens lines toward Black\'s King and is the main attacking idea',
            '**Avoid d4** — unlike the Open Sicilian, you keep the position closed and play on the kingside instead',
          ]
        },
        {
          type: 'tip',
          value: 'The Closed Sicilian is low-maintenance but effective. You play the same setup regardless of what Black does, which means less memorization and more time to focus on your middlegame plans. Many strong players use this system even at the tournament level.'
        }
      ]
    },
    {
      id: 'black-vs-e4',
      title: 'Your Black Repertoire vs 1.e4',
      section: 'Playing Black',
      content: [
        {
          type: 'text',
          value: 'When White opens with **1.e4**, we recommend responding with **1...e5**. This is the most classical and principled reply — you immediately contest the center and open lines for your Bishop and Queen. It leads to open positions where both sides develop naturally.'
        },
        {
          type: 'board',
          caption: 'After 1.e4 e5 — Black matches White in the center',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e4: 'P',
            e5: 'p',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'The most common continuation is **2.Nf3 Nc6 3.Bc4** (the Italian Game) or **3.Bb5** (the Ruy Lopez). Against the Italian Game, your main response is the **Giuoco Piano** with **3...Bc5**, developing the Bishop to an active diagonal and creating a symmetrical, balanced position.'
        },
        {
          type: 'board',
          caption: 'The Giuoco Piano after 1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 — a solid and active response for Black',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e4: 'P', f3: 'N', c4: 'B',
            c5: 'b', e5: 'p', c6: 'n',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'list',
          items: [
            '**3...Bc5 (Giuoco Piano)** — your main response against the Italian; develop naturally with ...Nf6, ...d6, and castle kingside',
            '**Against the Ruy Lopez (3.Bb5)** — play 3...a6 4.Ba4 Nf6, the Morphy Defense, which is the most solid and popular response',
            '**Against the King\'s Gambit (2.f4)** — decline with 2...Bc5 or accept with 2...exf4; both are fine for beginners',
            '**Against other moves** — simply develop your pieces naturally: ...Nf6, ...Bc5 or ...Be7, and castle',
          ]
        },
        {
          type: 'tip',
          value: 'Playing 1...e5 means you will face the Italian Game often. Study the Italian from both sides — as White you are the attacker, and as Black you learn how to defend and counterattack. This dual perspective will accelerate your improvement.'
        }
      ]
    },
    {
      id: 'black-vs-d4',
      title: 'Your Black Repertoire vs 1.d4',
      section: 'Playing Black',
      content: [
        {
          type: 'text',
          value: 'When White opens with **1.d4**, we recommend the classical response **1...d5**. Just like 1...e5 against 1.e4, this directly contests the center and follows opening principles. It leads to solid, strategic positions where Black has a firm foothold in the center.'
        },
        {
          type: 'board',
          caption: 'After 1.d4 d5 — Black stakes an equal claim in the center',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d4: 'P',
            d5: 'p',
            a7: 'p', b7: 'p', c7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'White\'s most common second move is **2.c4**, the Queen\'s Gambit. This is not a true gambit — if Black captures with 2...dxc4, White can easily recover the pawn. Instead, we recommend the **Queen\'s Gambit Declined** with **2...e6**, solidly defending the d5 pawn and preparing to develop the dark-squared Bishop.'
        },
        {
          type: 'board',
          caption: 'Queen\'s Gambit Declined after 1.d4 d5 2.c4 e6 — a rock-solid response for Black',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            c4: 'P', d4: 'P',
            d5: 'p', e6: 'p',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'After 2...e6, Black\'s typical plan is to develop with **...Nf6**, **...Be7**, **...0-0**, and then look for the freeing move **...c5** or **...dxc4** followed by expanding on the queenside. The Queen\'s Gambit Declined has been trusted by World Champions for over a century.'
        },
        {
          type: 'list',
          items: [
            '**2...e6 (QGD)** — your main response to the Queen\'s Gambit; solid, reliable, and principled',
            '**If White plays 2.Nf3 instead of 2.c4** — continue with 2...Nf6 and develop naturally; you can still aim for a ...e6 setup',
            '**If White plays 2.Bf4 (London System)** — play 2...Nf6 3...e6 4...c5, challenging the center and developing actively',
            '**Key principle** — in d4 openings, Black should always look for the ...c5 break to challenge White\'s center',
          ]
        },
        {
          type: 'tip',
          value: 'The Queen\'s Gambit Declined is one of the most reliable openings in chess history. It may look passive at first, but it gives Black a solid structure and the chance to counterattack in the middlegame. Trust the process!'
        }
      ]
    },
    {
      id: 'building-habits',
      title: 'Building Good Opening Habits',
      section: 'Practical Tips',
      content: [
        {
          type: 'text',
          value: 'Knowing which openings to play is only half the battle. How you study and practice your repertoire matters just as much. Here are the habits that will help you get the most out of your opening preparation.'
        },
        {
          type: 'text',
          value: '### Do Not Memorize Too Many Moves'
        },
        {
          type: 'text',
          value: 'One of the biggest mistakes beginners make is trying to memorize long sequences of moves. At the beginner level, your opponent will rarely play the "main line" moves anyway. Memorizing 15 moves of theory is pointless if your opponent deviates on move 4. Instead, **learn the first 4-6 moves and focus on understanding the plans behind them.**'
        },
        {
          type: 'text',
          value: '### Focus on Understanding Plans, Not Memorizing Sequences'
        },
        {
          type: 'list',
          items: [
            '**Know the typical pawn structures** — each opening leads to recognizable pawn formations; learn what plans suit each structure',
            '**Understand piece placement** — where do your Knights, Bishops, and Rooks belong in your chosen opening?',
            '**Learn the key pawn breaks** — every opening has a critical pawn push (like ...d5 or ...c5) that activates your position',
            '**Study the middlegame, not just the opening** — understanding what to do after the opening matters more than memorizing the moves leading to it',
          ]
        },
        {
          type: 'text',
          value: '### Review Your Games'
        },
        {
          type: 'text',
          value: 'After every game, spend a few minutes looking at the opening phase. Ask yourself these questions:'
        },
        {
          type: 'list',
          items: [
            '**Did I follow my repertoire?** If not, why did I deviate?',
            '**Where did my opponent leave the book?** This tells you what you need to prepare for next time',
            '**Was my position good after the opening?** If you came out of the opening with developed pieces and a safe King, your opening was a success',
            '**What went wrong?** If you got a bad position, figure out which move was the mistake and learn the correct idea',
          ]
        },
        {
          type: 'tip',
          value: 'Spend 80% of your study time on tactics and endgames, and only 20% on openings. At the beginner level, games are decided by tactics, not by opening theory. A sound repertoire that you understand is worth far more than memorized lines you do not understand.'
        }
      ]
    },
    {
      id: 'repertoire-summary',
      title: 'Your Complete Repertoire Summary',
      section: 'Practical Tips',
      content: [
        {
          type: 'text',
          value: 'Here is your complete beginner repertoire at a glance. This table covers every major situation you will encounter and tells you exactly what to play. Print it out, save it, or keep it handy until these responses become second nature.'
        },
        {
          type: 'table',
          headers: ['Situation', 'Your Move', 'Opening Name'],
          rows: [
            ['As White (first move)', '1.e4', 'King\'s Pawn Opening'],
            ['White vs 1...e5', '2.Nf3 Nc6 3.Bc4', 'Italian Game'],
            ['White vs 1...c5 (Sicilian)', '2.Nc3', 'Closed Sicilian'],
            ['White vs other Black replies', 'Develop naturally: Nf3, Bc4, 0-0', 'General principles'],
            ['As Black vs 1.e4', '1...e5', 'Classical response'],
            ['Black vs Italian (3.Bc4)', '3...Bc5', 'Giuoco Piano'],
            ['Black vs Ruy Lopez (3.Bb5)', '3...a6', 'Morphy Defense'],
            ['As Black vs 1.d4', '1...d5', 'Classical response'],
            ['Black vs Queen\'s Gambit (2.c4)', '2...e6', 'Queen\'s Gambit Declined'],
            ['Black vs London System (2.Bf4)', '2...Nf6 3...e6 4...c5', 'Active development'],
          ]
        },
        {
          type: 'text',
          value: 'This repertoire is built entirely on **classical principles**: occupy the center, develop your pieces, castle early, and play solidly. As you improve and gain experience, you can gradually expand your repertoire by adding new variations or switching to more advanced openings. But this foundation will serve you well for hundreds of games.'
        },
        {
          type: 'list',
          items: [
            '**As White** — play 1.e4 and aim for the Italian Game; against the Sicilian, play the Closed Sicilian with 2.Nc3',
            '**As Black vs 1.e4** — play 1...e5 and know the Giuoco Piano (3...Bc5) against the Italian',
            '**As Black vs 1.d4** — play 1...d5 and decline the Queen\'s Gambit with 2...e6',
            '**When in doubt** — follow the opening principles: control the center, develop pieces, castle early',
          ]
        },
        {
          type: 'tip',
          value: 'A simple, well-understood repertoire beats a complex one you barely know. Master these openings first, and you will have a solid foundation that can last you through years of improvement. Good luck in your games!'
        }
      ]
    },
  ]
}
