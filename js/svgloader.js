'use strict';

const svgLoader = (a) => {
	try {
		var name = a.getAttribute('name'),
		    ajax = new XMLHttpRequest(),
				icon;

		ajax.open('GET', 'https://cdn.jsdelivr.net/gh/70599/static-files/images/svg/'+name+'.svg', true);
		ajax.send();
		ajax.onload = () => {
			console.log(ajax.status);
			icon = ajax.responseText;
			console.log(icon);
			return icon;
		}
	} catch (err) {
		console.log(err);
	}
}
