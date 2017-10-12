var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body',
});

var entrypoint =
  process.env.npm_lifecycle_event === 'dev'
    ? 'webpack-dev-server/client?http://localhost:8080'
    : './public/js/index.js';

module.exports = {
  entry: entrypoint,
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    contentBase: './public/',
  },
};
