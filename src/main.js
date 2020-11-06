//displaying or tracking the score, wins, controls interaction
//event listeners
var player 1 = new Player();
var player 2 = new Player();

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

gameBoard.addEventListener("click", addToGameArray);
// need to add a event listener for closest
//like we did in the ideabox so that it selects
// the correct box. Or do we because it's already on there

//on click, put whichever icon in the spot
