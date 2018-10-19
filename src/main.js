// let type = "WebGL"
// if(!PIXI.utils.isWebGLSupported()){
//   type = "canvas"
// }

// PIXI.utils.sayHello(type)
// let app = new PIXI.Application({width: 800, height: 800});
// document.body.appendChild(app.view);

var map = L.map('map').setView([51.505, -0.09], 13);
var pixiOverlay = L.pixiOverlay(function(utils) {
        // your drawing code here
    }, new PIXI.Container());
pixiOverlay.addTo(map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicGpzdGVmYW4iLCJhIjoiY2puZ2JlZTlhMDFlNzNvbzAwNmRwNDhlOCJ9.ZYsixdWrsUwZ9wwYifvdgQ'
}).addTo(map);