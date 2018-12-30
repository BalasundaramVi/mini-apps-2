const boardMaker = (rows, cols, mines) => {
  const totalSpaces = rows * cols;
  if (mines > totalSpaces) {
    return boardMaker(20, 20, 75);
  }

  const board = [];
  for (let i = 0; i < rows; i += 1) {
    const row = [];
    for (let j = 0; i < cols; j += 1) {
      row.push({
        num: 0,
        mine: false,
        revealed: false,
      });
    }
    board.push(row);
  }

  const mineSpaces = [];

  while (mineSpaces.length <= mines) {
    const r = Math.floor(Math.random() * totalSpaces) + 1;
    if (mineSpaces.indexOf(r) === -1) {
      mineSpaces.push(r);
    }
  }

  for (let k = 0; k < mineSpaces.length; k += 1) {
    const row = Math.floor(mineSpaces[k] / rows);
    const col = mineSpaces[k] % rows;
    board[row][col].mine = true;
    for (let i = row - 1; i <= row + 1; i += 1 ) {
      for (let j = col - 1; j <= col + 1; j += 1) {
        if (!(i === row && j === col) && board[i][j].mine === false) {
          board[i][j].num += 1;
        }
      }
    }
  }
  return board;
};

const gameStateReducer = (state, action) => {
  switch (action.type) {
    case 'START_NEW_GAME':
      return {
        ...state,
        gameOver: false,
        board: boardMaker(action.rows, action.cols, action.mines),
      };
    default:
      return {
        gameOver: true,
        board: [],
      };
  }
};

export default gameStateReducer;
