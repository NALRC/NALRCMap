
//the leaflet map
var mainMapCoordinates = L.point(5, 19.5085);
var map = L.map('map', {zoomControl: false}).setView([mainMapCoordinates.x,mainMapCoordinates.y], 3);

//using leaflet pixi overlay
var loader = new PIXI.loaders.Loader();
loader.add('marker', '../assets/images/logoN.jpg');
loader.load(function(loader, resources) {
    //load all images and videos here
    var markerTexture = resources.marker.texture;
    var markerLatLng = [5, 44.5085];
    var marker = new PIXI.Sprite(markerTexture);

    var pixiContainer = new PIXI.Container();
    pixiContainer.addChild(marker);

    var pixiOverlay = L.pixiOverlay(function(utils) {
        
        var currentState = 'countryMap';
        
        var w = window;
        var zoom = utils.getMap().getZoom();
        var container = utils.getContainer();
        var renderer = utils.getRenderer();
        var project = utils.latLngToLayerPoint;
        var scale = utils.getScale();
        var markerCoords = project(markerLatLng);
        

        firstDraw = false;
        prevZoom = zoom;
        //renderer.render(container);

        var geojson;

        function clickCountry(e, feature) {
            if(currentState == "countryMap"){
                openToCountry(e.target.feature);
            }
        }

        function onEachFeature(feature, layer) {
            layer.on({
                click: clickCountry
            });
        }

        geojson = L.geoJson(countryData, {
            onEachFeature: onEachFeature
        }).addTo(map);


        //set up click functionality
        function onMapClick(e) {
            if(currentState == "countryPage"){
                openCountryMap();
            }
        }

        map.on('click', onMapClick);

        function pageTransition(destination){
            currentState = "transition";
            setTimeout(() => {currentState = destination}, 20);
        }

        function openToCountry(country){
            pageTransition("countryPage");
            currentCountry = country.properties.name;
            console.log('opening ' + currentCountry);
            geojson.eachLayer(function (layer) {
              if (layer.feature.properties.name === currentCountry) {
                // Zoom to that layer.
                map.fitBounds(layer.getBounds());
              }
            });
        }

        function openCountryMap(){
            console.log("opening country map");
            map.setView([mainMapCoordinates.x,mainMapCoordinates.y], 3);
            pageTransition("countryMap");
        }
    }, pixiContainer);
    pixiOverlay.addTo(map);
});


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




