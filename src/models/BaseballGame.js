const RandomNumberGenerator = require('../utils/RandomNumberGenerator');
const GameReferee = require('./GameReferee');

class BaseballGame {
  #answer;

  #status;

  constructor() {
    this.#answer = RandomNumberGenerator.generate();
  }

  match(trial) {
    const trialNumber = [...trial].map(Number);

    GameReferee.judge(this.#answer, trialNumber);

    return GameReferee.toString();
  }
}

module.exports = BaseballGame;
