var routes = (function() {

		var init = function() {

			// set home section as default if no other section is selected
			if(window.location.hash == ""){
				window.location.hash = '#home-section';
			}

			routie({
			    'home-section': function() {
			    	// get path name and execute routes.toggle() to show section
			    	var hashName = this.path;
			    	routes.toggle(hashName);
			    	
			    	// execute functions from this section
			    	homeSection.carousel();
			    	homeSection.getFeedData();
			    
			    },
			    'contact-section': function() {
			    	// get path name and execute sections.toggle() to show section
			    	var hashName = this.path;
			    	routes.toggle(hashName);

			    	// execute functions from this section
			    	contactSection.form();
			    }
			    
			});	
		};

		var toggle = function(hashName) { 
	
			// get the active section by var hashName
			var activeSection = document.getElementById(hashName);
			var allSections = document.querySelectorAll('.nav-section');

			// get the active navItems by var hashName
			var activeNavItem = document.querySelector('.header__nav-item > a[href="' + '#' + hashName + '"]');
			var allNavItems = document.querySelectorAll('.header__nav-item > a');

			// remove class active for all sections
			for (var i = 0; i < allSections.length; i++) {
				  allSections[i].classList.remove('active');
			};

			// toggle class active for the active section
			activeSection.classList.toggle('active');

			// remove class active for all navItems
			for (var i = 0; i < allNavItems.length; i++) {
				  allNavItems[i].classList.remove('active');
			};

			// toggle class active for the active navItem
			activeNavItem.classList.toggle('active');
		};

		return {
			init,
			toggle
	}
})();
