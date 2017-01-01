const Path = require('path');

const config = {
  entry: {
    app: ['./client/js/app']
  },
  output: {
    path: './build',
    publicPath: 'build/',
    filename: '[name]-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test:/\.styl$/,
      include: [
        Path.resolve(process.cwd(), 'client/style/stylus')
      ],
      loader: 'style!css!stylus'
    }]
  },
  resolve: {
    extension: ['', '.js'],
    modulesDirectories: ['node_modules']
  }
};

module.exports = config;
