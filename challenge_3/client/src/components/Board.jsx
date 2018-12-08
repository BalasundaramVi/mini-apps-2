import React from 'react';

const Board = ({ board }) => (
  <div className="board">
    {board.map((box, i) => (
      <div className={`score_box box_${i}`} key={`frame_${i + 1}`}>
        <div className="top_row">
          <div className={`bowl_1 ${box.firstBowl === -1 ? 'invisible' : ''}`}>{ box.firstBowl }</div>
          <div className={`bowl_2 ${box.secondBowl === -1 ? 'invisible' : ''}`}>{ box.secondBowl }</div>
          {box.thirdBowl !== undefined ? (box.thirdBowl >= 0 ? <div className="bowl_2">{box.thirdBowl}</div> : <div className="bowl_2 invisible">{box.thirdBowl}</div>) : ''}
        </div>
        <div className={`current_score ${box.score === -1 ? 'invisible' : ''}`}>{ box.score }</div>
      </div>
    ))}
  </div>
);

export default Board;
