var currentCountry;

function openToCountry(country){
	if(currentState == "countryMap"){
		pageTransition("countryPage");
		currentCountry = country.properties.name;
		console.log('opening ' + currentCountry);
		geojson.eachLayer(function (layer) {
	      if (layer.feature.properties.name === currentCountry) {
	        // Zoom to that layer.
	        map.fitBounds(layer.getBounds());
	      }
	    });
	}
}