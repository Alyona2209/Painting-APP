const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_DIR = './src';
const DIST_DIR = './dist';

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    context: __dirname,
    entry: {
        app: './src/app.ts',
        css: './src/styles/index.sass'
    },
    output: {
        path: path.resolve(__dirname, DIST_DIR),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', ".ts", '.js']
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' }
            },
            {
                enforce: "pre", test: /\.js$/, loader: "source-map-loader"
            },
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            //fiber: Fiber
                            includePaths: [
                                path.resolve(__dirname, './node_modules')
                            ],
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: './assets/images'
                        }
                    }
                ]
            },

            {
                test: /.*?-page+?\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: './pages',
                        }
                    }
                ]
            }
        ]
    },
    devtool: "source-map",
    mode: 'development',
    devServer: {
        contentBase: DIST_DIR,
        compress: true,
        port: 9090,
        historyApiFallback: {
            index: './index.html'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(SRC_DIR, './index.html'),
            favicon: path.resolve(SRC_DIR, './favicon.ico')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        })
    ]
};
