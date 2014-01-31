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

// Generates random city name
var city = casual.city;

// And so on..
```

Casual uses javascript properties for common generators so you don't need to use function call operator

## List of available generators

Property generators: 

- name
- firstname
- lastname
- domain
- sentence
- title
- email
- city
- text

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
