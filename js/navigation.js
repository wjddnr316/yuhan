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
