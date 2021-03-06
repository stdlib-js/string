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
* Removes the first character(s) of a string.
*
* @param {string} str - input string
* @param {NonNegativeInteger} [n=1] - number of characters to remove
* @throws {TypeError} must provide a string primitive
* @throws {TypeError} second argument must be a nonnegative integer
* @returns {string} updated string
*
* @example
* var out = removeFirst( 'last man standing' );
* // returns 'ast man standing'
*
* @example
* var out = removeFirst( 'presidential election' );
* // returns 'residential election'
*
* @example
* var out = removeFirst( 'javaScript' );
* // returns 'avaScript'
*
* @example
* var out = removeFirst( 'Hidden Treasures' );
* // returns 'idden Treasures'
*
* @example
* var out = removeFirst( '🐶🐮🐷🐰🐸', 2 );
* // returns '🐷🐰🐸'
*
* @example
* var out = removeFirst( 'foo bar', 4 );
* // returns 'bar'
*/
function removeFirst( str, n ) {
	var nextBreak;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( arguments.length > 1 ) {
		if ( !isNonNegativeInteger( n ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', n ) );
		}
		nextBreak = 0;
		while ( n > 0 ) {
			nextBreak = nextGraphemeClusterBreak( str, nextBreak );
			n -= 1;
		}
	}
	else {
		nextBreak = nextGraphemeClusterBreak( str );
	}
	// Value of `nextBreak` will be -1 if and only if `str` is an empty string or `str` has only 1 extended grapheme cluster...
	if ( str === '' || nextBreak === -1 ) {
		return '';
	}
	return str.substring( nextBreak );
}


// EXPORTS //

module.exports = removeFirst;
