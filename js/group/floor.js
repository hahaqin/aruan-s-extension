$(function(){
	var floor = $("#comments .bg-img-green h4");
	var num = 1;
	floor.each(function(){
		var content = "<span style='float:right;color:black'>#"+num+"</span>";
		var h = $(this).append(content);
		num++;
	});
});