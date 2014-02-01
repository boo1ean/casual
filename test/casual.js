var casual = require('../');

describe('API', function() {
	var max_times = 5;
	var test = function(name) {
		it('casual.' + name + ' should be ok', function(done) {
			if (typeof casual[name] === 'function') {
				var pivot = casual[name]();
			} else {
				var pivot = casual[name];
			}

			for (var i = 0; i < max_times; i++) {
				if (typeof casual[name] === 'function') {
					var result = casual[name]();
				} else {
					var result = casual[name];
				}

				if (result != pivot) {
					return done();
				}
			}

			done('Fail');
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
			test('state_abbr');
			test('latitude');
			test('longitude');
			test('lat');
			test('lng');
			test('long');
			test('country');
			test('building_number');
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
			test('first_name');
			test('last_name');
			test('full_name');
			test('password');
			test('name_prefix');
			test('name_suffix');
			test('company_name');
			test('catch_phrase');
		});

		describe('Number generator', function() {
			test('integer');
			test('double');
		});

		describe('Date provider', function() {
			test('unix_time');
			test('moment');
			test('date');
			test('time');
			test('century');
			test('am_pm');
			test('day_of_year');
			test('day_of_month');
			test('day_of_week');
			test('month_number');
			test('month_name');
			test('year');
			test('timezone');
		});

		describe('Payment provider', function() {
			test('card_type');
			test('card_number');
			test('card_exp');
			test('card_data');
		});

		describe('Misc provider', function() {
			test('country_code');
			test('language_code');
			test('locale');
			test('mime_type');
			test('file_extension');
		});
	});

	describe('Casual helpers', function() {
		describe('define', function() {
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

		describe('random_key', function() {
			it('Should return random object key', function(done) {
				var key = casual.random_key({ a: 1, b: 2});
				if (key === 'a' || key === 'b') {
					return done();
				}

				done('Fail');
			});
		});

		describe('random_value', function() {
			it('Should return random object value', function(done) {
				var key = casual.random_value({ a: 1, b: 2});
				if (key === 1 || key === 2) {
					return done();
				}

				done('Fail');
			});
		});

		describe('extend', function() {
			it('Should extend object', function() {
				var result = casual.extend({}, {a: 42});
				result.should.have.property('a', 42);
			});
		});

		describe('numerify', function() {
			it('Should replace every # in string with digit', function() {
				var format = '####';
				var numbers = casual.numerify(format);
				parseInt(numbers).should.be.within(0, 9999);
			});
		});

		describe('register_provider', function() {
			it('Should define generators', function() {
				casual.register_provider({
					really_custom_generator: function() { return 'custom' }
				});

				casual.really_custom_generator.should.be.equal('custom');
			});
		});
	});
});
