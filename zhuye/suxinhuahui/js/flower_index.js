//调用函数
window.onload=function(){
    // 顶部双下标轮播
    let dots=document.querySelectorAll('ul.btns .dot');
    let imgs=document.querySelectorAll('.bannerimg img.tupian');
    let banner=document.querySelector('.banner');
    let lbtn=document.querySelector('.banner .btnleft');
    let rbtn=document.querySelector('.banner .btnright');
    let biaoyu=document.querySelectorAll('.banner p.biaoyu')
    let widths=parseInt(getComputedStyle(banner,null).width);
    let t;
    let now=0;
    let next=0;
    db_banner(imgs,dots,banner,lbtn,rbtn,biaoyu,widths,t,now,next,'hot',1500);
    
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

 //    //闪购平移轮播
 //    let left2=document.querySelector("h2.shan span.left");
 //    let right2=document.querySelector("h2.shan span.right");
 //    let con=document.querySelector(".rainbow-right");
 //    let widths=parseInt(getComputedStyle(con,null).width)/3;
 //    let num=0;
 //    // console.log(num);
 //    banner_im(left2,right2,con,widths,num);
 //    // console.log(right1);
    
 

	// let dots2=document.querySelectorAll('div.neirong div.box_bd ul.info.two>div.circle>a');
	// let imgs2=document.querySelectorAll('div.neirong div.box_bd ul.info.two>a img');
	// let banner2=document.querySelector('div.neirong div.box_bd ul.info.two:first-child');
	// let lbtn2=document.querySelector('ul.info.two div.left');
	// let rbtn2=document.querySelector('ul.info.two div.right');
	// let widths2=parseInt(getComputedStyle(banner,null).width);
	// let t2;
	// let now2=0;
	// let next2=0;
	// db_banner(imgs2,dots2,banner2,lbtn2,rbtn2,widths2,t2,now2,next2,'hot',1500);


	// let dots3=document.querySelectorAll('div.neirong div.box_bd ul.info.three>div.circle>a');
	// let imgs3=document.querySelectorAll('div.neirong div.box_bd ul.info.three>a img');
	// let banner3=document.querySelector('div.neirong div.box_bd ul.info.three:first-child');
	// let lbtn3=document.querySelector('ul.info.three div.left');
	// let rbtn3=document.querySelector('ul.info.three div.right');
	// let widths3=parseInt(getComputedStyle(banner,null).width);
	// let t3;
	// let now3=0;
	// let next3=0;
	// db_banner(imgs3,dots3,banner3,lbtn3,rbtn3,widths3,t3,now3,next3,'hot',1500);


	// let dots4=document.querySelectorAll('div.neirong div.box_bd ul.info.four>div.circle>a');
	// let imgs4=document.querySelectorAll('div.neirong div.box_bd ul.info.four>a img');
	// let banner4=document.querySelector('div.neirong div.box_bd ul.info.four:first-child');
	// let lbtn4=document.querySelector('ul.info.four div.left');
	// let rbtn4=document.querySelector('ul.info.four div.right');
	// let widths4=parseInt(getComputedStyle(banner,null).width);
	// let t4;
	// let now4=0;
	// let next4=0;
	// db_banner(imgs4,dots4,banner4,lbtn4,rbtn4,widths4,t4,now4,next4,'hot',1500);
}   
   