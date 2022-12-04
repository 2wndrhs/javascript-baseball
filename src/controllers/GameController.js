const { Console } = require('@woowacourse/mission-utils');

const BaseballGame = require('../models/BaseballGame');
const GameReferee = require('../models/GameReferee');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const { GAME_STATUS, GAME_COMMAND } = require('../utils/constants');

class GameController {
  #baseballGame;

  #gameStatusHandlers = {
    [GAME_STATUS.FAIL]: this.inputAnswer.bind(this),
    [GAME_STATUS.CLEAR]: this.onGameClear.bind(this),
  };

  start() {
    OutputView.printStarting();

    this.startNewGame();
  }

  startNewGame() {
    this.#baseballGame = new BaseballGame(GAME_STATUS.PLAYING);

    this.inputAnswer();
  }

  inputAnswer() {
    InputView.readAnswer(this.onInputAnswer.bind(this));
  }

  onInputAnswer(answer) {
    GameReferee.reset();

    this.#baseballGame.match(answer);

    const result = GameReferee.toString();
    OutputView.printResult(result);

    this.checkGameStatus();
  }

  checkGameStatus() {
    const gameStatus = this.#baseballGame.getStatus();

    this.#gameStatusHandlers[gameStatus]();
  }

  onGameClear() {
    OutputView.printGameClear();

    this.inputGameCommand();
  }

  inputGameCommand() {
    InputView.readGameCommand(this.onInputGameCommand.bind(this));
  }

  onInputGameCommand(command) {
    if (command === GAME_COMMAND.RETRY) {
      this.startNewGame();
      return;
    }

    Console.close();
  }
}

module.exports = GameController;
