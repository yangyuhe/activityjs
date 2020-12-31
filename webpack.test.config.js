const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = function () {
  return {
    mode: "development",
    devtool: "source-map",
    entry: path.resolve(__dirname, "test/main.js"),
    output: {
      filename: "test.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|tsx)$/,
          loader: "babel-loader",
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    devServer: {
      compress: true,
      port: 9000,
      contentBase: "dist",
      open: true,
    },
    plugins: [new HtmlWebpackPlugin({ template: "test/index.html" })],
  };
};
