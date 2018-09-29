//顶部轮播图函数
function banner_io(dots,imgs,banner,lbtn,rbtn,hot,second){
     
    //zIndex没有过渡，可以用opacity,把所有的zIndex=1换成opacity=0
    //把所有的zIndex=2换成opacity=1
    //1.获取元素
    /*let dots=document.querySelectorAll(".dot");
    let imgs=document.querySelectorAll('.banner img');
    let banner=document.querySelector('.banner');
    let lbtn=document.querySelector('.left-btn');
    let rbtn=document.querySelector('.right-btn');*/
    //2.定义变量
    let num=0;  //全局
    //console.log(dots,imgs);
    //3.初始状态
    imgs[0].style.zIndex=2;

    // dots[0].style.backgroundColor="#fff";
    dots[0].classList.add(hot);
    //4.鼠标移入
    for (let i = 0; i < dots.length; i++) {
       dots[i].onmouseover=function() {
        
         for (let j = 0; j < imgs.length; j++) {
            imgs[j].style.zIndex=1;
            // dots[j].style.backgroundColor="#333";
            dots[j].classList.remove(hot);
         }
           imgs[i].style.zIndex=2;
           // dots[i].style.backgroundColor="#fff";
           dots[i].classList.add(hot);
           //当鼠标移走后继续轮播（紧接着鼠标移走的点继续轮播）
           num=i;
       }
    }
    
    // 5.实现自动轮播
    // 因为没有下标，定义变量num模拟i,不断的增加
     let t=setInterval(move,second);
     function move() {
        num++;
        if (num==imgs.length) {
            num=0;
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.zIndex=1;
            // dots[i].style.backgroundColor="#333";
            dots[i].classList.remove(hot);
        }
        imgs[num].style.zIndex=2;
        // dots[num].style.backgroundColor="#fff";
        dots[num].classList.add(hot);
     }

    //6.鼠标移入banner,暂停时间间隔函数
    banner.onmouseover=function() {
        clearInterval(t);
    }
    //7.鼠标移出banner,继续时间间隔函数
    banner.onmouseout=function() {
        t=setInterval(move,second);
    }

    //8.点击右箭头，同move
    rbtn.onclick=function() {
        move();
    }
    //9.点击左箭头
    lbtn.onclick=function() {
        moveL();
    }
    function moveL() {
        num--;
        if (num<0) {
            num=imgs.length-1;
        }
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.zIndex=1;
            // dots[i].style.backgroundColor="#333";
            dots[i].classList.remove(hot);
        }
        imgs[num].style.zIndex=2;
        // dots[num].style.backgroundColor="#fff";
        dots[num].classList.add(hot);
    }

    //10.当窗口失去焦点的时候，暂停时间间隔函数
    window.onblur=function() {
        clearInterval(t);
    }
    //11.窗口获得焦点时，继续时间间隔函数
    window.onfocus=function() {
        t=setInterval(move,second);
    }
}
//内容部分轮播图
//双下标轮播
function db_banner(imgs,dots,banner,lbtn,rbtn,widths,t,now,next,hot,second){
    //设置初始值
    imgs[0].style.left=0;
    dots[0].classList.add(hot);


    // 鼠标移入每个轮播点对应显示不同的图片
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function(){
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove(hot);
                imgs[j].style.left=-widths+'px';
            }
            dots[i].classList.add(hot);
            imgs[i].style.left=0;
            // now=i;
            next=i;
        }
    }


    // 自动轮播
    // t=setInterval(move,second);
    function move(){
        next++;
        if(next==imgs.length){
            next=0;// 循环
                    // 截止
        }
        imgs[now].style.left=0;
        imgs[next].style.left=widths+'px';
        animate(imgs[now],{left:-widths},function(){
            dots[now].classList.remove(hot);
        })
        animate(imgs[next],{left:0},function(){
            for(let i=0;i<imgs.length;i++){
                dots[i].classList.remove(hot);
            }
            dots[next].classList.add(hot);
        })
        now=next;
    }


    // 鼠标移入banner清除时间间隔
    // banner.onmouseover=function(){
    //  clearInterval(t);
    // }
    // // 鼠标移出时调用时间间隔
    // banner.onmouseout=function(){
    //  t=setInterval(move,second);
    // }


    // 右箭头：同move
    rbtn.onclick=function(){
        move();
    }
    // 左箭头
    lbtn.onclick=function(){
        moveL();
    }
    function moveL(){
        next--;
        if(next==-1){
            next=imgs.length-1;
        }
        imgs[now].style.left=0;
        imgs[next].style.left=-widths+'px';
        animate(imgs[now],{left:widths},function(){
            dots[now].classList.remove(hot);
        });
        animate(imgs[next],{left:0},function(){
            for(let i=0;i<imgs.length;i++){
                dots[i].classList.remove(hot);
            }
            dots[next].classList.add(hot);
        });
        now=next;
    }


    // 窗口失去焦点
    window.onblur=function(){
        clearInterval(t);
    }
    // 窗口获取焦点
    window.onfus=function(){
        t=setInterval(move,second);
    }
}


//平移轮播
function banner_im(left1,right1,con,widths,num) {
    right1.onclick=function() {
        num++;
        //有三屏
        if (num==3) {
            num=2;
            right1.style.background="#ff6700";
            return;
        }
        left1.style.background="";
        
        // console.log(num);
       con.style.transform="translateX("+(-widths*num)+"px)";
        
    }
    //3.点击左箭头
    left1.onclick=function() {
        //已经自定义了num=2，在前面
        num--;
        if (num== -1) {
            num=0;
            left1.style.background="#ff6700";
            return;
        }
        right1.style.background="";
       con.style.transform="translateX("+(-widths*num)+"px)";
    }
}
