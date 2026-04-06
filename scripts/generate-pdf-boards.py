"""Generate PNG board images for PDF embedding using python-chess + cairosvg."""
import json
import os
import chess
import chess.svg
import cairosvg

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "pdf-boards")
BOARD_SIZE = 280

PIECE_MAP = {
    "K": chess.Piece(chess.KING, chess.WHITE),
    "Q": chess.Piece(chess.QUEEN, chess.WHITE),
    "R": chess.Piece(chess.ROOK, chess.WHITE),
    "B": chess.Piece(chess.BISHOP, chess.WHITE),
    "N": chess.Piece(chess.KNIGHT, chess.WHITE),
    "P": chess.Piece(chess.PAWN, chess.WHITE),
    "k": chess.Piece(chess.KING, chess.BLACK),
    "q": chess.Piece(chess.QUEEN, chess.BLACK),
    "r": chess.Piece(chess.ROOK, chess.BLACK),
    "b": chess.Piece(chess.BISHOP, chess.BLACK),
    "n": chess.Piece(chess.KNIGHT, chess.BLACK),
    "p": chess.Piece(chess.PAWN, chess.BLACK),
}

FILES = "abcdefgh"

# All board positions used in PDFs
PDF_BOARDS = {
    "starting-position": {
        "a1": "R", "b1": "N", "c1": "B", "d1": "Q", "e1": "K", "f1": "B", "g1": "N", "h1": "R",
        "a2": "P", "b2": "P", "c2": "P", "d2": "P", "e2": "P", "f2": "P", "g2": "P", "h2": "P",
        "a7": "p", "b7": "p", "c7": "p", "d7": "p", "e7": "p", "f7": "p", "g7": "p", "h7": "p",
        "a8": "r", "b8": "n", "c8": "b", "d8": "q", "e8": "k", "f8": "b", "g8": "n", "h8": "r",
    },
    "scholars-mate": {
        "a1": "R", "b1": "N", "c1": "B", "d1": "Q", "e1": "K", "h1": "R",
        "a2": "P", "b2": "P", "c2": "P", "d2": "P", "f2": "P", "g2": "P", "h2": "P",
        "c4": "B", "e4": "P",
        "f7": "Q",
        "a7": "p", "b7": "p", "c7": "p", "d7": "p", "g7": "p", "h7": "p",
        "e5": "p", "f6": "n",
        "a8": "r", "c8": "b", "d8": "q", "e8": "k", "f8": "b", "h8": "r",
    },
    "italian-game": {
        "a1": "R", "b1": "N", "c1": "B", "d1": "Q", "e1": "K", "f1": "B", "h1": "R",
        "a2": "P", "b2": "P", "c2": "P", "d2": "P", "f2": "P", "g2": "P", "h2": "P",
        "e4": "P", "f3": "N", "c4": "B",
        "e5": "p", "c6": "n", "f6": "n",
        "a7": "p", "b7": "p", "c7": "p", "d7": "p", "f7": "p", "g7": "p", "h7": "p",
        "a8": "r", "c8": "b", "d8": "q", "e8": "k", "f8": "b", "h8": "r",
    },
    "sicilian-defense": {
        "a1": "R", "b1": "N", "c1": "B", "d1": "Q", "e1": "K", "f1": "B", "g1": "N", "h1": "R",
        "a2": "P", "b2": "P", "c2": "P", "d2": "P", "f2": "P", "g2": "P", "h2": "P",
        "e4": "P",
        "c5": "p",
        "a7": "p", "b7": "p", "d7": "p", "e7": "p", "f7": "p", "g7": "p", "h7": "p",
        "a8": "r", "b8": "n", "c8": "b", "d8": "q", "e8": "k", "f8": "b", "g8": "n", "h8": "r",
    },
    "kings-indian": {
        "a1": "R", "b1": "N", "c1": "B", "d1": "Q", "e1": "K", "f1": "B", "h1": "R",
        "a2": "P", "b2": "P", "c2": "P", "e2": "P", "f2": "P", "g2": "P", "h2": "P",
        "d4": "P", "c4": "P", "f3": "N",
        "d6": "p", "f6": "n",
        "g7": "b",
        "a7": "p", "b7": "p", "c7": "p", "e7": "p", "f7": "p", "h7": "p",
        "a8": "r", "b8": "n", "c8": "b", "d8": "q", "h8": "r",
        "g8": "k",
    },
    "fork-example": {
        "e1": "K", "d5": "N", "e8": "k", "b6": "q", "f6": "r",
        "a2": "P", "b2": "P",
    },
    "pin-example": {
        "e1": "K", "e4": "B", "e7": "q", "e8": "k",
        "a2": "P", "b2": "P",
    },
    "back-rank-mate": {
        "g1": "K", "f1": "R",
        "f2": "P", "g2": "P", "h2": "P",
        "a8": "r", "g8": "k",
        "f7": "p", "g7": "p", "h7": "p",
    },
    "smothered-mate": {
        "g1": "K", "f1": "R",
        "f2": "P", "g2": "N", "h2": "P",
        "h1": "R",
        "g8": "k", "f8": "r", "h8": "r",
        "f7": "p", "g7": "p", "h7": "p",
        "f6": "n",
    },
    "queens-gambit": {
        "a1": "R", "b1": "N", "c1": "B", "d1": "Q", "e1": "K", "f1": "B", "g1": "N", "h1": "R",
        "a2": "P", "b2": "P", "c2": "P", "e2": "P", "f2": "P", "g2": "P", "h2": "P",
        "c4": "P", "d4": "P",
        "d5": "p",
        "a7": "p", "b7": "p", "c7": "p", "e7": "p", "f7": "p", "g7": "p", "h7": "p",
        "a8": "r", "b8": "n", "c8": "b", "d8": "q", "e8": "k", "f8": "b", "g8": "n", "h8": "r",
    },
    "discovered-attack": {
        "b2": "B", "e5": "N", "g7": "r", "e1": "K", "g8": "k",
    },
    "king-pawn-opposition": {
        "e4": "K", "e4": "P", "e5": "K", "e7": "k",
    },
    "empty-board": {},
    "piece-values": {
        "d4": "Q", "a4": "R", "g4": "B", "b4": "N", "e4": "P", "f4": "K",
    },
    "rook-movement": {
        "d4": "R",
    },
    "bishop-movement": {
        "d4": "B",
    },
    "knight-movement": {
        "d4": "N",
    },
    "queen-movement": {
        "d4": "Q",
    },
    "pawn-movement": {
        "e2": "P", "d5": "P",
    },
}


def square_from_name(name):
    file_idx = FILES.index(name[0])
    rank_idx = int(name[1]) - 1
    return chess.square(file_idx, rank_idx)


def build_board(position):
    board = chess.Board(fen=None)
    board.clear()
    for sq_name, piece_char in position.items():
        if piece_char in ("*", "x"):
            continue
        if piece_char in PIECE_MAP:
            sq = square_from_name(sq_name)
            board.set_piece_at(sq, PIECE_MAP[piece_char])
    return board


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    for name, position in PDF_BOARDS.items():
        board = build_board(position)
        svg = chess.svg.board(board=board, size=BOARD_SIZE, coordinates=True)
        png_path = os.path.join(OUTPUT_DIR, f"{name}.png")
        cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=png_path)

    print(f"Generated {len(PDF_BOARDS)} PNG boards in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
