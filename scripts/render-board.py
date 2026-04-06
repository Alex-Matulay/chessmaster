"""Render a single board position to PNG. Usage: python render-board.py <json_file> <output_png>"""
import sys
import json
import chess
import chess.svg
import cairosvg

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

input_path = sys.argv[1]
output_path = sys.argv[2]

with open(input_path, "r") as f:
    position = json.load(f)

board = chess.Board(fen=None)
board.clear()
for sq_name, piece_char in position.items():
    if piece_char in PIECE_MAP:
        f = FILES.index(sq_name[0])
        r = int(sq_name[1]) - 1
        board.set_piece_at(chess.square(f, r), PIECE_MAP[piece_char])

svg = chess.svg.board(board=board, size=280, coordinates=True)
cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=output_path)
