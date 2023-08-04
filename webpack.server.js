const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: ["./src/server.tsx"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/server"),
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  externals: [webpackNodeExternals()],
  target: "node",
};
