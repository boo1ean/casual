var helpers = require('../helpers')
    integer = require('./number').integer;

var random_element = helpers.random_element,
    join = helpers.join;

var words = [
	'alias', 'consequatur', 'aut', 'perferendis', 'sit', 'voluptatem',
	'accusantium', 'doloremque', 'aperiam', 'eaque','ipsa', 'quae', 'ab',
	'illo', 'inventore', 'veritatis', 'et', 'quasi', 'architecto',
	'beatae', 'vitae', 'dicta', 'sunt', 'explicabo', 'aspernatur', 'aut',
	'odit', 'aut', 'fugit', 'sed', 'quia', 'consequuntur', 'magni',
	'dolores', 'eos', 'qui', 'ratione', 'voluptatem', 'sequi', 'nesciunt',
	'neque', 'dolorem', 'ipsum', 'quia', 'dolor', 'sit', 'amet',
	'consectetur', 'adipisci', 'velit', 'sed', 'quia', 'non', 'numquam',
	'eius', 'modi', 'tempora', 'incidunt', 'ut', 'labore', 'et', 'dolore',
	'magnam', 'aliquam', 'quaerat', 'voluptatem', 'ut', 'enim', 'ad',
	'minima', 'veniam', 'quis', 'nostrum', 'exercitationem', 'ullam',
	'corporis', 'nemo', 'enim', 'ipsam', 'voluptatem', 'quia', 'voluptas',
	'sit', 'suscipit', 'laboriosam', 'nisi', 'ut', 'aliquid', 'ex', 'ea',
	'commodi', 'consequatur', 'quis', 'autem', 'vel', 'eum', 'iure',
	'reprehenderit', 'qui', 'in', 'ea', 'voluptate', 'velit', 'esse',
	'quam', 'nihil', 'molestiae', 'et', 'iusto', 'odio', 'dignissimos',
	'ducimus', 'qui', 'blanditiis', 'praesentium', 'laudantium', 'totam',
	'rem', 'voluptatum', 'deleniti', 'atque', 'corrupti', 'quos',
	'dolores', 'et', 'quas', 'molestias', 'excepturi', 'sint',
	'occaecati', 'cupiditate', 'non', 'provident', 'sed', 'ut',
	'perspiciatis', 'unde', 'omnis', 'iste', 'natus', 'error',
	'similique', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt',
	'mollitia', 'animi', 'id', 'est', 'laborum', 'et', 'dolorum', 'fuga',
	'et', 'harum', 'quidem', 'rerum', 'facilis', 'est', 'et', 'expedita',
	'distinctio', 'nam', 'libero', 'tempore', 'cum', 'soluta', 'nobis',
	'est', 'eligendi', 'optio', 'cumque', 'nihil', 'impedit', 'quo',
	'porro', 'quisquam', 'est', 'qui', 'minus', 'id', 'quod', 'maxime',
	'placeat', 'facere', 'possimus', 'omnis', 'voluptas', 'assumenda',
	'est', 'omnis', 'dolor', 'repellendus', 'temporibus', 'autem',
	'quibusdam', 'et', 'aut', 'consequatur', 'vel', 'illum', 'qui',
	'dolorem', 'eum', 'fugiat', 'quo', 'voluptas', 'nulla', 'pariatur',
	'at', 'vero', 'eos', 'et', 'accusamus', 'officiis', 'debitis', 'aut',
	'rerum', 'necessitatibus', 'saepe', 'eveniet', 'ut', 'et',
	'voluptates', 'repudiandae', 'sint', 'et', 'molestiae', 'non',
	'recusandae', 'itaque', 'earum', 'rerum', 'hic', 'tenetur', 'a',
	'sapiente', 'delectus', 'ut', 'aut', 'reiciendis', 'voluptatibus',
	'maiores', 'doloribus', 'asperiores', 'repellat'
];

var letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

var first_letter_up = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var provider = {
	title: function() {
		return first_letter_up(provider.words(integer(2, 3)));
	},

	sentence: function() {
		return first_letter_up(provider.words(integer(3, 10))) + '.';
	},

	text: function() {
		return provider.sentences(integer(3, 6));
	},

	description: function() {
		return provider.sentences(integer(2, 5));
	},

	short_description: function() {
		return provider.sentence();
	},

	string: function() {
		return provider.words();
	},

	sentences: function(n) {
		n = n || 3;

		var result = [];
		for (var i = 0; i < n; ++i) {
			result.push(provider.sentence());
		}

		return result.join(' ');
	},

	word: function() {
		return random_element(words);
	},

	words: function(n) {
		return provider.array_of_words(n).join(' ');
	},

	array_of_words: function(n) {
		n = n || 7;
		var result = [];

		for (var i = 0; i < n; ++i) {
			result.push(provider.word());
		}

		return result;
	},

	letter: function() {
		return random_element(letters);
	}
};

module.exports = provider;
