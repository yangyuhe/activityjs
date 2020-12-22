const path = require('path')
module.exports = function () {
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
          loader: 'babel-loader'
        }]
      },
      externals: {
        react: 'react'
      }
    }
  }
  return [config(), config(true)]
}
