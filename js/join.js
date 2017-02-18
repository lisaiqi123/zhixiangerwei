$(function(){
	//给main中所有的dd赋高,并将所有的dd隐藏
	$(".dl3 dd").css({"height":$(".detail").height(),
						"display":"none"});
	$(".close").attr({"title":"点击关闭"});
	$(".zhuanmore").attr({"title":"点击展开"});
	$(".zhuanmore1").attr({"title":"点击收回"});
	//展开收回招聘信息
	$(".dl3").each(function(){
		$(this).find("dt").on("click",function(){
			//展开箭头隐藏
			$(this).find(".zhuanmore").toggle();
			//收回箭头显示
			$(this).find(".zhuanmore1").toggle();
			//详情内容显示
			$(this).next().slideToggle();
			$(this).next().find(".close").on("click",function(){
				$(this).parent().parent().slideUp();
				//展开箭头隐藏
				$(this).parent().parent().prev().find(".zhuanmore").toggle();
				//收回箭头显示
				$(this).parent().parent().prev().find(".zhuanmore1").toggle();
			})
		})
	})
	//填写招聘信息格式规范
	//名字的检测(全部为汉字)
	var reg = /^[\u4e00-\u9fa5]+$/;
	var r = /\s/;
	$("#name").on("blur",function(){
		var name = $(this).val().toString().trim();
		var bol = reg.test(name);
		if(bol){
			$(this).css({"border-color":"blue"});
		}else{
			$(this).css({"border-color":"red"});
		}
	})
	//学校不为空的检测(全部为汉字)
	$("#school").on("blur",function(){
		var school = $(this).val();
		if(school != ""){
			$(this).css({"border-color":"blue"});
		}else{
			$(this).css({"border-color":"red"});
		}
	})
	//电话的检测(必须为11位移动手机号)
	var reg2 = /^1[3458](\d){1}(\d){4}(\d){4}$/;
	$("#tel").on("blur",function(){
		var tel = $(this).val();
		var bol = reg2.test(tel);
		if(bol){
			$(this).css({"border-color":"blue"});
		}else{
			$(this).css({"border-color":"red"});
		}
	})
	//电子邮箱的检测(字母数字构成)
	var reg3 = /^\w{4,}$/;
	$("#email1").on("blur",function(){
		var email1 = $(this).val();
		var bol = reg3.test(email1);
		if(bol){
			$(this).css({"border-color":"blue"});
		}else{
			$(this).css({"border-color":"red"});
		}
	})
	var reg4 = /^[A-Za-z0-9]{2,4}\.[A-Za-z]{2,4}$/i;
	$("#email2").on("blur",function(){
		var email2 = $(this).val();
		var bol = reg4.test(email2);
		if(bol){
			$(this).css({"border-color":"blue"});
		}else{
			$(this).css({"border-color":"red"});
		}
	})
	//鼠标滑过按钮
	$("#btn").mouseover(function(){
		$(this).css({"background":"#00bd70",
					"color":"#fff"});
		$(this).find(".btnspan").css({"border-color":"#fff"});
	})
	$("#btn").mouseout(function(){
		$(this).css({"background":"#fff",
					"color":"#00bd70"});
		$(this).find(".btnspan").css({"border-color":"#00bd70"});
	})
})