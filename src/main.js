// var Game = require('./game.js');
// var Player = require('./player.js');

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
var subHeaderMessage = document.querySelector("#display-messages");

square0.addEventListener("click", markSquare);
square1.addEventListener("click", markSquare);
square2.addEventListener("click", markSquare);
square3.addEventListener("click", markSquare);
square4.addEventListener("click", markSquare);
square5.addEventListener("click", markSquare);
square6.addEventListener("click", markSquare);
square7.addEventListener("click", markSquare);
square8.addEventListener("click", markSquare);
window.addEventListener("load", gameStart);

var rightScore = document.querySelector("#right-side-score");
var leftScore = document.querySelector("#left-side-score");
var mainTitle = document.querySelector("#main-title");
var turkeyImage = `<img src="images/turkey.svg" alt="turkey image"/>`;
var hatImage = `<img src="images/pilgrim.svg" alt="Hat image"/>`;

var player1 = new Player(hatImage, "X", "Pilgrim Team");
var player2 = new Player(turkeyImage, "O", "Turkey Team");
var game = new Game(player1, player2);

function gameStart() {
  displayHeaderMessage();
}

function markSquare(event) {
  var updateGameBoardValuesArrayBoolean = updateGameBoardValuesArray();
  displayPlayerIconInGame();
  if (updateGameBoardValuesArrayBoolean === true) {
    game.alternateTurns()
    displayHeaderMessage();
  }
  console.log(game.gameBoardValues);
}

//split into two functions - check if should change, then run function

function updateGameBoardValuesArray() {
  var selectedSquare = event.target.id;
  var squareNumber = selectedSquare[7];
  var squareIdNumber = parseInt(squareNumber);
  if (game.gameBoardValues[squareIdNumber] === "") {
  game.gameBoardValues[squareIdNumber] = game.currentPlayer.letter;
  return true;
  }
  return false;
}

function displayPlayerIconInGame() {
  event.target.innerHTML = game.currentPlayer.icon;
}

function displayHeaderMessage() {
  var playerTurnMessage = `It's ${game.currentPlayer.teamName}'s turn!`
  var winnerMessage = `Congratulations ${game.currentPlayer.teamName}! You've won!`
  var drawMessage = `It's a draw!`
  //need if statement for when you have a win status or draw
  subHeaderMessage.innerText = playerTurnMessage;
}

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

// function updateScore() {
//   leftScore.innerText = `${player1.wins}`;
//   rightScore.innerText = `${player2.wins}`;
// }
//
// function resetBoard() {
//   gameBoardValues = ["", "", "", "", "", "", "", "", ""];
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
