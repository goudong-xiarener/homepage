//1.获取元素
window.onload=function() { 
	let left1=document.querySelector("h2 span.left");
	let right1=document.querySelector("h2 span.right");
	let con=document.querySelector(".rainbow-right");
	let widths=parseInt(getComputedStyle(con,null).width)/3;
	console.log(right1);
	//2.点击右箭头
	let num=0;
	right1.onclick=function() {
		num++;
		//有三屏
		if (num==3) {
			num=2;
			right1.style.background="red";
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
			left1.style.background="red";
			return;
		}
        right1.style.background="";
       con.style.transform="translateX("+(-widths*num)+"px)";
	}
}