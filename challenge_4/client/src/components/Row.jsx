import React from 'react';

const Row = ({ row, rowNum }) => (
  <li className={`row row_${rowNum}`} key={`${rowNum + 1}`}>
    {row.map((col, i) => (
      <div className={`col col_${i}`}>
        <div className="square">{col.revealed ? col.num : ' '}</div>
      </div>
    ))}
  </li>
);

export default Row;
