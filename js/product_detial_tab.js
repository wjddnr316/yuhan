$(function(){
	$("div.product_tab").hide();
	$("div.product_tab").first() .show();	
	$("li.tabbtn").on("click",function(){
		$("li.tabbtn").removeClass("active").css("color","#4a624e").css("background","#f1f1f1");	
		$(this).addClass("active").css("color","#fff").css("background","#4a624e");
		$("div.product_tab").hide() //밑으로 나열방지
		
		var activeTab = $(this).attr("rel");
		//rel속성은 a요소, link요소,area 요소에서 사용되며, 링크된 대상과의 관계를 지정한다. li에 연결되어 있는 링크대상 보여줘
		$("#" + activeTab).show()
	});
});
