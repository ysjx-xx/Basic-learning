//引入express
const { request, response, json } = require('express');
const express = require('express');
//创建应用对象
const app = express();
//创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX-2')
})
app.post('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    response.send('HELLO AJAX post')
})
const data = {
    name: '李博伦',
    age: 18
}
app.get('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    let str = JSON.stringify(data);
    response.send(str)
})
//延时响应
app.get('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    setTimeout(() => {
        response.send('延时响应')
    }, 3000);
})
app.all('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    const data={name:'李博伦',age:18}
    
    response.send(JSON.stringify(data))
})
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    const data={name:'李博伦',age:18}
    response.send(JSON.stringify(data))
})
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    //设置响应体
    const data={name:'李博伦',age:18}
    response.send(JSON.stringify(data))
})
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中......");
})