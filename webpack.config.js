const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FileListPlugin = require("./src/plugins/example.plugin");

const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const HtmlReplaceWebpackPlugin = require("html-replace-webpack-plugin");
/* const CopyWebpackPlugin = require("copy-webpack-plugin"); */

const resource = {
  img: { "the-girl": "//cdn/img/the-girl.jpg" },
};

const tpl = {
  img: '<img src="%s">',
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[chankhash].js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HTMLPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),

    new FileListPlugin(),

    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 75,
          },
        },
      ],
    }),

    new HtmlReplaceWebpackPlugin([
      {
        pattern: /<img([^>]*[^/])>/g,
        replacement: function (match, $1, type, file, $4, index, input) {
          const name = match.match(/[^\/\\]+(?=\.png|\.jpg)/);
          const ext = match.match(/\.(jpg|png|svg|jpeg|gif|webp)/g);
          return `
            <picture>
              <source srcset=${name}.webp type="image/webp">
              <img src=${name}${ext} />
            </picture>
          `;
        },
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
