const merge = require("webpack-merge");
const Html = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const loadConfigs = (mode) =>
  require(`./webpack-configs/webpack.config.${mode}.js`)();

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return merge(
    {
      mode,
      entry: "./src/index.js",
      output: {
        filename: "main.bundle.js",
      },
      resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            use: "babel-loader",
            exclude: /node_modules/,
          },
        ],
      },
      plugins: [
        new Html({
          template: "./templates/main.html",
          meta: {
            viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
          },
        }),
        new MiniCSSExtractPlugin(),
      ],
    },
    loadConfigs(mode)
  );
};
