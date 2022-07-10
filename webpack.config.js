const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "./"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
            }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpef|svg)$/i,
                type: 'asset/resource',
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }
}