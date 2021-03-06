const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:process.env.NODE_ENV,
  entry: './src/index.js', //入口
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|woff)$/,
        use: ['url-loader']
      }
    ]
  },
  resolve: {
    alias: {
      // 别名
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.jsx', '.js'] // 拓展
  },
  devServer: {
    contentBase: './',
    host: 'localhost',
    compress: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
