const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/app.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    publicPath: "public",
    filename: "app.js",
    path: path.resolve(__dirname, "public"),
  },
};
