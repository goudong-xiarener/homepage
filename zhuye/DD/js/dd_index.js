//调用函数
window.onload=function(){
	// 顶部中间导航轮播
	let dots=document.querySelectorAll(".tupian_spots .spot");
	console.log(dots);
    let imgs=document.querySelectorAll('.tupiankuai_middle img.tupian');
    let banner=document.querySelector('.tupiankuai_middle');
    let lbtn=document.querySelector('.tupiankuai_middle .tupiankuai-left');
    let rbtn=document.querySelector('.tupiankuai_middle .tupiankuai-right');
    banner_io(dots,imgs,banner,lbtn,rbtn,"active",1500);
    
    //顶部中间下方导航轮播
    let imgs11=document.querySelectorAll('.tupiankuai_middle_stcs');
    let banner11=document.querySelector('.tupiankuai_middle_floor');
    let lbtn11=document.querySelector('.tupiankuai_stcs_left');
    let rbtn11=document.querySelector('.tupiankuai_stcs_right');
    banner_ix(imgs11,banner11,lbtn11,rbtn11,1500);
    
    //顶部右下方轮播
    let dots111=document.querySelectorAll(".hotwind_spot .spots");
    let imgs111=document.querySelectorAll('.hotwind img.hot');
    let banner111=document.querySelector('.hotwind');
    let lbtn111=document.querySelector('.hotwind .hotwind-left');
    let rbtn111=document.querySelector('.hotwind .hotwind-right');  
    banner_io(dots111,imgs111,banner111,lbtn111,rbtn111,"active",1500);
    
    //秒杀轮播
     let dots02=document.querySelectorAll(".miaosha-right-spots .spot");
    let imgs02=document.querySelectorAll('.miaosha-right .miaosha-right-one');
    let banner02=document.querySelector('.miaosha-right');
    banner_im_s(dots02,imgs02,banner02,"active",1500);
    //内容轮播
    //把轮播图的宽度获取出来
    let dots5=document.querySelectorAll("ul.item-list li ul.dot");
    let imgs5=document.querySelectorAll('ul.item-list li');
    let banner5=document.querySelector('.item-list');
    let lbtn5=document.querySelector('.control.left i');
    let rbtn5=document.querySelector('.control.right i');
    let widths5 = parseInt(getComputedStyle(banner,null).width);
    //2.定义全局变量
    // let t;
    let now = 0;
    let next = 0;
    //定义开关 当开关是true时可点击 
    let flag = true;
    //调用外部JS中封装的函数
    // banner_io(dots,imgs,banner,lbtn,rbtn,"hot",1500);
    banner_im(dots5,imgs5,banner5,lbtn5,rbtn5,widths5,now,next,"hot",1500);

   

    //闪购平移轮播
    let left2=document.querySelector("h2.shan span.left");
    let right2=document.querySelector("h2.shan span.right");
    let con=document.querySelector(".rainbow-right");
    let widths=parseInt(getComputedStyle(con,null).width)/3;
    let num=0;
    // console.log(num);
    banner_im(left2,right2,con,widths,num);
    // console.log(right1);
    
    // 双下标轮播
	// 获取元素
	let dots1=document.querySelectorAll('div.neirong div.box_bd ul.info.one>div.circle>a');
	let imgs1=document.querySelectorAll('div.neirong div.box_bd ul.info.one>a img');
	let banner1=document.querySelector('div.neirong div.box_bd ul.info.one:first-child');
	let lbtn1=document.querySelector(' ul.info.one div.left');
	let rbtn1=document.querySelector(' ul.info.one div.right');
	let widths1=parseInt(getComputedStyle(banner,null).width);
	let t1;
	let now1=0;
	let next1=0;
	db_banner(imgs1,dots1,banner1,lbtn1,rbtn1,widths1,t1,now1,next1,'hot',1500);


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
   