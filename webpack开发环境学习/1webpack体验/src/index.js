import './index.css'
import data from "./data.json";
console.log(data);
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
/*运行指令：
开发环境指令：
webpack ./src/index.js -o ./build/ --mode=development
：webpack以./src/index.js开始打包,打包后输出到./build/build.js
  整体打包环境是开发环境
生产环境指令：
webpack ./src/index.js -o ./build/ --mode=production
：webpack以./src/index.js开始打包,打包后输出到./build/build.js
  整体打包环境是生产环境
webpack能处理js/json
不能处理css/img等其他资源

*/