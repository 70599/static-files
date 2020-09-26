'use strict';

const svgLoader = (a) => {
	var name = a.getAttribute('name'),
	    ajax = new XMLHttpRequest(),
			icon;

	ajax.open('GET', 'https://cdn.jsdelivr.net/gh/70599/static-files/images/svg/'+name+'.svg', true);
	ajax.send();
	ajax.onload = (e) => {
		icon = ajax.responseText;
		console.log(icon);
		return await icon;
	}
}
