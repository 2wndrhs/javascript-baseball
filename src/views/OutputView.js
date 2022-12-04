const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
});

const OutputView = {
  printStarting() {
    Console.print(MESSAGE.START);
  },
};

module.exports = OutputView;
