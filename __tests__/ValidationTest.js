/* eslint-disable max-lines-per-function */
const {
  validate,
  isAnswerInput,
  isCommandInput,
} = require('../src/utils/Validator');

describe('Validation 테스트', () => {
  test.each(['12', '012', '890', 'abc', '111'])(
    '1에서 9까지 서로 다른 임의의 수 3개가 아닐 경우 예외 발생',
    (answer) => {
      expect(() => {
        validate(answer, isAnswerInput);
      }).toThrow();
    },
  );

  test.each([' ', '0', 'a', '12'])(
    '1과 2중 하나의 숫자가 아닐 경우 예외 발생',
    (command) => {
      expect(() => {
        validate(command, isCommandInput);
      }).toThrow();
    },
  );
});
