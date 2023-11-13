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
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            }
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

// 'dashboard' application consumes only two federated modules and it does not care if those federated modules are consuming other federated modules inside => You can have as many nested federated modules as you want => Good thing!

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

//// ERROR: ERROR in ./src/components/hello-world-page/hello-world-page.js 7:0-85
// Module not found: Error: Can't resolve './components/hello-world-button/hello-world-button.js' in '/Users/nhanbach/Documents/Fastcoding-Vietnam/webpack-tutorial/hello-world/src/components/hello-world-page'
// How did this error show up? This error showed up as I tried to build with 'npm run build' for 'hello-world' application
// What was this error about? The relative path of some modules were not correct
// What was I doing when I had this error? I tried to run the 'Micro Frontends' for 'dashboard', and then from 'dashboard' I will navigate to other pages, 'hello-world-page' and 'kiwi-page'. The first few attempts were failures due to the incorrect relative path used in 'hello-world' and 'kiwi' applications so I went to fix those paths.