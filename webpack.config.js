const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

const config = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[hash].js",
  },
  devtool: "inline-source-map",
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
};

module.exports = config;
