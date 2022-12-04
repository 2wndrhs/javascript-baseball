const { GAME_COMMAND } = require('./constants');

module.exports = {
  validate(input, validator) {
    if (!validator(input)) {
      throw new Error();
    }
  },

  isAnswerInput(input) {
    const ANSWER_PATTERN = /[1-9]{3}/;

    return ANSWER_PATTERN.test(input) && new Set(input).size === 3;
  },

  isCommandInput(input) {
    return input === GAME_COMMAND.RETRY || input === GAME_COMMAND.QUIT;
  },
};
