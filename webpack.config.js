'use strict';
const Webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.join(__dirname, 'dist');

module.exports = (env, argv) => {

  const isDevelopment = argv.mode === 'development';

  return {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'source-map' : 'none',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
      path: outputPath,
      filename: isDevelopment ? 'bundle.development.js' : 'bundle.production.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: [
            'ts-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: [ '.ts', '.tsx', '.js' ],
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.join('docs', '_build', 'html'),
          to: path.join(outputPath, 'docs'),
          toType: 'dir',
        }
      ]),
      new HtmlWebpackPlugin({
        template: path.join('src', 'index.html'),
        filename: path.join('index.html'),
      })
    ]
  }
};
