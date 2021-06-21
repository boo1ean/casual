var provider = {

	color_names: [
		'ירוק זית',
		'קאמל',
		'צהוב בננה',
		'אפור כהה',
		'אפור בהיר',
		'ורוד כהה',
		'ורוד ביבי',
		'תכלת כהה',
		'תכלת ים',
		'סגול חציל',
		'סגול בהיר',
		'אפרסק',
		'פודרה',
		'ירוק דשא',
		'ירוק בהיר',
		'טורקיז כהה',
		'כחול ים',
		'ירוק תפוח',
		'אדום תפוח',
		'ייון',
		'אדום כהה',
		'סגול לילך',
		'ורוד בזוקה',
		'מוקה',
		'אדום אבטיח',
		'שחור מיושן',
		'ארד',
		'ניקל',
		'ברונזה',
		'ורוד פוקסיה',
		'קרם',
		'קרמל',
	],

	color_name: function() {
		return this.random_element(this.color_names);
	},

	rgb_hex: function() {
		return '#' + ('000000' + this.integer(0, 16777216).toString(16)).slice(-6);
	},

	rgb_array: function() {
		return [this.integer(0, 255), this.integer(0, 255), this.integer(0, 255)];
	}
};

module.exports = provider;
