const path = require('path');
// const { HotModuleReplacementPlugin } = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'server'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals()],
  // plugins: [new HotModuleReplacementPlugin()],
};
