/*Natural power slider*/
$(document).ready(function(){
		$('.slider').slick({
		speed: 1000,
		easing:'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: false,
		pauseOnHover: false,
		draggable: false,
		swipe: false,
	});

});
