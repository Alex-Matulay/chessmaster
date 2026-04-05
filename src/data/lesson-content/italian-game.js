export const lessonContent = {
  slug: 'italian-game',
  sections: [
    {
      id: 'why-play-the-italian',
      title: 'Why Play the Italian?',
      section: 'Introduction',
      content: [
        {
          type: 'text',
          value: 'The Italian Game is one of the oldest and most classical chess openings, dating back to the 16th century. It begins with **1.e4 e5 2.Nf3 Nc6 3.Bc4**, developing the Bishop to an aggressive diagonal aimed at Black\'s f7 pawn — the weakest point in Black\'s position at the start of the game.'
        },
        {
          type: 'board',
          caption: 'The Italian Game after 1.e4 e5 2.Nf3 Nc6 3.Bc4',
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
          type: 'text',
          value: 'The Italian Game is an excellent opening choice for players of all levels. It leads to rich, strategic positions while also offering tactical opportunities. Unlike some sharp openings that require memorizing long forcing lines, the Italian emphasizes **understanding plans and principles**.'
        },
        {
          type: 'list',
          items: [
            '**Natural development** — pieces go to their ideal squares following classical principles',
            '**Targets f7** — the Bishop on c4 puts immediate pressure on Black\'s weakest pawn',
            '**Flexible** — White can choose between quiet positional play or aggressive gambits',
            '**Rich middlegames** — leads to positions with plans for both sides, great for improving your chess',
            '**Used at all levels** — played by beginners learning development and by World Champions seeking an edge',
          ]
        },
        {
          type: 'tip',
          value: 'The Italian Game teaches you the fundamentals of opening play: control the center, develop your pieces, and create threats. Master this opening and you will build habits that serve you in every game.'
        }
      ]
    },
    {
      id: 'move-order-and-setup',
      title: 'Move Order and Setup',
      section: 'Introduction',
      content: [
        {
          type: 'text',
          value: 'The Italian Game arises after these three moves: **1.e4 e5 2.Nf3 Nc6 3.Bc4**. Let\'s walk through each move and understand why it is played.'
        },
        {
          type: 'definition',
          term: '1.e4 e5',
          value: 'Both sides stake a claim in the center. The e-pawns control the d5/f5 and d4/f4 squares respectively, and open lines for the Queens and Bishops.'
        },
        {
          type: 'board',
          caption: 'After 1.e4 e5 — both sides occupy the center',
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
          type: 'definition',
          term: '2.Nf3 Nc6',
          value: 'White develops a Knight to its best square, attacking the e5 pawn. Black defends e5 with the natural Nc6, which also develops a piece toward the center.'
        },
        {
          type: 'definition',
          term: '3.Bc4',
          value: 'The defining move of the Italian Game. The Bishop is developed to an active diagonal (a2-g8), aiming at f7. This is preferred over 3.Bb5 (the Ruy Lopez), which targets the Knight instead. The Italian Bishop directly eyes the f7 pawn.'
        },
        {
          type: 'text',
          value: 'After 3.Bc4, Black\'s most common responses are **3...Bc5** (the Giuoco Piano, meaning "Quiet Game") and **3...Nf6** (the Two Knights Defense). Each leads to very different types of positions.'
        },
        {
          type: 'table',
          headers: ['Black\'s Response', 'Name', 'Character'],
          rows: [
            ['3...Bc5', 'Giuoco Piano', 'Classical, strategic, balanced'],
            ['3...Nf6', 'Two Knights Defense', 'Sharp, tactical, counterattacking'],
            ['3...Be7', 'Hungarian Defense', 'Passive but solid'],
            ['3...d6', 'Paris Defense', 'Rare, somewhat cramped'],
          ]
        },
        {
          type: 'tip',
          value: 'After 3.Bc4, always be aware of the tactical idea **Ng5** targeting f7. Even if you do not play it immediately, the threat of jumping to g5 influences Black\'s decisions throughout the opening.'
        }
      ]
    },
    {
      id: 'giuoco-piano',
      title: 'Giuoco Piano',
      section: 'Main Lines',
      content: [
        {
          type: 'text',
          value: 'The Giuoco Piano ("Quiet Game" in Italian) arises after **1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5**. Both sides develop their Bishops to active diagonals, creating a symmetrical and classical position. The main continuation is **4.c3**, preparing d4 to build a strong pawn center.'
        },
        {
          type: 'board',
          caption: 'Giuoco Piano after 3...Bc5 — both Bishops eye the center',
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
          type: 'text',
          value: 'The key move for White is **4.c3**. This pawn move prepares **d4**, aiming to establish a powerful pawn center with pawns on d4 and e4. The typical continuation is **4.c3 Nf6 5.d4 exd4 6.cxd4 Bb4+ 7.Bd2** (or 7.Nc3).'
        },
        {
          type: 'board',
          caption: 'After 4.c3 Nf6 5.d4 exd4 6.cxd4 — White has the ideal pawn center',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
            a2: 'P', b2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d4: 'P', e4: 'P', f3: 'N', c4: 'B',
            c6: 'n', f6: 'n', c5: 'b',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', e8: 'k', h8: 'r',
          }
        },
        {
          type: 'text',
          value: '### White\'s Plan in the Giuoco Piano'
        },
        {
          type: 'list',
          items: [
            '**Build a strong pawn center** with d4 and e4, controlling key central squares',
            '**Develop quickly** — castle kingside, then bring the remaining pieces into play',
            '**Use the center pawns** to gain space and restrict Black\'s pieces',
            '**Attack on the kingside** — once the center is secure, shift pieces toward Black\'s King',
          ]
        },
        {
          type: 'tip',
          value: 'In the Giuoco Piano, do not rush the d4 push without preparation. Play **4.c3** first so that after ...exd4, you recapture with the c-pawn, maintaining two center pawns. Playing d4 without c3 gives you an isolated d-pawn instead.'
        }
      ]
    },
    {
      id: 'giuoco-pianissimo',
      title: 'Giuoco Pianissimo',
      section: 'Main Lines',
      content: [
        {
          type: 'text',
          value: 'The Giuoco Pianissimo ("Very Quiet Game") arises when White plays **4.d3** instead of 4.c3. This is a slower, more positional approach that has become extremely popular at the highest levels of chess, including being a favorite of World Champion Magnus Carlsen.'
        },
        {
          type: 'board',
          caption: 'Giuoco Pianissimo after 1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.d3',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d3: 'P', e4: 'P', f3: 'N', c4: 'B',
            c5: 'b', e5: 'p', c6: 'n',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'A typical continuation is **4.d3 Nf6 5.0-0 d6 6.c3**, where White castles first and keeps the option of playing d4 later. The idea is to build up slowly with moves like **a4, Re1, Nbd2, Nf1-g3**, creating a solid structure before launching any attack.'
        },
        {
          type: 'board',
          caption: 'A typical Pianissimo setup after 4.d3 Nf6 5.0-0 d6 6.c3 0-0',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', f1: 'R',
            a2: 'P', b2: 'P', f2: 'P', g1: 'K', g2: 'P', h2: 'P',
            c3: 'P', d3: 'P', e4: 'P', f3: 'N', c4: 'B',
            c5: 'b', d6: 'p', e5: 'p', c6: 'n', f6: 'n',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', f8: 'r', g8: 'k',
          }
        },
        {
          type: 'list',
          items: [
            '**Less theory to memorize** — the positions are strategic rather than forcing',
            '**White keeps all options open** — the d4 push can come later when the timing is right',
            '**Typical maneuver: Nbd2-f1-g3** — the Knight reroutes to g3 where it eyes f5 and h5',
            '**a4 and Re1** are standard moves to gain queenside space and support the e4 pawn',
            '**Long-term pressure** — White slowly builds up, making it hard for Black to find an active plan',
          ]
        },
        {
          type: 'tip',
          value: 'The Pianissimo is an excellent practical choice. The positions are rich and complex, but you can play them based on understanding rather than memorization. Focus on the Knight maneuver Nbd2-f1-g3 and placing your Rooks on e1 and d1.'
        }
      ]
    },
    {
      id: 'evans-gambit',
      title: 'Evans Gambit',
      section: 'Main Lines',
      content: [
        {
          type: 'text',
          value: 'The Evans Gambit is one of the most exciting openings in chess. After **1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5**, White plays the bold **4.b4!?**, sacrificing a pawn to gain rapid development and a strong pawn center.'
        },
        {
          type: 'board',
          caption: 'The Evans Gambit — 4.b4!? offering a pawn sacrifice',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
            a2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
            b4: 'P', e4: 'P', f3: 'N', c4: 'B',
            c5: 'b', e5: 'p', c6: 'n',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'After **4...Bxb4** (accepting the gambit), White continues with **5.c3**, forcing the Bishop to move again and preparing a massive d4 push. The main line runs **5...Ba5 6.d4 exd4 7.0-0**, where White has sacrificed a pawn but enjoys a commanding lead in development.'
        },
        {
          type: 'board',
          caption: 'After 4...Bxb4 5.c3 Ba5 6.d4 — White has a powerful center and open lines',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            c3: 'P', d4: 'P', e4: 'P', f3: 'N', c4: 'B',
            a5: 'b', e5: 'p', c6: 'n',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'text',
          value: '### What White Gets for the Pawn'
        },
        {
          type: 'list',
          items: [
            '**Rapid development** — White\'s pieces fly into the game while Black wastes time moving the Bishop repeatedly',
            '**A strong pawn center** — after c3 and d4, White dominates the center',
            '**Open lines for attack** — the b-file, the a3-f8 diagonal, and central files become available',
            '**Initiative** — Black must defend carefully or face a crushing attack',
          ]
        },
        {
          type: 'tip',
          value: 'The Evans Gambit is a fantastic weapon for aggressive players. Even if Black defends perfectly, White gets exciting attacking positions. The key is to develop as fast as possible after the gambit — do not try to win back the pawn immediately!'
        }
      ]
    },
    {
      id: 'two-knights-defense',
      title: 'Two Knights Defense',
      section: 'Main Lines',
      content: [
        {
          type: 'text',
          value: 'The Two Knights Defense arises after **1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6**. Instead of developing the Bishop symmetrically, Black counterattacks the e4 pawn immediately. This is a more aggressive response than 3...Bc5 and leads to sharp, tactical play.'
        },
        {
          type: 'board',
          caption: 'Two Knights Defense after 3...Nf6 — Black counterattacks e4',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e4: 'P', f3: 'N', c4: 'B',
            e5: 'p', c6: 'n', f6: 'n',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', e8: 'k', f8: 'b', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'White\'s most critical response is **4.Ng5**, heading straight for the f7 weakness. After **4...d5 5.exd5**, Black has a crucial choice. The main line is **5...Na5**, attacking the Bishop on c4 and accepting a slightly worse pawn structure for active piece play.'
        },
        {
          type: 'board',
          caption: 'After 4.Ng5 d5 5.exd5 Na5 — the main line of the Two Knights',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e4: 'P', g5: 'N', c4: 'B', d5: 'P',
            a5: 'n', e5: 'p', f6: 'n',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', e8: 'k', f8: 'b', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'An important alternative for White is **4.d3**, transposing into a Giuoco Pianissimo-style setup but against the Two Knights move order. This is a very popular modern choice that avoids the sharp 4.Ng5 lines.'
        },
        {
          type: 'definition',
          term: 'The Fried Liver Attack',
          value: 'After 4.Ng5 d5 5.exd5, if Black plays **5...Nxd5?!** instead of 5...Na5, White can play **6.Nxf7!?** (the Fried Liver Attack), sacrificing a Knight for a ferocious attack on the exposed Black King. While not fully sound at the highest level, it is deadly against unprepared opponents.'
        },
        {
          type: 'tip',
          value: 'If you face the Two Knights as White, be prepared for sharp tactics after 4.Ng5. If you prefer quieter play, 4.d3 is a perfectly good alternative. As Black, make sure you know the difference between 5...Na5 (safe) and 5...Nxd5 (risky Fried Liver territory)!'
        }
      ]
    },
    {
      id: 'common-traps',
      title: 'Common Traps to Watch For',
      section: 'Practical Play',
      content: [
        {
          type: 'text',
          value: 'The Italian Game is filled with tactical traps that can catch the unwary. Knowing these patterns will help you win quick games and avoid falling into them yourself.'
        },
        {
          type: 'text',
          value: '### Trap 1: The Legal\'s Mate Pattern'
        },
        {
          type: 'text',
          value: 'If Black develops the Bishop to g4 too early (pinning the Knight), White can sometimes sacrifice the Queen and deliver checkmate with minor pieces. After **1.e4 e5 2.Nf3 Nc6 3.Bc4 d6 4.Nc3 Bg4?! 5.h3 Bh5? 6.Nxe5! Bxd1?? 7.Bxf7+ Ke7 8.Nd5#** — checkmate!'
        },
        {
          type: 'board',
          caption: 'Legal\'s Mate — the final position after 8.Nd5# (checkmate)',
          position: {
            a1: 'R', c1: 'B', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P',
            c3: 'N', e5: 'N', h3: 'P',
            f7: 'B', d5: 'N',
            d1: 'b', e7: 'k', c6: 'n', d6: 'p',
            a7: 'p', b7: 'p', c7: 'p', g7: 'p', h7: 'p',
            a8: 'r', d8: 'q', f8: 'b', h8: 'r',
          }
        },
        {
          type: 'text',
          value: '### Trap 2: The f7 Fork Trick'
        },
        {
          type: 'text',
          value: 'In positions where Black neglects to castle, **Ng5** followed by **Nxf7** can fork the Queen and Rook. This pattern occurs frequently in the Italian and should always be on your radar.'
        },
        {
          type: 'text',
          value: '### Trap 3: The Noah\'s Ark Trap (for Black!)'
        },
        {
          type: 'text',
          value: 'Black can sometimes trap White\'s Bishop on c4 or b3 with a timely ...a6 and ...b5. If White is not careful about retreat squares for the Bishop, it can get caught and won. Always make sure your Italian Bishop has a safe escape route.'
        },
        {
          type: 'tip',
          value: 'The best way to avoid traps is to develop your pieces, castle early, and always ask yourself: "What is my opponent threatening?" Before making any move, look for checks, captures, and threats.'
        }
      ]
    },
    {
      id: 'middlegame-plans',
      title: 'Middlegame Plans',
      section: 'Practical Play',
      content: [
        {
          type: 'text',
          value: 'Understanding the typical middlegame plans in the Italian Game is more important than memorizing long move sequences. Here are the key strategic ideas for both sides.'
        },
        {
          type: 'text',
          value: '### White\'s Plans'
        },
        {
          type: 'list',
          items: [
            '**Kingside attack** — after establishing a center with d4 and e4, shift pieces to the kingside. The typical attacking setup includes Qe2 or Qb3, Rooks on d1 and e1, and a possible pawn storm with f4',
            '**The d4-d5 break** — in some positions, pushing d5 can open lines and drive away the Black Knight from c6, disrupting Black\'s coordination',
            '**Exploit the a2-g8 diagonal** — the Bishop on c4 (or b3 after retreating) can create lasting pressure against f7, especially if Black\'s King is still in the center',
            '**Nd5 outpost** — if Black plays ...a6 and ...b5, the d5 square often becomes available for a powerful Knight',
          ]
        },
        {
          type: 'text',
          value: '### Black\'s Plans'
        },
        {
          type: 'list',
          items: [
            '**Counterattack in the center** — Black should look for ...d5 to challenge White\'s pawn center at the right moment',
            '**Queenside play** — with ...a6, ...b5, and ...Bb7, Black can develop counterplay on the queenside',
            '**Piece activity** — Black should aim to complete development quickly and find active squares for the minor pieces',
            '**Trade off the Italian Bishop** — if Black can exchange the dangerous c4 Bishop, much of White\'s attacking potential disappears',
          ]
        },
        {
          type: 'table',
          headers: ['Variation', 'White\'s Main Plan', 'Black\'s Main Plan'],
          rows: [
            ['Giuoco Piano (4.c3)', 'Build strong d4+e4 center, kingside attack', 'Challenge center with ...d5, active piece play'],
            ['Giuoco Pianissimo (4.d3)', 'Slow buildup, Nbd2-f1-g3, Re1', 'Mirror development, seek ...d5 break'],
            ['Evans Gambit (4.b4)', 'Rapid development, open lines, attack f7', 'Hold the extra pawn, consolidate, return pawn for activity'],
            ['Two Knights (3...Nf6)', 'Exploit f7 weakness, maintain center', 'Counterattack, active pieces, ...d5'],
          ]
        },
        {
          type: 'tip',
          value: 'In the Italian Game middlegame, the player who controls the center usually has the advantage. Always think about pawn breaks (**d4** for White, **...d5** for Black) as the key to opening the position in your favor.'
        }
      ]
    },
    {
      id: 'model-games',
      title: 'Model Games',
      section: 'Practical Play',
      content: [
        {
          type: 'text',
          value: 'Studying model games is one of the best ways to internalize the plans and patterns of the Italian Game. Here are key positions from famous games that demonstrate the power of this opening.'
        },
        {
          type: 'text',
          value: '### The Evergreen Game (Anderssen vs Dufresne, 1852)'
        },
        {
          type: 'text',
          value: 'One of the most famous chess games ever played arose from the Evans Gambit. Adolf Anderssen sacrificed both Rooks and his Queen to deliver a brilliant checkmate. This game showcases the explosive attacking potential of the Italian Game when White gains a lead in development.'
        },
        {
          type: 'text',
          value: '**Key lesson:** When you have a big lead in development, look for sacrifices to open lines toward the enemy King. Pieces are worth less than checkmate!'
        },
        {
          type: 'text',
          value: '### Modern Grandmaster Play'
        },
        {
          type: 'text',
          value: 'In modern chess, the Giuoco Pianissimo (4.d3 lines) has become the weapon of choice at the top level. Players like Magnus Carlsen, Fabiano Caruana, and Anish Giri have demonstrated that even in quiet-looking Italian positions, White can build long-term pressure and grind down the opponent.'
        },
        {
          type: 'board',
          caption: 'A typical ideal Italian Game setup for White — pieces are fully developed and coordinated',
          position: {
            a1: 'R', c1: 'B', d1: 'Q', e1: 'R',
            a2: 'P', b3: 'B', f2: 'P', g2: 'P', h2: 'P', g1: 'K',
            c3: 'P', d3: 'P', e4: 'P', f3: 'N', g3: 'N', a4: 'P',
            c5: 'b', d6: 'p', e5: 'p', c6: 'n', f6: 'n',
            a6: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', f8: 'r', g8: 'k',
          }
        },
        {
          type: 'list',
          items: [
            '**White\'s Knight has rerouted** to g3 via Nbd2-f1-g3, eyeing f5',
            '**The Bishop retreated** to b3, maintaining pressure on the a2-g8 diagonal',
            '**a4 has been played** to gain queenside space and prevent ...b5',
            '**Both Rooks are connected** and ready to shift to open files',
          ]
        },
        {
          type: 'tip',
          value: 'To improve your Italian Game, play through complete master games in this opening. Pay attention to how strong players choose their piece placements, pawn breaks, and the moment they launch their attack.'
        }
      ]
    },
    {
      id: 'practice-positions',
      title: 'Practice Positions',
      section: 'Practical Play',
      content: [
        {
          type: 'text',
          value: 'Test your understanding of the Italian Game by studying these positions. For each one, think about what you would play and why before reading the explanation.'
        },
        {
          type: 'text',
          value: '### Position 1: The d4 Break'
        },
        {
          type: 'board',
          caption: 'White to play — should White push d4 here?',
          position: {
            a1: 'R', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
            a2: 'P', b2: 'P', f2: 'P', g2: 'P', h2: 'P',
            c3: 'P', e4: 'P', f3: 'N', c4: 'B',
            c5: 'b', e5: 'p', c6: 'n', f6: 'n',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', e8: 'k', h8: 'r',
          }
        },
        {
          type: 'text',
          value: '**Answer:** Yes! **d4** is strong here. After **d4 exd4 6.cxd4**, White has an ideal pawn center. The Bishop on c5 must retreat, and White can develop rapidly with 0-0, Nc3, and place Rooks on d1 and e1.'
        },
        {
          type: 'text',
          value: '### Position 2: Piece Coordination'
        },
        {
          type: 'board',
          caption: 'White to play in a Pianissimo structure — what is the best plan?',
          position: {
            a1: 'R', c1: 'B', d1: 'Q', f1: 'R',
            a2: 'P', b2: 'P', f2: 'P', g2: 'P', h2: 'P', g1: 'K',
            c3: 'P', d3: 'P', e4: 'P', f3: 'N', c4: 'B', d2: 'N',
            c5: 'b', d6: 'p', e5: 'p', c6: 'n', f6: 'n',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', f8: 'r', g8: 'k',
          }
        },
        {
          type: 'text',
          value: '**Answer:** White should continue the Knight maneuver with **Nf1** followed by **Ng3**. The Knight on g3 will eye the key f5 square and support a future kingside attack. Also consider **Bb3** to keep the Bishop safe while maintaining diagonal pressure.'
        },
        {
          type: 'text',
          value: '### Position 3: Recognizing Danger'
        },
        {
          type: 'board',
          caption: 'Black to play — White just moved Ng5. What should Black do?',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', f2: 'P', g2: 'P', h2: 'P',
            e4: 'P', g5: 'N', c4: 'B',
            e5: 'p', c6: 'n', f6: 'n',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', e8: 'k', f8: 'b', h8: 'r',
          }
        },
        {
          type: 'text',
          value: '**Answer:** Black should play **...d5!** immediately. This is the only good response to the Ng5 threat against f7. After **...d5 exd5**, Black can choose between **...Na5** (the safe main line) or **...Nxd5** (entering the risky Fried Liver). The key principle: when attacked on the flank, counterattack in the center!'
        },
        {
          type: 'tip',
          value: 'The best way to learn the Italian Game is to play it repeatedly in your own games. Start with one variation (the Pianissimo is a great choice), learn its plans, and gradually expand your repertoire to include the other lines.'
        }
      ]
    },
  ]
}
