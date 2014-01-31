var faker = require('../');

describe('Faker API', function() {
	var test = function(name) {
		var first = faker[name];
		var second = faker[name];
		first.should.not.be.equal(second);
	};

	describe('Common generators', function() {
		it('Should work pretty well', function() {
			test('name');
			test('firstname');
			test('lastname');
			test('domain');
			test('sentence');
			test('title');
			test('email');
			test('city');
			test('text');
		});
	});
});
