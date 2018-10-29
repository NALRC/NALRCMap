function openCountryMap(){
    map.flyTo([mainMapCoordinates.x,mainMapCoordinates.y], 3.3);
    initializeLayerStates();
    pageTransition("countryMap");
    closePageToMap();
}

