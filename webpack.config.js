const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require('lodash');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: './src/js/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './template.html'
        }),

        new Dotenv()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, 
    },
    devServer: {
        hot: false, 
        inline: false,
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};