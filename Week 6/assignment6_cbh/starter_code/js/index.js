//if NYC is selected, the background will turn to nyc.jpg
//if SF is selected, the background will turn to sf.jpg
//if LA is selected, the background will turn to  la.jpg
//if ATX is selected, the background will turn to austin.jpg
//if SYD is selected, the background will turn to sydney.jpg

	var cityArr = ["NYC", "SF", "LA", "ATX", "SYD"];

	$.each(cityArr, function(index, value){
		//console.log(value);

		$('select').append('<option>'+ value +'</option>')

	});