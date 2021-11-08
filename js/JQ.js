// JavaScript Document
$(document).ready(function(){
	$(".tabs ul li").click(function(){
		$(this).addClass("select").siblings().removeClass("select");
		$(".all_tabs > div").hide();
		$($(this).attr("data-class")).show();
	})
	
	$(window).scroll(function(){
		if($(window).scrollTop() >= 140){
			$(".for_button").fadeIn("slow");
		}else{
			$(".for_button").fadeOut("slow");
		}
	});
	
	$(".for_button").click(function(){
		$('body,html').animate({scrollTop:0},5500);
	})
});