const GAME_STATUS = Object.create({
  PLAYING: 'PLAYING',
  FAIL: 'FAIL',
  CLEAR: 'CLEAR',
});

const GAME_COMMAND = Object.create({
  RETRY: '1',
  QUIT: '2',
});

module.exports = {
  GAME_STATUS,
  GAME_COMMAND,
};
