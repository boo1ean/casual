var number = require('./providers/number');

var integer = number.integer,
    digit = number.digit;

var random_element = function(array) {
	var index = integer(0, array.length);
	return array[index];
};

var random_key = function(object) {
	var keys = Object.keys(object);
	return random_element(keys);
};

var random_value = function(object) {
	return object[random_key(object)];
};

var register_provider = function(provider) {
	for (var i in provider) {
		this.define(i, provider[i]);
	}
};

var extend = function(a, b) {
	for (var i in b) {
		a[i] = b[i];
	}

	return a;
};

var define = function(name, generator) {
	if (typeof generator != 'function') {
		throw new Error('Casual generator must be defined by function');
	}

	if (generator.length) {
		this[name] = generator;
	} else {
		this.__defineGetter__(name, generator);
	}

	this['_' + name] = generator;
};

var numerify = function(format) {
	return format.replace(/#/g, digit);
};

var join = function() {
	var tokens = Array.prototype.slice.apply(arguments);
	return tokens.filter(Boolean).join(' ');
};

module.exports = {
	random_element: random_element,
	random_value: random_value,
	random_key: random_key,
	register_provider: register_provider,
	extend: extend,
	define: define,
	numerify: numerify,
	join: join
};
