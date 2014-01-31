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

define('name', require('./generators/name'));
define('firstname', require('./generators/firstname'));
define('lastname', require('./generators/lastname'));
define('email', require('./generators/email'));
define('domain', require('./generators/domain'));
define('title', require('./generators/sentence'));
define('sentence', require('./generators/sentence'));
define('city', require('./generators/city'));
define('text', require('./generators/text'));
define('description', require('./generators/text'));
define('short_description', require('./generators/sentence'));
define('password', require('./generators/password'));
define('integer', require('./generators/integer'));

module.exports = casual;
