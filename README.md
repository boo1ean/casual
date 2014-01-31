## WARNING: MODULE IS UNDER CONSTRUCTION

## Neat fake data generator [![Build Status](https://travis-ci.org/boo1ean/casual.png?branch=master)](https://travis-ci.org/boo1ean/casual)

Better [faker](https://github.com/Marak/Faker.js) api.

## Installation

    $ npm install casual

## Usage

```javascript
var casual = require('casual');

// Generate random sentence
var sentence = casual.sentence;

// Generate random city name
var city = casual.city;

// Define custom generator
casual.define('point', function() {
	return {
		x: Math.random(),
		y: Math.random()
	};
});

// Generate random point
var point = casual.point;

// And so on..
```

Casual uses javascript properties for common generators so you don't need to use function call operator

## Available generators

```javascript
casual.name              // Miracle.Stoltenberg
casual.firstname         // Willard
casual.lastname          // Breitenberg
casual.domain            // avery.com
casual.sentence          // iusto numquam voluptates sapiente ut hic nostrum modi
casual.title             // et possimus rem quibusdam quod repellat magni sed autem
casual.email             // Morris_Flatley@norberto.com
casual.city              // Marksville
casual.text              // adipisci iste id suscipit amet laudantium eum at tenetur impedit...
casual.password          // laboriosam quia sit dolorem doloribus et inventore possimus aut
casual.description       // doloribus non velit dolore aliquid omnis err...
casual.short_description // doloremque omnis blanditiis officia maxime
casual.zip               // 63235
casual.street            // Monahan Tunnel
casual.address           // 618 Huels Dam Suite 859
casual.address1          // 85818 Ondricka Rest
casual.address2          // Suite 086
casual.state             // Connecticut
casual.latitude          // 70.0007
casual.longitude         // 149.6702
casual.lat               // 20.2150
casual.lng               // 53.6056
casual.long              // -65.9813
casual.ip                // 39.68.84.100
casual.company_name      // Wisozk, Kshlerin and Weber
casual.integer()         // 54
casual.double()          // 23.918293
casual.country           // Northern Ireland
```

## Custom generators

```javascript
casual.define('user', function() {
	return {
		email: casual.email,
		firstname: casual.firstname,
		lastname: casual.lastname,
		password: casual.password
	};
});

// Generate object with randomly generated fields
var user = casual.user;
```

If you want to pass some params to your generator:

```javascript
casual.define('profile', function(type) {
	return {
		title: casual.title,
		description: casual.description,
		type: type || 'private'
	};
});

// Generate object with random data
var profile = casual.profile('public');
```

NOTE: if getter function has non-empty arguments list then generator should be called as function `casual.profile('public')`,
otherwise it should be accessed as property `casual.profile`.

# License

The MIT License (MIT)
Copyright (c) 2014 Egor Gumenyuk <boo1ean0807@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.
