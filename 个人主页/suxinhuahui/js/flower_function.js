
//顶部双下标轮播
function db_banner(imgs,dots,banner,lbtn,rbtn,biaoyu,widths,t,now,next,hot,second){
    //3.初始化
    imgs[0].style.left=0;
    dots[0].style.background="#fff";
    biaoyu[0].style.opacity=1;
    // dots[0].classList.add("hot");
    //4.鼠标移入每个轮播点显示不同的图片
    for (let i = 0; i < dots.length; i++) {
        dots[i].onmouseover=function() {
            for (let j = 0; j < dots.length; j++) {
                // dots[j].classList.remove("hot");
                imgs[j].style.left= -widths+'px';
                dots[j].style.background="#ccc";
                biaoyu[j].style.opacity=0;
            }
           imgs[i].style.left=0;
           dots[i].style.background="#fff";
           biaoyu[i].style.opacity=1;
           // dots[i].classList.add("hot");
           now=i;
           next=i;
        }
    }

    //5.自动轮播
    //move在（）里是参数，不能加小括号来调用函数
    t=setInterval(move,1500);
    function move() {
        //next必须比now大1
        next++;
        //0 1 2 3 4 5=imgs.length
        if (next==imgs.length) {
            //循环时
            next=0;
            //不循环，截止
            // next=imgs.length-1;
            // return;
        }
        //console.log(now,next);
        imgs[now].style.left=0;
        //left设置样式，要加单位
        imgs[next].style.left= widths+"px";
        //利用animate实现效果  回调函数：图片一动点就跟着动
        animate(imgs[now],{left:-widths},function() {
            dots[now].style.background="#ccc";
            flag=true;
            // dots[now].classList.remove("hot");
        });
        animate(imgs[next],{left:0},function() {
            //清除所有轮播点的效果
            for (let j = 0; j < dots.length; j++) {
                dots[j].style.background="#ccc";
                biaoyu[j].style.opacity=0;
                // dots[j].classList.remove("hot");
            }
            //设置当前轮播点的效果
            dots[next].style.background="#fff";
            biaoyu[next].style.opacity=1;
            flag=true;
            // dots[next].classList.add("hot");
        });
        //继续轮播
        //now和next永远相差1
        now=next;
    }
    //6.鼠标移入banner清除时间间隔函数
    banner.onmouseover=function() {
        clearInterval(t);
    }
    //7.鼠标移入banner继续时间间隔函数
    banner.onmouseout=function() {
        t=setInterval(move,1500);
    }
    //8.点击左箭头
    lbtn.onclick=function() {
        //if条件为假，不执行
        //flag为真，!flag是假的，则可以点击箭头
        //flag为假，!flag是真的，则return,不能点击箭头
        if (!flag) {
            return;
        }
        flag=false;
        //执行函数
        moveL();
    }
    function moveL() {
       next--;
       if (next== -1) {
        //不循环
        // next=0;
        // return;
        // 循环
        next=imgs.length-1;
       }
       imgs[now].style.left=0;
       imgs[next].style.left= -widths+"px";
       animate(imgs[now],{left: widths},function() {
        dots[now].style.background="#ccc";
        flag=true;
        // dots[now].classList.remove("hot");
       });
       animate(imgs[next],{left:0},function() {
        for(let j=0;j<dots.length;j++) {
            dots[j].style.background="#ccc";
            // dots[j].classList.remove("hot");
        }
        dots[next].style.background="#fff";
        // dots[next].classList.add("hot");
       });
       now=next;
    }
    //9.点击右键头
    rbtn.onclick=function() {
        if (!flag) {
            return;
        }
        flag=false;
        move();
    }
    //10.窗口失去焦点时
    window.onblur=function() {
        clearInterval(t);
    }
    //11.窗口获得焦点时
    window.onfocus=function() {
        t=setInterval(move,1500);
    }
}
function db_banner_1(imgs,banner,lbtn,rbtn,widths,t,now,next,hot,second){
    //3.初始化
    imgs[0].style.left=0;
    // dots[0].classList.add("hot");
    //5.自动轮播
    //move在（）里是参数，不能加小括号来调用函数
    t=setInterval(move,second);
    function move() {
        //next必须比now大1
        next++;
        //0 1 2 3 4 5=imgs.length
        if (next==imgs.length) {
            //循环时
            next=0;
            //不循环，截止
            // next=imgs.length-1;
            // return;
        }
        //console.log(now,next);
        imgs[now].style.left=0;
        //left设置样式，要加单位
        imgs[next].style.left= widths+"px";
        //利用animate实现效果  回调函数：图片一动点就跟着动
        animate(imgs[now],{left:-widths/3},function() {
            flag=true;
            // dots[now].classList.remove("hot");
        });
        animate(imgs[next],{left:widths/3},function() {
    
            
            flag=true;
            // dots[next].classList.add("hot");
        });
        //继续轮播
        //now和next永远相差1
        now=next;
    }
    //6.鼠标移入banner清除时间间隔函数
    banner.onmouseover=function() {
        clearInterval(t);
    }
    //7.鼠标移入banner继续时间间隔函数
    banner.onmouseout=function() {
        t=setInterval(move,1500);
    }
    //8.点击左箭头
    lbtn.onclick=function() {
        //if条件为假，不执行
        //flag为真，!flag是假的，则可以点击箭头
        //flag为假，!flag是真的，则return,不能点击箭头
        if (!flag) {
            return;
        }
        flag=false;
        //执行函数
        moveL();
    }
    function moveL() {
       next--;
       if (next== -1) {
        //不循环
        // next=0;
        // return;
        // 循环
        next=imgs.length-1;
       }
       imgs[now].style.left=0;
       imgs[next].style.left= -widths+"px";
       animate(imgs[now],{left: widths},function() {
        flag=true;
        // dots[now].classList.remove("hot");
       });
       animate(imgs[next],{left:0},function() {
       });
       now=next;
    }
    //9.点击右键头
    rbtn.onclick=function() {
        if (!flag) {
            return;
        }
        flag=false;
        move();
    }
    //10.窗口失去焦点时
    window.onblur=function() {
        clearInterval(t);
    }
    //11.窗口获得焦点时
    window.onfocus=function() {
        t=setInterval(move,1500);
    }
}

