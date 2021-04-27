var normalize = function(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

var provider = {
    free_email_domains: ['seznam.cz', 'centrum.cz', 'email.cz', 'gmail.com', 'volny.cz'],

    top_level_domains: ['cz', 'cz', 'cz', 'cz', 'sk', 'com'],

    domain: function() {
        return normalize(this.populate_one_of(this.domain_formats));
    },

    email: function() {
        return normalize(this.populate_one_of(this.email_formats).toLowerCase());
    },

    url: function() {
        return normalize(this.populate_one_of(this.url_formats).toLowerCase());
    }
};

module.exports = provider;
