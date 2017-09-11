var Apps = {
	Init: function() {
		Apps.attachEventListeners();
	},

	attachEventListeners: function() {

		$(document).on('mouseover', 'header', function() {
			$(this).hide().delay(2000).fadeIn(3000);
		});

	}
}

window.addEventListener('load', Apps.Init);