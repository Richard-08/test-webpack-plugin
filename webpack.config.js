const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const HtmlReplaceWebpackPlugin = require("html-replace-webpack-plugin");
/* const CopyWebpackPlugin = require("copy-webpack-plugin"); */
const StringReplacePlugin = require("string-replace-webpack-plugin");

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
    port: 3017,
  },
  plugins: [
    new HTMLPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),

    new VueLoaderPlugin(),

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
        replacement: function(match, $1, type, file, $4, index, input) {
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

    new StringReplacePlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /App.vue$/,
        loader: StringReplacePlugin.replace({
          replacements: [
            {
              pattern: /<img([^>]*[^/])>/,
              replacement: function(match, p1, offset, string) {
                const name = match.match(/[^\/\\]+(?=\.png|\.jpg)/);
                const ext = match.match(/\.(jpg|png|svg|jpeg|gif|webp)/g);
                return `
                  <picture>
                    <source srcset=test.webp type="image/webp">
                    ${match}
                  </picture>
                `;
              },
            },
          ],
        }),
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },
};
