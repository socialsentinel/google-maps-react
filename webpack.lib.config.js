const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',  // Library entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'GoogleMapsReact',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};