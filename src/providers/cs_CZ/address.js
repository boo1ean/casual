var provider = {
  countries: ['Albánie', 'Andorra', 'Belgie', 'Bělorusko', 'Bosna a Hercegovina', 'Bulharsko', 'Černá Hora', 'Česká republika', 'Dánsko', 'Estonsko', 'Finsko', 'Francie', 'Chorvatsko', 'Irsko', 'Island', 'Itálie', 'Kosovo', 'Lichtenštejnsko', 'Litva', 'Lotyšsko', 'Lucembursko', 'Maďarsko', 'Makedonie', 'Malta', 'Moldavsko', 'Monako', 'Německo', 'Nizozemsko', 'Norsko', 'Podněstersko', 'Polsko', 'Portugalsko', 'Rakousko', 'Rumunsko', 'Rusko', 'Řecko', 'San Marino', 'Slovensko', 'Slovinsko', 'Spojené království', 'Srbsko', 'Španělsko', 'Švédsko', 'Švýcarsko', 'Ukrajina', 'Vatikán'],

  streets: ['Zahradní', 'Krátká', 'Nádražní', 'Školní', 'Polní', 'Luční', 'Komenského', 'Nová', 'Husova'],

  cities: ['Praha', 'Brno', 'Ostrava', 'Plzeň', 'Liberec', 'Olomouc', 'České Budějovice', 'Ústí nad Labem', 'Hradec Králové', 'Pardubice', 'Zlín', 'Havířov', 'Kladno', 'Most', 'Opava', 'Frýdek-Místek', 'Karviná', 'Jihlava', 'Teplice', 'Děčín', 'Karlovy Vary', 'Chomutov', 'Jablonec nad Nisou', 'Mladá Boleslav', 'Prostějov', 'Přerov'],

  states: ['Hlavní město Praha', 'Středočeský', 'Jihočeský', 'Plzeňský', 'Karlovarský', 'Ústecký', 'Liberecký', 'Královéhradecký', 'Pardubický', 'Olomoucký', 'Moravskoslezský', 'Jihomoravský', 'Zlínský', 'Kraj Vysočina'],

  state_abbrs: ['PHA','STČ','JHČ','PLK','KVK','ULK','LBK','HKK','PAK','OLK','MSK','JHM','ZLK','VYS'],

  city_prefixes: ['Horní', 'Dolní', 'Vysoká', 'Nová', 'Stará'],

  city_suffixes: ['náves', 'střed', 'hrad', 'město', 'nádraží'],

  street_suffixes: ['hlavní', 'vedlejší', 'polní'],

  zip_formats: ['### ##'],

  building_number_formats: ['##', '###'],

  street_formats: [
    '{{street}}'
  ],

  address1_formats: [
    '{{street}} {{address2}}'
  ],

  address2_formats: ['#', '##', '####/##', '##/##'],

  address_formats: [
    '{{address1}}\n{{zip}} {{city}}'
  ],

  city: function() {
    return this.populate_one_of(this.cities);
  },

  state: function() {
    return this.populate_one_of(this.states);
  },

  street: function() {
    return this.populate_one_of(this.streets);
  }

};

module.exports = provider;
