var square0 = document.querySelector("#square-0");
var square1 = document.querySelector("#square-1");
var square2 = document.querySelector("#square-2");
var square3 = document.querySelector("#square-3");
var square4 = document.querySelector("#square-4");
var square5 = document.querySelector("#square-5");
var square6 = document.querySelector("#square-6");
var square7 = document.querySelector("#square-7");
var square8 = document.querySelector("#square-8");
var squares = document.querySelectorAll(".square");
var gameBoard = document.querySelector("#board");
var subHeaderMessage = document.querySelector("#display-messages");
var rightScore = document.querySelector("#right-side-score");
var leftScore = document.querySelector("#left-side-score");
var mainTitle = document.querySelector("#main-title");

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


var turkeyImage = `<img src="images/turkey.svg" alt="turkey image"/>`;
var hatImage = `<img src="images/pilgrim.svg" alt="Hat image"/>`;
var player1 = new Player(hatImage, "X", "Pilgrim Team");
var player2 = new Player(turkeyImage, "O", "Turkey Team");
var game = new Game(player1, player2);

function gameStart() {
  displayHeaderMessage();
  updateScoreBoard();
}

function markSquare(event) {
  var updateGameBoardValuesArrayBoolean = updateGameBoardValuesArray();
  displayPlayerIconInGame();
  if (updateGameBoardValuesArrayBoolean === true) {
    game.winOrDrawGame();
    displayHeaderMessage();
    game.alternateTurns();
  }
}

function updateGameBoardValuesArray() {
  var selectedSquare = event.target.id;
  var squareNumber = selectedSquare[7];
  var squareIdNumber = parseInt(squareNumber);
  if (game.gameBoardValues[squareIdNumber] === "") {
  game.gameBoardValues[squareIdNumber] = game.currentPlayer.letter;
  game.currentPlayer.movesTracker.push(squareIdNumber);
  return true;
  }
  return false;
}

function displayPlayerIconInGame() {
  event.target.innerHTML = game.currentPlayer.icon;
}

function displayHeaderMessage() {
  var playerTurnMessage = `It's ${game.currentPlayer.teamName}'s turn!`;
  var winnerMessage = `Congratulations ${game.currentPlayer.teamName}! You've won!`;
  var drawMessage = `It's a draw!`;
  if (game.winner === false && game.gameBoardValues.includes("")) {
      subHeaderMessage.innerText = playerTurnMessage;
    } else if (game.winner === true) {
    updateScoreBoard();
    subHeaderMessage.innerText = winnerMessage;
  } else if (game.draw === true) {
   subHeaderMessage.innerText = drawMessage;
  }
}

function updateScoreBoard() {
  leftScore.innerText = `${player1.wins}`;
  rightScore.innerText = `${player2.wins}`;
}
