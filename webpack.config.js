const path = require('path');
const webpack = require('webpack');

const json = require('./nodemon.json');
const envVars = {};

Object.keys(json.env)
  .forEach((key) => {
    envVars[key] = JSON.stringify(json.env[key]);
  });

// TODO create repository and add to package.json
const defaultConfig = {
  target: 'node',
  entry: './src/server.ts',
  plugins: [
    new webpack.EnvironmentPlugin([...Object.keys(process.env)]),
    new webpack.DefinePlugin({
      'process.env': envVars,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  output: {
    filename: 'api.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    concatenateModules: true,
    minimize: false,
  },
  devtool: 'eval',
  node: {
    global: true,
    __filename: false,
    __dirname: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

module.exports = [
  {
    name: 'development',
    mode: 'development',
    watch: true,
    watchOptions: {
      ignored: ['node_modules/', 'tests/', 'dist/', 'README.md']
    },
    stats: {
      errorDetails: true
    },
    ...defaultConfig
  },
  {
    name: 'production',
    mode: 'production',
    watch: false,
    ...defaultConfig
  },
];
