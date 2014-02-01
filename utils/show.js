var table = require('text-table');

var provider = process.argv.pop();
var provider = require('../src/providers/' + provider);

var result = [];
for (var generator in provider) {
	result.push([
		generator,
		typeof provider[generator] === 'function' ? provider[generator]() : provider.generator()
	]);
};

console.log(table(result));
