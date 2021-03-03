const path = require("path");
const webpack = require("webpack");

const config = {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]
    },
    output:{
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    resolve: { extensions: ["*", ".js", ".jsx"] }
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.mode = "development";
        config.devServer = {
            contentBase: path.join(__dirname, "public/"),
            port: 3000,
            publicPath: "http://localhost:3000/dist/",
            hotOnly: true
        };
        config.plugins = [new webpack.HotModuleReplacementPlugin()];
    } else if (argv.mode === 'production') {
        config.mode = "production";
    }
  
    return config;
};
  
  

