'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    root: './root/application.js',
    'react-15': './react-15/application.jsx',
    'vue-2': './vue-2/application.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[name].[hash].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /root\/.+\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015'
          ]
        }
      },
      {
        test: /react-15\/.+\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      },
      {
        test: /vue-2\/.+\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015'
          ]
        }
      },
      {
        test: /vue-2\/.+\.vue?$/,
        loader: 'vue-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'root/index.html',
      filename: 'index.html',
      chunks: [
        'root'
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'react-15/index.html',
      filename: 'react-15/index.html',
      chunks: [
        'react-15'
      ]
    }),
    new HtmlWebpackPlugin({
      template: 'vue-2/index.html',
      filename: 'vue-2/index.html',
      chunks: [
        'vue-2'
      ]
    })
  ]
}
