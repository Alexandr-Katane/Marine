/*Project slider*/
$(document).ready(function(){

	$('.projects__slider').slick({
		infinite:true,
		speed:300,
		slidesToShow:1,
		centerMode: true,
		variableWidth:true,
		autoplay:true,
		autoplaySpeed:1500,
		draggable: false,
		swipe: false,
		easing:'ease',
	});
});