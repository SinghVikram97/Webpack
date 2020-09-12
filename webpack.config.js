const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const loadPresets = require("./build-utils/loadPresets");
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode = "production", presets = [] }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.jp?g/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000,
                },
              },
            ],
          },
        ],
      },
      output: {
        filename: "bundle.js",
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  );
};
