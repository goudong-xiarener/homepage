//调用函数
window.onload=function(){
    // 顶部双下标轮播
    let dots=document.querySelectorAll('ul.btns .dot');
    let imgs=document.querySelectorAll('.bannerimg img.tupian');
    let banner=document.querySelector('.banner');
    let lbtn=document.querySelector('.banner .btnleft');
    let rbtn=document.querySelector('.banner .btnright');
    let biaoyu=document.querySelectorAll('.banner p.animated')
    let widths=parseInt(getComputedStyle(banner,null).width);
    let t;
    let now=0;
    let next=0;
    db_banner(imgs,dots,banner,lbtn,rbtn,biaoyu,widths,t,now,next,'hot',3500);
    
    //素馨花艺中间部分轮播
    // let imgs1=document.querySelectorAll('ul.main');
    // let banner1=document.querySelector('div.main');
    // let lbtn1=document.querySelector('.main .main_left');
    // let rbtn1=document.querySelector('.main .main_right');
    // let widths1=parseInt(getComputedStyle(banner1,null).width);
    // let t1;
    // let now1=0;
    // let next1=0;
    // db_banner_1(imgs1,banner1,lbtn1,rbtn1,widths1,t1,now1,next1,'hot',3000);
    // 
    // 
    //let imgs1=document.querySelectorAll('.main_block');
    //let banner1=document.querySelector('.main');
    //let lbtn1=document.querySelector('.main .main_left');
    //let rbtn1=document.querySelector('.main .main_right');
    //let widths1=parseInt(getComputedStyle(banner1,null).width);
    //let t1;
    //let now1=0;
    //let next1=0;
    //db_banner_1(imgs1,banner1,lbtn1,rbtn1,widths1,t1,now1,next1,'hot',6000);
    
}   
   