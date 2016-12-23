const config = {
  entry: {
    app: ['babel-polyfill', './client/js/app']
  },
  output: {
    path: './build',
    filename: '[name]-bundle.js'
  },
  devtool: 'source-map',
  module: {},
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  }
};

module.exports = config;
