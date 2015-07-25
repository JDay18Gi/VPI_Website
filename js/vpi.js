
$(document).ready(function(){

	/* drop down for "solutions"*/
	$("#menu-solution").on("mouseenter", function(){
		$("#solution-dd").show();
	});
	$("#menu-solution").on("mouseleave", function(){
		$("#solution-dd").hide();
	});

	$("#solution-dd").on("mouseenter", function(){
		$("#solution-dd").show();
	});
	$("#solution-dd").on("mouseleave", function(){
		$("#solution-dd").hide();
	});

	/* drop down for mobile menu*/
	$("#mobile-menu img").on("click", function(){
		$("#mobile-dd").toggle();
	});
	/*
	$("#menu-solution").on("mouseleave", function(){
		$("#solution-dd").hide();
	});

	$("#solution-dd").on("mouseenter", function(){
		$("#solution-dd").show();
	});
	$("#solution-dd").on("mouseleave", function(){
		$("#solution-dd").hide();
	});
	*/

});