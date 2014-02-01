var faker = require('Faker'),
    random_element = require('../helpers').random_element;

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'NewHampshire', 'NewJersey', 'NewMexico', 'NewYork', 'NorthCarolina', 'NorthDakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'RhodeIsland', 'SouthCarolina', 'SouthDakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'WestVirginia', 'Wisconsin', 'Wyoming'];

var state_abbrs = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];

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
		return random_element(states);
	},

	state_abbr: function() {
		return random_element(state_abbrs);
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
