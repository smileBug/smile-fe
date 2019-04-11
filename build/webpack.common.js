const path = require('path')

console.log(path.resolve(__dirname, '../src'), 'sss')
module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['ts', 'tsx', '.js', '.jsx', '.json'],
    alias: {
      hooks: path.resolve(__dirname, '../src/hooks')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        use: 'babel-loader'
      }
    ]
  }
}
