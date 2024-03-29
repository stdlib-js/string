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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var format = require( './../../../../format' );


// MAIN //

/**
* Calculates the Hamming distance between two equal-length strings.
*
* ## Notes
*
* -   The function returns a sentinel value of `-1` if the input string lengths differ.
*
* @param {string} s1 - first input string
* @param {string} s2 - second input string
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a string
* @returns {integer} Hamming distance
*
* @example
* var distance = hammingDistance( 'algorithm', 'altruistic' );
* // returns -1
*/
function hammingDistance( s1, s2 ) {
	var out;
	var i;

	if ( !isString( s1 ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', s1 ) );
	}
	if ( !isString( s2 ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a string. Value: `%s`.', s2 ) );
	}
	if ( s1.length !== s2.length ) {
		return -1;
	}
	out = 0;
	for ( i = 0; i < s1.length; i++ ) {
		if (s1[ i ] !== s2[ i ] ) {
			out += 1;
		}
	}
	return out;
}


// EXPORTS //

module.exports = hammingDistance;
