$(function() {
	//添加悬浮块
	var element = '<div class="side-bar">'
				 +'<a href="#" class="icon-qq">上来玩</a>'
				 +'<a href="#bottom" class="icon-chat">下去玩</a>'
				 +'</div>';
	$('body').append(element);
	//添加底部锚点
	var point = '<a name="bottom"></a>';
	$('#content').append(point);
	//设置CSS
	$('.side-bar').css({"width":"161px","position":"fixed","bottom":"20px","right":"25px","font-size":"0","line-height":"0","z-index":"100"});
	$('.side-bar a').css({"width":"161px","height":"65.5px","display":"block","margin-bottom":"2px"});
	$('.side-bar a').css({"background-image":"url(http://img1.ph.126.net/RVJQTfgl2832k2AI5Ht-Ng==/6632424563049727480.jpg)","background-repeat":"no-repeat"});
	$('.side-bar .icon-qq').css({"background-position":"0 0px"});
	$('.side-bar .icon-chat').css({"background-position":"0 -65.5px","position":"relative"});	
});