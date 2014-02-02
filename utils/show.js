var table = require('text-table');

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

		result.push([
			generator,
			typeof provider[generator] === 'function' ? provider[generator]() : provider.generator()
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
