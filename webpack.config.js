const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
<<<<<<< HEAD
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: "/node_modules/"
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public")
||||||| merged common ancestors
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: "/node_modules/"
      }
    ]
=======
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
>>>>>>> 19b109b3168d6ba226db5c555269091ac7dc5b1c
  }
};
