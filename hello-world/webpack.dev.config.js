const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// ModuleFederationPlugin - Read more: https://webpack.js.org/concepts/module-federation/
// Multiple separate builds should form a Single application.
// These separate builds act like containers and can expose and consume code between builds, creating a single, unified application.
// This is often known as Micro-Frontends, but is not limited to that.
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/hello-world.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9001/'
    },
    mode: 'development',
    devServer: {
        port: 9001,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'hello-world.html',
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ '@babel/plugin-proposal-class-properties' ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            title: 'Hello world',
            description: 'Hello world',
            template: 'src/page-template.hbs'
        }),
        new ModuleFederationPlugin({
            name: 'HelloWorldApp',
            // During the build process,Webpack will generate the file that contains everything this application exports to the outer world => other applications can use that.

            filename: 'remoteEntry.js', // convention

            // https://webpack.js.org/concepts/module-federation/#offer-a-host-api-to-set-the-publicpath
            // list the module that will be exposed by the application
            exposes: {
                './HelloWorldButton': './src/components/hello-world-button/hello-world-button.js',
                './HelloWorldPage': './src/components/hello-world-page/hello-world-page.js'
            }
        })
    ]
};
