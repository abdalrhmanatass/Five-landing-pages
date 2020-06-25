$(window).scroll(function() {
	if ($(this).scrollTop() >= 200) {
		$('#navBar').addClass('onTransprrent');
	} else {
		$('#navBar').removeClass('onTransprrent');
	}
});
$(document).ready(function() {
	$('a.scroll').click(function(event) {
		var hash = this.hash;
		$('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function() {});
	});

	/*$(".circle").circleProgress({
		startAngle: -Math.PI / 2,
		fill:"#0575e6"
	}).on("circle-animation-progress",function (event,progress,stepValue) {
		$(this).find('span').html(Math.round(stepValue * 100) + "%")
		
	})*/

	var wow = new WOW({
		mobile: false
	});
	wow.init();

	function checkVisible(element) {
		var vpH = $(window).height(), // إرتفاع شاشة المستخدم
			st = $(window).scrollTop(), // المكان الذي يتواجد به المستخدم بالشاشة حاليًا
			y = $(element).offset().top, // موضع العنصر بالشاشة
			elementHeight = $(element).height(); // إرتفاع العنصر

		return y < vpH + st && y > st - elementHeight;
	}

	var isLoaded = false;

	$(window).scroll(function() {
		if (!isLoaded) {
			if (checkVisible($('#statistics'))) {
				$('.circle')
					.circleProgress({
						startAngle: -Math.PI / 2,
						fill: '#0575e6'
					})
					.on('circle-animation-progress', function(event, progress, stepValue) {
						$(this).find('span').html(Math.round(stepValue * 100) + '%');
					});
				isLoaded = true;
			}
		}
	});
	$(function() {
		$('#commentForm').validate();
	});
});
