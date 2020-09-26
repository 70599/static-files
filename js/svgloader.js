'use strict';

const svgLoader = (a) => {
	var	name = a.getAttribute('name'), ajax;

	try {
		ajax = new XMLHttpRequest();
		ajax.open('GET', 'https://cdn.jsdelivr.net/gh/70599/static-files/images/svg/'+name+'.svg', true);
		ajax.send();
		ajax.onload = () => {
			if (ajax.status >= 200 && ajax.status < 400) {
				return ajax.responseText;
			}
		}
	} catch (err) {
		console.log(err);
	}
}
