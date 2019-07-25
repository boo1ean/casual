var normalize = function(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

var provider = {
    phone_formats: [
        '60# ### ###',
        '70# ## ## ##',
        '+420 60# ### ###'
    ],

    full_name_formats: [
        '{{first_name_male}} {{last_name_male}}',
        '{{first_name_female}} {{last_name_female}}'
    ],

    name_formats: [
        '{{first_name_male}} {{last_name_male}}',
        '{{name_prefix_male}} {{first_name_male}} {{last_name_male}}',
        '{{name_prefix_male}} {{first_name_male}} {{last_name_male}}',
        '{{name_prefix}} {{first_name_male}} {{last_name_male}} {{name_suffix}}',
        '{{first_name_female}} {{last_name_female}}',
        '{{name_prefix_female}} {{first_name_female}} {{last_name_female}}',
        '{{name_prefix_female}} {{first_name_female}} {{last_name_female}}',
        '{{name_prefix}} {{first_name_female}} {{last_name_female}} {{name_suffix}}'
    ],

    male_name_formats: [
        '{{first_name_male}} {{last_name}}',
        '{{last_name}} {{first_name_male}}'
    ],

    female_name_formats: [
        '{{first_name_female}} {{last_name}}',
        '{{last_name}} {{first_name_female}}'
    ],

    username_formats: [
        '{{last_name}}.{{first_name}}',
        '{{first_name}}.{{last_name}}',
        '{{first_name}}_{{last_name}}',
        '{{last_name}}_{{first_name}}'
    ],

    prefixes: ['Ing.', 'Ing. arch.', 'Bc.', 'MUDr.', 'Mgr.', 'JUDr.', 'PhDr.', 'prof.'],

    prefix_males: ['pan'],

    prefix_females: ['paní', 'slečna'],

    suffix: ['mladší', 'starší', 'junior', 'Ph.D.', 'DiS.'],

    company_suffixes: ['s. r. o.', 's. r. o.', 's. r. o.', 'a. s.', 'spol. s r. o.', 'o. s.', 'o. p. s.', 'v. v. i.', 'a synové'],

    first_name_females: [
        'Štepánka', 'Lenka', 'Martina', 'Lucie', 'Anna', 'Monika', 'Petra', 'Jana', 'Eva', 'Kateřina', 'Alena', 'Pavla'
    ],

    first_name_males: [
        'Lukáš', 'Jiří', 'Petr', 'Pavel', 'Martin', 'Jan', 'Josef', 'Filip', 'Tomáš', 'Zdeněk', 'Václav', 'Michal'
    ],

    last_name_males: [
        'Novák', 'Dvořák', 'Svoboda', 'Novotný', 'Černý', 'Procházka', 'Kučera', 'Veselý', 'Horák', 'Krejčí', 'Němec', 'Pokorný', 'Říha', 'Pospíšil'
    ],

    last_name_females: [
        'Nováková', 'Dvořáková', 'Svobodová', 'Novotná', 'Černá', 'Procházková', 'Kučerová', 'Veselá', 'Horáková', 'Krejčí', 'Němcová', 'Pokorná', 'Říhová', 'Pospíšilová'
    ],


    first_name_male: function() {
        return this.random_element(this.first_name_males);
    },

    name_prefix: function() {
        return this.random_element(this.prefixes);
    },

    name_prefix_male: function() {
        return this.random_element(this.prefix_males);
    },

    name_prefix_female: function() {
        return this.random_element(this.prefix_females);
    },

    name_suffix: function() {
        return this.random_element(this.suffix);
    },

    first_name_female: function() {
        return this.random_element(this.first_name_females);
    },

    last_name_male: function() {
        return this.random_element(this.last_name_males);
    },

    last_name_female: function() {
        return this.random_element(this.last_name_females);
    },

    first_name: function() {
        if (this.integer % 2) {
            return this.first_name_male;
        }

        return this.first_name_female;
    },

    last_name: function() {
        if (this.integer % 2) {
            return this.last_name_male;
        }

        return this.last_name_female;
    },

    name: function() {
        return this.populate_one_of(this.name_formats);
    },

    username: function() {
        return normalize(this.populate_one_of(this.username_formats).toLowerCase());
    },
};

module.exports = provider;
