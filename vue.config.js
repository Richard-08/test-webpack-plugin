//const path = require("path");
//const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const StringReplacePlugin = require("string-replace-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      /* new ImageminWebpWebpackPlugin({
        config: [
          {
            test: /\.(jpe?g|png)/,
            options: {
              quality: 75,
            },
          },
        ],
      }), */
      new StringReplacePlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: StringReplacePlugin.replace({
            replacements: [
              {
                pattern: /<img([^>]*[^/])>/,
                replacement: function(match, p1, offset, string) {
                  const src = match.replace(/src/gi, 'srcset').replace(/img/gi, 'source').replace(/jpg/gi, 'webp');
                  return `
                    <picture>
                      ${src}
                      ${match}
                    </picture>
                  `;
                },
              },
            ],
          }),
        },
      ],
    },
  },
};
