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

/* eslint-disable @cspell/spellchecker */

'use strict';

// MODULES //

var floor = require( '@stdlib/math/base/special/floor' );
var endsWith = require( './../../base/ends-with' );
var UNITS = require( './units.json' );


// VARIABLES //

var ONES = [ 'null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn' ];
var TENS = [ 'null', 'zehn', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig' ];


// FUNCTIONS //

/**
* Pluralizes a word by adding a 'n' or 'en' suffix.
*
* @private
* @param {string} word - word to pluralize
* @returns {string} pluralized word
*/
function pluralize( word ) {
	if ( endsWith( word, 'e' ) ) {
		return word + 'n';
	}
	return word + 'en';
}


// MAIN //

/**
* Converts a number to a word representation in German.
*
* @private
* @param {number} num - number to convert
* @param {string} out - output string
* @returns {string} word representation
*
* @example
* var words = int2wordsDE( 1243, '' );
* // returns 'eintausendzweihundertdreiundvierzig'
*
* @example
* var words = int2wordsDE( 387, '' );
* // returns 'dreihundertsiebenundachtzig'
*
* @example
* var words = int2wordsDE( 100, '' );
* // returns 'einhundert'
*
* @example
* var words = int2wordsDE( 1421, '' );
* // returns 'eintausendvierhunderteinundzwanzig'
*
* @example
* var words = int2wordsDE( 100381, '' );
* // returns 'einhunderttausenddreihunderteinundachtzig'
*
* @example
* var words = int2wordsDE( -13, '' );
* // returns 'minus dreizehn'
*/
function int2wordsDE( num, out ) {
	var word;
	var rem;
	var i;
	if ( num === 0 ) {
		// Case: We have reached the end of the number and the number is zero.
		return out || 'null';
	}
	if ( num < 0 ) {
		out += 'minus ';
		num *= -1;
	}
	if ( num < 20 ) {
		rem = 0;
		if ( num === 1 && out.length === 0 ) {
			word = 'ein';
		} else {
			word = ONES[ num ];
		}
	}
	else if ( num < 100 ) {
		rem = num % 10;
		word = TENS[ floor( num / 10 ) ];
		if ( rem ) {
			word = ( ( rem === 1 ) ? 'ein' : ONES[ rem ] ) + 'und' + word;
			rem = 0;
		}
	}
	else if ( num < 1e3 ) {
		rem = num % 100;
		word = int2wordsDE( floor( num / 100 ), '' ) + 'hundert';
	}
	else if ( num < 1e6 ) {
		rem = num % 1e3;
		word = int2wordsDE( floor( num / 1e3 ), '' ) + 'tausend';
	}
	else {
		for ( i = 5; i < UNITS.length; i++ ) {
			if ( num < UNITS[ i ].VAL ) {
				rem = num % UNITS[ i-1 ].VAL;
				if ( floor( num / UNITS[ i-1 ].VAL ) === 1 ) {
					word = 'eine ' + UNITS[ i-1 ].DE;
				} else {
					word = int2wordsDE( floor( num / UNITS[ i-1 ].VAL ), '' ) + ' ' + pluralize( UNITS[ i-1 ].DE );
				}
				if ( rem ) {
					word += ' ';
				}
				break;
			}
		}
	}
	out += word;
	return int2wordsDE( rem, out );
}


// EXPORTS //

module.exports = int2wordsDE;
