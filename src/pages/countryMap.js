function openCountryMap(){
    map.setView([mainMapCoordinates.x,mainMapCoordinates.y], 3);
    initializeLayerStates();
    pageTransition("countryMap");
    closePageToMap();
}

