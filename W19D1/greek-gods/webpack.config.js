const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./client/index.js",
    output: {
        path: "/",
        filename: "bundle.js"
    }
};