require.config({
	paths:{
		"jquery":"lib/jquery-1.11.0",
		"text":"lib/text",
		"text1":"../template/test1.html",  //这里千万注意路径
		"text2":"../template/test2.html",
		"css1":"../style/test1.css",
		"css2":"../style/test2.css"
	}
})
require(['jquery','text!text1','text!text2','text!css1','text!css2'],function($,template1,template2,css1,css2){
//	进入页面先设置为页面test1.html内容
	$(".css-attribute").html(css1);
	$(".page").html(template1);
	
//	点击skip按钮设置为页面test2.html内容
	$(".skip").click(function(){
		$(".css-attribute").html(css2);
		$(".page").html(template2);
	})
})

