var faker = require('Faker');

module.exports = {
	country: function() {
		return faker.Address.ukCountry();
	},

	city: function() {
		return faker.Address.city();
	},

	zip: function() {
		return faker.Address.zipCode();
	},

	street: function() {
		return faker.Address.streetName();
	},

	address: function() {
		return faker.Address.streetAddress() + ' ' + faker.Address.secondaryAddress();
	},

	address1: function() {
		return faker.Address.streetAddress();
	},

	address2: function() {
		return faker.Address.secondaryAddress();
	},

	state: function() {
		return faker.Address.usState();
	},

	latitude: function() {
		return faker.Address.latitude();
	},

	longitude: function() {
		return faker.Address.longitude();
	},

	lat: function() {
		return faker.Address.latitude();
	},

	lng: function() {
		return faker.Address.longitude();
	},

	long: function() {
		return faker.Address.longitude();
	}
}
