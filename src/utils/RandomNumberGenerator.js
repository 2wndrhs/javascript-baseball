const { Random } = require('@woowacourse/mission-utils');

const RandomNumberGenerator = {
  generate() {
    const numbers = new Set();

    while (numbers.size < 3) {
      const random = Random.pickNumberInRange(1, 9);
      numbers.add(random);
    }

    return [...numbers];
  },
};

module.exports = RandomNumberGenerator;
