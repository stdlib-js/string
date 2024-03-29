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
var min = require( '@stdlib/math/base/special/min' );


// MAIN //

/**
* Calculates the Levenshtein (edit) distance between two strings.
*
* @param {string} s1 - first string value
* @param {string} s2 - second string value
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a string
* @returns {NonNegativeInteger} Levenshtein distance
*
* @example
* var distance = levenshteinDistance( 'algorithm', 'altruistic' );
* // returns 6
*/
function levenshteinDistance( s1, s2 ) {
	var temp;
	var row;
	var pre;
	var m;
	var n;
	var i;
	var j;
	var k;

	if ( !isString( s1 ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', s1 ) );
	}
	if ( !isString( s2 ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a string. Value: `%s`.', s2 ) );
	}
	n = s1.length;
	m = s2.length;

	// If either string is empty, the edit distance is equal to the number of characters in the non-empty string...
	if ( n === 0 ) {
		return m;
	}
	if ( m === 0 ) {
		return n;
	}

	row = [];
	for ( i = 0; i <= m; i++ ) {
		row.push( i );
	}

	for ( i = 0; i < n; i++ ) {
		pre = row[ 0 ];
		row[ 0 ] = i + 1;
		for ( j = 0; j < m; j++ ) {
			k = j + 1;
			temp = row[ k ];
			if ( s1[ i ] === s2[ j ] ) {
				row[ k ] = pre;
			} else {
				row[ k ] = min( pre, min( row[ j ], row[ k ] ) ) + 1;
			}
			pre = temp;
		}
	}
	return row[ m ];
}


// EXPORTS //

module.exports = levenshteinDistance;
