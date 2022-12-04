const GameReferee = require('./GameReferee');

const RandomNumberGenerator = require('../utils/RandomNumberGenerator');
const { GAME_STATUS } = require('../utils/constants');

class BaseballGame {
  #answer;

  #status;

  constructor(status) {
    this.#answer = RandomNumberGenerator.generate();
    this.#status = status;
  }

  match(trial) {
    const trialNumber = [...trial].map(Number);

    const { strike } = GameReferee.judge(this.#answer, trialNumber);
    this.checkClearOrFail(strike);
  }

  checkClearOrFail(strike) {
    if (strike === 3) {
      this.#status = GAME_STATUS.CLEAR;
      return;
    }

    this.#status = GAME_STATUS.FAIL;
  }

  getStatus() {
    return this.#status;
  }
}

module.exports = BaseballGame;
