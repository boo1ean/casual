var helpers = require('./helpers'),
	build = require('./build'),
    exists = require('fs').existsSync;

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

var casual = build([]);

casual.register_locale = function(locale) {
	casual.define(locale, function() {
		var casual = build([]);

		providers.forEach(function(provider) {
			casual.register_provider(helpers.extend(
				require('./providers/' + provider),
				safe_require(__dirname + '/providers/' + locale + '/' + provider)
			));
		});

		return casual;
	});
};

var locales = [
	'en_US',
	'ru_RU',
	'uk_UA',
	'nl_NL',
	'en_CA',
	'it_CH',
	'de_DE',
	'ar_SY'
];

locales.forEach(casual.register_locale);

// Default locale is en_US
module.exports = casual.en_US;
