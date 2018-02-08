$(document).ready(function() {
	$('img').click(appearText);
	
	function appearText(event) {
		
		event.preventDefault();
		$('img').slideDown();
		$('nav').toggleClass('hide');
	}

});