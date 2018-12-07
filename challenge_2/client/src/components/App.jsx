import React from 'react';
import axios from 'axios';

import Header from './Header';
import Options from './Options';

import { createChart, formatData } from '../../utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getCryptoData = this.getCryptoData.bind(this);

    this.state = {
      chartPreference: 'line',
    };
  }

  getCryptoData(chartPref, index, currency, start, end) {
    this.setState({ chartPreference: chartPref });
    axios.post('/cryptoData', {
      index,
      currency,
      start,
      end,
    }).then((d) => {
      const { labels, data } = formatData(d.data, currency);
      const { chartPreference } = this.state;
      createChart(chartPreference, labels, data, currency);
    });
  }

  render() {
    return (
      <div className="application">
        <div className="head">
          <Header />
        </div>
        <div className="options_container">
          <Options getData={this.getCryptoData} />
        </div>
        <canvas className="chart" id="crypto_chart" />
      </div>
    );
  }
}

export default App;
