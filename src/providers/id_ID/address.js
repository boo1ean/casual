var provider = {
	states: [
		'Aceh', 'Sumatera Utara', 'Sumatera Barat', 'Jambi', 'Bangka Belitung',
		'Riau', 'Kepulauan Riau', 'Bengkulu', 'Sumatera Selatan', 'Lampung', 'Banten',
		'DKI Jakarta', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Nusa Tenggara Timur',
		'DI Yogyakarta', 'Bali', 'Nusa Tenggara Barat', 'Kalimantan Barat', 'Kalimantan Tengah',
		'Kalimantan Selatan', 'Kalimantan Timur', 'Kalimantan Utara', 'Sulawesi Selatan',
		'Sulawesi Utara', 'Gorontalo', 'Sulawesi Tengah', 'Sulawesi Barat', 'Sulawesi Tenggara',
		'Maluku', 'Maluku Utara', 'Papua Barat', 'Papua'
	],

	state_abbrs: [
		'Aceh', 'SumUt', 'SumBar', 'Jambi', 'BaBel',
		'Riau', 'KepR', 'Bengkulu', 'SumSel', 'Lampung', 'Banten',
		'DKI', 'JaBar', 'JaTeng', 'JaTim', 'NTT',
		'DIY', 'Bali', 'NTB', 'KalBar', 'KalTeng',
		'KalSel', 'KalTim', 'KalUt', 'SulSel',
		'SulUt', 'Gorontalo', 'SulTeng','SulBar', 'SulTra',
		'Maluku', 'MalUt', 'PapBar', 'Papua'
	],

	state: function() {
		return this.random_element(this.states);
	},

	state_abbr: function() {
		return this.random_element(this.state_abbrs);
	}
};

module.exports = provider;
