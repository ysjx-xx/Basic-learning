//使用commonjs的模块化规范
const{add,mul}=require('./js/math.js')
//使用ES6的模块化规范
import { name,weight,height } from "./js/info"
console.log(add(20,30));
console.log(mul(20,30));
console.log(name,weight,height);

//依赖css文件
require('./css/normal.css')
require('./css/style.less')
