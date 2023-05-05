const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

dotenv.config();

const pages = [
  {
    filename: "index.html",
    template: "./src/views/index.html",
    chunks: ["bundle"],
  },
  {
    filename: "detail.html",
    template: "./src/views/detail.html",
    chunks: ["detail"],
  },
];

module.exports = {
  mode: "production",
  entry: { bundle: "./src/pages/app.ts", detail: "./src/pages/detail.ts" },
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
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".css"],
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
    ...pages.map((page) => new HTMLWebpackPlugin(page)),
    new webpack.DefinePlugin({ API_URL: JSON.stringify(process.env.API_URL) }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],
};
