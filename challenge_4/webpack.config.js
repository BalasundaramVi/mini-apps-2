const path = require('path');

module.exports = {
  entry: path.join(__dirname, './client/src/index.jsx'),
  output: {
    filename: 'c4_bundle.js',
    path: path.join(__dirname, './client/public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
