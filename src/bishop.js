const Piece = require('./piece');

class Bishop extends Piece {
  constructor(color) {
    super(color);
  }

  isValidMove(start, end, board) {
    const deltaX = Math.abs(start.x - end.x);
    const deltaY = Math.abs(start.y - end.y);

    if (deltaX !== deltaY) {
      return false; // Bishops must move diagonally
    }

    // Check if path is clear
    const stepX = (end.x - start.x) / deltaX;
    const stepY = (end.y - start.y) / deltaY;

    for (let i = 1; i < deltaX; i++) {
      if (board[start.x + i * stepX][start.y + i * stepY] !== null) {
        return false;
      }
    }

    return true;
  }
}

module.exports = Bishop;
