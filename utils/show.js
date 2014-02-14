var table = require('text-table'),
    casual = require('../');

var providers = [
	'address',
	'color',
	'date',
	'internet',
	'misc',
	'number',
	'payment',
	'person',
	'text'
];

var render_table = function(provider_name) {
	provider = require('../src/providers/' + provider_name);

	var result = [];
	for (var generator in provider) {
		if (generator === 'seed') {
			continue;
		}

		if (typeof provider[generator] !== 'function') {
			continue;
		}

		result.push([
			generator,
			casual['_' + generator]()
		]);
	};

	console.log('\nProvider:', provider_name, '\n');
	console.log(table(result));
};

var provider = process.argv.pop();

if (provider === __filename) {

	providers.forEach(render_table);

} else if (providers.indexOf(provider) === -1) {

	console.log('Please use correct provider name:', providers.join(', '));
	process.exit();

} else {

	render_table(provider);

}
