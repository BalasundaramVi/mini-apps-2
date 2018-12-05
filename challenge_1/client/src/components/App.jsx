import React from 'react';

import Header from './Header';

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
        <Header />
      </div>
    );
  }
}

export default App;
