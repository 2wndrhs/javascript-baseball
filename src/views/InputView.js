const { Console } = require('@woowacourse/mission-utils');

const QUERY = Object.freeze({
  ANSWER: '숫자를 입력해주세요 : ',
});

const InputView = {
  readAnswer(callback) {
    Console.readLine(QUERY.ANSWER, callback);
  },
};

module.exports = InputView;
