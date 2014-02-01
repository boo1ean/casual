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

var person = require('./providers/person');
define('name', person.name);
define('username', person.username);
define('firstname', person.firstname);
define('lastname', person.lastname);
define('password', person.password);
define('phone', person.phone);
define('company_name', person.company_name);

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

var internet = require('./providers/internet');
define('domain', internet.domain)
define('email', internet.email)
define('url', internet.url)
define('ip', internet.ip)

var number = require('./providers/number');
define('integer', number.integer);
define('double', number.double);

module.exports = casual;
