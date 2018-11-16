//geojson mouse events
function mouseEnterCountry(e, feature){
    //console.log("entered " + e.target.feature.properties.name)
    if(currentState == "countryMap"){
        e.target.feature.properties.isMouseOver = true;
        geojson.resetStyle(e.target);
        setText(currentCountryNameText, e.target.feature.properties.name_long);
        setText(currentCountryLanguagesText, formatLanguagesList(e.target.feature.properties.languages));
    }
}

function formatLanguagesList(list){
    var langList = "";
    for(var l in list){
        langList += list[l] + ',  ';
    }
    return langList.slice(0,langList.length - 3);
}

function mouseExitCountry(e, feature){
    //console.log("exited " + e.target.feature.properties.name)
    if(currentState == "countryMap"){
        e.target.feature.properties.isMouseOver = false;
        geojson.resetStyle(e.target);
        setText(currentCountryNameText, "");
        setText(currentCountryLanguagesText, "");
    }
}

function clickCountry(e, feature) {
    openToCountryFromMap(e.target.feature);
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
        var props = geo.feature.properties;
        props.isMouseOver = false;
        props.isSelected = false;
        props.languages = [];
        countryList.push(props.name_long);
    });
}

function resetLayerStates(){
    geojson.eachLayer((geo) =>{
        var props = geo.feature.properties;
        props.isMouseOver = false;
        props.isSelected = false;
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
    var name = feature.properties.name_long;
    switch(currentState){
        case "countryMap":
            color = feature.properties.isMouseOver ? '#a9c9fc' : '#ffec63';
            break;
        case "countryPage":
            color = name == currentCountry ? '#a9c9fc' : '#b5b5b5';
            break;
        case "languagePage":
            color = languageData.languages[currentLanguage].countries.includes(name) ? '#0c00ff' : '#b5b5b5';
            break;
        case "list":
            color = name == listMouseOverName ? '#db2e64' : '#ffffff';
            break;
    }
    return color;
}

function resetGeoStyles(){
    geojson.eachLayer((geo) =>{
        geojson.resetStyle(geo);
    });
}

