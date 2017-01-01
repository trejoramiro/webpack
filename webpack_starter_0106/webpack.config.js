const Path = require('path');
// request plugin from node_modules folder
const Autoprefixer = require('autoprefixer-stylus')

const jeet = require('jeet')

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
  },
  stylus: {
    use: [
      Autoprefixer({
        browsers: ['last 2 versions']
      }),
      jeet()
    ]
  }
};

module.exports = config;
