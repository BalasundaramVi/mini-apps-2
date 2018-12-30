import React from 'react';

import BoardContainer from '../containers/BoardContainer';

const App = () => (
  <div className="app">
    <div className="header">
      <h1>Welcome to Minesweeper</h1>
    </div>
    <br />
    <BoardContainer />
  </div>
);

export default App;
