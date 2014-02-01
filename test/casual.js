var casual = require('../');

describe('API', function() {
	var test = function(name) {
		it('casual.' + name + ' should be ok', function() {
			if (typeof casual[name] === 'function') {
				var first = casual[name]();
				var second = casual[name]();
			} else {
				var first = casual[name];
				var second = casual[name];
			}

			first.should.not.be.equal(second);
		});
	};

	describe('Embedded generators', function() {
		describe('Address address provider', function() {
			test('zip');
			test('city');
			test('street');
			test('address');
			test('address1');
			test('address2');
			test('state');
			test('latitude');
			test('longitude');
			test('lat');
			test('lng');
			test('long');
			test('country');
		});

		describe('Text provider', function() {
			test('sentence');
			test('title');
			test('text');
			test('description');
			test('short_description');
			test('string');
		});

		describe('Internet provider', function() {
			test('ip');
			test('domain');
			test('url');
			test('email');
		});

		describe('Person provider', function() {
			test('name');
			test('username');
			test('firstname');
			test('lastname');
			test('password');
			test('company_name');
		});

		describe('Number generator', function() {
			test('integer');
			test('double');
		});
	});

	describe('Defining new generator', function() {
		it('Should create new casual property if getter doesn\'t have arguments', function() {
			casual.define('wow', function() {
				return 'wow wow';
			});

			casual.wow.should.be.equal('wow wow');
		});

		it('Should create new casual method if getter does have arguments', function() {
			casual.define('x2', function(x) {
				return x * 2;
			});

			casual.x2(3).should.be.equal(6);
		});
	});

	describe('random_element', function() {
		it('Should pick random element from array', function() {
			var array = [1,2,3,4,5,23,6,7,8,95,43];
			var first = casual.random_element(array);
			var second = casual.random_element(array);

			first.should.not.be.equal(second);
		});
	});
});
