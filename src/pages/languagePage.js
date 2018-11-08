function openLanguagePage(event){
	var lang = event.target.innerHTML;
	languageName.innerHTML = lang;
	languageUi.style.width = '730px';
	languageUi.style.opacity = 1;
	backToCountryPage.style.opacity = 1;
	languageName.style.opacity = 1;
	languageUi.style.pointerEvents = 'auto';
	slideCloseCountryPage();
}

function closeLanguagePage(){
	languageUi.style.width = '0px';
	backToCountryPage.style.opacity = 0;
	languageName.style.opacity = 0;
	languageUi.style.opacity = 0;
	languageUi.style.pointerEvents = 'none';
	openCountryPage();
}