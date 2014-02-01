var faker = require('Faker'),
    random_element = require('../helpers').random_element;

var prefix = ['Mr.', 'Mrs.', 'Ms.', 'Miss', 'Dr.'],
    suffix = ['Jr.', 'Sr.', 'I', 'II', 'III', 'IV', 'V', 'MD', 'DDS', 'PhD', 'DVM'];

module.exports = {
	name: function() {
		return faker.Internet.userName();
	},

	username: function() {
		return faker.Internet.userName();
	},

	firstname: function() {
		return faker.Name.firstName();
	},

	lastname: function() {
		return faker.Name.lastName();
	},

	password: function() {
		return faker.PhoneNumber.phoneNumber() + faker.Name.lastName();
	},

	phone: function() {
		return faker.PhoneNumber.phoneNumber();
	},

	company_name: function() {
		return faker.Company.companyName();
	},

	name_prefix: function() {
		return random_element(prefix);
	},

	name_suffix: function() {
		return random_element(suffix);
	}
}
