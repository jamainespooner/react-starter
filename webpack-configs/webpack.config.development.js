module.exports = () => {
  console.log("hitta");
  return {
    devServer: {
      // host: '0.0.0.0',
      contentBase: "dist",
      historyApiFallback: true
    }
  };
};
