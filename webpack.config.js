const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    index: './src/pages/index/index.js',
    about: './src/pages/about/about.js',
    analytics: './src/pages/analytics/analytics.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {loader: "babel-loader"},
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          (isDev ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {publicPath: '../'
            }
          }),
          {
            loader:'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            esModule: false,
            name: 'assets/images/[contenthash].[ext]'
          }
        }, {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75
            }
          }
        }],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/index/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/about/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/pages/analytics/analytics.html',
      filename: 'analytics.html',
      chunks: ['analytics']
    }),
    new FaviconsWebpackPlugin('./src/favicon.png'),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};