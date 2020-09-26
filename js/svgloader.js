'use strict';

const loadSVG = (a) => {
	var	name = a.getAttribute('name'),
			ajax, icon;

	try {
		ajax = new XMLHttpRequest();
		ajax.open('GET', '../svg'+name+'.svg', true);
		ajax.send();
		ajax.onload = () => {
			if (ajax.status >= 200 && ajax.status < 400) {
				icon	= ajax.responseText;
			}
		}
	} catch (err) {
		console.log(err);
	}

	return icon;
}
