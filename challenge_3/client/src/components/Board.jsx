import React from 'react';

const Board = ({ board }) => (
  <div className="board">
    {board.map((box, i) => (
      <div className={`score_box box_${i}`} key={`frame_${i + 1}`}>
        <div className="top_row">
          <div className="bowl_1">{8}</div>
          <div className="bowl_2">/</div>
        </div>
        <div className="current_score">10</div>
      </div>
    ))}
  </div>
);

export default Board;
