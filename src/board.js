const Bishop = require('./bishop');

class Board {
  constructor() {
    this.grid = this.initializeBoard();
  }

  initializeBoard() {
    const grid = Array(8).fill(null).map(() => Array(8).fill(null));

    // Place bishops for example (adjust positions as necessary)
    grid[0][2] = new Bishop('white');
    grid[0][5] = new Bishop('white');
    grid[7][2] = new Bishop('black');
    grid[7][5] = new Bishop('black');

    return grid;
  }

  getPiece(position) {
    return this.grid[position.x][position.y];
  }

  movePiece(start, end) {
    const piece = this.getPiece(start);
    this.grid[end.x][end.y] = piece;
    this.grid[start.x][start.y] = null;
  }
}

module.exports = Board;
