const { Console } = require('@woowacourse/mission-utils');

const BaseballGame = require('../models/BaseballGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const {
  validate,
  isAnswerInput,
  isCommandInput,
} = require('../utils/Validator');
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
    InputView.readAnswer((answer) => {
      try {
        this.onInputAnswer(answer);
      } catch (error) {
        Console.close();
      }
    });
  }

  onInputAnswer(answer) {
    validate(answer, isAnswerInput);

    const result = this.#baseballGame.match(answer);
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
    InputView.readGameCommand((command) => {
      try {
        this.onInputGameCommand(command);
      } catch (error) {
        Console.close();
      }
    });
  }

  onInputGameCommand(command) {
    validate(command, isCommandInput);

    if (command === GAME_COMMAND.RETRY) {
      this.startNewGame();
      return;
    }

    Console.close();
  }
}

module.exports = GameController;
