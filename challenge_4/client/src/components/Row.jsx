import React from 'react';

const Row = ({ row, rowNum }) => (
  <li className={`row row_${rowNum}`} key={`${rowNum + 1}`}>
    {row.map((col, i) => (
      <div className={`col col_${i}`}>
        <h4> EMPTY PIECE </h4>
      </div>
    ))}
  </li>
);

export default Row;
