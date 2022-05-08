const path = require('path');
const webpack = require("webpack");
require('dotenv').config();

module.exports = {
    entry: './src/main/js/index.js',
    cache: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'built'),
        publicPath: "/",
        filename: './src/main/resources/static/built/bundle.js'
    },
    plugins: [
        new webpack.EnvironmentPlugin(['REACT_APP_AUDIODB_RAPIDAPI_APIKEY']),
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