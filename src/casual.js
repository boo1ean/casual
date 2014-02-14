var helpers = require('./helpers'),
    exists = require('fs').existsSync;

var casual = helpers.extend({}, helpers);

casual.functions = function() {
	var adapter = {};

	Object.keys(this).forEach(function(name) {
		if (name[0] === '_') {
			adapter[name.slice(1)] = casual[name];
		}
	});

	return adapter;
};

var safe_require = function(filename) {
	if (exists(filename + '.js')) {
		return require(filename);
	}
	return {};
};

var providers = [
	'address',
	'text',
	'internet',
	'person',
	'number',
	'date',
	'payment',
	'misc',
	'color'
];

casual.register_locale = function(locale) {
	casual.define(locale, function() {
		providers.forEach(function(provider) {
			casual.register_provider(helpers.extend(
				require('./providers/' + provider),
				safe_require(__dirname + '/providers/' + locale + '/' + provider)
			));
		});

		return casual;
	});
}

var locales = [
	'en_US'
];

locales.forEach(casual.register_locale);

// Default locale is en_US
module.exports = casual.en_US;
