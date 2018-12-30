const boardMaker = (r, c, m) => {
  const rows = Number(r);
  const cols = Number(c);
  const mines = Number(m);

  const totalSpaces = rows * cols;
  if (mines > totalSpaces) {
    return boardMaker(20, 20, 75);
  }

  const board = [];
  for (let i = 0; i < rows; i += 1) {
    const tempRow = [];
    for (let j = 0; j < cols; j += 1) {
      tempRow.push({
        num: 0,
        mine: false,
        revealed: false,
      });
    }
    board.push(tempRow);
  }

  const mineSpaces = [];

  while (mineSpaces.length < mines) {
    const rowHash = Math.floor(Math.random() * totalSpaces);
    if (mineSpaces.indexOf(rowHash) === -1) {
      mineSpaces.push(rowHash);
    }
  }

  for (let k = 0; k < mineSpaces.length; k += 1) {
    const row = Math.floor((mineSpaces[k]) / rows);
    const col = (mineSpaces[k] % rows);
    board[row][col].mine = true;

    for (let rowIndex = row - 1; rowIndex <= row + 1; rowIndex += 1) {
      if (rowIndex < rows && rowIndex >= 0) {
        for (let colIndex = col - 1; colIndex <= col + 1; colIndex += 1) {
          if ((colIndex < cols && colIndex >= 0) && !(rowIndex === row && colIndex === col) && board[rowIndex][colIndex].mine === false) {
            board[rowIndex][colIndex].num += 1;
          }
        }
      }
    }
  }
  return board;
};

export default boardMaker;
