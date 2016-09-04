'use strict'

var contactSection = (function() {

	var form = function() {
		
		var form = document.getElementById('contact__form');
		var inputs = document.querySelectorAll('#contact__form .container .required-input');
		var generalErrorMessage = document.querySelector('.contact__form-error-message');

		form.addEventListener('submit', function(e) {
			
			//check for every input if it is empty and show / hide error message's / checks
			inputs.forEach(function (input) {
				var checkIcon = document.getElementById(input.id + '-check-icon');
				var errorMessage = document.getElementById(input.id + '-error-message');

				if(input.value == ""){
					// prevent form from submitting
					e.preventDefault();
					
					errorMessage.classList.add('active');
					checkIcon.classList.remove('active');
					generalErrorMessage.classList.add('active');

					
				} else {
					
					errorMessage.classList.remove('active');
					checkIcon.classList.add('active');
					generalErrorMessage.classList.remove('active');
					
				}
				
			});
		});
	};

return {
	form
}
})();