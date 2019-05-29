const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodMode = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/index.js',

  output: {
    filename: '[name].[contentHash].js',
    // 通过splitChunks抽离的js文件名格式
    chunkFilename: '[name].[contentHash].chunk.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: './'
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
      },
      // 小于8K的图片，转 base64
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 8
          }
        }
      },
      // 小于8K的字体，转 base64
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 1024 * 8
          }
        }
      },
      // {
      //   // antd样式处理
      //   test: /\.css$/,
      //   exclude: /src/,
      //   use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },

      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: { plugins: [require('autoprefixer')] } // eslint-disable-line global-require
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['ts', 'tsx', '.js', '.jsx', '.json'],
    alias: {
      hooks: path.resolve(__dirname, '../src/hooks'),
      components: path.resolve(__dirname, '../src/components')
    }
  },

  plugins: [
    // 提取css插件
    new MiniCssExtractPlugin({
      filename: prodMode ? '[name].[hash].css' : '[name].css'
    }),
    new HtmlWebpackPlugin({
      // 每次自动把js插入到模板index.html里面去
      template: './src/index.html'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],

  optimization: {
    minimize: prodMode,
    // namedModules: true,
    // noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /(\.css|\.scss)$/,
          chunks: 'all',
          enforce: true
        },
        commons: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  }
}
