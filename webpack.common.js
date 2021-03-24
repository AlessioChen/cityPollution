  const path = require("path");
  var HtmlWebpackPlugin = require("html-webpack-plugin");
  const Dotenv = require('dotenv-webpack');

  module.exports = {
      entry: {
          main: "./src/js/index.js",
      },
      plugins:[
          new Dotenv(), 
      ], 
      output: {
          clean: true, 
      }, 
      module: {
          rules: [{
                  test: /\.html$/,
                  use: ["html-loader"]
              },
              {
                  test: /\.(svg|png|jpg|gif)$/,
                  use: {
                      loader: "file-loader",
                      options: {
                          name: "[name].[hash].[ext]",
                          outputPath: "imgs"
                      }
                  }
              }
          ]
      }
  };