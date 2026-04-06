"""Verify all chess positions in lesson content for correctness."""
import json
import chess

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

def build_board(position, turn=chess.BLACK):
    board = chess.Board(fen=None)
    board.clear()
    for sq_name, piece_char in position.items():
        if piece_char in ("*", "x"):
            continue
        if piece_char in PIECE_MAP:
            f = FILES.index(sq_name[0])
            r = int(sq_name[1]) - 1
            board.set_piece_at(chess.square(f, r), PIECE_MAP[piece_char])
    board.turn = turn
    return board

# Load all board positions
with open("scripts/boards.json", "r") as f:
    boards = json.load(f)

print(f"Checking {len(boards)} positions...\n")

# Check positions that mention stalemate or checkmate in their caption
for b in boards:
    caption = b.get("caption", "").lower()
    pos = b.get("position", {})

    if not pos:
        continue

    # Check if it mentions stalemate or checkmate
    if "stalemate" in caption or "checkmate" in caption or "mate" in caption:
        board = build_board(pos, chess.BLACK)

        is_check = board.is_check()
        is_checkmate = board.is_checkmate()
        is_stalemate = board.is_stalemate()
        legal_moves = list(board.legal_moves)

        # Also check with White to move
        board_w = build_board(pos, chess.WHITE)
        is_check_w = board_w.is_check()
        is_checkmate_w = board_w.is_checkmate()
        is_stalemate_w = board_w.is_stalemate()

        status = ""
        if "stalemate" in caption:
            if is_stalemate:
                status = "OK (is stalemate with Black to move)"
            elif is_checkmate:
                status = "ERROR: Claims stalemate but is CHECKMATE"
            elif is_check:
                status = "ERROR: Claims stalemate but Black is in CHECK"
            elif legal_moves:
                status = f"ERROR: Claims stalemate but Black has {len(legal_moves)} legal moves"
            else:
                status = "UNUSUAL: Not stalemate by python-chess"

        if "checkmate" in caption or ("mate" in caption and "stalemate" not in caption):
            if is_checkmate:
                status = "OK (is checkmate with Black to move)"
            elif is_checkmate_w:
                status = "OK (is checkmate with White to move)"
            elif is_stalemate:
                status = "ERROR: Claims checkmate but is STALEMATE"
            elif not is_check and not is_check_w:
                status = f"WARNING: Claims mate but no one is in check. Black moves: {len(legal_moves)}"
            else:
                status = f"WARNING: Check={is_check}, legal_moves={len(legal_moves)}"

        if status:
            print(f"[{b['lesson']}] {b['section']}")
            print(f"  Caption: {b['caption'][:80]}")
            print(f"  Position: {pos}")
            print(f"  Black to move: check={is_check}, checkmate={is_checkmate}, stalemate={is_stalemate}, legal={len(legal_moves)}")
            print(f"  Status: {status}")
            print()
