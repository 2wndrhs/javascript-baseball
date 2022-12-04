const RESULT = Object.freeze({
  NOTHING: '낫싱',
  BALL: '볼',
  STRIKE: '스트라이크',
});

const GameReferee = {
  result: {
    ball: 0,
    strike: 0,
  },

  judge(answer, trial) {
    trial.forEach((trialNumber, trialIndex) => {
      const isIncluded = answer.includes(trialNumber);

      if (isIncluded) {
        this.countBallsAndStrikes(answer, trialNumber, trialIndex);
      }
    });
  },

  countBallsAndStrikes(answer, trialNumber, trialIndex) {
    const isStrike = answer.indexOf(trialNumber) === trialIndex;

    if (isStrike) {
      this.result.strike += 1;
      return;
    }

    this.result.ball += 1;
  },

  reset() {
    this.result.ball = 0;
    this.result.strike = 0;
  },

  toString() {
    const { ball, strike } = this.result;

    if (!ball && !strike) return RESULT.NOTHING;
    if (ball && strike) {
      return `${ball}${RESULT.BALL} ${strike}${RESULT.STRIKE}`;
    }
    if (ball) return `${ball}${RESULT.BALL}`;
    return `${strike}${RESULT.STRIKE}`;
  },
};

module.exports = GameReferee;
