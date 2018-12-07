import React from 'react';

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month;
  let date;
  if (today.getMonth() < 9) {
    month = `0${today.getMonth() + 1}`;
  } else {
    month = today.getMonth() + 1;
  }
  if (today.getDate() < 10) {
    date = `0${today.getDate()}`;
  } else {
    date = today.getDate();
  }

  const output = `${year}-${month}-${date}`;
  return (output);
};

class Options extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      currencies: ['USD', 'BTC', 'ETH', 'GBP', 'EUR', 'CNY', 'AED', 'AFN', 'ALL',
        'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD',
        'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF',
        'CHF', 'CLP', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD',
        'EGP', 'ERN', 'ETB', 'FJD', 'FKP', 'GEL', 'GGP', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ',
        'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'IMP', 'INR', 'IQD', 'IRR',
        'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD',
        'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD',
        'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN',
        'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG',
        'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP',
        'SLL', 'SRD', 'STN', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY',
        'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WST', 'XAF',
        'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW'],

      curDate: '',

      startDate: '',
      endDate: '',
      index: 'USD',
      currency: 'USD',
    };
  }

  componentDidMount() {
    const now = getCurrentDate();
    let monthAgo = (Number(now.substring(5, 7)) - 1);
    monthAgo = (monthAgo < 10 ? `0${monthAgo}` : `${monthAgo}`);
    monthAgo = `${now.substring(0, 4)}-${monthAgo}-${now.substring(8, now.length)}`;
    this.setState({ curDate: now, startDate: monthAgo, endDate: now });
  }

  handleChange(e) {
    const key = e.target.name;
    const { value } = e.target;
    this.setState({ [key]: value });
  }

  render() {
    const {
      currencies, curDate, startDate, endDate, index, currency,
    } = this.state;
    const { getData } = this.props;
    return (
      <div className="options">
        <div className="option option_1">
          <h5 className="index_choice input_header">Data Return Index:</h5>
          <form className="index_choices">
            <label htmlFor="index_USD">
              <input type="radio" id="index_USD" onChange={this.handleChange} name="index" value="USD" defaultChecked />
              USD
            </label>
            <label htmlFor="index_CNY">
              <input type="radio" id="index_CNY" onChange={this.handleChange} name="index" value="CNY" />
              CNY
            </label>
          </form>
        </div>

        <div className="option option_2">
          <h5 className="currency_choice input_header">Currency:</h5>
          <form className="currency_choices">
            <select name="currency" onChange={this.handleChange}>
              {currencies.map((currency, index) => {
                return (
                  <option key={`currency_${index + 1}`} value={currency} className={`currency_option option_${index}`}>{currency}</option>
                );
              })}
            </select>
          </form>
        </div>

        <div className="option option_2">
          <h5 className="date_choice input_header">Date Range:</h5>
          <form className="currency_choices">
            <div className="start_Date">
              Enter your start date:
              <input type="date" value={startDate} name="startDate" max={curDate} onChange={this.handleChange} />
            </div>
            <div className="end_Date">
              Enter your end date:
              <input type="date" value={endDate} name="endDate" max={curDate} onChange={this.handleChange} />
            </div>
          </form>
        </div>

        <div role="button" onClick={() => { getData('line', index, currency, startDate, endDate); }} value="submitResults">SUBMIT</div>
      </div>
    );
  }
};

export default Options;
