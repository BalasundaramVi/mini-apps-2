const buildInitialBoard = () => {
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    board.push({
      score: -1,
      firstBowl: -1,
      secondBowl: -1,
    });
  }
  return board;
};

export default buildInitialBoard;
