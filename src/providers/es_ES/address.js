var provider = {

    city_prefixes: [
        'As', 'Abia de', 'Aguilar de', 'Alba de', 'Alcalá de', 'Alcázar de', 'Alcudia de', 'Aldeanueva de', 'Almonacid de', 'Aldehuela de', 'Alfoz de', 'Alhama de', 'Arcos de', 'Arenas de', 'Arroyo de',
        'Baños de', 'Barbadillo del', 'Becerril de', 'Belmonte de', 'Bodadilla de', 'Bustillo de',
        'Cabañas de', 'Calzada de', 'Campillo de', 'Canillas de', 'Casar de', 'Casas de', 'Castro de', 'Castellar de', 'Castillejo de', 'Castrillo de', 'Corral de',
        'Dehesa de', ' El', 'Encinas de', 'Ferreras de', 'Fresno de', 'Fuentes de', 'Guijo de', 'Higuera de', 'Hondón de', 'Huerta de', 'La Mata de',
        'La Pobla de', 'Las Palmas de', 'Manzanal de', 'Moral de', 'Nava de', 'Pajares de', 'Palma de', 'Pozo de', 'Pozuelo de', 'Puebla de', 'Puente de', 'Quitanar de', 'Torre de', 'Torrejón de',
        'Val de', 'Valdepeñas de', 'Valle de', 'Valverde de', 'Vega de', 'Viana de', 'Vilar de', 'Villa de', 'Villafranca de', 'Villamayor de', 'Villanueva de', 'Villaseco de'
    ],

    city_suffixes: [
        'edra',
        'erra',
        'eger',
        'lla',
        'llo',
        'lid',
        'tillo',
        ' del Campo',
        ' del Ebro',
        ' del Monte',
        ' del Puente',
        ' del Rey',
        ' del Río',
        ' del Vega',
        ' de la Dehesa'
    ],

    cities: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Las Palmas de Gran Canaria', 'Vigo', 'Bilbao', 'Málaga', 'Alicante', 'Palma de Mallorca', 'Zaragoza', 'A Coruña', 'Pamplona o Iruña', 'Córdoba', 'Gijón', 'Valladolid', 'Elche', 'Almería', 'Oviedo', 'Murcia', 'Alcalá de Henares', 'Salamanca', 'Granada', 'Santa Cruz de Tenerife', 'Santander', 'San Sebastián o Donostia', 'Móstoles', 'Logroño', 'Albacete', 'Badajoz', 'Fuenlabrada', 'Santiago de Compostela', 'Vitoria', 'Huelva', 'Jerez de la Frontera', 'Marbella', 'Pontevedra', 'Barakaldo', 'Alcorcón', 'Castellón de la Plana', 'Ciudad Real', 'San Cristóbal de La Laguna', 'Getafe', 'Telde', 'Badalona', 'L\'Hospitalet de Llobregat', 'Leganés', 'Sabadell', 'Algeciras', 'Terrassa', 'Talavera de la Reina', 'Burgos', 'Parla', 'Cartagena', 'Tarragona', 'Mataró', 'Dos Hermanas', 'Ourense', 'León', 'Ferrol', 'Torrejón de Ardoz', 'Alcobendas', 'Reus', 'Collado Villalba', 'Lugo', 'Benidorm', 'Jaén', 'Cádiz', 'Lleida', 'Irún', 'Palencia', 'Toledo', 'El Puerto de Santa María', 'Gandia', 'Girona', 'Cáceres', 'Guadalajara', 'Santa Lucía de Tirajana', 'Avilés', 'Torrent', 'Fuengirola', 'Torrevieja', 'Getxo', 'Eivissa', 'Alcalá de Guadaíra', 'Benalmádena', 'San Vicente del Raspeig', 'Torrelavega', 'Roquetas de Mar', 'Coslada', 'San Fernando', 'Valdemoro', 'Aranjuez', 'Chiclana de la Frontera', 'Estepona', 'Zamora', 'Cuenca', 'San Sebastián de los Reyes', 'Santa Coloma de Gramenet', 'Plasencia'],

    provinces: ['A Coruña', 'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Baleares', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ceuta', 'Ciudad Real', 'Córdoba', 'Cuenca', 'Girona', 'Granada', 'Guadalajara', 'Guipúzcoa', 'Huelva', 'Huesca', 'Jaén', 'La Rioja', 'Las Palmas', 'León', 'Lleida', 'Lugo', 'Madrid', 'Málaga', 'Melilla', 'Murcia', 'Navarra', 'Ourense', 'Palencia', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'],

    communities: ['Andalucía', 'Aragón', 'Canarias', 'Cataluña', 'Cantabria', 'Castilla-La Mancha', 'Castilla y León', 'Ceuta', 'Comunidad de Madrid', 'Comunidad Foral de Navarra', 'Comunidad Valenciana', 'Extremadura', 'Galicia', 'Illes Balears', 'La Rioja', 'Melilla', 'País Vasco', 'Principado de Asturias', 'Región de Murcia'],

    countries: ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina",
        "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", " Bahréin", "Bangladesh", "Barbados", "Bélgica", "Belice", "Benín",
        "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso",
        "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Chad", "Chile", "China", "Chipre", "Colombia", "Comoras",
        "Congo", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica",
        "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos",
        "Estonia", "Etiopía", "Islas Feroe", "Filipinas", "Finlandia", "Fiji", "Francia", "Gabún", "Gambia", "Georgia", "Ghana",
        "Gibraltar", "Granada", "Grecia", "Groenlandia", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Ecuatorial",
        "Guinea-Bissau", "Guyana", "Haití", "Honduras", "Hong Kong", "Hungría", "India", "Indonesia", "Irán", "Iraq", "Irlanda",
        "Islandia", "Israel", "Italia", "Jamaica", "Japón", "Jersey", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati",
        "Kosovo", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo",
        "Macao", "Macedonia", "Madagascar", "Malasia", "Malaui", "Maldivas", "Mali", "Malta", "Islas Malvinas", "Isla de Man",
        "Islas Marianas del Norte", "Marruecos", "Islas Marshall", "Mauricio", "Mauritania", "Mayotte", "México", " Micronesia",
        "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Montserrat", "Mozambique", "Birmania", "Nagorno-Karabaj", "Namibia",
        "Isla de Navidad", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Niue", "Norfolk", "Noruega", "Nueva Caledonia",
        "Nueva Zelanda", "Omán", "Osetia del Sur", "Países Bajos", "Pakistán", "Palaos", "Territorios palestinos", "Panamá",
        "Papúa Nueva Guinea", "Paraguay", "Perú", "Islas Pitcairn, Henderson, Ducie, y Oeno", "Polinesia Francesa", "Polonia",
        "Portugal", "Puerto Rico", "Puntland", "Qatar", "Reino Unido", "República Centroafricana", "República Checa",
        "República Dominicana", "Ruanda", "Rumania", "Rusia", "Sahara Occidental", "San Pedro y Miquelón", "Islas Salomón",
        "Samoa", "Samoa Americana", "San Bartolomé", "San Cristóbal y Nieves", "San Marino", "San Martín",
        "San Vicente y las Granadinas", "Santa Helena", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles",
        "Sierra Leona", "Singapur", "Siria", "Somalia", "Somalilandia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Suecia",
        "Suiza", "Surinam", "Svalbard", "Tailandia", "República de China", "Tamil Eelam", "Tanzania", "Tayikistán", "Timor Oriental",
        "Togo", "Tokelau", "Tonga", "Transnistria", "Trinidad y Tobago", "Tristán da Cunha", "Túnez", "Islas Turcas y Caicos",
        "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Ciudad del Vaticano",
        "Venezuela", "Vietnam", "Islas Vírgenes Británicas", "Islas Vírgenes Estadounidenses", "Wallis y Futuna", "Yemen", "Yibuti",
        "Zambia", "Zimbabue"
    ],

    street_prefixes: ['Calle', 'Avenida', 'Barrio', 'Centro comercial', 'Camino', 'Carretera', 'Glorieta', 'Mercado', 'Poligono Industr.', 'Paseo', 'Plaza', 'Rambla', 'Ronda', 'Travesia', 'Urbanizacion', 'Via'],

    zip_formats: ['#####'],

    building_number_formats: ['##', '###', '####'],

    city_formats: [
        '{{city_name}}',
        '{{city_prefix}} {{first_name}}',
        '{{city_prefix}} {{first_name}}',
        '{{first_name}}{{city_suffix}}',
        '{{last_name}}{{city_suffix}}'
    ],

    street_formats: [
        '{{street_prefix}} {{first_name}}',
        '{{street_prefix}} {{last_name}}'
    ],

    address1_formats: [
        '{{street}} {{building_number}}',
        '{{street}} {{building_number}} {{address2}}',
    ],

    address2_formats: ['Portal #', 'Escalera #'],

    address_formats: [
        '{{address1}}\n{{city_name}}, {{province}} {{zip}}',
        '{{address1}}\n{{city}}, {{province}} {{zip}}',
    ],

    street_prefix: function () {
        return this.random_element(this.street_prefixes);
    },

    city_name: function () {
        return this.random_element(this.cities);
    },

    province: function () {
        return this.random_element(this.provinces);
    },

    community: function () {
        return this.random_element(this.communities);
    },

    zip: function () {
        return this.numerify(this.random_element(this.zip_formats));
    },

};











module.exports = provider;
