const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: "./_client/App.jsx",
    output: {
        path: path.join(__dirname, "/_client/static"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { legacy: true }],
                            ["@babel/plugin-proposal-class-properties", { loose: true }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: MiniCssExtractPlugin.loader, options: { modules: true } }, "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};

module.exports = config;
