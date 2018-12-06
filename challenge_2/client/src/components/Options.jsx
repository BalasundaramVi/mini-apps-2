import React from 'react';

const currencies = ['USD', 'BTC', 'ETH', 'GBP', 'EUR', 'CNY', 'AED', 'AFN', 'ALL',
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
  'XCD', 'XDR', 'XOF', 'XPF', 'YER', 'ZAR', 'ZMW'];

const Options = (props) => {
  return (
    <div className="options">

      <div className="option option_1">
        <h5 className="index_choice input_header">Data Return Index:</h5>
        <form className="index_choices">
          <label htmlFor="index_USD">
            <input type="radio" id="index_USD" name="currency_index" value="USD" checked />
            USD
          </label>
          <label htmlFor="index_CNY">
            <input type="radio" id="index_CNY" name="currency_index" value="CNY" />
            CNY
          </label>
        </form>
      </div>

      <div className="option option_2">
        <h5 className="currency_choice input_header">Currency:</h5>
        <form className="currency_choices">
          <select name="currencies">
            {currencies.map((currency, index) => {
              return (
                <option value={currency} className={`currency_option option_${index}`}>{currency}</option>
              );
            })}
          </select>
        </form>
      </div>


    </div>
  );
};

export default Options;
