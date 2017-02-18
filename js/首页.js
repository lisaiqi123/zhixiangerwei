$(function(){
//	var arr1 = ["img/home/banner1.png","img/home/banner2.png","img/home/banner3.png","img/home/banner4.png","img/home/banner5.png"]
//	//banner大图轮播
//	var k = 0;
//	setInterval(function(){
//		k++;
//		if(k >=5){
//			k = 0;
//		}
//		$(".banner img").attr("src",arr1[k]).animate({"opacity":"1"},2000,"linear");
//	},5000);

	//导航栏滚动超过banner高度时，吸顶
	$(document).on("scroll",function(){
		var a = $(".banner img").height();
		var b = $(this).scrollTop();
		if(a <= b){
			$(".navout").css({"position":"fixed",
								"z-index":"4"});
		}else{
			$(".navout").css({"position":"relative"});
		}
	})
	//页面一共5个部分，滑过每个部分，有滑过效果
	$("section").each(function(i){
		var code = i;
		$(this).on("mouseover",function(){
			$(".con").eq(code).css({"background":"#acd598"});
			//$(".con").eq(code).animate({"background":"#acd598"},1000,"linear");
		})
		$(this).on("mouseout",function(){
			$(".con").eq(code).css({"background":"#fff"});
		})
	})
	//实时检测屏幕宽度
	$(window).resize(function(){
		window.w1 = $(this).width();
		var h1 = $(this).height();
		$(".mengbanvideo").css({"width":w1,
								"height":h1});
		$(".mengbanvideo #picVideo").css({"width":w1*0.9});
		$(".introduce1").css({"width":$(".mengbanvideo img").width()});
		$(".timetiao").css({"width":$(".mengbanvideo img").width()-100});
		var h = $(window).height()-$(".mengbanvideo img").height();
		var w = $(window).width()-$(".mengbanvideo img").width();
		$(".videodiv").css({"left": w/2,
							"top": h/2,
							"border":"5px solid #fff"});
		//当浏览器宽大于或小于950时，section2部分menu图片的变化
		$(".about").css({"height":$("#comPic").height()});
		if(w1 >= 950){
			$(".menu img").attr("src","img/home/about_btn1.png");
		}else{
			$(".menu img").attr("src","img/home/about_btn1_2.png");
		}
		window.hhh = $(".banner").height();
	})
	//雪花
	w1 = $(window).width();
	hhh = $(".banner").height();
	setInterval(function(){
		var e=Math.random()*w1-100;
		var o=0.3+Math.random();
		var fon=10+Math.random()*30;
		var l = e - 100 + 200 * Math.random();
		var k=2000 + 5000 * Math.random();
		$("<div class='snow'>❅<div>").appendTo(".banner").css({
			left:e+"px",
			opacity:o,
			"font-size":fon,
		}).animate({
		  	top:hhh+"px",
			left:l+"px",
			opacity:0.1,
			},k,"linear",function(){$(this).remove()});
	},500);
	//section1 滑过视频观看视频字体颜色改变
	$(".rulerright").on("mouseover",function(){
		$(this).find("p:nth-child(2)").css({"color":"#00bd70"});
		$(this).find("span").css({"border-color":"#00bd70"});
	})
	$(".rulerright").on("mouseout",function(){
		$(this).find("p").css({"color":"#fff"});
		$(this).find("span").css({"border-color":"#fff"});
	})
	//section1 点击视频按钮播放视频
	$(".inspan1").on("click",function(){
		$(".mengbanvideo").show();
		$(".mengbanvideo").css({"width":$(window).width(),
								"height":$(window).height()});
		$(".mengbanvideo #picVideo").css({"width":$(window).width()*0.9});
		$(".introduce1").css({"width":$(".mengbanvideo img").width()});
		$(".timetiao").css({"width":$(".mengbanvideo img").width()-100});
		var h = $(window).height()-$(".mengbanvideo img").height();
		var w = $(window).width()-$(".mengbanvideo img").width();
		$(".videodiv").css({"left": w/2,
							"top": h/2,
							"border":"5px solid #fff"});
		$(".mengbanvideo span").click(function(){
			$(".mengbanvideo").hide();
		});
	})
	$(".start img").on("click",function(){
		$(".mengbanvideo").show();
		$(".mengbanvideo").css({"width":$(window).width(),
								"height":$(window).height()});
		$(".mengbanvideo #picVideo").css({"width":$(window).width()*0.9});
		$(".introduce1").css({"width":$(".mengbanvideo img").width()});
		$(".timetiao").css({"width":$(".mengbanvideo img").width()-100});
		var h = $(window).height()-$(".mengbanvideo img").height();
		var w = $(window).width()-$(".mengbanvideo img").width();
		$(".videodiv").css({"left": w/2,
							"top": h/2,
							"border":"5px solid #fff"});
		$(".mengbanvideo span").click(function(){
			$(".mengbanvideo").hide();
		});
	})
	//section2部分鼠标滑过图片，右上角出现menu，点击menu出现about
	//当浏览器宽小于950时，section2部分menu图片的变化,附初值
	if($(window).width() >= 950){
		$(".menu img").attr("src","img/home/about_btn1.png");
	}else{
		$(".menu img").attr("src","img/home/about_btn1_2.png");
	}
	$(".company").on("mouseover",function(e){
		$(".menu").show();
		var bol = true;
		$(".menu").on("click",function(){
			if(bol){
				if($(window).width() >= 950){
					$(".menu img").attr("src","img/home/about_btn2.png");
					$(".span1").css({"left":"80px"});
				}else{
					$(".menu img").attr("src","img/home/about_btn2_2.png");
					$(".span1").css({"left":"80px"});
				}
				$(".about .about_con").find("p").html("致象团队来自于国际芯片龙头企业在华研究机构的核心骨干，在过去五年成功地担纲了前瞻性智能平台原型的创立、设计和开发，在2014年全球消费电子大会（CES）上荣获四个奖项，被业界公认为智能手机后的最先进技术成就。因为该团队的开创性研发，该国际公司当前得以雄踞手机后智能平台的技术前沿。")
				
				$(".about .about_con").find("h2").html("致象团队来自何方？");
				bol = false;
			}else{
				if($(window).width() >= 950){
					$(".menu img").attr("src","img/home/about_btn3.png");
					$(".span1").css({"left":"220px"});
				}else{
					$(".menu img").attr("src","img/home/about_btn3_2.png");
					$(".span1").css({"left":"185px"});
				}
				$(".about .about_con").find("p").html("在2014年全球在2014年全球消费电子大会（CES）上荣获四个奖项，被业界公认为智能手机后的最先进技术成就。因为该团队的开创性研消费电子大会（CES）上荣获四个奖项，被业界公认为智能手机后的最先进技术成就。因为该团队的开创性研在2014年全球消费电子大会（CES）上荣获四个奖项，被业界公认为智能手机后的最先进技术成就。因为该团队的开创性研")
				
				$(".about .about_con").find("h2").html("致象团队的致力于方向？");
				bol = true;
			}
			$(".about").fadeIn();
			$(".about").css({"z-index":1});
			$(this).css({"z-index":2});
			
		})
	})
	$(".company").on("mouseout",function(e){
		e.stopPropagation();
		if($(window).width() >= 950){
			$(".menu img").attr("src","img/home/about_btn1.png");
		}else{
			$(".menu img").attr("src","img/home/about_btn1_2.png");
		}
		$(".menu").hide();
	})
	$(".about").on("mouseout",function(){
		$(this).hide();
	})
	$(".menu").attr({"title":"详情菜单"});

	
	//section3大图滚动
	var arrP = ["创客／极客社区   致象科技提供的开发板具有业界最小尺寸和最低的功耗，便于开发，便于将众筹原型迅速转化为产品。",
"智能硬件团队 致象平台降低了嵌入智能开发的技术门槛，“授人以渔”，使得团队可以专注于创意产品的工业设计和用户体验，带动智能设备创新、创业的启动和发展。另一方面，对于广大传统产品（如杯子、玩具、遥控）的信息化和智能化升级，致象提供可插拔的“交钥匙智能植入”，切分了智能组件的分工整合，从而推动了泛在智能在各种市场的规模化采用和推广",
"品牌家电厂商和消费电子厂商 致象平台集中解决了智能化家居产品的软硬件技术挑战，从而大大缩短智能家居新品开发周期，降低产品的市场风险。致象模块的可插拔特性，又解决了传统电器更新节奏和摩尔定律推动的智能组件更新节奏不匹配的问题。而灵活的平台应用和服务，使得厂商得以受惠于富有原创力的移动互联网生态系统，产品性能也能通过app扩展。"];
	window.i = 0;
	function timer(){
		i++;
		if(i > $(".juan img").width()*4){
			i = 0;
		}
		$(".juan").css({"left":-1*i});
		//判断juan的left值，让其停顿2秒
		if(Math.abs($(".juan").offset().left % $(".juan img").width()) == 0){
			clearInterval(a);
			b = setInterval(timer1,2000);
		}
	}
	//时间2秒的开关
	var m = 0;
	var n = 0;
	function timer1(){
		m++;
		n++;
		if(m % 2 == 0){
			a = setInterval(timer,10);
			if(n > 2){
				n = 0;
			}
			$(".whomP p").html(arrP[n]);
			clearInterval(b);
		}
	}
	var a = setInterval(timer,8);

	//section2和section4大图轮播
	var arr = ["img/home/banner1.png","img/home/a_1.jpg","img/home/a_2.jpg","img/home/a_3.jpg","img/home/a_4.jpg"];
	j = 0;
	//点击li标签src赋值到相应的图片
	$(".newsball ul li").on("click",function(){
		$(this).css({"background":"#00bd70"});
		$(".news img").attr("src",arr[$(this).index()]);
		j = $(this).index();
	})
	setInterval(function(){
		j++;
		if(j >=5){
			j = 0;
		}
		//section2
		$("#comPic").attr("src","img/home/company.png");
		$(".ball ul li").each(function(){
			$(this).css({"background":"#ccc"});
		});
		$(".ball ul li").eq(j).css({"background":"#00bd70"});
		//section4
		$(".news img").attr("src",arr[j]);
		$(".newsball ul li").each(function(){
			$(this).css({"background":"#ccc"});
		});
		$(".newsball ul li").eq(j).css({"background":"#00bd70"});
	},3000);
})