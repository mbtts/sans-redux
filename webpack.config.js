const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src", "main.tsx"),
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  mode: "development"
};
