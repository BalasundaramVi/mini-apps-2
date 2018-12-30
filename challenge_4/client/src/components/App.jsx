import React from 'react';

import BoardContainer from '../containers/BoardContainer';

const App = ({ gameOver, mineCount }) => {
  const newGame = (
    <div className="new_game_form">
      <h3>Create New Game</h3>
      <form>
        <div className="new_game_rows">
          <label for="rows">Rows: </label>
          <input type="number" id="rows" name="rows" min="0" max="100" />
        </div>
        <div className="new_game_colss">
          <label for="cols">Columns: </label>
          <input type="number" id="cols" name="cols" min="0" max="100" />
        </div>
        <button type="submit">Create Game</button>
      </form>
    </div>
  )

  return (
    <div className="app">
      <div className="header">
        <h1>Welcome to Minesweeper</h1>
      </div>
      <br />
      { gameOver ? newGame : <BoardContainer /> }
    </div>
  )
};

export default App;
