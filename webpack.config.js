const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  devServer: {
    static: [{ directory: path.join(__dirname) }],
    compress: true,
    port: 3001,
  },
  devtool: "inline-source-map",
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
};
