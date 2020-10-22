const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const path = require('path');
const glob = require('glob');

const devMode = process.argv.some(arg => arg.includes('development'));
const srcDir = './src';

module.exports = {
  devServer: {
    contentBase: '/',
    historyApiFallback: true,
    inline: true,
    port: 2222
  },
  devtool: 'source-map',
  entry: {
    index: `${srcDir}/app.tsx`
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|ico|gif|woff2?|ttf|eot|css)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:12].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/i,
        rules: [
          {
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'assets/[name].[hash:12].[ext]'
                }
              }
            ],
            issuer: /\.scss$/i,
          },
          {
            use: ['raw-loader'],
            issuer: /\.(tsx?|html)$/i
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              interpolate: true
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.[hash:12].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: `${srcDir}/index.ejs`
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:12].css'
    })
    // new PurgecssPlugin({
    //   paths: glob.sync(`${srcDir}/assets/styles/*`, { nodir: true })
    // })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '~tailwindcss': path.resolve(__dirname, './node_modules/tailwindcss')
    }
  }
};
