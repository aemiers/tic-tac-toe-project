class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.gameBoardValues = ["", "", "", "", "", "", "", "", ""];
    this.winner = false;
    this.draw = false;
    this.wins = [
      "0, 1, 2",
      "3, 4, 5",
      "6, 7, 8",
      "0, 3, 6",
      "1, 4, 7",
      "2, 5, 8",
      "0, 3, 6",
      "2, 4, 6",
    ];
  }

  alternateTurns() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  winOrDrawGame() {
    for (i = 0; i < this.wins.length; i++) {
      // if (currentPlayer.stringMovesTracker.includes(wins[i]) {
      if (this.wins[i].includes(currentPlayer.stringMovesTracker)) {
        curentPlayer.wins ++;
        this.winner = true;
      } else if (this.gameBoardValues !== "" && this.winner === false) {
        this.draw = true;
      } else {
        return;
        //or break
      }
    }
  }

  // restartGame() {
  //  this.gameBoardValues = ["", "", "", "", "", "", "", "", ""];
  //  this.currentPlayer = player1;
  //  player1.movesTracker = [];
  //  player2.movesTracker = [];
  //  player1.stringMovesTracker = "";
  //  player2.stringMovesTracker = "";
  //  do i include innerHTML " " to reset the visual game board?
  // }
}

var currentGame = [];

// restartGame(player who wins) {
//   clear gameBoard
//restartGame()
// }
// module.exports = Game;
