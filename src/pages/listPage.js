
var listButtons = [];


function openListPage(){
	pageTransition("list");
	map.flyTo([mainMapCoordinates.x,20], 3.3);
	listUi.style.opacity = .8;
	listUi.style.pointerEvents = 'all';
	countryList.sort();
	createButtonRows(listButtons, 'listButton', countryList, listUi, 80, 24, 6, 230, 17, function(){console.log("yay")});
}

function closeListPage(){
	listUi.style.opacity = 0;
	listUi.style.pointerEvents = 'none';
}

function closeListTo(){
	closeListPage();
	openCountryMap();
}