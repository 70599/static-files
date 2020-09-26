'use strict';

const loadSVG = (a) => {
	var	iconName	= a.getAttribute('name'),
			icon			= localStorage.getItem(iconName);

	if (icon === null) {
		var	ajax	= new XMLHttpRequest();

		ajax.open('GET', '../svg'+iconName+'.svg', true);
		ajax.send();
		ajax.onload = () => {
			if (ajax.status >= 200 && ajax.status < 400) {
				icon	= ajax.responseText;
				localStorage.setItem(iconName, icon);
			}
		}
	}

	return icon;
}
