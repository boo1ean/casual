var faker = require('Faker');
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
	}
}
