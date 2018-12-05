import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: [],
    };
  }

  render() {
    return (
      <div className="application">
        <div className="header">
          Hello World
        </div>
      </div>
    )
  }
}

export default App;