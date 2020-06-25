$(document).ready(function() {
	$(function() {
		var austDay = new Date();
		austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
		$('#defaultcountdown').countdown({ until: austDay, format: 'dHMS' });
		$('#year').text(austDay.getFullYear());
	});

	var wow = new WOW({
		mobile: false
	});
	wow.init();
	$('.form-control').blur(function() {
		var x = document.forms['myform']['email'].value;
		var atpos = x.indexOf('@');
		var dotpos = x.indexOf('.');
		if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
			$(this).parent().find('.alert-danger').fadeIn(200);
		} else {
			$(this).parent().find('.alert-success').fadeIn(200);
		}
	});

	$('.form-control').blur(function() {
		var x = document.forms['myform2']['email2'].value;
		var atpos = x.indexOf('@');
		var dotpos = x.indexOf('.');
		if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
			$(this).parent().find('.alert-danger').fadeIn(200);
		} else {
			$(this).parent().find('.alert-success').fadeIn(200);
		}
	});
});
