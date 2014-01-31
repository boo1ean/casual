var faker = {};
var define = faker.define = function(name, generator) {
	faker.__defineGetter__(name, generator);
};

define('name', require('./generators/name'));
define('firstname', require('./generators/firstname'));
define('lastname', require('./generators/lastname'));
define('email', require('./generators/lastname'));
define('domain', require('./generators/lastname'));
define('url', require('./generators/url'));
define('text', require('./generators/text'));
define('title', require('./generators/title'));
define('description', require('./generators/title'));
define('string', require('./generators/string'));

module.exports = faker;
