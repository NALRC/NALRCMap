var currentLanguage;

function openLanguagePage(event){
	currentLanguage = event.target.innerHTML;
	languageName.innerHTML = currentLanguage;
	languageUi.style.width = '730px';
	languageUi.style.opacity = 1;
	backToCountryPage.style.opacity = 1;
	languageName.style.opacity = 1;
	languageUi.style.pointerEvents = 'auto';
	var layers = [];
	geojson.eachLayer(function (layer) {
		var layerCountry = layer.feature.properties.name;
    	if (languageData.languages[currentLanguage].countries.includes(layerCountry)) {
    		layers.push(layer);
        	// Zoom to that layer.
    		//map.flyToBounds(layer.getBounds());
    	}

    });
    var featureGroup = L.featureGroup(layers);
    //console.log(featureGroup, featureGroup.getBounds())
    map.flyToBounds(featureGroup.getBounds());
	slideCloseCountryPage();
	pageTransition("languagePage");
	brochureButton.onclick = function(){window.open('https://nalrc.indiana.edu/doc/brochures/'+currentLanguage.toLowerCase()+'.pdf')};
}

function closeLanguagePage(){
	languageUi.style.width = '0px';
	backToCountryPage.style.opacity = 0;
	languageName.style.opacity = 0;
	languageUi.style.opacity = 0;
	languageUi.style.pointerEvents = 'none';
	openCountryPage();
}