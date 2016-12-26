const Path = require('path');

const config = {
  entry: {
    app: ['babel-polyfill','./client/js/app']
  },
  output: {
	  path: './build',
    filename: '[name]-bundle.js'
},
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          Path.resolve(process.cwd(), 'client/js')
        ],
        loader: 'babel',
        // pass options into the loader -> babel-es2015
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
	  extension: ['','.js'],
  	modulesDirectories: ['node_modules']
  }
};

module.exports = config;
