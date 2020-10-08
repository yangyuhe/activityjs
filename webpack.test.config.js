const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = function (env) {
  return {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'test/main.js'),
    output: {
      filename: 'test.js',
      library: 'activityjs',
      libraryTarget: 'umd'
    },
    module: {
      rules: [{
        test: /\.(js|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        }
      }]
    },
    devServer: {
      compress: true,
      port: 9000,
      contentBase: 'dist'
    },
    plugins: [new HtmlWebpackPlugin({ template: 'test/index.html' })]
  }
}
