function openToCountryFromMap(country){
    if(this.currentState == "countryMap"){
    	setText(currentCountryText, country.properties.name_long);
        pageTransition("countryPage");
        currentCountry = country.properties.name;
        country.properties.isSelected = true;
        console.log('opening ' + currentCountry);
        geojson.eachLayer(function (layer) {
          if (layer.feature.properties.name === currentCountry) {
            // Zoom to that layer.
            map.flyToBounds(layer.getBounds());
          }
        });
        setTimeout(openCountryPage, 1000);
        //openCountryPage();
    }
}

function openCountryPage(){
	var mapUiStyle = countryMapUi.style;
	mapUiStyle.opacity = 1;
	mapUiStyle.width = '730px';
    mapUiStyle.left = '35px';
    setTimeout(()=>{
    	backToCountryMap.style.opacity = 1;
    	toLanguage.style.opacity = 1;
    },300);
}

function slideCloseCountryPage(){
	var mapUiStyle = countryMapUi.style;
	mapUiStyle.opacity = 0;
	mapUiStyle.left = '765px';
	mapUiStyle.width = '0px';
}

function closePageToMap(){
	countryMapUi.style.width = '255px';
    countryMapUi.style.left = '510px';
	backToCountryMap.style.opacity = 0;
	toLanguage.style.opacity = 0;
}