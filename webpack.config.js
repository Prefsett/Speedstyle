const path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],

    alias: {
      '@src': path.join(__dirname, 'src'),
      '@app': path.join(__dirname, 'src/app'),

      /* Lib alias */
      '@type': path.join(__dirname, 'src/app/lib/type'),
      '@enum': path.join(__dirname, 'src/app/lib/enum'),
    },
  },

  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: __dirname + '/__build__',
  },
};
