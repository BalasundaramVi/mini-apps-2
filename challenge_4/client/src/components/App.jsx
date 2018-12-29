import React from 'react';

import BoardContainer from '../containers/BoardContainer';

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

        <BoardContainer />
      </div>
    );
  }
}

export default App;
