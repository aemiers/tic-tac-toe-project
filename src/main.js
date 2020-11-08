// var Game = require("./game.js")

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

square0.addEventListener("click", markSquare);
square1.addEventListener("click", markSquare);
square2.addEventListener("click", markSquare);
square3.addEventListener("click", markSquare);
square4.addEventListener("click", markSquare);
square5.addEventListener("click", markSquare);
square6.addEventListener("click", markSquare);
square7.addEventListener("click", markSquare);
square8.addEventListener("click", markSquare);

// var gameBoard = document.querySelector("#board");
// var gameBoardSquares = document.querySelectorAll(".square");
var rightScore = document.querySelector("#right-side-score");
var leftScore = document.querySelector("#left-side-score");
var mainTitle = document.querySelector("#main-title");

// var square = document.getElementById()
// window.addEventListener("load", beginningTurn);

// gameBoard.addEventListener("click", markSquare);

// var currentPlayer = player1;
// player1.turn = true;
var gameBoardValues = ["", "", "", "", "", "", "", "", ""];

function markSquare(event) {
  var selectedSquare = event.target.id;
  var squareNumber = selectedSquare[7];
  var squareIdNumber = parseInt(squareNumber);
  gameBoardValues[squareIdNumber] = "X"
  console.log(gameBoardValues);
  event.target.innerText = "X";

  // idSquareClicked();
  // updateGameBoardValuesArray();
  // addImageToSquare();
}


function alternateTurns() {
  player1.turn = true;
  if (player1.turn === true) {
    player token will be X
  }
//   if (player2.turn === false) {
//     player1.turn = true;
//   } else {
//     player2.turn = true;
//   }
//   //innerHTML display whose turn it is
// }
//

//   for (var i = 0; i < gameBoardValues.length; i++) {
//     if (gameBoardValues[i] === "") {
//       gameBoardValues[i].push(`${currentPlayer.letter}`)
//     }
//     pushPlayerIcon();
//     disableClickedSquare();
//     updateHeaderMessage();
//     nextPlayerTurn();
//   }
// }
//
// Game pseudocoding -
// begins with player 1. is player 1 and player 2 defined? yes, on the player board
//
// player 1 chooses a square and clicks on it
//
// click triggers a function that labels where the user clicked on the gameBoard, marks it with the token, disables the box, checks to see if there's a winning scenario. if there's not, it's player 2's turn.
//
// if there's a winning scenario, triggers congratulations celebration banner and the tally on the player's side will go up by one. game will restart, wiping the grid clean. One click will happen to reset the board.
//
//
//
// done -click is noticed the board, the mark  square function is invoked
// we will know which player it is because of the gamestart function
//
//
//
//
//
// function disableClickedSquare(gameBoardValues) {
//   if (gameBoardValues[i] !== "") {
//     square.disabled = true;
//   }
// }
//
// function pushPlayerIcon() {
//   if (currentPlayer = player1) {
//     currentSquare
//   }
// }
// function playerTurn() {
//   if (this.game === reset) {
//     // this.turn !== winner || player2;
//     // currentPlayer = winner || player1;
//   } else if (player1.turn === true) {
//     this.turn = player2;
//     currentPlayer = player2;
//   } else {
//     this.turn = player1;
//     currentPlayer = player1;
//   }
// }
//
//
//
// gameState = win, in progress, draw
// after win, need a blank click to reset gameBoard array
//
//
// updateHeaderMessage() {
//   mainTitle.innerText = `It's ${currentPlayer}'s turn!`;
//   if (gamestate === won) {
//     mainTitle.innerText = `Congratulations ${currentPlayer}! You've won!`;
//   } else if (gamestate === draw) {
//     mainTitle.innerText = `It's a draw!`;
//   }
// }
// function nextPlayerTurn() {
//
// }
//
// function updateScore() {
//   leftScore.innerText = `${player1.wins}`;
//   rightScore.innerText = `${player2.wins}`;
// }
//
// function resetBoard() {
//   gameBoard.value = "";
// }

//
// // gamestate v win state
// // startGame()
// //   new game
// //
// // function addToGameArray() {
// //
// // }
// //
// // function checkGridGame() {
// //
// // }
