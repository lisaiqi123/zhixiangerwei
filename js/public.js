$(function(){
	//导航栏滚动超过banner高度时，吸顶
	$(document).on("scroll",function(){
		var a = 0;
		var b = $(this).scrollTop();
		if(b > 0){
			$(".navout").css({"position":"fixed",
								"z-index":"4"});
		}else{
			$(".navout").css({"position":"relative"});
		}
	})
	//中英文数组
	var ChinaArr = ["公司简介","应用案例","新闻动态","招聘信息","联系我们"];
	var EnglishArr = ["ABOUT US","CASE","NEWS","RECRUITMENT","CONTACT US"];
	//先给nav内容附初值
	$(".menulis li").each(function(){
		$(this).find("a").html(EnglishArr[$(this).index()])
	});
	//切换语言（English、中文）
	$(".change p").on("click",function(){
		$(".plis").show();
		$(".plis li").each(function(){
			//滑过滑走效果
			$(this).on("mouseover",function(){
				$(this).css({"background":"#00bd70",
							"color":"#fff"});
			})
			$(this).on("mouseout",function(){
				$(this).css({"background":"#535353",
							"color":"#00bd70"});
			})
			$(this).on("click",function(){
				$(".change p").html($(this).html()+"<span></span>");
				$(".language").html($(this).html()+"<span></span>");
				$(".plis").hide();
				$(".bottom_li").hide();
				if($(this).index() == 0){
					$(".menulis li").each(function(){
						$(this).find("a").html(EnglishArr[$(this).index()])
					});
				}else{
					$(".menulis li").each(function(){
						$(this).find("a").html(ChinaArr[$(this).index()])
					});
				}
			})
		})
	})
	//页面下部切换语言（English、中文）
	$(".language").on("click",function(){
		console.log(22)
		$(".bottom_li").show();
		$(".bottom_li li").each(function(i){
			//滑过滑走效果
			$(this).on("mouseover",function(){
				$(this).css({"background":"#00bd70",
							"color":"#fff"});
			});
			$(this).on("mouseout",function(){
				$(this).css({"background":"transparent",
							"color":"#00bd70"});
			});
			$(this).on("click",function(){
				$(".change p").html($(this).html()+"<span></span>");
				$(".language").html($(this).html()+"<span></span>");
				$(".bottom_li").hide();
				$(".plis").hide();
				if($(this).index() == 0){
					$(".menulis li").each(function(){
						$(this).find("a").html(EnglishArr[$(this).index()])
					});
				}else{
					$(".menulis li").each(function(){
						$(this).find("a").html(ChinaArr[$(this).index()])
					});
				}
			})
		})
	})
	//点击搜索图片出现搜索框
	$(".search").on("click",function(){
		$(".change1").toggle();
		$(".change").toggle();
		$(".change1 input").on("blur",function(){
			$(".change1").hide();
			$(".change").show();
		})
	});
	
	//浏览屏幕小于950px时，导航栏变为menu按钮
	$(".navmenu").on("mouseover",function(){
		$(this).css({"background":"#414141"});
	})
	$(".navmenu").on("mouseout",function(){
		$(this).css({"background":"#535353"});
	})
	$(".navmenu").on("click",function(){
		$(".menulis").slideToggle();
	})
	//部分按钮提示
	$(".navmenu").attr({"title":"菜单"});
	$(".search").attr({"title":"搜索"});
	$(".language").attr({"title":"切换语言"});
	$(".change p").attr({"title":"切换语言"});
})