import React from 'react';

import Board from './Board';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 'SCORE',
      board: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  }

  render() {
    const { score, board } = this.state;
    return (
      <div className="game">
        <Header />
        <Board board={board} />
        <div className="score">{score}</div>
      </div>
    );
  }
}

export default App;
