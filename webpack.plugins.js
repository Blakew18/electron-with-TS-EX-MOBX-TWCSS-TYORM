/* eslint-disable @typescript-eslint/no-var-requires */
const { default: WebpackConfigGenerator } = require('@electron-forge/plugin-webpack/dist/WebpackConfig');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const webpack = require('webpack');

module.exports = [new ForkTsCheckerWebpackPlugin()]
  // new webpack.ExternalsPlugin('commonJS','electron')];
