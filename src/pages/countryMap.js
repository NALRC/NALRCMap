var p;

function openCountryMap(){
	console.log("opening country map");
	p.map.setView([5, 44.5085], 3);
	p.pageTransition("countryMap");
}

function countryMapInit(pixi){
	p = pixi;
}

