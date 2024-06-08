const path = require('path');

module.exports = {
  entry: './src/index.ts',
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
      '@interface': path.join(__dirname, 'src/app/lib/interface'),
      '@type': path.join(__dirname, 'src/app/lib/type'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
};
