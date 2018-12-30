import React from 'react';

import Row from './Row';

const Board = ({ board }) => (
  <ol className="game-board">
    {board.map((row, i) => (
      <Row row={row} rowNum={i} />
    ))}
  </ol>
);

export default Board;
