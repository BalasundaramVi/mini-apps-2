import React from 'react';

import BoardContainer from '../containers/BoardContainer';

const App = ({
  rows, cols, gameOver, mineCount, handleColChange, handleRowChange, handleMineChange, handleGameOver, startNewGame,
}) => (
  <div className="app">
    <div className="header">
      <h1>Welcome to Minesweeper</h1>
    </div>

    <br />

    <div className="new_game_form">
      <h3>Create New Game</h3>
      <div className="create_game_details">
        <div className="new_game_rows">
          <label>Rows: </label>
          <input onChange={e => handleRowChange(e.target.value)} type="number" placeholder="20" id="rows" name="rows" min="0" max="20" />
        </div>
        <div className="new_game_cols">
          <label>Columns: </label>
          <input onChange={e => handleColChange(e.target.value)} type="number" id="cols" placeholder="20" name="cols" min="0" max="20" />
        </div>
        <div className="new_game_mines">
          <label>Mines: </label>
          <input onChange={e => handleMineChange(e.target.value)} type="number" id="cols" placeholder="75" name="cols" min="0" />
        </div>
        <button onClick={() => { startNewGame(rows, cols, mineCount); }}>Create Game</button>
      </div>
    </div>

    <br />
    <div className="field">
      <div className="board-container">
        <BoardContainer />
      </div>
    </div>
  </div>
);

export default App;
