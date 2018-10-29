
function openToCountry(country){
    if(this.currentState == "countryMap"){
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
    }
}
