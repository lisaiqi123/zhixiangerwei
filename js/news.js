$(function(){
	//给新闻左边内容赋高
	$(".left").css({"height":$(".new img").height()});
	//实时给新闻左边内容赋高
	$(window).resize(function(){
		var a = $(".new img").height();
		$(".left").css({"height":a});
	});
	
	//循环遍历所有的section,滑过变色
	$(".new").each(function(i){
		$(this).on("mouseover",function(){
			$(this).find(".left").css({"background":"#00bd70"});
			$(this).find("p").css({"color":"#fff"});
			$(this).find("span").css({"border-color":"#fff"});
			//点击当前下箭头，显示详情内容
			$(this).find(".zhuanmore").click(function(){
				//箭头朝下的隐藏，朝上的显示
				$(this).css({"display":"none"});
				$(this).next().css({"display":"block"});
				//找到下箭头父亲的父亲的相邻下一个兄弟，让其显示
				$(this).parent().parent().next().slideDown();
				//让详情内容隐藏的两种方法
				//第一种，点击上箭头让内容隐藏
				$(this).next().on("click",function(){
					$(this).css({"display":"none"});
					$(this).prev().css({"display":"block"});
					$(this).parent().parent().next().slideUp();
				})
				//第二种，点击 右下角 × 让父亲隐藏
				$(this).parent().parent().next().find(".close").on("click",function(){
					//箭头朝下的显示，朝上的隐藏
					$(this).parent().prev().find(".zhuanmore1").css({"display":"none"});
					$(this).parent().prev().find(".zhuanmore").css({"display":"block"});
					$(this).find("span").css({"background":"#333"});
					$(this).parent().slideUp();
				})
			})
		})
		//移走变回原来的样式
		$(this).on("mouseout",function(){
			$(this).find(".left").css({"background":"#f9f9f9"});
			$(this).find(".head").css({"color":"#00bd70"});
			$(this).find(".question").css({"color":"#000"});
			$(this).find(".cont").css({"color":"#646464"});
			$(this).find(".zhuanmore").css({"border-color":"#141414"});
			$(this).find(".zhuanmore1").css({"border-color":"#141414"});
		})
	})
})