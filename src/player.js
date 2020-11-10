class Player {
  constructor(icon, letter, teamName) {
    this.wins = 0;
    this.icon = icon;
    this.letter = letter;
    this.teamName = teamName;
    this.movesTracker = [];
    this.stringMovesTracker = "";
  }

  saveWinsToStorage () {
  }

  retrieveWinsFromStorage() {
  }

  manipulateMovesTracker() {
    var organizedMoves = this.movesTracker.sort();
    this.stringMovesTracker = organizedMoves.toString()
  }
}
