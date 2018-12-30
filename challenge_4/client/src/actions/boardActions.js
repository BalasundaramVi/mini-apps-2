const createBoard = (rows, cols, mines) => ({
  type: 'MAKE_NEW_BOARD',
  rows,
  cols,
  mines,
});

const updateBoard = board => ({
  type: 'UPDATE_BOARD',
  board,
});

export { createBoard, updateBoard };
