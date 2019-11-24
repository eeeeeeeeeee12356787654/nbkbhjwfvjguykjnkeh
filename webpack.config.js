/**
 * webpack.config.js
 * ===============
 */

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  devtool: 'inline-source-map',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader', // config file can be found at .babelrc.js
        options: {
          presets: ["@babel/preset-env"]
        },
        test: /\.js$/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        uglifyOptions: {
          mangle: false,
          output: {
            comments: false,
          },
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  entry: {
    'email-genie': './src/email-genie.js',
    'email-genie.min': './src/email-genie.js',
  },
  output: {
    filename: "[name].js",
  },
};