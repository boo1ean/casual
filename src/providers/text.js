var faker = require('Faker');
module.exports = {
	title: function() {
		return faker.random.catch_phrase_descriptor();
	},

	sentence: function() {
		return faker.Lorem.sentence();
	},

	text: function() {
		return faker.Lorem.paragraphs();
	},

	description: function() {
		return faker.Lorem.paragraphs();
	},

	short_description: function() {
		return faker.Lorem.sentence();
	},

	string: function() {
		return faker.Lorem.sentence();
	}
};
