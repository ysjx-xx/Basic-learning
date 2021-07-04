// import { name } from "./a.js";
// console.log(name);


// import { fun } from "./a.js";
// fun()


// import { app } from "./a.js"; 
// let aqq=new app//实例化
// aqq.fun()
// console.log(aqq.name);

import * as all from "./a.js"
console.log(all.name);
let aqq=new all.app
aqq.fun()
