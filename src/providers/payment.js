var helpers = require('../helpers'),
    date = require('./date'),
    person = require('./person');

var random_element = helpers.random_element,
    random_value = helpers.random_value,
    numerify = helpers.numerify;

var card_vendors = ['Visa', 'Visa', 'Visa', 'Visa', 'Visa', 'MasterCard', 'MasterCard', 'MasterCard', 'MasterCard', 'MasterCard', 'American Express', 'Discover Card'];

var card_params = {
	'Visa': [
		"4539############",
		"4556############",
		"4916############",
		"4532############",
		"4929############",
		"40240071########",
		"4485############",
		"4716############",
		"4###############"
	],

	'MasterCard': [
		"51##############",
		"52##############",
		"53##############",
		"54##############",
		"55##############"
	],

	'American Express': [
		"34#############",
		"37#############"
	],

	'Discover Card': [
		"6011############"
	]
};


var provider = {
	card_type: function() {
		return random_element(card_vendors);
	},

	card_number: function(vendor) {
		vendor = vendor || provider.card_type();
		var mask = random_element(card_params[vendor]);
		return numerify(mask);
	},

	card_exp: function() {
		return date.date('MM/YY');
	},

	card_data: function() {
		var type = provider.card_type();
		return {
			type: type,
			number: provider.card_number(type),
			exp: provider.card_exp(),
			holder_name: person.full_name()
		};
	}
};

module.exports = provider;
