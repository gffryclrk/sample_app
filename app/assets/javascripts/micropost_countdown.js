function updateCountdown() {
	var remaining = 140 - jQuery('#micropost_content').val().length;
	var characters = remaining == 1 ? ' character' : ' characters';
	jQuery('#micropost-countdown').text(remaining + characters + ' remaining');
}

$(document).ready(function(){
	// var characters = $('#micropost_content');
	updateCountdown();
	$('#micropost_content').change(updateCountdown);
	$('#micropost_content').keyup(updateCountdown);
});