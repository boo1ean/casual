var casual = {};
var define = casual.define = function(name, generator) {
	if (typeof generator != 'function') {
		throw new Error('Casual generator must be defined by function');
	}

	if (generator.length) {
		casual[name] = generator;
	} else {
		casual.__defineGetter__(name, generator);
	}
};

casual.random_element = function(array) {
	var index = casual.integer(0, array.length);
	return array[index];
};

// Text
var text = require('./providers/text');
define('title', text.title);
define('sentence', text.sentence);
define('text', text.text);
define('description', text.description);
define('short_description', text.short_description);
define('string', text.string);

// User-related

define('name', require('./generators/name'));
define('email', require('./generators/email'));
define('firstname', require('./generators/firstname'));
define('lastname', require('./generators/lastname'));
define('password', require('./generators/password'));
define('phone', require('./generators/phone'));

// Address
var address = require('./providers/address');
define('country', address.country);
define('city', address.city);
define('zip', address.zip);
define('street', address.street);
define('address', address.address);
define('address1', address.address1);
define('address2', address.address2);
define('state', address.state);
define('latitude', address.latitude);
define('longitude', address.longitude);
define('lat', address.latitude);
define('lng', address.longitude);
define('long', address.longitude);

// Stuff
define('domain', require('./generators/domain'));
define('ip', require('./generators/ip'));
define('company_name', require('./generators/company_name'));
define('integer', require('./generators/integer'));
define('double', require('./generators/double'))

module.exports = casual;
