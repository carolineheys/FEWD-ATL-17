$(document).ready(function() {
	$('.learn_more').click(appearText);

	function appearText(event) {
		event.preventDefault();
		$('#education').slideDown();
		$('#experience').slideDown();
		$('.learn_more').toggleClass('hide');
	}
})