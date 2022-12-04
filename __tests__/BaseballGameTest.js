/* eslint-disable max-lines-per-function */
const MissionUtils = require('@woowacourse/mission-utils');

const BaseballGame = require('../src/models/BaseballGame');

const { GAME_STATUS } = require('../src/utils/constants');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('BaseballGame 테스트', () => {
  test.each([
    ['123', GAME_STATUS.FAIL],
    ['135', GAME_STATUS.CLEAR],
  ])('getStatus 메서드는 현재 게임의 상태를 반환', (answer, expectedStatus) => {
    mockRandoms([1, 3, 5]);

    const baseballGame = new BaseballGame(GAME_STATUS.PLAYING);

    baseballGame.match(answer);
    const status = baseballGame.getStatus();

    expect(status).toEqual(expectedStatus);
  });
});
