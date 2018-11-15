var listButtons = [];

setTimeout(function(){
	countryList.sort();
	createButtonRows(listButtons, 'listButton', countryList, listUi, 80, 24, 6, 230, 17, function(){console.log("yay")});
}, 1000);

