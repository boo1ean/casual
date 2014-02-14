var provider = {
	top_level_domains: ['co.uk', 'com', 'us', 'net', 'ca', 'biz', 'info', 'name', 'io', 'org', 'biz', 'tv', 'me'],

	free_email_domains: ['gmail.com', 'yahoo.com', 'hotmail.com'],

	email_formats: [
		'{{username}}@{{domain}}',
		'{{username}}@{{free_email_domain}}'
	],

	url_formats: [
		'http://www.{{domain}}/',
		'http://{{domain}}/'
	],

	domain_formats: [
		'{{first_name}}.{{top_level_domain}}',
		'{{last_name}}.{{top_level_domain}}'
	],

	free_email_domain: function() {
		return this.random_element(this.free_email_domains);
	},

	top_level_domain: function() {
		return this.random_element(this.top_level_domains);
	},

	domain: function() {
		return this.populate_one_of(this.domain_formats);
	},

	email: function() {
		return this.populate_one_of(this.email_formats);
	},

	url: function() {
		return this.populate_one_of(this.url_formats);
	},

	ip: function() {
		return [this.integer(0, 255), this.integer(0, 255), this.integer(0, 255), this.integer(0, 255)].join('.');
	}
};

module.exports = provider;
