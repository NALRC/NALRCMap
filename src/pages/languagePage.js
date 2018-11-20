var currentLanguage;
var languagePageCountryButtons = [];
var languagePageBookButtons = [];

function openLanguagePage(event){
	currentLanguage = event.target.innerHTML;
	console.log("opening " + currentLanguage)
	languageName.innerHTML = currentLanguage;
	languageUi.style.width = '730px';
	languageUi.style.opacity = 1;
	languageName.style.opacity = 1;
	languageUi.style.pointerEvents = 'auto';
	var layers = [];
	geojson.eachLayer(function (layer) {
		var layerCountry = layer.feature.properties.name_long;
    	if (languageData.languages[currentLanguage].countries.includes(layerCountry)) {
    		layers.push(layer);
    	}

    });
    var featureGroup = L.featureGroup(layers);
    map.flyToBounds(featureGroup.getBounds());
	slideCloseCountryPage();
	pageTransition("languagePage");
	createBookButtons();
	createButtons(languagePageCountryButtons, 'languagePageCountryButton', languageData.languages[currentLanguage].countries, languageUi, 80, 30, languageToCountry);
	brochureButton.onclick = function(){window.open('https://nalrc.indiana.edu/doc/brochures/'+currentLanguage.toLowerCase()+'.pdf')};
}

function languageToCountry(event){
	closeLanguagePage();
	openCountryPage(event);
}

function closeLanguagePage(){
	languageUi.style.width = '0px';
	languageName.style.opacity = 0;
	languageUi.style.opacity = 0;
	languageUi.style.pointerEvents = 'none';
	destroyButtons(languagePageCountryButtons);
	destroyButtons(languagePageBookButtons);
	languagePageCountryButtons = [];
	languagePageBookButtons = [];
}

function languageToList(){
	closeLanguagePage();
	openListPage('language');
}

function createBookButtons(){
	var books = languageData.books;
	var buttons = [];
	for(var b in books){
		if(books[b].languages.includes(currentLanguage)){
			buttons.push(b);
		}
	}
	if(buttons != []){
		createButtons(languagePageBookButtons, 'languagePageBookButton', buttons, languageUi, 80, 30, openBook);
	}
}

function openBook(event){
	var book = event.target.innerHTML;
	var link = languageData.books[book].url;
	window.open(link);
}
