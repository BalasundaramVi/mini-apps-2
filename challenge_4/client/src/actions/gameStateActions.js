const startNewGame = mineCount => ({
  type: 'START_NEW_GAME',
  mineCount,
});

const gameOver = () => ({
  type: 'GAME_OVER',
});

const startingRowNum = rows => ({
  type: 'UPDATE_ROWS',
  rows,
});

const startingColNum = cols => ({
  type: 'UPDATE_COLS',
  cols,
});

const startingMineCount = mines => ({
  type: 'UPDATE_MINES',
  mines,
});

export {
  startNewGame, gameOver, startingRowNum, startingColNum, startingMineCount,
};
