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
  after player1 clicks, it's player 2's turn
  after player2 clicks, it's player 1's turn
  repeat until all of the squares are full

To assign an image to a player
  player 1 token = image url

assign token to player
  when player1 clicks
    X populates the game Array
    pilgrim populates the board innerText

  when player2 clicks
    O populates the game array
    turkey populates the board

square deactivated
  After a player clicked a square, it becomes deactivated
    event listener deactivated?
      this could be a shortcut if it's possible?
    disable UI? - I have created a square.
    make sure that the new info isn't getting pushed into the Array
      adding if (gameBoardArray === ""), then proceed
save information


//what do i need for a game to begin  - fresh map, fresh array, player1 go, innerText of title tells player1 to go, newGame
