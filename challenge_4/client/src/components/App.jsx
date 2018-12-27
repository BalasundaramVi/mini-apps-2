import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [[]],
    };
  }

  render() {
    const { board } = this.state;
    return (
      <div className="app">
        <div className="header">
          <h1>Hello World</h1>
        </div>

        <br />

        <div className="game-board">
          <h2>Board</h2>
        </div>
      </div>
    );
  }
}

export default App;
