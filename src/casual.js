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

define('country', require('./generators/country'));
define('city', require('./generators/city'));
define('zip', require('./generators/zip'));
define('street', require('./generators/street'));
define('address', require('./generators/address'));
define('address1', require('./generators/address1'));
define('address2', require('./generators/address2'));
define('state', require('./generators/state'));
define('latitude', require('./generators/latitude'));
define('longitude', require('./generators/longitude'));
define('lat', require('./generators/latitude'));
define('lng', require('./generators/longitude'));
define('long', require('./generators/longitude'));

// Stuff
define('ip', require('./generators/ip'));
define('company_name', require('./generators/company_name'));
define('integer', require('./generators/integer'));
define('double', require('./generators/double'))

module.exports = casual;
