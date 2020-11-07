var square0 = document.querySelector("#square-0");
var square1 = document.querySelector("#square-1");
var square2 = document.querySelector("#square-2");
var square3 = document.querySelector("#square-3");
var square4 = document.querySelector("#square-4");
var square5 = document.querySelector("#square-5");
var square6 = document.querySelector("#square-6");
var square7 = document.querySelector("#square-7");
var square8 = document.querySelector("#square-8");
var gameBoard = document.querySelector("#board");
var rightScore = document.querySelector("#right-side-score");
var leftScore = document.querySelector("#left-side-score");
var mainTitle = document.querySelector("#main-title");

gameBoard.addEventListener("click", identifyBox);
//need to be able to click on a grid box and have it tell us which box was selected
// var game = new Game;
//hang in there = global variable is just poster, use this to plug in gameBoard
//game.startGame

function identifyBox() {
  if (event.target.className === "board") {
  event.target.closest(".square").click();
  }
}

`It's ${currentPlayer}'s turn!`

// gamestate v win state
// startGame()
//   new game
//
// //click id's cell box
// var boxValues = ["", "", "", "", "", "", "", "", ""];
//
//
// }
//
// function resetBoard() {
//   gameBoard.value = "";
// }
//
// function updateScore() {
//   leftScore.innerText = player1Score.value;
//   rightScore.innerText = player2Score.value;
// }
//on click, put whichever icon in the spot

//
// function addToGameArray() {
//
// }
//
// function checkGridGame() {
//
// }
//
// function playerTurn() {
//   if (this.game === reset) {
//     this.turn !== winner || player1;

//   } else if (this.turn === player1) {
//     this.turn = player2;
//   } else {
//     this.turn = player1;
//   }
// }
