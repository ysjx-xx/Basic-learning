window.addEventListener('load', function () {
    var box = document.querySelector('.focus')
    var btl = document.querySelector('.arrow-l')
    var btr = document.querySelector('.arrow-r')
    var ul = document.querySelector('ul')
    var ol = document.querySelector('ol')
    var num = 0
    box.addEventListener('mouseenter', function () {
        btl.style.display = 'block'
        btr.style.display = 'block'
        clearInterval(timer)
        timer=null;
    })
    box.addEventListener('mouseleave', function () {
        btl.style.display = 'none'
        btr.style.display = 'none'
        timer=setInterval(function(){
            btr.click();
        },2000)

    })
    for (var i = 0; i < ul.children.length; i++) {
        var lis = document.createElement('li')
        lis.setAttribute('index', i)
        ol.appendChild(lis)
        var index = lis.getAttribute('index');
        lis.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            this.className = 'current'
            var index = this.getAttribute('index')
            num = index;
            circle = index;
            animate(ul, -box.offsetWidth * index)
        })
    }
    ol.children[0].className = 'current'
    var circle = 0;
    var flag=true
    var fuben1 = ul.children[0].cloneNode(true);
    ul.appendChild(fuben1)
    btr.addEventListener('click', function () {
        if(flag){
            flag=false
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0
            }
            num++;
            animate(ul, -box.offsetWidth * num,function(){
                flag=true
            })
            circle++;
            if (circle == ol.children.length) {
                circle = 0
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            ol.children[circle].className = 'current'
        }
        

            
            

    })
    btl.addEventListener('click', function () {
        if(flag){
            flag=false
            if (num == 0) {
                ul.style.left = -(ul.children.length - 1)*box.offsetWidth+"px";
                num = ul.children.length - 1
            }
            num--;
            animate(ul, -box.offsetWidth * num,function(){
                flag=true
            })
            circle--;
            if (circle == -1) {
                circle = ol.children.length-1
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = ''
            }
            ol.children[circle].className = 'current'

        }
        
    })
    var timer=setInterval(function(){
        btr.click();
    },2000)









})