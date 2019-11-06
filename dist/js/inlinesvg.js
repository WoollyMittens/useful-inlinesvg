/*
	Source:
	van Creij, Maurice (2019). "inlinesvg.js: Insert SVG images inline.", http://www.woollymittens.nl/.

	License:
	This work is licensed under a Creative Commons Attribution 3.0 Unported License.
*/

// establish the class
var inlineSvg = function (img, container) {
	container = container || img.parentNode;
	// if this is an SVG
	if (img.src && /.svg/.test(img.src)) {
	  // retrieve the SVG as XML
	  var routeXhr = new XMLHttpRequest();
	  routeXhr.addEventListener('load', function(evt) {
	    // replace the IMG tag with the SVG's DOM
	    var svg = evt.target.responseXML.getElementsByTagName('svg')[0];
	    container.removeChild(img);
	    container.appendChild(svg);
	    // start the animation script
	    globalConnectivity(jQuery);
	  });
	  routeXhr.open('GET', img.src, true);
	  routeXhr.send();
	}
};

// return as a require.js module
if (typeof define != 'undefined') define([], function () { return inlineSvg });
if (typeof module != 'undefined') module.exports = inlineSvg;
