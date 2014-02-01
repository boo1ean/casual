var random = require('./providers/number').integer;

var random_element = function(array) {
	var index = random(0, array.length);
	return array[index];
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
};

module.exports = {
	random_element: random_element,
	register_provider: register_provider,
	extend: extend,
	define: define
};
