
let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)
let app = new PIXI.Application({width: 800, height: 800});
document.body.appendChild(app.view);

var map = L.map('map').setView([5, 44.5085], 3);

var loader = new PIXI.loaders.Loader();
loader.add('marker', '../assets/images/logoN.jpg');
loader.load(function(loader, resources) {
    var markerTexture = resources.marker.texture;
    var markerLatLng = [5, 44.5085];
    var marker = new PIXI.Sprite(markerTexture);
    //marker.anchor.set(0.5, 1);

    var pixiContainer = new PIXI.Container();
    pixiContainer.addChild(marker);

    var firstDraw = true;
    var prevZoom;

    var pixiOverlay = L.pixiOverlay(function(utils) {
        var zoom = utils.getMap().getZoom();
        var container = utils.getContainer();
        var renderer = utils.getRenderer();
        var project = utils.latLngToLayerPoint;
        var scale = utils.getScale();

        if (firstDraw) {
            var markerCoords = project(markerLatLng);
            marker.x = markerCoords.x;
            marker.y = markerCoords.y;
        }

        if (firstDraw || prevZoom !== zoom) {
            marker.scale.set(1 / scale);
        }

        firstDraw = false;
        prevZoom = zoom;
        renderer.render(container);
    }, pixiContainer);
    pixiOverlay.addTo(map);
});


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicGpzdGVmYW4iLCJhIjoiY2puZ2JlZTlhMDFlNzNvbzAwNmRwNDhlOCJ9.ZYsixdWrsUwZ9wwYifvdgQ'
}).addTo(map);

var geojson;

function zoomToFeature(e, feature) {
    console.log(e.target.feature.properties.name);

}

function onEachFeature(feature, layer) {
    layer.on({
        click: zoomToFeature
    });
}

geojson = L.geoJson(countryData, {
    onEachFeature: onEachFeature
}).addTo(map);

// function onMapClick(e) {
//     console.log(e.target);
// }

//map.on('click', onMapClick);

