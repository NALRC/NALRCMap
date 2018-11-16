
var listButtons = [];
var listMouseOverName = "";

function openListPage(){
	pageTransition("list");
	map.flyTo([mainMapCoordinates.x,20], 3.3);
	listUi.style.opacity = .8;
	listUi.style.pointerEvents = 'all';
	countryList.sort();
	createButtonRows(listButtons, 'listButton', countryList, listUi, 80, 24, 6, 230, 17, closeListTo);
	for(b in listButtons){
		listButtons[b].onmouseenter = listButtonMouseOver;
		listButtons[b].onmouseleave = listButtonMouseExit;
	}
}

function closeListPage(){
	listUi.style.opacity = 0;
	listUi.style.pointerEvents = 'none';
	listMouseOverName = "";
}

function closeListTo(event){
	var name = event.target.innerHTML;
	switch(name){
		case "x":
			openCountryMap();
			break;
		default:
			openCountryPage(event);
			break;
	}
	closeListPage();
}

function listButtonMouseOver(event){
	listMouseOverName = event.target.innerHTML;
	resetGeoStyles();
}

function listButtonMouseExit(){
	listMouseOverName = "";
	resetGeoStyles();
}