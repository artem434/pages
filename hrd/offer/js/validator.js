$(document).ready(function(){
	function validateField(inputElement, regex) {
		const inputValue = inputElement.val().trim();
		const isValidInput = regex.test(inputValue);
		if (isValidInput && inputValue !== '') {
			inputElement.removeClass('error').addClass('not_error');
		} else {
			inputElement.removeClass('not_error').addClass('error');
		}
	}

	function validateForm(){
		var inputName = $(this).attr('name');
		const nameRegex = /^.{2,40}$/; // Check if the name has at least 2 characters, and less than 40 characters
		const emailRegex = /^[\w.-]+@[a-zA-Z\d]+(?:\.[a-zA-Z\d]+)*$/; // Validate email using the email pattern
		const phoneRegex = /^\+?\d{10,}$/; // Check if the phone contains only digits, + and length more than 10 characters
		switch(inputName){
			case 'name':
				validateField($(this), nameRegex);
				break;
			case 'email':
				validateField($(this), emailRegex);
				break;
			case 'phone':
				validateField($(this), phoneRegex);
				break;
		}
	}

	$('form').on('input', 'input.error, .input.not_error', validateForm);
	$('input[name=name], input[name=email], input[name=phone]').unbind().blur(validateForm);
});