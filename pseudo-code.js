game begins
  game board is clean
  game array is cleared
  it's player 1's turn
  icon = hat
  letter = x
  player 1 turn displayed on HTML
  game board listening for click

user clicks on a square
square is identified with id
capture event.target with event listener and query selectors

mark with token
  taking captured information
  take id cap. info, remove 'square-'
  make "num" into a number instead of string parseInt

mark off corrosponding square with player token
  update Game Array
    take game array (parseInt)
    reassign(=) into the game array
    put X or O in at that index of array
  update board on game Array
    update HTML with marker at clicked location (event.target.)

identify whose turn it is
  it starts off as player1
  click = player 1 = true, place that token
  make state false so that it goes to the next person
  player 2 turn
  player 2 click
  make false
  player 1 turn

To assign an image to a player
  player 1 token = image url

assign token to player
  when player1 clicks
    X populates the game Array
    pilgrim populates the board innerText

  when player2 clicks
    O populates the game array
    turkey populates the board


square deactivated - did not go game.gameBoardValues[squareIdNumber] === "" route because then it's the next player's turn, creating a bug. Will deactivate event listener
  After a player clicked a square, it becomes deactivated
    event listener deactivated?
      this could be a shortcut if it's possible?
    square.disabled class
    make sure that the new info isn't getting pushed into the Array
    turn doesn't go unless an empty square was clicked on
save information

change the titles of the top
  create different var for each message - should go on main js file
    player 1 turn
    player 2 turn
    player 1 won
    player 2 won
    it's a draw
  insert at top of page

winning a game
  keep track of each players turns in their array -should this be an ARRAY or a string??
    organize the selections from smallest integer to largest
    make array a string 

  push squareIdNumber into game.currentPlayer.selectionsTracker;
      goes into line 54
      game.currentPlayer.selectionsTracker.push(squareIdNumber)
  check if the player's selections match up with any of the win scenarios
    for (i = 0; i < player.selectionsTracker.length, i++) {
      if (selectionsTracker.length >= 3 &&
    }
  last click player is the winner
  add 1 to that player's wins
  display winning message
  update Score
  if winner = true game stops

  update score
    current player won
restarting game
  one click after win to reset board







,
