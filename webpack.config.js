const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

module.exports = {
    entry: './src/main/js/index.js',
    cache: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'built'),
        publicPath: "/",
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.EnvironmentPlugin(['REACT_APP_AUDIODB_RAPIDAPI_APIKEY']),
        new HtmlWebpackPlugin({
            inject: true,
            template:  path.resolve('src/main/resources/templates/index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};