var div1 = document.createElement('div')
div1.className = 'demo'
document.body.appendChild(div1)

var dragging = false               //拖动=不开启

var lastX                          //最开始的X的值
var lastY                          //最开始的Y的值

div1.onmousedown = function (e) {  //当鼠标按下的时候
    lastX = e.clientX
    lastY = e.clientY
    dragging = true                //拖动=开启
}

document.onmousemove = function (e) {  //鼠标移动事件，e包含了所需要知道的所有信息，这里只需要知道鼠标点击的位置，所以只取clientX和Y的值
    if (dragging === true) {
        var deltaX = e.clientX - lastX    //delta表示差值
        var deltaY = e.clientY - lastY
        var top = parseInt(div1.style.top) || 0   //将div1.style.top转换成整数或者是0
        var left = parseInt(div1.style.left) || 0  //将div1.style.left转换成整数或者是0
        div1.style.top = top + deltaY + 'px' //使div移动到e里面的clientY的位置
        div1.style.left = left + deltaX + 'px' //使div移动到e里面的clientX的位置
        lastX = e.clientX
        lastY = e.clientY
    }
}

div1.onmouseup = function () {  //当鼠标松开的时候
    dragging = false
}
