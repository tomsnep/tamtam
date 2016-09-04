'use strict'

var launcher = (function() {

	var init = function() {
		// call routes
		animations.navigation();
		routes.init();		
	};

	return {
		init: init
	};
})();


launcher.init();