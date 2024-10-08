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

var nextGraphemeClusterBreak = require( './../../../next-grapheme-cluster-break' );
var numGraphemeClusters = require( './../../../num-grapheme-clusters' );


// MAIN //

/**
* Removes the last `n` grapheme clusters (i.e., user-perceived characters) of a string.
*
* @param {string} str - input string
* @param {NonNegativeInteger} n - number of grapheme clusters to remove
* @returns {string} output string
*
* @example
* var out = removeLast( 'last man standing', 1 );
* // returns 'last man standin'
*
* @example
* var out = removeLast( 'presidential election', 1 );
* // returns 'presidential electio'
*
* @example
* var out = removeLast( 'JavaScript', 1 );
* // returns 'JavaScrip'
*
* @example
* var out = removeLast( 'Hidden Treasures', 1 );
* // returns 'Hidden Treasure'
*
* @example
* var out = removeLast( '🐶🐮🐷🐰🐸', 2 );
* // returns '🐶🐮🐷'
*
* @example
* var out = removeLast( 'foo bar', 5 );
* // returns 'fo'
*/
function removeLast( str, n ) {
	var total;
	var num;
	var i;

	if ( n === 0 ) {
		return str;
	}

	total = numGraphemeClusters( str );
	if ( str === '' || total < n ) {
		return '';
	}

	i = 0;
	num = 0;
	while ( num < total - n ) {
		i = nextGraphemeClusterBreak( str, i );
		num += 1;
	}
	return str.substring( 0, i );
}


// EXPORTS //

module.exports = removeLast;
