const createBoard = (rows, cols, mines) => ({
  type: 'MAKE_NEW_BOARD',
  rows,
  cols,
  mines,
});

const updateBoard = (row, col) => ({
  type: 'REVEAL_SPACE',
  row,
  col,
});

export { createBoard, updateBoard };
