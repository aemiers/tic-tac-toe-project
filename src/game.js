class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = player1;
    this.gameBoardValues = ["", "", "", "", "", "", "", "", ""];
    this.winner = false;
    this.draw = false;
  }

  alternateTurns() {
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    } else if (this.currentPlayer === this.player2) {
      this.currentPlayer = this.player1;
    }
  }

  winOrDrawGame() {
    var winsArray = [
      "0,1,2",
      "3,4,5",
      "6,7,8",
      "0,3,6",
      "1,4,7",
      "2,5,8",
      "0,4,8",
      "2,4,6",
    ];
    this.currentPlayer.manipulateMovesTracker();
    for (var i = 0; i < winsArray.length; i++) {
      if (this.currentPlayer.stringMovesTracker.includes(winsArray[i])) {
        console.log(this.currentPlayer);
        this.currentPlayer.wins++;
        this.winner = true;
        displayHeaderMessage();
        // this.restartGame();
      } else if (this.gameBoardValues !== "" && this.winner === false) {
        this.draw = true;
        displayHeaderMessage();
        // this.restartGame();
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
  //  // squares.forEach(node => node.innerHTML = "");
  // }
}

var currentGame = [];
