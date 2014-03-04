/** Replaces puredom's templating with TemplateEngine. */
require(['puredom', 'templateengine'], function(puredom, engine) {
	var orig = puredom.template;

	puredom.template = function(text, fields, allowI18n) {
		text = text.replace(/([^\\]?)\{?\{([a-z0-9A-Z\$_\.]+)(\|[^\}]*?)?\}\}?/gm, '$1{{$2$3}}');
		return engine.template(text, fields);
	};

	puredom.template.orig = orig;

	// Make string helpers usable from TemplateEngine's fields, like {{name|nl2br}}
	puredom.forEach(puredom.text, function(helper, name) {
		engine.helpers[name] = helper;
	});
});