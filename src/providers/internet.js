var provider = {
    domain_suffix: ['co.uk', 'com', 'us', 'net', 'ca', 'biz', 'info', 'name', 'io', 'org', 'biz', 'tv', 'me'],

	domain: function() {
		var domain_name = this.random_element([this.first_name, this.last_name]).toLowerCase();
		return domain_name + '.' + this.random_element(this.domain_suffix);
	},

	email: function() {
		return this.username.toLowerCase() + '@' + this.domain;
	},

	url: function() {
		return this.domain;
	},

	ip: function() {
		return [this.integer(0, 255), this.integer(0, 255), this.integer(0, 255), this.integer(0, 255)].join('.');
	}
};

module.exports = provider;
