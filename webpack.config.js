/** @type import("webpack").Configuration */

module.exports = {
  mode: "production",
  entry: `${__dirname}/src/index.ts`,
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js"
  },
  resolve: {
    extensions: [ ".ts", ".js" ]
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" }
    ]
  }
}
