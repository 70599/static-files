var	body	= document.body;

/*
|-------------------------------------------------------------------------------
|	Custom function(s)
|-------------------------------------------------------------------------------
*/

// Append <style> tag to head
const addStyleTag = (styles) => {
	var css	= document.createElement('style');

	css.type = 'text/css';

	if (css.styleSheet) {
		css.styleSheet.cssText = styles;
	} else {
		css.appendChild(document.createTextNode(styles));
	}

	document.getElementsByTagName('head')[0].appendChild(css);
}

// Count unique
const countUnique = (target) => {
	return new Set(target).size;
}

// Setting multiple attributes for an element at once
const setAttributes = (el, attrs) => {
	for (var key in attrs) {
		el.setAttribute(key, attrs[key]);
	}
}

// Set multiple properties for an element at once
const setProperties = (el, props) => {
	for (var key in props) {
		el.style.setProperty(key, props[key]);
	}
}

/*
|-------------------------------------------------------------------------------
|	Action(s)
|-------------------------------------------------------------------------------
*/

//	Insert favicon before link
const addFavicon = (e) => {
	document.querySelectorAll(e).forEach(a => {
		var	url	= a.getAttribute('href'),
				src	= 'https://www.google.com/s2/favicons?domain='+url,
				img	= document.createElement('img');

		setAttributes(img, {
			'class': 'favicon lazy',
			'data-src': src,
			'loading': 'lazy',
			'alt': 'favicon'
		});

		a.prepend(img);
	});
}
