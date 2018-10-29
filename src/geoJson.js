//geojson mouse events
function mouseEnterCountry(e, feature){
    //console.log("entered " + e.target.feature.properties.name)
    e.target.feature.properties.isMouseOver = true;
    geojson.resetStyle(e.target);
    setText(currentCountry, e.target.feature.properties.name);
}

function mouseExitCountry(e, feature){
    //console.log("exited " + e.target.feature.properties.name)
    e.target.feature.properties.isMouseOver = false;
    geojson.resetStyle(e.target);
    setText(currentCountry, "");
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

function initializeLayerStates(){
    geojson.eachLayer((geo) =>{
        geo.feature.properties.isMouseOver = false;
        geo.feature.properties.isSelected = false;
    });
}

//rules for styling of geojson shapes
function style(feature) {
    return {
        fillColor: pickFillColor(feature),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function pickFillColor(feature){
    var color;
    //console.log(currentState)
    if(currentState == "countryMap"){
        color = feature.properties.isMouseOver ? '#a9c9fc' : '#ffec63';
    }if(currentState == "countryPage"){
        color = feature.properties.isSelected ? '#a9c9fc' : '#b5b5b5';
    }
    return color;
}

function resetStyles(){
    geojson.eachLayer((geo) =>{
        geojson.resetStyle(geo);
    });
}

