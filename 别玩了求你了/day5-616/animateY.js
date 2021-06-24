function animate(obj, target, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var step = (target - window.pageYOffset) / 15;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset == target) {
            clearInterval(obj.timer);
            //回调函数写到定时器结束后 
            if (callback) {
                callback();
            }
        }
        // obj.style.top = obj.offsetLeft + step + 'px';
        window.scroll(0,window.pageYOffset + step)

    }, 15)
}