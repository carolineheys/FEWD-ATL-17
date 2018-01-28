//if a user types in "Austin" or "ATX" in the form and the update button is clicked, the background of the page becomes austin.jpg
//if a user types in "New York" or "NYC" in the form and the update button is clicked, the background of the page becomes nyc.jpg
//if a user types in "San Francisco" or "SF" in the form and the update button is clicked, the background of the page becomes sf.jpg
//if a user types in "Los Angeles" or "LAX" in the form and the update button is clicked, the background of the page becomes la.jpg
//if a user types in "Sydney" or "SYD" in the form and the update button is clicked, the backgrond of the page becomes sydney.jpg

$(document).ready(function() {
	//alert('hello world!');

	$('#form-pic').on('submit',function(e){

		e.preventDefault();

		var city = $('#city-type').val();
		city = parseInt(city);

		cityPic(city);

		$('#city-type').val('');

	});

	function cityPic(name) {
		if (name == austin || name == atx) {
			$('.container').css('background', '../images/austin.jpg');
		} else if (name == san francisco || name == sf) {
			$('.container').css('background', '../images/sf.jpg');
		} else if (name == new york || name == ny) {
			$('.container').css('background', '../images/nyc.jpg');
		} else if (name == los angeles || name == lax) {
			$('.container').css('background', '../images/la.jpg');
		} else{
			$('.container').css('background', '../images/sydney.jpg')
		}
	}

}