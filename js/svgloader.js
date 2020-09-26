'use strict';

const svgLoader = (a) => {
	try {
		var name = a.getAttribute('name'),
		    ajax = new XMLHttpRequest(),
				icon;

		ajax.open('GET', 'https://cdn.jsdelivr.net/gh/70599/static-files/images/svg/'+name+'.svg', true);
		ajax.send();
		ajax.onload = () => {
			if (ajax.status >= 200 && ajax.status < 400) {
				icon = ajax.responseText;
			}
		}
	} catch (err) {
		console.log(err);
	}

	console.log(icon);
	return icon;
}
