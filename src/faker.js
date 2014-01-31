var faker = {};
var define = faker.define = function(name, generator) {
	faker.__defineGetter__(name, generator);
};

define('name', require('./generators/name'));
define('firstname', require('./generators/firstname'));
define('lastname', require('./generators/lastname'));
define('email', require('./generators/email'));
define('domain', require('./generators/domain'));
define('title', require('./generators/sentence'));
define('sentence', require('./generators/sentence'));

module.exports = faker;
