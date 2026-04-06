"""Generate SVG board images from extracted board positions using python-chess."""
import json
import os
import chess
import chess.svg

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
BOARDS_JSON = os.path.join(SCRIPT_DIR, "boards.json")
OUTPUT_DIR = os.path.join(SCRIPT_DIR, "..", "public", "boards")
BOARD_SIZE = 360

# Map our position format to python-chess pieces
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


def square_from_name(name):
    """Convert 'e4' to chess.E4 etc."""
    file_idx = FILES.index(name[0])
    rank_idx = int(name[1]) - 1
    return chess.square(file_idx, rank_idx)


def build_board(position):
    """Build a chess.Board from our position dict."""
    board = chess.Board(fen=None)  # empty board
    board.clear()
    for sq_name, piece_char in position.items():
        if piece_char in ("*", "x"):
            continue  # skip markers
        if piece_char in PIECE_MAP:
            sq = square_from_name(sq_name)
            board.set_piece_at(sq, PIECE_MAP[piece_char])
    return board


def build_fill(highlights, position):
    """Build fill dict for highlighted squares and special markers."""
    fill = {}
    # Highlights in green
    for sq_name in highlights:
        sq = square_from_name(sq_name)
        fill[sq] = "#15803d80"  # emerald-700 with alpha

    # Dots (*) - legal move indicators in light green
    for sq_name, piece_char in position.items():
        if piece_char == "*":
            sq = square_from_name(sq_name)
            fill[sq] = "#22c55e60"  # green with alpha

    # Captures (x) - in red
    for sq_name, piece_char in position.items():
        if piece_char == "x":
            sq = square_from_name(sq_name)
            fill[sq] = "#ef444480"  # red with alpha

    return fill


def generate_svg(board_data):
    """Generate an SVG string for a board position."""
    position = board_data.get("position", {})
    highlights = board_data.get("highlights", [])

    board = build_board(position)
    fill = build_fill(highlights, position)

    svg = chess.svg.board(
        board=board,
        size=BOARD_SIZE,
        fill=fill,
        coordinates=True,
    )
    return svg


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    with open(BOARDS_JSON, "r") as f:
        boards = json.load(f)

    print(f"Generating {len(boards)} SVG boards...")

    for i, board_data in enumerate(boards):
        board_id = board_data["id"]
        svg = generate_svg(board_data)

        # Clean filename
        filename = f"{board_id}.svg"
        filepath = os.path.join(OUTPUT_DIR, filename)

        with open(filepath, "w", encoding="utf-8") as f:
            f.write(svg)

    print(f"Done! Generated {len(boards)} SVGs in {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
