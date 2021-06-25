const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[

        ]
    },
    plugins:[
        //默认会创建一个空的html，自动引入打包输出的所有资源(js/css)
        new HtmlWebpackPlugin({
            //需求：需要有结构的html文件
            //复制'./src/index.html'文件,并自动引入打包输出的所有资源(js/css)
            template:'./src/index.html'
        })
    ],
    mode:'development'
}