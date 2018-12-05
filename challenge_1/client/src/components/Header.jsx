import React from 'react';

const Header = ({ search }) => {
  return (
    <div className="header">
      <div className="intro">
        <h2 className="welcome banner">Welcome to the</h2>
        <h1 className="Historical_Events banner">Historical Events Finder!</h1>
      </div>
      <div className="searchbar">
        <input className="search_input" onKeyPress={(e) => { search(e); }} placeholder="search history..." />
      </div>
    </div>
  );
};

export default Header;
