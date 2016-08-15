var helpers = require('./helpers');

var build = function(providers) {
    var casual = helpers.extend({}, helpers);

    casual.functions = function () {
        var adapter = {};

        Object.keys(this).forEach(function (name) {
            if (name[0] === '_') {
                adapter[name.slice(1)] = casual[name];
            }
        });

        return adapter;
    };

    providers.forEach(function (provider) {
        casual.register_provider(provider)
    });

    return casual;
};

module.exports = build;
