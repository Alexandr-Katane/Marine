/*Display post information*/
function display_info(id, id_h, post_class, href_class){

	var all =  document.querySelectorAll(post_class);

	var hrefs = document.querySelectorAll(href_class);

	for (var i = 0 ; i < all.length; i++) {
		if (all[i].id == id) {
			all[i].style.display = (all[i].style.display == 'block')? 'none' : 'block';
		} else{
			all[i].style.display = 'none';	
		}
	}

	for (var i = 0; i < hrefs.length; i++) {
		if(hrefs[i].id == id_h){
			if(hrefs[i].classList.contains('information__menu-item-choisen')){
				hrefs[i].classList.remove('information__menu-item-choisen');
			} else{
				hrefs[i].classList.add('information__menu-item-choisen');
			}
		} else{
			hrefs[i].classList.remove('information__menu-item-choisen');
		}
	}
}

	