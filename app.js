const Game = require('./src/game');

const game = new Game();

const start = { x: 0, y: 2 };
const end = { x: 2, y: 4 };

try {
  game.makeMove(start, end);
  console.log('Move successful');
} catch (error) {
  console.error(error.message);
}
