/**
 * Created by lenovo on 2018/9/17.
 */

let input=document.querySelectorAll("input");
let text=document.querySelector("textarea");
let num=document.querySelector("span#number");
let ul=document.querySelector("ul.aa");
let btn=document.querySelector("button");

//1.随着输入的内容，textarea中字数实时变化
//实时监测textarea中的字数变化
text.oninput=function() {
    //console.log(this.value.length);
    let numvalue=text.value.length;
    num.innerHTML=numvalue;
}
//2.当点击提交时，将右侧内容添加在左侧列表中
btn.onclick=function() {
    let name=input[0].value;
    let phone=input[1].value;
    console.log(name);
    let con=text.value;
    if(input[0].value!=="" && input[1].value!=="" && text.value!=="") {
        let str=`<li>
    				<i class="iconfont icon-touxiang"></i>
    				<div class="right">
    						<h4>${name}</h4>
    						<div>${phone}</div>
    					    <div class="liuyan">${con}</div>

    				</div>
                </li>`;
        ul.innerHTML+=str;
        input[0].value="";
        input[1].value="";
        text.value="";
        num.innerHTML=0;
    }else {
        alert('内容不能为空！');
    }

}
