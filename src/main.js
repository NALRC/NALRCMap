

var currentState = "countryMap";
var mainMapCoordinates = L.point(5, 19.5085);
var map = L.map('map', {zoomControl: false}).setView([mainMapCoordinates.x,mainMapCoordinates.y], 3);
var geojson;
geojson = L.geoJson(countryData, {
    onEachFeature: onEachFeature,
    style: style
}).addTo(map);

initializeLayerStates();
map.on('click', onMapClick);


//geojson mouse events
function mouseEnterCountry(e, feature){
    //console.log("entered " + e.target.feature.properties.name)
    e.target.feature.properties.isMouseOver = true;
    geojson.resetStyle(e.target);
}

function mouseExitCountry(e, feature){
    //console.log("exited " + e.target.feature.properties.name)
    e.target.feature.properties.isMouseOver = false;
    geojson.resetStyle(e.target);
}

function clickCountry(e, feature) {
    openToCountry(e.target.feature);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: mouseEnterCountry,
        mouseout: mouseExitCountry,
        click: clickCountry
    });
}

//map click events
function onMapClick(e) {
    //console.log("onmapclick " , this.currentState)
    if(currentState == "countryPage"){
        openCountryMap();
    }
}

//flow
function pageTransition(destination){
    this.currentState = "transition";
    
    setTimeout(() => {
        this.currentState = destination;
        
        resetStyles();
        //console.log(" transitionfunction " + currentState)
    }, 10);
}

//leaflet map style
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.streets',
//     accessToken: 'pk.eyJ1IjoicGpzdGVmYW4iLCJhIjoiY2puZ2JlZTlhMDFlNzNvbzAwNmRwNDhlOCJ9.ZYsixdWrsUwZ9wwYifvdgQ'
// }).addTo(map);

var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
}).addTo(map);

//disable standard map interactivity
map.touchZoom.disable();
map.dragging.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.doubleClickZoom.disable();
map.keyboard.disable();




