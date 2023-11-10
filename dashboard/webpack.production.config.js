const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/dashboard.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9000/'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            automaticNameDelimiter: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                    }
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'dashboard.html',
            title: 'Dashboard',
        }),
        new ModuleFederationPlugin({
            name: 'App',
            remotes: {
                HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js',
                KiwiApp: 'KiwiApp@http://localhost:9002/remoteEntry.js'
            }
        })
    ]
};


//// Note for package.json configuration - Read more: https://webpack.js.org/configuration/
// Out of the box, webpack won't require you to use a configuration file. However, it will assume the entry point of your project is src/index.js and will output the result in dist/main.js minified and optimized for production.
// Usually, your projects will need to extend this functionality, for this you can create a webpack.config.js file in the root folder and webpack will automatically use it.
// If for some reason you want to use a different configuration file depending on certain situations, you can change this via command line by using the "--config" flag.

//// Question:
// what is the '--hot' flag in '"dev": "webpack --config webpack.dev.config.js --hot"' in package.json?
//// Answer:
// '--hot' option is 'Hot Module Replacement' - Read more: https://v4.webpack.js.org/concepts/hot-module-replacement/

//// HMR exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:
// - Retain application state which is lost during a full reload.
// - Save valuable development time by only updating what's changed.
// - Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.