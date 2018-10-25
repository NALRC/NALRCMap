var currentCountry;
var p;

function openToCountry(country){
	if(currentState == "countryMap"){
		p.pageTransition("countryPage");
		p.currentCountry = country.properties.name;
		console.log('opening ' + currentCountry);
		p.geojson.eachLayer(function (layer) {
	      if (layer.feature.properties.name === currentCountry) {
	        // Zoom to that layer.
	        p.map.fitBounds(layer.getBounds());
	      }
	    });
	}else{
		console.log(p.currentState)
	}
}

function countryPageInit(pixi){
	p = pixi;
	console.log(pixi)
}