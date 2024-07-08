const Board = require('./board');

class Game {
  constructor() {
    this.board = new Board();
    this.currentTurn = 'white';
  }

  isMoveValid(start, end) {
    const piece = this.board.getPiece(start);

    if (!piece) {
      return false; // No piece at the start position
    }

    if (piece.color !== this.currentTurn) {
      return false; // Not the player's turn
    }

    if (piece.isValidMove(start, end, this.board.grid)) {
      return true;
    }

    return false;
  }

  makeMove(start, end) {
    if (this.isMoveValid(start, end)) {
      this.board.movePiece(start, end);
      this.currentTurn = this.currentTurn === 'white' ? 'black' : 'white';
    } else {
      throw new Error('Invalid move');
    }
  }
}

module.exports = Game;
