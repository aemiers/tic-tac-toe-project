class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.gameBoardValues = ["", "", "", "", "", "", "", "", ""];
    this.wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 3, 6],
      [2, 4, 6],
    ]
  }
}

var currentGame = [];

//methods modify the classes b/c they are right on the class

// A Game should include:
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct player’s wins array
// A way to reset the Game’s board to begin a new game


// Who won the game?
//no need to use interpolation here, keep this function here
// function winOrDraw
// for (i = 0; i < this.wins.length; i++) {
//   if (currentGame === wins[i].length) {
//     `${player.wins}` = true;
//      `${player}score ++;
//   }
//   if (this.game !== `${wins}`) {
//   this.game.result = draw;
//   }
//   restartGame()
// }
//
//
// restartGame(player who wins) {
//   clear gameBoard
//
// }
module.exports = Game;
