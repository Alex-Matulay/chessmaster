export const lessonContent = {
  slug: 'queens-gambit',
  sections: [
    {
      id: 'the-gambit-idea',
      title: 'The Gambit Idea',
      section: 'Foundations',
      content: [
        {
          type: 'text',
          value: 'The Queen\'s Gambit is one of the oldest and most respected chess openings, beginning with **1.d4 d5 2.c4**. White offers the c-pawn as a "gambit" to lure Black\'s d-pawn away from the center. Despite its name, the Queen\'s Gambit is not a true gambit because White can almost always recover the pawn.'
        },
        {
          type: 'board',
          caption: 'The Queen\'s Gambit position after 1.d4 d5 2.c4 — White offers the c-pawn',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            c4: 'P', d4: 'P',
            d5: 'p',
            a7: 'p', b7: 'p', c7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'definition',
          term: 'Gambit',
          value: 'A chess opening in which a player sacrifices material (usually a pawn) to gain a positional advantage such as faster development, central control, or an attack. The Queen\'s Gambit is called a "gambit" because White offers the c-pawn, but White can usually win it back.'
        },
        {
          type: 'text',
          value: 'Black now faces a fundamental decision: accept the gambit by capturing with **2...dxc4**, or decline it by reinforcing the center. This choice defines the two main branches of the Queen\'s Gambit — the **Queen\'s Gambit Accepted (QGA)** and the **Queen\'s Gambit Declined (QGD)**.'
        },
        {
          type: 'tip',
          value: 'The Queen\'s Gambit has been played at the highest levels for centuries. World Champions from Lasker to Carlsen have relied on it. Understanding this opening will deepen your grasp of central pawn play and positional chess.'
        }
      ]
    },
    {
      id: 'why-2-c4',
      title: 'Why 2.c4?',
      section: 'Foundations',
      content: [
        {
          type: 'text',
          value: 'After **1.d4 d5**, both players have established a pawn in the center. White\'s next move, **2.c4**, is a strategic masterpiece. But what makes this move so strong?'
        },
        {
          type: 'definition',
          term: 'Central Control',
          value: 'The strategy of placing pawns and pieces to influence the four central squares: **e4, d4, e5, d5**. The player who controls the center can more easily maneuver pieces to both sides of the board.'
        },
        {
          type: 'text',
          value: 'The move 2.c4 challenges Black\'s d5 pawn, which is the anchor of Black\'s central presence. White\'s goals are:'
        },
        {
          type: 'list',
          items: [
            '**Challenge the center** — force Black to make a decision about the d5 pawn',
            '**Create pawn tension** — the c4 pawn attacks d5, and if Black captures, White can recapture or play e4 to build a strong center',
            '**Open lines** — the c-file and central diagonals may open for White\'s pieces',
            '**Gain space** — with pawns on d4 and c4, White claims more territory on the queenside and center',
          ]
        },
        {
          type: 'board',
          caption: 'White\'s c4 pawn attacks the d5 square, creating central tension',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            c4: 'P', d4: 'P',
            d5: 'p',
            c4: 'P',
            d5: 'x',
            a7: 'p', b7: 'p', c7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          },
          highlights: ['c4', 'd5']
        },
        {
          type: 'definition',
          term: 'Pawn Tension',
          value: 'A situation where two opposing pawns attack each other but neither has captured yet. Tension creates dynamic possibilities — the player who resolves the tension (by capturing or advancing) often determines the pawn structure for the rest of the game.'
        },
        {
          type: 'tip',
          value: 'Maintaining pawn tension is a key skill. Do not rush to capture or resolve tension. As long as the tension exists, your opponent must account for multiple possibilities, which limits their options.'
        }
      ]
    },
    {
      id: 'pawn-structure-basics',
      title: 'Pawn Structure Basics',
      section: 'Foundations',
      content: [
        {
          type: 'text',
          value: 'The Queen\'s Gambit leads to several characteristic pawn structures depending on how Black responds. Understanding these structures is essential because pawns cannot move backward — every pawn move permanently changes the position.'
        },
        {
          type: 'text',
          value: '### The Classical Center'
        },
        {
          type: 'text',
          value: 'If White achieves pawns on d4 and e4 (after Black exchanges on c4 and White plays e4), White has a **classical pawn center** — an ideal setup that controls key squares and supports piece activity.'
        },
        {
          type: 'board',
          caption: 'White\'s ideal classical center with pawns on d4 and e4',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d4: 'P', e4: 'P',
            d5: '*', e5: '*', c5: '*', f5: '*',
            a7: 'p', b7: 'p', c7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          },
          highlights: ['d5', 'e5', 'c5', 'f5']
        },
        {
          type: 'text',
          value: '### The QGD Structure'
        },
        {
          type: 'text',
          value: 'When Black plays **...e6** (declining the gambit), the resulting structure features a solid but somewhat passive pawn chain. Black\'s light-squared bishop is often blocked behind the e6 pawn — this is the famous "problem piece" of the QGD.'
        },
        {
          type: 'board',
          caption: 'Typical QGD pawn structure — Black\'s e6 pawn is solid but locks in the light-squared bishop',
          position: {
            a2: 'P', b2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            c4: 'P', d4: 'P',
            d5: 'p', e6: 'p',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            c8: 'b',
          },
          highlights: ['c8', 'e6']
        },
        {
          type: 'definition',
          term: 'Problem Piece',
          value: 'In the Queen\'s Gambit Declined, Black\'s light-squared bishop (on c8) is often called the "problem piece" because it is blocked by Black\'s own pawn on e6. Finding an active square for this bishop is a central strategic theme for Black.'
        },
        {
          type: 'table',
          headers: ['Structure', 'White\'s Plan', 'Black\'s Plan'],
          rows: [
            ['QGD (e6)', 'Pressure d5, minority attack on queenside', 'Solve the light-squared bishop, aim for ...c5 or ...e5 break'],
            ['QGA (dxc4)', 'Recapture and build center with e4', 'Use the tempo gained to develop actively'],
            ['Symmetrical (cxd5 cxd5)', 'Minority attack with b4-b5', 'Piece activity, use the half-open c-file'],
          ]
        },
        {
          type: 'tip',
          value: 'In closed Queen\'s Gambit positions, knights often outperform bishops because the pawn chains limit diagonal movement. Look for strong outpost squares (like e5 or d5) for your knights.'
        }
      ]
    },
    {
      id: 'orthodox-defense',
      title: 'Orthodox Defense',
      section: "Queen's Gambit Declined",
      content: [
        {
          type: 'text',
          value: 'The Orthodox Defense is the classical mainline of the Queen\'s Gambit Declined. After **1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Be7 5.e3 O-O 6.Nf3 Nbd7**, Black sets up a solid, resilient position. This line has been tested in thousands of top-level games.'
        },
        {
          type: 'board',
          caption: 'The Orthodox Defense after 6...Nbd7 — a rock-solid setup for Black',
          position: {
            a1: 'R', d1: 'Q', e1: 'K', f1: 'B', h1: 'R',
            a2: 'P', b2: 'P', e3: 'P', f2: 'P', g2: 'P', h2: 'P',
            c3: 'N', c4: 'P', d4: 'P', f3: 'N', g5: 'B',
            d5: 'p', e6: 'p', f6: 'n', e7: 'b',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', f8: 'r', g8: 'k',
            d7: 'n',
          }
        },
        {
          type: 'text',
          value: 'Key ideas in the Orthodox Defense:'
        },
        {
          type: 'list',
          items: [
            '**Black\'s plan**: Develop solidly, then seek counterplay with ...c5 or ...e5. The knight on d7 supports both breaks.',
            '**White\'s Bg5 pin**: The bishop on g5 pins the f6-knight to the queen, putting pressure on d5. Black plays ...Be7 to break the pin.',
            '**The minority attack**: White often plays b4-b5 on the queenside to undermine Black\'s pawn structure.',
            '**Black\'s light-squared bishop**: Finding a good square for the c8-bishop remains Black\'s main strategic challenge.',
          ]
        },
        {
          type: 'definition',
          term: 'Minority Attack',
          value: 'A strategic plan where fewer pawns (the "minority") advance against a larger group of enemy pawns to create weaknesses. In the QGD, White\'s a and b pawns advance (b4-b5) against Black\'s a, b, and c pawns, aiming to create an isolated pawn or backward pawn after the exchange on c6.'
        },
        {
          type: 'tip',
          value: 'In the Orthodox Defense, do not rush. Black\'s position is solid but cramped. Be patient, complete development, and wait for the right moment to break free with ...c5 or ...e5.'
        }
      ]
    },
    {
      id: 'ragozin-defense',
      title: 'Ragozin Defense',
      section: "Queen's Gambit Declined",
      content: [
        {
          type: 'text',
          value: 'The Ragozin Defense arises after **1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Nf3 Bb4**. Instead of the passive ...Be7, Black pins the c3-knight immediately with ...Bb4, combining ideas from the Queen\'s Gambit Declined and the Nimzo-Indian Defense. This is a modern, aggressive approach.'
        },
        {
          type: 'board',
          caption: 'The Ragozin Defense after 4...Bb4 — Black pins the knight and fights for the center',
          position: {
            a1: 'R', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', h1: 'R',
            a2: 'P', b2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            c3: 'N', c4: 'P', d4: 'P', f3: 'N',
            b4: 'b', d5: 'p', e6: 'p', f6: 'n',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'The Ragozin is a favorite of players who want active piece play from the start. Key ideas include:'
        },
        {
          type: 'list',
          items: [
            '**Pin pressure**: The Bb4 pins the c3-knight, reducing White\'s control over d5 and e4',
            '**Dynamic play**: Black aims for rapid development and central counterplay, not passive defense',
            '**...dxc4 ideas**: Black can capture on c4, then hold the pawn with ...b5 or use the tempo to develop',
            '**Flexibility**: Black keeps options open for ...c5 breaks and piece activity on both flanks',
          ]
        },
        {
          type: 'definition',
          term: 'Pin',
          value: 'A tactical situation where a piece cannot move (or should not move) because doing so would expose a more valuable piece behind it to attack. In the Ragozin, the Bb4 pins the Nc3 to the White queen or king.'
        },
        {
          type: 'tip',
          value: 'The Ragozin Defense is excellent for players who dislike passive positions. If you enjoy the Nimzo-Indian Defense (1.d4 Nf6 2.c4 e6 3.Nc3 Bb4), the Ragozin is a natural companion in your repertoire.'
        }
      ]
    },
    {
      id: 'tartakower-variation',
      title: 'Tartakower Variation',
      section: "Queen's Gambit Declined",
      content: [
        {
          type: 'text',
          value: 'The Tartakower Variation (also called the Tartakower-Makogonov-Bondarevsky system) arises after **1.d4 d5 2.c4 e6 3.Nc3 Nf6 4.Bg5 Be7 5.e3 O-O 6.Nf3 h6 7.Bh4 b6**. Black\'s clever idea is to solve the problem of the light-squared bishop by fianchettoing it to b7.'
        },
        {
          type: 'board',
          caption: 'The Tartakower Variation after 7...b6 — Black prepares Bb7 to activate the problem piece',
          position: {
            a1: 'R', d1: 'Q', e1: 'K', f1: 'B', h1: 'R',
            a2: 'P', b2: 'P', e3: 'P', f2: 'P', g2: 'P', h2: 'P',
            c3: 'N', c4: 'P', d4: 'P', f3: 'N', h4: 'B',
            b6: 'p', d5: 'p', e6: 'p', e7: 'b', f6: 'n', h6: 'p',
            a7: 'p', c7: 'p', f7: 'p', g7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', f8: 'r', g8: 'k',
          }
        },
        {
          type: 'text',
          value: 'The Tartakower Variation directly addresses the QGD\'s biggest problem — the passive light-squared bishop.'
        },
        {
          type: 'list',
          items: [
            '**...b6 and ...Bb7**: Black fianchettoes the bishop to b7, where it aims at the long diagonal and supports d5',
            '**...h6 first**: Black forces the bishop to h4 before playing ...b6, gaining a useful tempo',
            '**Solid yet active**: The position remains solid while Black\'s pieces find better squares than in the Orthodox line',
            '**Endorsed by champions**: Kasparov, Karpov, and Carlsen have all played this variation at the highest level',
          ]
        },
        {
          type: 'definition',
          term: 'Fianchetto',
          value: 'The development of a bishop to the second square of the adjacent knight\'s file (b2/g2 for White, b7/g7 for Black) after advancing the pawn one square. A fianchettoed bishop controls a long diagonal and is often very powerful.'
        },
        {
          type: 'tip',
          value: 'The Tartakower is one of the most practical choices against the Queen\'s Gambit. It is solid, easy to learn, and solves the problem bishop naturally. It is an excellent choice for players of all levels.'
        }
      ]
    },
    {
      id: 'taking-the-pawn',
      title: 'Taking the Pawn',
      section: "Queen's Gambit Accepted",
      content: [
        {
          type: 'text',
          value: 'In the Queen\'s Gambit Accepted (QGA), Black plays **1.d4 d5 2.c4 dxc4**, capturing the offered pawn. This is not about trying to keep the extra pawn — Black gives it back later and uses the tempo to develop actively.'
        },
        {
          type: 'board',
          caption: 'Queen\'s Gambit Accepted after 2...dxc4 — Black takes the gambit pawn',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d4: 'P',
            c4: 'p',
            a7: 'p', b7: 'p', c7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'Why does Black accept the gambit?'
        },
        {
          type: 'list',
          items: [
            '**Free development**: By giving up the center pawn, Black reduces tension and gains time to develop pieces',
            '**No "problem bishop"**: Unlike the QGD, Black\'s light-squared bishop is free since there is no pawn on e6 blocking it yet',
            '**Counterplay with ...c5 or ...e5**: Black often strikes back in the center after developing',
            '**Practical choice**: The QGA leads to open, dynamic positions where both sides have chances',
          ]
        },
        {
          type: 'text',
          value: 'Trying to hold the pawn with **3...b5?** is generally a mistake. After **4.a4**, White undermines the pawn chain and Black\'s queenside becomes weak. The modern approach is to return the pawn and focus on development.'
        },
        {
          type: 'tip',
          value: 'Do not be greedy in the QGA. The pawn on c4 is temporary. Use the time wisely to develop your pieces and prepare a central counter-strike with ...c5 or ...e5.'
        }
      ]
    },
    {
      id: 'classical-lines',
      title: 'Classical Lines',
      section: "Queen's Gambit Accepted",
      content: [
        {
          type: 'text',
          value: 'The classical main line of the QGA continues **1.d4 d5 2.c4 dxc4 3.Nf3 Nf6 4.e3 e6 5.Bxc4 c5 6.O-O a6**. This is one of the most well-studied sequences in all of chess theory.'
        },
        {
          type: 'board',
          caption: 'Classical QGA after 6...a6 — Black has returned the pawn and prepares queenside expansion',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', f1: 'R', g1: 'K',
            a2: 'P', b2: 'P', e3: 'P', f2: 'P', g2: 'P', h2: 'P',
            c4: 'B', d4: 'P', f3: 'N',
            a6: 'p', c5: 'p', e6: 'p', f6: 'n',
            b7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', h8: 'r',
          }
        },
        {
          type: 'text',
          value: 'The move **5...c5** is critical — it challenges White\'s d4 pawn and fights for central space. After **6...a6**, Black prepares **...b5** to kick the bishop from c4 and expand on the queenside.'
        },
        {
          type: 'list',
          items: [
            '**White\'s plan**: Rapid development, central control with e3-e4 push, and piece pressure on Black\'s slightly loose position',
            '**Black\'s plan**: Complete development, play ...b5 to expand on the queenside, and challenge the center with ...cxd4',
            '**The d4-c5 tension**: Whoever resolves this tension often shapes the middlegame character',
            '**Open positions**: The QGA tends to create open, tactical games with chances for both sides',
          ]
        },
        {
          type: 'definition',
          term: 'Central Break',
          value: 'A pawn advance that challenges the opponent\'s central pawns, often creating open lines for pieces. In the QGA, Black\'s **...c5** is the key central break, directly confronting White\'s d4 pawn.'
        },
        {
          type: 'tip',
          value: 'In the classical QGA, the position often opens up quickly. Make sure your pieces are developed before launching an attack — an undeveloped army cannot exploit open lines.'
        }
      ]
    },
    {
      id: 'modern-approaches',
      title: 'Modern Approaches',
      section: "Queen's Gambit Accepted",
      content: [
        {
          type: 'text',
          value: 'Modern practice in the QGA has introduced several fresh ideas that differ from the classical treatment. One popular line is **1.d4 d5 2.c4 dxc4 3.e4**, where White immediately seizes the center with a broad pawn duo.'
        },
        {
          type: 'board',
          caption: 'Modern approach with 3.e4 — White boldly claims the center',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d4: 'P', e4: 'P',
            c4: 'p',
            a7: 'p', b7: 'p', c7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          },
          highlights: ['d4', 'e4']
        },
        {
          type: 'text',
          value: 'Another modern idea is **3.e3** followed by rapid development and recovering the pawn without committing the knight to f3 early, keeping options open for piece placement.'
        },
        {
          type: 'list',
          items: [
            '**3.e4 (Central Advance)**: White goes for a powerful center immediately, sacrificing the c4-pawn more seriously. Play becomes sharp and tactical.',
            '**3.e3 (Slow Recovery)**: White develops calmly, recovers the pawn with Bxc4, and builds a solid position. Less forcing but very flexible.',
            '**Catalan-style setups**: White plays g3 and Bg2, fianchettoing the bishop. This puts long-term pressure on the queenside and the c4 pawn.',
            '**Computer influence**: Modern engines have revived many old lines and found new resources for both sides, keeping the QGA fresh and dynamic.',
          ]
        },
        {
          type: 'definition',
          term: 'Pawn Duo',
          value: 'Two pawns side by side on the same rank (like d4 and e4). A pawn duo controls a wide swath of squares and is considered a strong central formation. The opponent must find ways to challenge it before it becomes too dominant.'
        },
        {
          type: 'tip',
          value: 'If you play the QGA as Black, study both the classical and modern lines for White. Knowing what your opponent might try helps you prepare the best response in each case.'
        }
      ]
    },
    {
      id: 'key-middlegame-plans',
      title: 'Key Middlegame Plans',
      section: 'Practice',
      content: [
        {
          type: 'text',
          value: 'Understanding the opening moves is only half the battle. The Queen\'s Gambit leads to rich middlegame positions where strategic plans matter more than memorized moves. Here are the most important plans for both sides.'
        },
        {
          type: 'text',
          value: '### White\'s Plans'
        },
        {
          type: 'list',
          items: [
            '**Minority attack**: In the Exchange Variation (cxd5 exd5), White pushes b4-b5 to create weaknesses in Black\'s queenside pawn structure',
            '**Central breakthrough with e4**: White prepares the e3-e4 push to open the center when Black is not fully ready',
            '**Piece pressure on d5**: The d5 pawn is a target — White coordinates pieces (Nc3, Bg5, Qc2, Rooks) to pile up on it',
            '**Kingside attack**: In some lines, especially after Black castles kingside, White can launch a direct attack with pieces aimed at the king',
          ]
        },
        {
          type: 'text',
          value: '### Black\'s Plans'
        },
        {
          type: 'list',
          items: [
            '**The ...c5 break**: The most common freeing move, challenging White\'s d4 pawn and opening the c-file',
            '**The ...e5 break**: A more ambitious central break, often prepared with ...Re8 and ...Nf8-e6',
            '**Activating the light-squared bishop**: Whether via ...b6/Bb7, ...dxc4/Bf5, or ...Bd6-b4 routes, this is a constant theme',
            '**Counter-pressure on the c-file**: After ...c5 and exchanges, Black can use the half-open c-file with rooks',
          ]
        },
        {
          type: 'board',
          caption: 'White executing a minority attack — the b-pawn advances to create queenside weaknesses',
          position: {
            a1: 'R', c1: 'R', g1: 'K',
            a2: 'P', f2: 'P', g2: 'P', h2: 'P',
            b4: 'P', d4: 'P', e3: 'P', f3: 'N',
            d5: 'p', f6: 'n', e7: 'b',
            a7: 'p', b7: 'p', c6: 'p', f7: 'p', g7: 'p', h7: 'p',
            b5: '*',
            a8: 'r', c8: 'r', g8: 'k',
          },
          highlights: ['b4', 'b5']
        },
        {
          type: 'tip',
          value: 'In the Queen\'s Gambit, both sides must balance attack and defense. White often has a slight spatial advantage, but Black\'s position is very solid. The side that executes their middlegame plan first usually gains the upper hand.'
        }
      ]
    },
    {
      id: 'famous-games',
      title: 'Famous Games',
      section: 'Practice',
      content: [
        {
          type: 'text',
          value: 'The Queen\'s Gambit has produced some of the most celebrated games in chess history. Studying these masterpieces will deepen your understanding of the themes and plans we have discussed.'
        },
        {
          type: 'text',
          value: '### Kasparov vs. Karpov, World Championship 1985'
        },
        {
          type: 'text',
          value: 'The Kasparov-Karpov rivalry featured the Queen\'s Gambit Declined in many of their World Championship battles. Karpov was a master of the White side, using slow pressure and the minority attack to squeeze his opponents. Kasparov eventually found dynamic resources for Black, transforming the theoretical landscape.'
        },
        {
          type: 'text',
          value: '### Capablanca vs. Alekhine, World Championship 1927'
        },
        {
          type: 'text',
          value: 'The 1927 World Championship match was fought almost entirely in the Queen\'s Gambit Declined. Capablanca, the reigning champion, was considered nearly invincible. Alekhine used the Orthodox Defense and demonstrated that Black could find active counterplay, winning the title in one of the greatest upsets in chess history.'
        },
        {
          type: 'text',
          value: '### Carlsen vs. Caruana, World Championship 2018'
        },
        {
          type: 'text',
          value: 'Magnus Carlsen employed the Queen\'s Gambit in several games of his 2018 title defense. The match showcased how the Queen\'s Gambit remains a top-level weapon even in the computer era, with deep preparation and subtle middlegame understanding deciding the outcomes.'
        },
        {
          type: 'table',
          headers: ['Game', 'Variation', 'Key Theme'],
          rows: [
            ['Kasparov vs. Karpov 1985', 'QGD Orthodox/Tartakower', 'Dynamic counterplay vs. positional pressure'],
            ['Capablanca vs. Alekhine 1927', 'QGD Orthodox', 'Black\'s resources in a "solid but passive" setup'],
            ['Carlsen vs. Caruana 2018', 'QGD and QGA', 'Modern computer-assisted preparation in a classical opening'],
          ]
        },
        {
          type: 'tip',
          value: 'Playing through master games is one of the best ways to improve. Try to guess each move before looking at the answer — this trains your pattern recognition and strategic thinking.'
        }
      ]
    },
    {
      id: 'test-your-knowledge',
      title: 'Test Your Knowledge',
      section: 'Practice',
      content: [
        {
          type: 'text',
          value: 'Let us review the key concepts from this lesson. Think through each question carefully before reading the answers.'
        },
        {
          type: 'text',
          value: '### Question 1: The Opening Moves'
        },
        {
          type: 'text',
          value: 'What are the first two moves of the Queen\'s Gambit, and why is it called a "gambit" even though White usually recovers the pawn?'
        },
        {
          type: 'text',
          value: '**Answer**: The Queen\'s Gambit begins with **1.d4 d5 2.c4**. It is called a gambit because White offers the c-pawn. However, it is not a true gambit because Black cannot easily hold onto the extra pawn — White will recapture with Bxc4 or pressure the pawn with e3 and Bxc4. The "gambit" is more of a temporary sacrifice for central influence.'
        },
        {
          type: 'text',
          value: '### Question 2: Declined vs. Accepted'
        },
        {
          type: 'text',
          value: 'What is the main strategic difference between the Queen\'s Gambit Declined (2...e6) and the Queen\'s Gambit Accepted (2...dxc4)?'
        },
        {
          type: 'text',
          value: '**Answer**: In the QGD, Black maintains the pawn on d5 and builds a solid but potentially cramped position. The challenge is activating the light-squared bishop. In the QGA, Black gives up the center but gains freedom for piece development. The QGD is more structural; the QGA is more dynamic.'
        },
        {
          type: 'text',
          value: '### Question 3: Identify the Position'
        },
        {
          type: 'board',
          caption: 'What variation is this? What should Black play next?',
          position: {
            a1: 'R', d1: 'Q', e1: 'K', f1: 'B', h1: 'R',
            a2: 'P', b2: 'P', e3: 'P', f2: 'P', g2: 'P', h2: 'P',
            c3: 'N', c4: 'P', d4: 'P', f3: 'N', h4: 'B',
            d5: 'p', e6: 'p', e7: 'b', f6: 'n', h6: 'p',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', f8: 'r', g8: 'k',
          }
        },
        {
          type: 'text',
          value: '**Answer**: This is the QGD after **6...h6 7.Bh4** — the starting point for the Tartakower Variation. Black should play **7...b6**, preparing to fianchetto the light-squared bishop to b7, solving the "problem piece."'
        },
        {
          type: 'text',
          value: '### Question 4: Strategic Concepts'
        },
        {
          type: 'text',
          value: 'Name three key middlegame plans for White in the Queen\'s Gambit.'
        },
        {
          type: 'text',
          value: '**Answer**: (1) The **minority attack** — advancing the b-pawn to b5 to create queenside weaknesses. (2) The **central break e3-e4** — opening the center to exploit White\'s spatial advantage. (3) **Piece pressure on d5** — coordinating pieces to target Black\'s central pawn.'
        },
        {
          type: 'tip',
          value: 'If you got most of these right, you have a strong foundation in the Queen\'s Gambit. The next step is to play it in actual games and observe how the themes appear in practice. Start with one variation (the Orthodox or the QGA classical line) and master it before branching out.'
        }
      ]
    },
  ]
}
