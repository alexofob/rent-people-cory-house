const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]!sass',
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.scss', '.css'],
  }
}
