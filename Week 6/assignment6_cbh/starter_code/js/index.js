//if NYC is selected, the background will turn to nyc.jpg
//if SF is selected, the background will turn to sf.jpg
//if LA is selected, the background will turn to  la.jpg
//if ATX is selected, the background will turn to austin.jpg
//if SYD is selected, the background will turn to sydney.jpg

$('#city-type').click(function(event) {
	var city = ["NYC", "SF", "LA", "ATX", "SYD"];
	var text = "";
	event.preventDefault();

	for (i = 0; i < city.length; i++) { 
		text += city[i] + "<br>";
	}
	document.getElementById("city-type").innerHTML = text;
});

function cityChosen(name) {
	if (name == nyc) {
		$('body').addClass('.nyc');
	}else if(name == sf) {
		$('body').addClass('.sf');
	}else if(name == la) {
		$('body').addClass('.la');
	}else if(name == atx) {
		$('body').addClass('.austin');
	}else {
		$('body').addClass('.sydney');
	}
}