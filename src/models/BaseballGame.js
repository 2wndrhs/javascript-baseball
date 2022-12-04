const RandomNumberGenerator = require('../utils/RandomNumberGenerator');

class BaseballGame {
  #answer;

  constructor() {
    this.#answer = RandomNumberGenerator.generate();
  }
}

module.exports = BaseballGame;
