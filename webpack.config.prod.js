const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

const pages = [
  { filename: "index.html", template: "index.html", chunks: ["bundle"] },
  { filename: "detail.html", template: "detail.html", chunks: ["detail"] },
];

module.exports = {
  mode: "production",
  entry: { bundle: "./src/app.ts", detail: "./src/detail.ts" },
  output: { filename: "[name].js", path: path.resolve(__dirname, "dist") },
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
    ...pages.map((page) => new HTMLWebpackPlugin(page)),
    new webpack.DefinePlugin({ API_URL: JSON.stringify(process.env.API_URL) }),
  ],
};
