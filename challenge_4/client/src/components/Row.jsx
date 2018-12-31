import React from 'react';

const Row = ({ row, rowNum, revealSpace }) => (
  <li className={`row row_${rowNum}`} key={`${rowNum + 1}`}>
    {row.map((col, i) => {
      console.log(col);
      return (
      <div className={`col col_${i}`}>
        <div className={`square ${col.revealed ? 'revealed' : ''}`} onClick={() => { revealSpace(rowNum, i); }}>{col.num}</div>
      </div>
    )})}
  </li>
);

export default Row;
