const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  output: { filename: "bundle.js", path: path.resolve(__dirname, "dist") },
  // devtool: "none",
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, use: "ts-loader" },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          ouputPath: "public/images/",
        },
        exclude: /node_modules/,
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".css"],
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: "body",
    }),
    new webpack.DefinePlugin({ API_URL: JSON.stringify(process.env.API_URL) }),
  ],
};
