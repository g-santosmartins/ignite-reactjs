const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'producion'

const ReactRefreshWebPackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


module.exports = {

  mode: isDevelopment ? 'development' : 'production',

  devtool: isDevelopment ? 'eval-source-map': 'source-map',

  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // resolvendo modulos
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  //nova forma de chamar o web-server 
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 5500,
    hot: true,

  },

  plugins: [
    isDevelopment && new ReactRefreshWebPackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,  'public', 'index.html')
    })
  ].filter(Boolean),

  // regras de acesso a arquivo
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',

          options: {
            plugins: [

              isDevelopment && require.resolve('react-refresh/babel')

            ].filter(Boolean)
          }
        }

      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  }
};