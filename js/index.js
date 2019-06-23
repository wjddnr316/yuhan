
$(function(){
//스크롤시 네비 숨김효과
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $(".main_nav").outerHeight();

	$(window).scroll(function(event){ 
		didScroll = true; 
	});
	
	setInterval(function() {
		if (didScroll) { 
			hasScrolled();
			didScroll = false; 
		} 
	}, 250);
	function hasScrolled() {
		var st = $(this).scrollTop();
		
		if(Math.abs(lastScrollTop - st) <= delta)
			return;
 
	if (st > lastScrollTop && st > navbarHeight){
		$(".main_nav").removeClass('nav-down').addClass('nav-up'); 
		$("#menu_btn").addClass('fmenu_active');
		
	} else 
		
		{if(st + $(window).height() < $(document).height()) {
			$(".main_nav").removeClass('nav-up').addClass('nav-down'); 
			$("#menu_btn").removeClass('fmenu_active');
		} 
	} 
	lastScrollTop = st; }

//퀵베터 스크롤 따라 움직이기
$(function(){
	var defaultTop = parseInt($("ul.qk_banner").css("top"));//기본문서 상단에서 퀵메뉴가 이동한 거리값을 구함
	
	$(window).on("scroll",function(){
		var scv = $(window).scrollTop();
		$("ul.qk_banner").stop().animate({top:scv + defaultTop + "px"},700);
		
//스크롤반응 에니메이션추가
		if (scv <= 300){
			$(".product_content").removeClass("on");
			
		}
		if (scv >= 500){
			$(".product_content").addClass("on");
		}else{
			$("div.story_background>h2,article.im_story_part .slider,header.news_title_wrap,#product_news_wrap>.product_left_wrap,.cont_box").removeClass("on");
		}
		if (scv >= 1000){
			$("div.story_background>h2").addClass("on");
		}
		if (scv >= 1100){
			$("article.im_story_part .slider").addClass("on");
		}
		if (scv >= 1500){
			$("header.news_title_wrap").addClass("on");
		}
		if (scv >= 1700){
			$("#product_news_wrap>.product_left_wrap,.cont_box").addClass("on");
		}else{
			$("#event_wrap .event_artiback,#event_wrap .event_view_more,.track_slider .slick-dots,.event_title").removeClass("on");
		}
		if (scv >= 2500){
			$("#event_wrap .event_artiback,#event_wrap .event_view_more,.track_slider .slick-dots,.event_title").addClass("on");
		}else{
			$("div.company h1,div.company p.companytext,div.companybox a").removeClass("on");
			$("div#video_list>ul li,div.video_section").removeClass("on");
		}
		if (scv >= 3200){
			$("div#video_list>ul li,div.video_section").addClass("on");
		}
		if (scv >= 4100){
			$("div.company h1,div.company p.companytext,div.companybox a").addClass("on");
		}
	});
});

	


//Gnb이벤트 카테고리 오버 유지

$(function(){
	$('li.pd_menu').hover(function(){
		$('li.pd_menu > div').removeClass('product_hover');
		$('div',this).addClass('product_hover'); 
	});
		
});
$(function(){
	$('li#sub4_menu').hover(function(){
		$('li#sub4_menu > div').removeClass('invest_hover');
		$('div',this).addClass('invest_hover'); 
	});
		
});
$(function(){
	$('li.evttitle').hover(function(){
		$('li.evttitle > div').removeClass('eventhover');
		$('div',this).addClass('eventhover'); 
		
		$('li.evttitle > a > span').removeClass('underline_hover');
		$('a > span',this).addClass('underline_hover'); 
	});
		
});

//비디오 파트 텝선택
 $(function(){
	var figure = $("ul#inner_list li").hover( hoverVideo, hideVideo );

	function hoverVideo(e) {  
		$('video', this).get(0).play(); 
	}

	function hideVideo(e) {
		$('video', this).get(0).pause(); 
	} 
	
    var list_zone=document.getElementById("inner_list");
    var list_a=list_zone.getElementsByTagName("a");
  
	for(var i=0; i<list_a.length; i++){
		list_a[i].onclick=function(){
			
		 $("ul#inner_list li").removeClass("video_target");
		 
		  $(this).parent("li").addClass("video_target")
		   
	   var ph=document.getElementById("video").children[0];

	   ph.src=this.href;
	  
       return false; 
      }
    }
	
});  
});
 //스크롤 반응
 