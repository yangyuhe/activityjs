const path = require('path')
module.exports = function (env) {
  function config (dev) {
    return {
      mode: dev ? 'development' : 'production',
      devtool: 'source-map',
      entry: path.resolve(__dirname, 'src/index.tsx'),
      output: {
        filename: dev ? 'index.js' : 'index.min.js',
        library: 'activityjs',
        libraryTarget: 'umd'
      },
      module: {
        rules: [{
          test: /\.(js|tsx)$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/preset-react'],
            plugins: ['transform-class-properties']
          }
        }]
      },
      externals: {
        react: 'react'
      }
    }
  }
  return [config(), config(true)]
}
