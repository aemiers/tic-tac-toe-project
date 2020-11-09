class Player {
  constructor(icon, letter, teamName) {
    this.wins = 0;
    this.icon = icon;
    this.letter = letter;
    this.teamName = teamName;
    this.selectionsTracker = [];
    //sort them in order 
  }
  saveWinsToStorage () {
  }

  retrieveWinsFromStorage() {
  }

}

// module.exports = Player;
