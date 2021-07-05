import axios from "axios";
export function request(config) {
  // return new Promise((resolve, reject) => {
  //   // 创建实例
  //   const instance = axios.create({
  //     baseURL: "http://152.136.185.210:7878/api/m5",
  //     timeout: 5000
  //   });
  //   // 发送网络请求
  //   instance(config)
  //     .then(res => {
  //       resolve(res)
  //     })
  //     .catch(err => {
  //       reject(err)
  //     });
  // });
  const instance=axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })

  // 拦截器
  instance.interceptors.request.use((config)=>{
    //对请求做某些处理后返回
    return config
  },(err)=>{

  })
  instance.interceptors.response.use((res)=>{
    //对响应做某些处理后返回
    return res
  },(err)=>{

  })

  return instance(config)
  //因为本身就定义了promise,所以不需要再去定义,这样写就可以
}
