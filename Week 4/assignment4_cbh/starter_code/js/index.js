$(document).ready(function() {
	$('.readmore').click(appearText);
	
	function appearText(event) {
		
		event.preventDefault();
		$('#show-this-on-click').slideDown();
		$('.readmore').toggleClass('hide');
		$('.readless').toggleClass('hide');
	}

	$('.readless').click(disappearText);
	
	function disappearText(event) {
		
		event.preventDefault();
		$('#show-this-on-click').slideUp();
		$('.readmore').toggleClass('hide');
		$('.readless').toggleClass('hide');
	}

	$('.learnmore').click(appearLearn);

	function appearLearn(event) {

		event.preventDefault();
		$('#learnmoretext').slideDown();
		$('.learnmore').toggleClass('hide');
	}

});