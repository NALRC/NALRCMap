var mapMode = "country";


function closeMapUi(){
	topUi.style.opacity = 0;
	topUi.style.pointerEvents = 'none';
}

function openMap(mode){
	try{
		if(mode != null){
			mapMode = mode;
		}
	}catch(error){}
	topUi.style.opacity = 1;
	topUi.style.pointerEvents = 'all';
	var long = mapMode == "country" ? mainMapCoordinates.y : -5;
	map.flyTo([mainMapCoordinates.x,long], mainMapZoom);
    resetLayerStates();
    pageTransition("countryMap");
    countryUi.style.opacity = mapMode == "country" ? 1 : 0;
    languageUi.style.opacity = mapMode == "language" ? 1 : 0;
    closeCountryPageToMap();
    closeLanguagePageToMap();
    languageUi.style.pointerEvents = mapMode == "language" ? 'all' : 'none';
    countryUi.style.pointerEvents = mapMode == "country" ? 'all' : 'none';
    changeMapButton.style.left = mapMode == "country" ? '500px' : '0px';
    var text = mapMode == "country" ? "Language" : "Country";
    changeMapButton.innerHTML = "Change to " + text + " Map";
}

function openTopUi(){
	topUi.style.height = '500px';
	for(b in topUiButtons){
		var style = topUiButtons[b].style;
		style.opacity = 0;
		style.pointerEvents = 'none';
	}
	slideCloseCountryPage();
	closeLanguagePage();
}

function closeTopUi(){
	topUi.style.height = '45px';
	for(b in topUiButtons){
		var style = topUiButtons[b].style;
		style.opacity = 1;
		style.pointerEvents = 'all';
	}
}

function switchMapMode(){
	mapMode = mapMode == "country" ? "language" : "country";
	openMap();
}