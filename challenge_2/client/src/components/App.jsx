import React from 'react';

import Header from './Header';
import Options from './Options';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div className="application">
        <div className="head">
          <Header />
        </div>
        <div className="options_container">
          <Options />
        </div>
        <div className="body">
          Hello World
        </div>
      </div>
    );
  }
}

export default App;
