'use strict'

var animations = (function() {

	var navigation = function() {
		
		var headerMenuButton = document.querySelector('.header__menu-button');
		var headerNav = document.querySelector('.header__nav');
		var headerNavItem = document.querySelectorAll('.header__nav-item');

		// start menu & button animation
		headerMenuButton.onclick = function() {

			if (headerMenuButton.classList.contains('active')) {
				headerMenuButton.classList.remove('active');
				headerNav.classList.remove('active');
			} else {
				headerMenuButton.classList.add('active');
				headerNav.classList.add('active');

				//when mobile menu is open, loop trough all nav items and slide menu back at it's original position and transform the cross back to a hamburger when a nav item has been clicked
				for (var i = headerNavItem.length - 1; i >= 0; i--) {
					headerNavItem[i].onclick = function() {
						headerMenuButton.classList.remove('active');
						headerNav.classList.remove('active');
						headerNav.classList.remove('active');
					}
				}
			}
		}
	};


	return {
		navigation
	}
})();