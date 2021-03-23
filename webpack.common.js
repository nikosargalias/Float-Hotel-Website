const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][hash][ext][query]",
        },
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "[name].html",
      // excludeChunks: ["entryName"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "about.html"),
      filename: "about.html",
      // excludeChunks: ["entryName"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "contact.html"),
      filename: "contact.html",
      // excludeChunks: ["entryName"],
    }),
  ],
};
