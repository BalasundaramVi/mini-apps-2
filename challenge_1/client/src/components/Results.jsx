import React from 'react';

const Results = ({ events }) => {
  return (
    <ul className="feed">
      {events.map((event, i) => (
        <li className="event" key={`search_result_${i + 1}`}>
          <div className="date">{event.date}</div>
          <p className="description">{event.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Results;
