$(function(){
	//得到当前访问路径
	var path = window.location.pathname;
	//判断当前路径是否为豆瓣首页
	if(path == '/'){
       var $window = $(window);
       var $document = $(document);
       $window.scroll(function(){
		   //是否滑动到底部
           if ($document.scrollTop() + $window.height() >= $document.height()) {
			   //加载JS文件
			   $.getScript("https://img3.doubanio.com/f/shire/aedf48bfb567e2ae6c53c4a319e0b2e795789327/js/statuses.js");
			   $.getScript("https://img3.doubanio.com/misc/mixed_static/4226f128ecdee822.js");
			   setTimeout(function(){
				   //得到下一页的访问链接
				   var params = $(".paginator .thispage").next().attr("href");
				   if(params != null){
					   $.ajax({
						   type:'GET',
						   url:params,
						   success:function(data){
							   //在返回的html中找到广播内容
							   var element = $(data).find('.stream-items').html();
							   //如果之后没有内容
							   if($.trim(element) == "" || element == null){
								   return;
							   }
							   //合并到当前广播页面
							   $(".stream-items").append(element);
							   //交换底部分页标签
							   var thisPage = $(".paginator .thispage");
							   var nextPage = $(".paginator .thispage").next();
							   var thisPageText = thisPage.text();
							   var nextPageText = nextPage.text();
							   thisPage.text(nextPageText);
							   nextPage.text(thisPageText);
							   var href = "?p="+thisPageText+"&";
							   nextPage.attr("href",href);
							   nextPage.after(thisPage);
							   
							   //最后增加一个元素
							   var last = $(".paginator .break");
							   var lastNum = parseInt($(".paginator .break").prev().text());
							   var lastHref = "?p="+(lastNum+1)+"&";
							   var lastElement = "<a href="+lastHref+">"+(lastNum+1)+"</a>";
							   last.before(lastElement);
							   
							   //删除第一个元素
							   var first = $(".paginator .prev").next();
							   first.remove();
							   //更改前页href
							   var theFirst = '<link rel="prev" href="?p='+parseInt(thisPageText)+'&"> <a href="?p='+parseInt(thisPageText)+'&"><前页</a>';
							   $(".paginator .prev").html(theFirst);
							   //更改后页href
							   var theLast = '<link rel="next" href="?p='+(parseInt(thisPageText)+2)+'&"> <a href="?p='+(parseInt(thisPageText)+2)+'&">后页></a>';
							   $(".paginator .next").html(theLast);
							   
							   $.getScript("https://img3.doubanio.com/f/shire/aedf48bfb567e2ae6c53c4a319e0b2e795789327/js/statuses.js");
							   $.getScript("https://img3.doubanio.com/misc/mixed_static/4226f128ecdee822.js");
						   }
					   });
				   }
			   },200);
           }
       });
	}
});
