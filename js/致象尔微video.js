$(function(){
	//滑过视频字体颜色变化
	$(".video_ul li").each(function(i){
		//点击视频按钮播放视频
		var code = i;
		$(this).on("mouseover",function(){
			$(".introduce").eq(code).find("p:nth-child(2)").css({"color":"#00bd70"});
			$(".introduce").eq(code).find("span").css({"border-color":"#00bd70"});
			$(".introduce").eq(code).find("span").on("click",function(){
				$(".introduce").eq(code).hide();
				$(".operate").eq(code).show();
				$(".operate").eq(code).css({"width":$(".video_ul li img").width()});
				$(".timetiao").eq(code).css({"width":$(".video_ul li img").width()-100});
				$(".operate span").eq(code).click(function(){
					$(".operate").eq(code).hide();
				});
				$(".close").eq(code).show();
				$(".close").eq(code).on("click",function(){
					$(this).hide();
					$(".operate").eq(code).hide();
					$(".introduce").eq(code).show();
				})
			})
		});
		$(this).on("mouseout",function(){
			$(".introduce").eq(code).find("p").css({"color":"#fff"});
			$(".introduce").eq(code).find("span").css({"border-color":"#fff"});
		});
	})

	//初始ul里面的后四个li隐藏
	$(".video_ul li:gt(3)").hide();
	//点击上下跳动的move可以展出更多视频内容（即ul里面的后四个li显示）
	$(".move").on("click",function(){
		$(".nextmore").hide();
		$(".video_ul li:gt(3)").show();
	})
})