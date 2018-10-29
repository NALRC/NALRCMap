function openCountryMap(){
    map.setView([mainMapCoordinates.x,mainMapCoordinates.y], 3);
    initializeLayerStates();
    pageTransition("countryMap");
    countryMapUi.style.width = '265px';
    countryMapUi.style.left = '500px';
    backToCountryMap.style.opacity = 0;
}

