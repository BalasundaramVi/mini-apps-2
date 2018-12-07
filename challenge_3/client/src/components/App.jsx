import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 'SCORE',
    };
  }

  render() {
    const { score } = this.state;
    return (
      <div className="game">
        <div className="header">HEADER</div>
        <div className="board">BOARD</div>
        <div className="score">{score}</div>
      </div>
    );
  }
}

export default App;
