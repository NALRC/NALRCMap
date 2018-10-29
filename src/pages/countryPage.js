

function openToCountry(country){
    if(this.currentState == "countryMap"){
    	setText(currentCountryText, country.properties.name);
        pageTransition("countryPage");
        currentCountry = country.properties.name;
        country.properties.isSelected = true;
        console.log('opening ' + currentCountry);
        geojson.eachLayer(function (layer) {
          if (layer.feature.properties.name === currentCountry) {
            // Zoom to that layer.
            map.fitBounds(layer.getBounds());
          }
        });
        countryMapUi.style.width = '730px';
        countryMapUi.style.left = '35px';
    }
}


