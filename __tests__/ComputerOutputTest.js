const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestion = answer => {
  MissionUtils.Console.readLine = jest.fn();
  MissionUtils.Console.readLine.mockImplementation((question, callback) => {
    callback(answer);
  });
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('출력값 테스트', () => {
  test('입력 값을 볼, 스트라이크로 판단하여 결과를 출력', () => {
    const logSpy = getLogSpy();
    mockQuestion('135');
    mockRandoms([1, 3, 5]);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith('3스트라이크');
  });

  test('3개의 숫자를 모두 맞힐 경우 게임을 종료', () => {
    const logSpy = getLogSpy();
    mockQuestion('123');
    mockRandoms([1, 2, 3]);

    const app = new App();
    app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('게임 종료'));
  });
});
