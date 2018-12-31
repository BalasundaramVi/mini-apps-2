import React from 'react';

import Row from './Row';

const Board = ({ board, revealSpace }) => (
  <ol className="game-board">
    {board.map((row, i) => (
      <Row row={row} rowNum={i} revealSpace={revealSpace} />
    ))}
  </ol>
);

export default Board;
