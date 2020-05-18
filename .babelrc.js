const isTest = String(process.env.NODE_ENV) === "test";
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: isTest ? "cjs" : false,
        targets: { node: "current" },
      },
    ],
    "@babel/preset-react",
  ],
  plugins: ["babel-plugin-styled-components"],
};
