/*Display accordeon informations*/
$(function(){

  $.display_text = function(id_h,id_text){

	$(id_h).click(function(){
			$(id_text).slideToggle(300, function(){
				if ($(this).is(':hidden')) {
					$(id_h).removeClass('information__acordeon-more_open');
				} else {
					
					$(id_h).addClass('information__acordeon-more_open');
				}							
			});
			return false;
		});
  };

  $.display_text("#acordeon_h1","#acordeon_text1");
  $.display_text("#acordeon_h2","#acordeon_text2");
  $.display_text("#acordeon_h3","#acordeon_text3");

});
