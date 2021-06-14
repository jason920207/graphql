const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'src', 'client', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'src', 'client', 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.sass$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'client', 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'src', 'client', 'public', 'favicon.png'),
        }),
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },
    devServer: {
        open: true,
    },
};