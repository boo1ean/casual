module.exports = function() {
	var faker = require('Faker');
	return faker.Address.streetAddress()
	+ '\n' + faker.Address.secondaryAddress();
};
