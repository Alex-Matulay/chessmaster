export const lessonContent = {
  slug: 'piece-values-and-trades',
  sections: [
    {
      id: 'piece-values',
      title: 'Understanding Piece Values',
      section: 'Material Basics',
      content: [
        {
          type: 'text',
          value: 'Every chess piece has a relative point value that helps you decide whether a trade or sacrifice is worth it. These values are not official rules -- they are guidelines developed over centuries of play to help you make smart decisions at the board.'
        },
        {
          type: 'definition',
          term: 'Material',
          value: 'The total point value of all your pieces on the board. A player who has more total points in pieces is said to have a **material advantage**.'
        },
        {
          type: 'table',
          headers: ['Piece', 'Value', 'Why'],
          rows: [
            ['Pawn (P)', '1 point', 'The basic unit of measurement. Pawns are the least mobile piece, but they can promote.'],
            ['Knight (N)', '3 points', 'Can jump over pieces and control up to 8 squares. Most effective in the center.'],
            ['Bishop (B)', '3 points', 'Controls long diagonals and can sweep across the board. Slightly stronger than a Knight in open positions.'],
            ['Rook (R)', '5 points', 'Controls entire ranks and files. Very powerful in the endgame with open lines.'],
            ['Queen (Q)', '9 points', 'Combines the power of a Rook and Bishop. The strongest piece on the board.'],
            ['King (K)', 'Infinite', 'Cannot be captured or traded. Losing the King means losing the game.'],
          ]
        },
        {
          type: 'board',
          caption: 'The starting position -- White has 39 points of material (1 Queen = 9, 2 Rooks = 10, 2 Bishops = 6, 2 Knights = 6, 8 Pawns = 8). Black has the same.',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          }
        },
        {
          type: 'tip',
          value: 'These point values are approximations, not absolute truths. A well-placed Knight can be worth more than a passive Rook. Always consider the specific position!'
        }
      ]
    },
    {
      id: 'counting-material',
      title: 'Counting Material',
      section: 'Material Basics',
      content: [
        {
          type: 'text',
          value: 'To figure out who is winning on material, count the total point value of each side\'s pieces (excluding Kings) and compare them. The player with the higher total has a **material advantage**.'
        },
        {
          type: 'text',
          value: 'A quick shortcut: instead of adding up everything, just look at which pieces have been **captured** on each side. If White lost a Bishop (3) and Black lost a Knight (3) and a Pawn (1), then White is ahead by 1 point.'
        },
        {
          type: 'definition',
          term: 'Material Advantage',
          value: 'When one side has more total piece value than the other. Even a one-pawn advantage (1 point) can be enough to win the game if you play accurately.'
        },
        {
          type: 'board',
          caption: 'White is up a Knight -- White has an extra Knight on c3 with no compensation for Black. White leads by 3 points.',
          position: {
            a1: 'R', c3: 'N', d1: 'Q', e1: 'K', f1: 'B', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d4: 'P', e4: 'P', f2: 'P', g2: 'P', h2: 'P',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', e8: 'k', f8: 'b', h8: 'r',
          },
          highlights: ['c3']
        },
        {
          type: 'text',
          value: 'In the position above, both sides have castled pieces still in development, but notice that White has a Knight on c3 while Black has no Knight at all. White is ahead by a full piece (3 points).'
        },
        {
          type: 'board',
          caption: 'Black is up "the exchange" -- Black has a Rook on c8 where White only has a Bishop on c1. Black leads by about 2 points.',
          position: {
            a1: 'R', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P',
            a7: 'p', b7: 'p', d7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', c8: 'r', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          },
          highlights: ['c8']
        },
        {
          type: 'text',
          value: 'Wait -- that position above is not quite right for showing "up the exchange." Let\'s look at a clearer example where the trade has already happened.'
        },
        {
          type: 'board',
          caption: 'Black won the exchange -- Black has a Rook on f8 while White\'s Rook was traded for Black\'s Bishop. White has a Bishop where a Rook used to be.',
          position: {
            a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d4: 'P', f2: 'P', g2: 'P', h2: 'P',
            e4: 'B',
            a7: 'p', b7: 'p', c7: 'p', d7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', d8: 'q', e8: 'k', f8: 'r', g8: 'n', h8: 'r',
          },
          highlights: ['f8', 'e4']
        },
        {
          type: 'tip',
          value: 'Being "up the exchange" means you have a Rook where your opponent has a minor piece (Bishop or Knight). That is a 2-point advantage (5 minus 3). It is a significant edge but not always decisive -- unlike being up a full Rook (5 points).'
        }
      ]
    },
    {
      id: 'minor-pieces',
      title: 'Knights vs Bishops',
      section: 'Piece Comparison',
      content: [
        {
          type: 'text',
          value: 'Knights and Bishops are both worth about 3 points, but they are very different pieces. Understanding when each one is stronger is a key skill for intermediate players.'
        },
        {
          type: 'definition',
          term: 'Minor Piece',
          value: 'A Knight or a Bishop. They are called "minor" pieces because they are worth less than "major" pieces (Rooks and Queens).'
        },
        {
          type: 'text',
          value: '**When Knights are better:**'
        },
        {
          type: 'list',
          items: [
            '**Closed positions** -- when pawns are locked and blocking diagonals, Knights can jump over them while Bishops are stuck',
            '**Outpost squares** -- a Knight on a central square protected by a pawn and that cannot be attacked by enemy pawns is incredibly powerful',
            '**Short-range battles** -- when the action is concentrated on one side of the board, the Knight\'s ability to reach any color square matters more',
          ]
        },
        {
          type: 'board',
          caption: 'A "good Knight" position -- the Knight on d5 sits on a powerful outpost, protected by the pawn on e4. The locked pawn chain means the Bishop on c8 has no open diagonals.',
          position: {
            e1: 'K', a1: 'R', f1: 'R',
            a2: 'P', b2: 'P', c3: 'P', d4: 'P', e4: 'P', f2: 'P', g2: 'P', h2: 'P',
            d5: 'N',
            c6: 'p', d6: 'p', e5: 'p',
            a7: 'p', b7: 'p', f7: 'p', g7: 'p', h7: 'p',
            c8: 'b', d8: 'q', e8: 'k', f8: 'r', h8: 'r',
          },
          highlights: ['d5']
        },
        {
          type: 'text',
          value: '**When Bishops are better:**'
        },
        {
          type: 'list',
          items: [
            '**Open positions** -- when pawns have been traded and diagonals are clear, a Bishop can dominate from far away',
            '**The Bishop pair** -- having both Bishops (one light-squared, one dark-squared) is a significant advantage, often worth an extra half-pawn',
            '**Both sides of the board** -- a Bishop can influence the kingside and queenside simultaneously, while a Knight takes many moves to cross the board',
          ]
        },
        {
          type: 'board',
          caption: 'A "good Bishop" position -- the Bishop on g2 controls the long diagonal with no pawns blocking it. It attacks from a1 to h7 in one sweep.',
          position: {
            e1: 'K', a1: 'R', f1: 'R',
            a2: 'P', b3: 'P', c4: 'P', f2: 'P', g2: 'B', h2: 'P',
            d4: 'P',
            d5: 'p', e5: 'p',
            a7: 'p', b7: 'p', f7: 'p', g7: 'p', h7: 'p',
            b8: 'n', d8: 'q', e8: 'k', f8: 'r', h8: 'r',
          },
          highlights: ['g2']
        },
        {
          type: 'definition',
          term: 'Bishop Pair',
          value: 'Having both your Bishops while your opponent has traded one away. The two Bishops work together to cover all 64 squares and are especially strong in open positions. The Bishop pair is often valued at roughly **half a pawn** more than a Bishop and Knight.'
        },
        {
          type: 'tip',
          value: 'A simple rule of thumb: if the center is locked with pawns, prefer Knights. If the center is open with few pawns, prefer Bishops.'
        }
      ]
    },
    {
      id: 'the-exchange',
      title: 'The Exchange',
      section: 'Piece Comparison',
      content: [
        {
          type: 'text',
          value: 'In chess, "the exchange" specifically refers to the difference between a Rook (5 points) and a minor piece (3 points). Winning the exchange means you trade your Bishop or Knight for your opponent\'s Rook -- gaining a 2-point material advantage.'
        },
        {
          type: 'definition',
          term: 'Winning the Exchange',
          value: 'Trading your minor piece (Bishop or Knight, worth 3) for your opponent\'s Rook (worth 5). You gain a net 2 points of material.'
        },
        {
          type: 'definition',
          term: 'Exchange Sacrifice',
          value: 'Deliberately giving up your Rook for a minor piece in order to gain a positional or tactical advantage. This is one of the most sophisticated ideas in chess.'
        },
        {
          type: 'text',
          value: '**When winning the exchange is clearly good:**'
        },
        {
          type: 'list',
          items: [
            'When you get the exchange with no compensation for your opponent',
            'In the endgame, where the Rook\'s power on open files becomes dominant',
            'When there are open files for the Rook to use',
          ]
        },
        {
          type: 'text',
          value: '**When an exchange sacrifice can be worth it:**'
        },
        {
          type: 'list',
          items: [
            'To destroy the opponent\'s pawn structure around their King',
            'To place a Knight on an unassailable outpost',
            'To gain a strong passed pawn',
            'When the opponent\'s Rook has no open files to use',
          ]
        },
        {
          type: 'board',
          caption: 'A classic exchange sacrifice -- White plays Rxc6! giving up a Rook (5) for a Bishop (3) to shatter Black\'s queenside pawns and open lines for attack.',
          position: {
            a1: 'R', e1: 'K', g1: 'R',
            a2: 'P', b2: 'P', d3: 'P', e4: 'P', f2: 'P', g2: 'P', h2: 'P',
            c4: 'B', f3: 'N',
            c6: 'b', d6: 'p', e5: 'p',
            a7: 'p', b7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          },
          highlights: ['c6', 'a1']
        },
        {
          type: 'text',
          value: 'After Rxc6! bxc6, White has given up the exchange but Black\'s queenside pawns are shattered (doubled c-pawns) and White\'s Bishop on c4 becomes a monster aiming at f7.'
        },
        {
          type: 'tip',
          value: 'The great Tigran Petrosian was famous for his exchange sacrifices. He understood that a strong Knight or Bishop could be worth more than a clumsy Rook with no open files.'
        }
      ]
    },
    {
      id: 'good-trades',
      title: 'When to Trade Pieces',
      section: 'Trading Strategy',
      content: [
        {
          type: 'text',
          value: 'Knowing when to trade pieces is one of the most important strategic skills in chess. A well-timed trade can convert a small advantage into a winning one, while a bad trade can throw away your edge.'
        },
        {
          type: 'text',
          value: '**Trade when you are ahead in material:**'
        },
        {
          type: 'text',
          value: 'If you are up a piece or even a pawn, trading pieces makes your advantage relatively larger. Imagine you are up a Knight (White has 20 points, Black has 17). If you trade Queens (9 for 9), the position becomes White 11 vs Black 8 -- your advantage went from about 15% to almost 30% of the remaining material.'
        },
        {
          type: 'definition',
          term: 'Simplification',
          value: 'The strategy of trading pieces when ahead in material to reach a winning endgame. The fewer pieces on the board, the harder it is for the losing side to create counterplay or tricks.'
        },
        {
          type: 'text',
          value: '**Trade when you have less space:**'
        },
        {
          type: 'text',
          value: 'If your opponent controls more of the board and your pieces are cramped, trading pieces gives your remaining pieces more room to maneuver. Fewer pieces on a cramped position means less tripping over each other.'
        },
        {
          type: 'text',
          value: '**Trade to neutralize your opponent\'s strong pieces:**'
        },
        {
          type: 'text',
          value: 'If your opponent has one piece that is especially dangerous -- a powerful Bishop on a long diagonal, or a Knight on a dominating outpost -- try to trade it off. Eliminating the strongest enemy piece can ease the pressure dramatically.'
        },
        {
          type: 'list',
          items: [
            '**Ahead in material?** Trade pieces, head for the endgame.',
            '**Cramped position?** Trade to free your pieces.',
            '**Opponent has a strong piece?** Exchange it to reduce the threat.',
            '**Going into a pawn endgame?** Make sure you count carefully first -- pawn endgames are very concrete.',
          ]
        },
        {
          type: 'tip',
          value: 'A classic principle: "When ahead, trade pieces, not pawns." Keep your extra pawns because they might promote. Trade the pieces that could stop your pawns from queening.'
        }
      ]
    },
    {
      id: 'bad-trades',
      title: 'When NOT to Trade',
      section: 'Trading Strategy',
      content: [
        {
          type: 'text',
          value: 'Just as important as knowing when to trade is knowing when to avoid trades. Bad trades can ruin a good position or throw away the game.'
        },
        {
          type: 'text',
          value: '**Do not trade active pieces for passive ones:**'
        },
        {
          type: 'text',
          value: 'If your Bishop is controlling a beautiful long diagonal and your opponent offers to trade it for their Knight that is stuck on the rim, decline! You are trading a strong piece for a weak one -- even though they are "worth the same points," the active piece is doing far more work.'
        },
        {
          type: 'text',
          value: '**Do not trade when you are behind in material:**'
        },
        {
          type: 'text',
          value: 'When you are down material, every trade makes your deficit relatively larger. Instead, keep pieces on the board to maximize your chances for tricks, complications, and counterattacks. The more pieces on the board, the more likely your opponent will make a mistake.'
        },
        {
          type: 'text',
          value: '**Do not give up the Bishop pair without reason:**'
        },
        {
          type: 'text',
          value: 'The two Bishops together are worth more than a Bishop and Knight in most positions. Trading one of your Bishops for a Knight should only be done if you get something concrete in return -- like winning a pawn, damaging the opponent\'s structure, or gaining a strong outpost for your remaining pieces.'
        },
        {
          type: 'list',
          items: [
            '**Behind in material?** Avoid trades -- keep complications alive.',
            '**Have an active piece?** Do not trade it for a passive enemy piece of equal value.',
            '**Have the Bishop pair?** Do not trade a Bishop for a Knight unless you gain something specific.',
            '**Attacking the King?** Do not trade off your attacking pieces -- you need them for the checkmate.',
          ]
        },
        {
          type: 'tip',
          value: 'When behind in material, look for ways to complicate the position: open new lines, create tactical threats, and keep as many pieces on the board as possible. Your best chance to come back is in a messy position where anything can happen.'
        }
      ]
    },
    {
      id: 'piece-activity',
      title: 'Piece Activity Over Material',
      section: 'Advanced Concepts',
      content: [
        {
          type: 'text',
          value: 'Point values are guidelines, not gospel. In real games, a piece\'s actual value depends on what it can do in the current position. A "3-point" Knight on a dominant central square can be worth more than a "5-point" Rook stuck behind its own pawns.'
        },
        {
          type: 'definition',
          term: 'Piece Activity',
          value: 'How many useful squares a piece controls and how much influence it has on the position. An active piece is one that is doing something important -- attacking, defending key squares, or restricting the opponent. A passive piece is doing little.'
        },
        {
          type: 'board',
          caption: 'The Knight on d5 is more powerful than the Rook on a8. The Knight controls key central squares and cannot be chased away, while the Rook is stuck behind pawns with no open file.',
          position: {
            e1: 'K', f1: 'R', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d5: 'N', e4: 'P',
            c6: 'p', d6: 'p', e5: 'p', f6: 'p',
            a7: 'p', b7: 'p', g7: 'p', h7: 'p',
            a8: 'r', d7: 'q', e8: 'k', h8: 'r',
          },
          highlights: ['d5', 'a8']
        },
        {
          type: 'text',
          value: 'In the position above, White\'s Knight on d5 is a monster. It attacks squares on c7, e7, b6, f6, c3, and b4. It cannot be driven away by any Black pawn. Meanwhile, Black\'s Rook on a8 has no open file and is essentially a spectator.'
        },
        {
          type: 'text',
          value: '**Key signs that piece activity matters more than material:**'
        },
        {
          type: 'list',
          items: [
            '**A Knight on a secure outpost** (especially d5 or e5) that cannot be attacked by pawns can dominate a Rook',
            '**A Bishop on an open diagonal** controlling both sides of the board is worth more than a Knight on the rim',
            '**Rooks need open files** -- a Rook with no open file is worth far less than its 5-point value',
            '**Piece coordination** -- two pieces working together are worth more than their individual values suggest',
          ]
        },
        {
          type: 'tip',
          value: 'Mikhail Tal said: "You must take your opponent into a deep, dark forest where 2+2=5." In complicated positions, piece activity can trump material. Do not be a slave to point counting!'
        }
      ]
    },
    {
      id: 'practice-positions',
      title: 'Practice: Material Decisions',
      section: 'Practice',
      content: [
        {
          type: 'text',
          value: 'In each of the following positions, White must decide whether to make a trade. Think about the principles we covered: material balance, piece activity, position type, and strategic goals.'
        },
        {
          type: 'text',
          value: '**Position 1: Should White trade Queens?**'
        },
        {
          type: 'board',
          caption: 'White is up a pawn with Queens still on the board. Should White trade Queens with Qd7?',
          position: {
            a1: 'R', e1: 'K', g1: 'R',
            a2: 'P', b2: 'P', c2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d4: 'P', e4: 'P', f3: 'N',
            d7: 'q',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            d8: 'Q', e8: 'k', f8: 'b', h8: 'r',
          },
          highlights: ['d8', 'd7']
        },
        {
          type: 'text',
          value: '**Answer:** Yes! White is up a pawn. Trading Queens simplifies to an endgame where the extra pawn becomes decisive. With fewer pieces, Black has less chance for counterplay.'
        },
        {
          type: 'text',
          value: '**Position 2: Should White trade the Bishop for the Knight?**'
        },
        {
          type: 'board',
          caption: 'White has the Bishop pair. Should White play Bxf6?',
          position: {
            a1: 'R', e1: 'K', f1: 'R',
            a2: 'P', b2: 'P', c2: 'P', d3: 'P', f2: 'P', g2: 'P', h2: 'P',
            c4: 'B', e3: 'B', e4: 'P',
            d5: 'p', f6: 'n',
            a7: 'p', b7: 'p', c7: 'p', e7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', e8: 'k', f8: 'b', h8: 'r',
          },
          highlights: ['e3', 'f6']
        },
        {
          type: 'text',
          value: '**Answer:** No! White has the Bishop pair, which is a long-term advantage. Trading the dark-squared Bishop for the Knight gives up this advantage without gaining anything concrete in return. Keep both Bishops.'
        },
        {
          type: 'text',
          value: '**Position 3: Should White trade Rooks?**'
        },
        {
          type: 'board',
          caption: 'White is down a pawn but has active pieces. Should White trade Rooks on c8?',
          position: {
            c1: 'R', e1: 'K',
            a2: 'P', b2: 'P', f2: 'P', g2: 'P', h2: 'P',
            c4: 'N', d4: 'P', e4: 'P',
            d5: 'p', e5: 'p',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            c8: 'r', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
          },
          highlights: ['c1', 'c8']
        },
        {
          type: 'text',
          value: '**Answer:** No! White is down a pawn. Trading Rooks simplifies the position and makes Black\'s extra pawn more significant. White should keep pieces on the board and look for active play with the Knight and remaining pieces.'
        },
        {
          type: 'text',
          value: '**Position 4: Should White capture the Bishop with Nxe6?**'
        },
        {
          type: 'board',
          caption: 'White\'s Knight can capture the Bishop on e6. Is this a good trade?',
          position: {
            a1: 'R', e1: 'K', f1: 'R',
            a2: 'P', b2: 'P', c2: 'P', f2: 'P', g2: 'P', h2: 'P',
            d4: 'P', f5: 'N', e4: 'B',
            e6: 'b', d6: 'p',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', b8: 'n', d8: 'q', e8: 'k', f8: 'b', h8: 'r',
          },
          highlights: ['f5', 'e6']
        },
        {
          type: 'text',
          value: '**Answer:** It depends on what recaptures. If the f7-pawn takes back (fxe6), White has damaged Black\'s pawn structure and opened the f-file -- that is a good trade. If the Queen takes back, White simply traded a Knight for a Bishop with no real benefit. Always consider the consequences of the recapture!'
        },
        {
          type: 'text',
          value: '**Position 5: Should White play Rxd5?**'
        },
        {
          type: 'board',
          caption: 'White can capture the Knight on d5 with the Rook. Should White play Rxd5?',
          position: {
            d1: 'R', e1: 'K', h1: 'R',
            a2: 'P', b2: 'P', c2: 'P', f2: 'P', g2: 'P', h2: 'P',
            c3: 'N', e4: 'P',
            d5: 'n', e5: 'p',
            a7: 'p', b7: 'p', c7: 'p', f7: 'p', g7: 'p', h7: 'p',
            a8: 'r', c8: 'b', d8: 'q', e8: 'k', f8: 'b', h8: 'r',
          },
          highlights: ['d1', 'd5']
        },
        {
          type: 'text',
          value: '**Answer:** No! Trading a Rook (5 points) for a Knight (3 points) loses the exchange. White would give up 2 points of material for no compensation. Instead, White should look for a better use of the Rook, such as targeting open files or supporting a pawn advance.'
        },
        {
          type: 'tip',
          value: 'Before making any capture or trade, always ask yourself three questions: (1) Am I gaining or losing material? (2) What recaptures? (3) Does the resulting position favor me strategically?'
        }
      ]
    }
  ]
};
