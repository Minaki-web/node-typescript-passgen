const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader', 'shebang-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals()],
  plugins: [new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true })],
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
};
