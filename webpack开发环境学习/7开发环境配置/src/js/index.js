import '../css/iconfont.css'
import '../css/index.less'
import './print'
window.addEventListener('click',function(){
    document.body.style.backgroundColor='pink'
})
console.log(5);




if(module.hot){
    module.hot.accept('./print.js',function(){
        print();
    })
}