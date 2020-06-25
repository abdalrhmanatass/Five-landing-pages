$(window).scroll(function() {
	if ($(this).scrollTop() >= 500) {
		$('#navBar').addClass('onTransparrent');
	} else {
		$('#navBar').removeClass('onTransparrent');
	}
});
$(document).ready(function() {
	$('a.scroll').on('click', function(event) {
		var hash = this.hash;
		$('html , body').animate({ scrollTop: $(hash).offset().top }, 800, function() {});
	});
	$('.timer').countTo();
	$(function () {
		$('#cmxForm').validate();
	})
});
