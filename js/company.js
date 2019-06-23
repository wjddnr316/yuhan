

$(function(){
	
//풀스크린 
      var ht=$(window).height()
      $('section').height(ht)
      
      //세로슬라이드스크립트
      $('.gnb li').click(function(e){
         e.preventDefault();
         var href=$(this).find('a').attr('href')
         var target=$(href).offset().top
         
         $('html,body').animate({'scrollTop':target},1000)
         
         $('.gnb li a').removeClass('on')
         $(this).find('a').addClass('on')
      });
      
      var pos1=$('#intro_vd').offset().top
      var pos2=$('#im_philosophy_wrap').offset().top
      var pos3=$('#im_history_wrap').offset().top
      var pos4=$('#im_business_wrap').offset().top
      var pos5=$('#im_csr_wrap').offset().top
      var pos6=$('#familycompany').offset().top
      
      var start=-500 //마지막 section섹션높이 활성화//
      
     
      $(window).scroll(function(){
         var scrT=$(window).scrollTop()
         $('p').removeClass('on')
         $('h2').removeClass('on')
         $('li').removeClass('on')
         $('img').removeClass('on')
         
         if(scrT>=pos1+start&&scrT<pos2+start){
            $('.gnb li').find('a').removeClass('on')
            $('.gnb li').eq(0).find('a').addClass('on')
			
         }
		 if(scrT>=pos2+start&&scrT<pos3+start){
            $('.gnb li').find('a').removeClass('on')
            $('.gnb li').eq(1).find('a').addClass('on')
         }
		  if(scrT>=pos3+start&&scrT<pos4+start){
            $('.gnb li').find('a').removeClass('on')
            $('.gnb li').eq(2).find('a').addClass('on')
         }
		  if(scrT>=pos4+start&&scrT<pos5+start){
            $('.gnb li').find('a').removeClass('on')
            $('.gnb li').eq(3).find('a').addClass('on')
			$('div.bsns_cont_wrap').addClass('on')
         }
		 if(scrT>=pos5+start&&scrT<pos6+start){
            $('.gnb li').find('a').removeClass('on')
            $('.gnb li').eq(4).find('a').addClass('on')
         }
		  if(scrT>=pos6+start&&scrT){
            $('.gnb li').find('a').removeClass('on')
            $('.gnb li').eq(5).find('a').addClass('on')
			$('section#familycompany .family_bgani p img').addClass('on')
         }
      })
 
   
   //기업이념 텝구조
	$("div.plsp_list_text").hide();
	$("div.plsp_list_text").first() .show();	
	$("li.plsp_list").on("click",function(){
		$("li.plsp_list").removeClass("active").css("text-decoration","none");	
		$(this).addClass("active").css("text-decoration","underline");
		$("div.plsp_list_text").hide() //밑으로 나열방지
		
		var activeTab = $(this).attr("rel");
		//rel속성은 a요소, link요소,area 요소에서 사용되며, 링크된 대상과의 관계를 지정한다. li에 연결되어 있는 링크대상 보여줘
		$("#" + activeTab).show()
	});


//히스토리bx슬라이더

	var mySlider = $("div.history_slider").bxSlider({	
		mode:"horizontal", //수평방향으로 이동
		speed:500, //이동속도 0.5초
		pager:false, //페이징표시제어 숨김
		moveSlides:1, //이동슬라이드수
		slideWidth:319,
		minSlides:3.6, //최소 노출슬라이드 수
		maxSlides:5, //최대 노출슬라이드 수
		slideMargin:10, //슬라이드간 간격
		auto:true, //자동슬라이드 여부
		autoHover:true, //마우스 오버시 자동 정지
		controls:false //이전다음버튼 숨김	
	});
	$("#hs_prev").on("click",function(){
		mySlider.goToPrevSlide();//슬라이드 이전으로 이동		
		return false;
	});
	$("#hs_next").on("click",function(){
		mySlider.goToNextSlide(); //슬라이드 다음으로 이동
		return false;
	});

});

