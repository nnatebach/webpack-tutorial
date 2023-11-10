const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// ModuleFederationPlugin - Read more: https://webpack.js.org/concepts/module-federation/
// Multiple separate builds should form a Single application.
// These separate builds act like containers and can expose and consume code between builds, creating a single, unified application.
// This is often known as Micro-Frontends, but is not limited to that.
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/image-caption.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9003/'
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
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ]
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'image-caption.html',
            title: 'Image caption',
            description: 'Image caption',
            template: 'src/page-template.hbs'
        }),
        new ModuleFederationPlugin({
            name: 'ImageCaptionApp',
            filename: 'remoteEntry.js',

            // https://webpack.js.org/concepts/module-federation/#offer-a-host-api-to-set-the-publicpath
            exposes: {
                './ImageCaption': './src/components/image-caption/image-caption.js'
            }
        })
    ]
};
