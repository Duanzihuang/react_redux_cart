const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', //入口
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  plugins:[
      new HtmlWebpackPlugin({
        template:'./public/index.html'
      })
  ]
}
