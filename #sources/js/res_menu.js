/*Responsive menu*/
menu.onclick = function myFunction(){
	var x = document.getElementById('navigation');

	if(x.className === "header-bottom-menu-list"){
		x.className += " responsive";} else{
			x.className = "header-bottom-menu-list";
		}
}

