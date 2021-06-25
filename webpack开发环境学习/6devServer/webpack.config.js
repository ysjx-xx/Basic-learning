const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
                //是-不是.!
                //打包其他资源
            },{
                exclude: /\.(css|js|html)$/,
                loader: "file-loader",
                options:{
                    name:'[hash:10].[ext]'
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
    //开发服务器 devServer:用来自动化(自动编译，自动打开浏览器，自动刷新浏览器)
    //只会在内存中编译打包，不会有任何输出
    //启动指令为：npx webpack-dev-server
    devServer:{
        contentBase:resolve(__dirname,'build'),
        //启动gzip压缩
        compress:true,
        //端口号
        port:3000,
        open:true
    }
}