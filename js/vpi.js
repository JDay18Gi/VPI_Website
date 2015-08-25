
$(document).ready(function(){

	/* drop down for "solutions"*/
	$("#solution-ul").on("mouseenter", function(){
		$("#solution-dd").show();
	});
	$("#solution-ul").on("mouseleave", function(){
		$("#solution-dd").hide();
	});
/*
	$("#solution-dd").on("mouseenter", function(){
		$("#solution-dd").show();
	});
	$("#solution-dd").on("mouseleave", function(){
		$("#solution-dd").hide();
	});
*/
	/* drop down for mobile menu*/
	$(".hamburger").on("click", function(){
		$("nav").toggle();
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