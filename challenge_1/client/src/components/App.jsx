import React from 'react';

import axios from 'axios';

import Header from './Header';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      events: [],
    };
  }

  search(event) {
    if (event.key !== 'Enter') {
      return;
    }

    const query = event.target.value;
    axios.get(`/events?q=${query}`)
      .then((data) => {
        this.setState({ events: data.data });
      });
  }

  render() {
    const { events } = this.state;
    return (
      <div className="application">
        <Header search={this.search} />
        <Results events={events} />
      </div>
    );
  }
}

export default App;
