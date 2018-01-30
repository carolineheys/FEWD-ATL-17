// Refactor the following code to instead use the 'this' keyword

$('li').click(function() {
	var buttonColor = $(this).html();
	$('body').css("background-color", buttonColor);
})