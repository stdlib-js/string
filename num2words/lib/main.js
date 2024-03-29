/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isfinite = require( '@stdlib/math/base/assert/is-finite' );
var format = require( './../../format' );
var int2wordsDE = require( './int2words_de.js' );
var int2wordsEN = require( './int2words_en.js' );
var validate = require( './validate.js' );
var decimals = require( './decimals.js' );


// MAIN //

/**
* Converts a number to a word representation.
*
* @param {number} num - number to convert
* @param {Object} [options] - options
* @param {string} [options.lang='en'] - language code
* @throws {TypeError} must provide valid options
* @returns {string} word representation of number
*
* @example
* var out = num2words( 12 );
* // returns 'twelve'
*
* @example
* var out = num2words( 21.8 );
* // returns 'twenty-one point eight'
*
* @example
* var out = num2words( 1234 );
* // returns 'one thousand two hundred thirty-four'
*
* @example
* var out = num2words( 100381 );
* // returns 'one hundred thousand three hundred eighty-one'
*/
function num2words( num, options ) {
	var parts;
	var opts;
	var err;

	if ( !isNumber( num ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a number. Value: `%s`.', num ) );
	}
	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( isInteger( num ) ) {
		switch ( opts.lang ) {
		case 'de':
			return int2wordsDE( num, '' );
		case 'en':
		default:
			return int2wordsEN( num, '' );
		}
	}
	if ( !isfinite( num ) ) {
		switch ( opts.lang ) {
		case 'de':
			return ( num < 0 ) ? 'minus unendlich' : 'unendlich';
		case 'en':
		default:
			return ( num < 0 ) ? 'negative infinity' : 'infinity';
		}
	}
	parts = num.toString().split( '.' );
	switch ( opts.lang ) {
	case 'de':
		return int2wordsDE( parts[ 0 ], '' ) + ' Komma ' + decimals( parts[ 1 ], int2wordsDE );
	case 'en':
	default:
		return int2wordsEN( parts[ 0 ], '' ) + ' point ' + decimals( parts[ 1 ], int2wordsEN );
	}
}


// EXPORTS //

module.exports = num2words;
