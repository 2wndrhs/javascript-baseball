/* eslint-disable max-lines-per-function */
const GameReferee = require('../src/models/GameReferee');

afterEach(() => {
  GameReferee.reset();
});

describe('GameReferee 테스트', () => {
  test.each([
    [[2, 4, 6], '낫싱'],
    [[5, 3, 1], '2볼 1스트라이크'],
    [[3, 5, 1], '3볼'],
    [[1, 3, 5], '3스트라이크'],
  ])(
    'toString 메서드는 입력한 숫자에 대한 볼, 스트라이크 결과를 문자열로 반환',
    (trial, expected) => {
      const answer = [1, 3, 5];

      GameReferee.judge(answer, trial);
      const result = GameReferee.toString();

      expect(result).toEqual(expected);
    },
  );
});
