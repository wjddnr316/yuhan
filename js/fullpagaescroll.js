   $(function(){
      var ht=$(window).height()
      $('section').height(ht)
      
      $('.pannel_navi li').click(function(e){
         e.preventDefault();
         var idx=$(this).index()
         $('.pannel').stop().animate({'margin-left':-100*idx+'%'},500)
         
         $('.pannel_navi li a').removeClass('on')
         $(this).find('a').addClass('on')
         });
         
      //세로슬라이드스크립트
      $('.gnb li').click(function(e){
         e.preventDefault();
         var href=$(this).find('a').attr('href')
         var target=$(href).offset().top
         
         $('html,body').animate({'scrollTop':target},1000)
         
         $('.gnb li a').removeClass('on')
         $(this).find('a').addClass('on')
      });
      
      var pos1=$('#section1').offset().top
      var pos2=$('#section2').offset().top
      var pos3=$('#section3').offset().top
      var pos4=$('#section4').offset().top
      var pos5=$('#section5').offset().top
      
      var start=-500 //마지막 section섹션높이 활성화//
      
      //스크롤반응!!!!!!!!!!!!!!!
      $(window).scroll(function(){
         var scrT=$(window).scrollTop()
         $('p').removeClass('on')
         $('div').removeClass('on')
         
         if(scrT>=pos1+start&&scrT<pos2+start){
            $('.gnb li').find('a').removeClass('on')
            $('.gnb li').eq(0).find('a').addClass('on')
         }
         /*&&두 피연산자가 모두 true이면 부울(거짓 참)값true를 반환하고, 그렇지않으면 false를 반환*/
		 if(scrT>=pos2+start&&scrT<pos3+start){
            $('.gnb li').find('a').removeClass('on')
            $('.gnb li').eq(1).find('a').addClass('on')
         }
		  if(scrT>=pos3+start&&scrT<pos4+start){
            $('.gnb li').find('a').removeClass('on')
            $('.gnb li').eq(2).find('a').addClass('on')
			$('#section3 div').addClass('on')
         }
		  if(scrT>=pos4+start&&scrT<pos5+start){
            $('.gnb li').find('a').removeClass('on')
            $('.gnb li').eq(3).find('a').addClass('on')
			$('#section4 div').addClass('on')
         }
		 if(scrT>=pos5+start&&scrT){
            $('.gnb li').find('a').removeClass('on')
            $('.gnb li').eq(4).find('a').addClass('on')
			$('#section5 .sec1').addClass('on')
			$('#section5 .sec2').addClass('on')
         }
      });
   });