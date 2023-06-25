var provider = {
  provinces: [
    "Alberta",
    "Colombie-Britannique",
    "Manitoba",
    "Nouveau-Brunswick",
    "Nouvelle-Écosse",
    "Ontario",
    "Québec",
    "Saskatchewan",
    "Terre-Neuve-et-Labrador",
    "Île-du-Prince-Édouard",
    "Nunavut",
    "Les Territoires du Nord-Ouest",
    "Yukon",
  ],
  province_abbr: [
    "TNL",
    "IPE",
    "NÉ",
    "NB",
    "QC",
    "ONT",
    "MAN",
    "SASK",
    "ALB",
    "CB",
    "YN",
    "TNO",
    "NT",
  ],
  postal_code_format: ["X#X-#X#", "X#X#X#", "X#X #X#"],
  capital_cities: [
    "Victoria",
    "Edmonton",
    "Regina",
    "Winnipeg",
    "Toronto",
    "Québec",
    "Saint-Jean de Terre-Neuve",
    "Fredericton",
    "Halifax",
    "Charlottetown",
    "Iqaluit",
    "Yellowknife",
    "Whitehorse",
  ],
  province: function () {
    return this.random_element(this.provinces);
  },

  province_abbr: function () {
    return this.random_element(this.province_abbr);
  },

  //this isn't guaranteed to produce actually valid postal codes, as most letters unused in postal codes
  postal_code: function () {
    return this.numerify(
      this.letterify(this.random_element(this.postal_code_format))
    ).toUpperCase();
  },
  //pass a province to this function to return it's capital city
  capital_city: function (prov) {
    if (prov) {
      var idx = this.provinces.indexOf(prov);
      if (idx === -1) throw new Error("province not found");
      return this.capital_cities[idx];
    }
    return this.random_element(this.capital_cities);
  },
};

module.exports = provider;
