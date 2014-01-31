var casual = require('../');

describe('API', function() {
	var test = function(name) {
		if (typeof casual[name] === 'function') {
			var first = casual[name]();
			var second = casual[name]();
		} else {
			var first = casual[name];
			var second = casual[name];
		}

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
			test('password');
			test('description');
			test('short_description');
			test('integer');
			test('zip');
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
	})
});
