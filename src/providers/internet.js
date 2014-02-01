var person = require('./person'),
    integer = require('./number').integer,
    helpers = require('../helpers');

var random_element = helpers.random_element;

var domain_suffix = ['co.uk', 'com', 'us', 'net', 'ca', 'biz', 'info', 'name', 'io', 'org', 'biz', 'tv', 'me'];

var provider = {
	domain: function() {
		var domain_name = random_element([person.first_name(), person.last_name()]).toLowerCase();
		return domain_name + '.' + random_element(domain_suffix);
	},

	email: function() {
		return person.username().toLowerCase() + '@' + provider.domain();
	},

	url: function() {
		return provider.domain();
	},

	ip: function() {
		return [integer(0, 255), integer(0, 255), integer(0, 255), integer(0, 255)].join('.');
	}
};

module.exports = provider;
