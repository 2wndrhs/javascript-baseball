const BaseballGame = require('../models/BaseballGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class GameController {
  #baseballGame;

  start() {
    OutputView.printStarting();
    this.setNewGame();
    this.inputAnswer();
  }

  setNewGame() {
    this.#baseballGame = new BaseballGame();
  }

  inputAnswer() {
    InputView.readAnswer(this.onInputAnswer.bind(this));
  }

  onInputAnswer(answer) {
    const result = this.#baseballGame.match(answer);
  }
}

module.exports = GameController;
