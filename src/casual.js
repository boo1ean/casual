var helpers = require('./helpers');

var casual = helpers.extend({}, helpers);

casual.functions = function() {
	var adapter = {};

	Object.keys(this).forEach(function(name) {
		if (name[0] === '_') {
			adapter[name.slice(1)] = casual[name];
		}
	});

	return adapter;
};

casual.register_provider(require('./providers/text'));
casual.register_provider(require('./providers/person'));
casual.register_provider(require('./providers/address'));
casual.register_provider(require('./providers/internet'));
casual.register_provider(require('./providers/number'));
casual.register_provider(require('./providers/date'));
casual.register_provider(require('./providers/payment'));
casual.register_provider(require('./providers/misc'));
casual.register_provider(require('./providers/color'));

module.exports = casual;
