const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  CLEAR: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
});

const OutputView = {
  printStarting() {
    Console.print(MESSAGE.START);
  },

  printResult(result) {
    Console.print(result);
  },

  printGameClear() {
    Console.print(MESSAGE.CLEAR);
  },
};

module.exports = OutputView;
