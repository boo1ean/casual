var faker = require('Faker');
module.exports = {
	domain: function() {
		return faker.Internet.domainName();
	},

	email: function() {
		return faker.Internet.email()
	},

	url: function() {
		return faker.Internet.domainName();
	},

	ip: function() {
		return faker.Internet.ip();
	}
}
