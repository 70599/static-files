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

// Build Intersection Observer Threshold List
const ioThresholdList = (steps) => {
	var	thresholds	= [];

	for (var i = 1; i <= steps; i++) {
		var	ratio	= i / steps;
		thresholds.push(ratio);
	}

	thresholds.push(0);
	return thresholds;
}

// Generate svg QR code
const qrcodeSvg = (el) => {
	let	url	= el.getAttribute('href'),
			qr	= new QRCode({
				content: url,
				container: 'svg-viewbox',
				join: true,
				color: 'var(--color-qr,currentColor)',
				background: 'var(--color-qr-bg,transparent)',
				xmlDeclaration: false
			}),
			svg	= qr.svg(),
			div	= el.querySelector('.qr-wrap');

	div.innerHTML = svg;
}

// convert queryString to object
const parseQuery = (queryString) => {
	var query = {},
	    pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');

	for (var i = 0; i < pairs.length; i++) {
		var pair = pairs[i].split('=');
		query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
	}

	return query;
}

// define checkbox values
const toggleCheckBox = (el, valA, valB) => {
	document.querySelectorAll(el).forEach(check_box => {
		check_box.addEventListener('change', (event) => {
			check_box.value = check_box.checked ? valA : valB;
		});
	});
}

//	Insert favicon before link
const addFavicon = (e, sz = 48) => {
	document.querySelectorAll(e).forEach(a => {
		var	url	= a.getAttribute('href'),
				src	= 'https://www.google.com/s2/favicons?sz='+sz+'&domain='+url,
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

// Scroll to target
const scrollToTarget = (el, heightMenubar = 0, heightAdminbar = 0, offsetX = 0) => {
	var offsetY = heightMenubar + heightAdminbar;
	document.querySelectorAll(el).forEach(anchor => {
		anchor.addEventListener('click', (event) => {
			event.preventDefault();

			var	aim	= document.querySelector(anchor.getAttribute('href')).getBoundingClientRect();

			window.scrollBy({
				top: aim.top - offsetY,
				left: aim.left - offsetX,
				behavior: 'smooth'
			});
		});
	});
}

// get nth-child number
const getNth = (node) => {
	var nth = 1;
	while (node.previousSibling) {
		node = node.previousSibling;
		if (node && node.nodeType === 1) ++nth;
	}

	return nth;
}

// convert strings to hankaku
const toHanKaku = (input) => {
	return input.replace(/[！-～]/g,
		function (input) {
			return String.fromCharCode(input.charCodeAt(0)-0xFEE0);
		}
	);
}

// convert application/json --> application/x-www-form-urlencoded
const json_to_URLEncoded = (element, key, list) => {
	var list = list || [];
	if (typeof(element)=='object') {
		for (var idx in element) json_to_URLEncoded(element[idx],key?key+'['+idx+']':idx,list);
	} else {
		list.push(key+'='+encodeURIComponent(element));
	}
	return list.join('&');
}

// load css if needed
const loadCSS = (href, condition = true) => {
	if (! condition || document.querySelector('link[href="'+href+'"]')) return;

	var link = document.createElement('link');

	link.rel  = 'stylesheet';
	link.type = 'text/css';
	link.href = href;

	document.getElementsByTagName('head')[0].appendChild(link);
}