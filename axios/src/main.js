import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});



// //1:axios基本使用
// axios({
//   //默认情况是get请求
//   url: "http://152.136.185.210:7878/api/m5/home/multidata"
//   // method:'post'
// }).then(res => {
//   console.log(res);
// });
// axios({
//   url: "http://152.136.185.210:7878/api/m5/home/data",
//   params: {
//     type: "pop",
//     page: 3
//   }
// }).then(res => {
//   console.log(res);
// });



//2:axios发送并发请求
// axios
//   .all([
//     axios({
//       url: "http://152.136.185.210:7878/api/m5/home/multidata"
//     }),
//     axios({
//       url: "http://152.136.185.210:7878/api/m5/home/data",
//       params: {
//         type: "pop",
//         page: 1
//       }
//     })
//   ])
//   .then(res => {
//     console.log(res);
//   });



// // 3:axios全局配置
// axios.defaults.baseURL='http://152.136.185.210:7878/api/m5'
// axios.defaults.timeout=3000
// axios({
//   //默认情况是get请求
//   url: "/home/multidata"
//   // method:'post'
// }).then(res => {
//   console.log(res);
// });
// axios({
//   url: "/home/data",
//   params: {
//     type: "pop",
//     page: 3
//   }
// }).then(res => {
//   console.log(res);
// });


// 4当要请求的服务器不止一个时，需要对axios实例
// const instance1=axios.creare({
//   baseUrl:'http://152.136.185.210:7878/api/m5',
//   timeout:5000
// })
// //使用：
// instance1({
//   url:'/home/multidata'
// }).then((res)=>{
//   console.log(res);
// })
// const instance2=axios.create({
//   baseURL:'',
//   timeout:8000
// })

// 5导入网络请求
import {request} from "./network/request";
request({
  url:'/home/multidata'
}).then((res)=>{
console.log(res);
}).catch((err)=>{
console.log(err);
})
