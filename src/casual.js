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

define('domain', require('./generators/domain'));
define('title', require('./generators/sentence'));
define('sentence', require('./generators/sentence'));
define('text', require('./generators/text'));
define('description', require('./generators/text'));
define('short_description', require('./generators/sentence'));

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
define('ip', require('./generators/ip'));
define('company_name', require('./generators/company_name'));
define('integer', require('./generators/integer'));
define('double', require('./generators/double'))

module.exports = casual;
