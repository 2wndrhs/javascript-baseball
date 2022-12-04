const BaseballGame = require('../models/BaseballGame');

const OutputView = require('../views/OutputView');

class GameController {
  #baseballGame;

  start() {
    OutputView.printStarting();
    this.setNewGame();
  }

  setNewGame() {
    this.#baseballGame = new BaseballGame();
  }
}

module.exports = GameController;
