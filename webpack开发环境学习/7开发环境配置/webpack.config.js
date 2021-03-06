const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: ['./src/js/index.js','./src/index.html'],
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    esModule: false
                }
            },
            {
                test: /\.(jpg|img|png|gif)$/,
                loader: 'url-loader',
                options: {
                    name: '[hash:10].[ext]',
                    limit: 8 * 1024,
                    esModule: false,
                    outputPath:"imgs"
                }
                
            },
            {
                exclude: /\.(html|css|less|js|json|jpg|png|img|gif$)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath:"media"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 8000,
        open:true,
        //开启HMR功能
        hot:true
    },
    devtool:'source-map'
};