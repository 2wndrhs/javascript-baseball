const { Console } = require('@woowacourse/mission-utils');

const QUERY = Object.freeze({
  ANSWER: '숫자를 입력해주세요 : ',
  COMMAND: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

const InputView = {
  readAnswer(callback) {
    Console.readLine(QUERY.ANSWER, callback);
  },

  readGameCommand(callback) {
    Console.readLine(`${QUERY.COMMAND}\n`, callback);
  },
};

module.exports = InputView;
