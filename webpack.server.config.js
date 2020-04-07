const path = require("path");

module.exports = {
  target: "node",
  entry: {
    server: "./src/server.ts"
  },
  output: {
    filename: "js/server.js",
    path: path.resolve(process.cwd(), "dist"),
    publicPath: "/"
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  devtool: "cheap-module-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ]
      }
    ]
  }
};
