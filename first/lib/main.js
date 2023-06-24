/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var nextGraphemeClusterBreak = require( './../../next-grapheme-cluster-break' );
var format = require( './../../format' );


// MAIN //

/**
* Returns the first visual character(s) of a string.
*
* @param {string} str - input string
* @param {NonNegativeInteger} [n=1] - number of characters to return
* @throws {TypeError} must provide a string
* @throws {TypeError} second argument must be a nonnegative integer
* @returns {string} output string
*
* @example
* var out = first( 'last man standing' );
* // returns 'l'
*
* @example
* var out = first( 'presidential election' );
* // returns 'p'
*
* @example
* var out = first( 'javaScript' );
* // returns 'j'
*
* @example
* var out = first( 'Hidden Treasures' );
* // returns 'H'
*
* @example
* var out = first( '🐶🐮🐷🐰🐸', 2 );
* // returns '🐶🐮'
*
* @example
* var out = first( 'foo bar', 5 );
* // returns 'foo b'
*/
function first( str, n ) {
	var nextBreak;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( str.length === 0 ) {
		return '';
	}
	if ( arguments.length > 1 ) {
		if ( !isNonNegativeInteger( n ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', n ) );
		}
		if ( str.length <= n ) {
			return str;
		}
		nextBreak = 0;
		while ( n > 0 ) {
			nextBreak = nextGraphemeClusterBreak( str, nextBreak );
			n -= 1;
		}
	} else {
		nextBreak = nextGraphemeClusterBreak( str );
	}
	// If `nextBreak` equals -1, it means that `str` is a string with a single grapheme cluster. In that case, we return `str` itself:
	if ( str === '' || nextBreak === -1 ) {
		return str;
	}
	return str.substring( 0, nextBreak );
}


// EXPORTS //

module.exports = first;
