function openCountryMap(){
    map.flyTo([mainMapCoordinates.x,mainMapCoordinates.y], 3.3);
    resetLayerStates();
    pageTransition("countryMap");
    countryMapUi.style.opacity = 1;
    closePageToMap();
}

function closeCountryMap(){
	countryMapUi.style.opacity = 0;
}

function closeMapTo(){
	closeCountryMap();
	openListPage();
}
