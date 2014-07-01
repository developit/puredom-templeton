/** Replaces puredom's templating with templeton. */
(function(factory) {
	if (typeof define==='function' && define.amd) {
		define(['puredom', 'templeton'], factory);
	}
	else if (typeof module==='object' && typeof require==='function') {
		module.exports = factory(require('puredom'), require('templeton'));
	}
	else {
		factory(window.puredom, window.templeton);
	}
}(function($, templeton) {
	var orig = $.template;

	$.template = function(text, fields, allowI18n) {
		text = text.replace(/([^\\]?)\{?\{([a-z0-9A-Z\$_\.]+)(\|[^\}]*?)?\}\}?/gm, '$1{{$2$3}}');
		return templeton.template(text, fields);
	};

	$.template.orig = orig;

	// Make string helpers usable from templeton's fields, like {{name|nl2br}}
	$.forEach($.text, function(helper, name) {
		templeton.helpers[name] = helper;
	});
}));