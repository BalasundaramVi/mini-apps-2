const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/src/index.jsx'),
  output: {
    filename: 'c2_bundle.js',
    path: path.join(__dirname, './client/public'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
