const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    //如果要将css整理成单独文件，就不能使用style-loader
                    //'style-loader',
                    //用此loader替代style-loader，将css提取成单独文件
                    MiniCssExtractPlugin.loader,
                    'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            //对输出文件选择位置并重命名
            filename:'css/built.css'
        })
    ],
    mode: 'development'
}