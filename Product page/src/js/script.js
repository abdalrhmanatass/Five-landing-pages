$(document).ready(function() {
	$('[data-toggle="collapse"]').click(function() {
		var up = $(this).find('.fas');
		var tOf = up.hasClass('fa-angle-up');
		if (tOf == true) {
			up.removeClass('fa-angle-up');
			up.addClass('fa-angle-down');
		} else {
			up.removeClass('fa-angle-down');
			up.addClass('fa-angle-up');
		}
	});
	//vidoe
});
var myVideo = document.getElementById('video1');

function playPause() {
	if (myVideo.paused) myVideo.play();
	else myVideo.pause();
}
