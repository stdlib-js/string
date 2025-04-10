/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var CircularBuffer = require( '@stdlib/dstructs/circular-buffer' );
var zeros = require( '@stdlib/array/base/zeros' );


// MAIN //

/**
* Returns the last `n` grapheme clusters (i.e., user-perceived characters) of a string.
*
* @param {string} str - input string
* @param {NonNegativeInteger} n - number of grapheme clusters to return
* @returns {string} output string
*
* @example
* var out = last( 'Hello World', 1 );
* // returns 'd'
*
* @example
* var out = last( 'Evening', 3 );
* // returns 'ing'
*
* @example
* var out = last( 'JavaScript', 6 );
* // returns 'Script'
*
* @example
* var out = last( '六书/六書', 1 );
* // returns '書'
*
* @example
* var out = last( '🐶🐮🐷🐰🐸', 2 );
* // returns '🐰🐸'
*/
function last( str, n ) {
	var count;
	var cbuf;
	var buf;
	var i;

	if ( n === 0 || str === '' ) {
		return '';
	}
	// Resolve the first cluster break:
	i = nextGraphemeClusterBreak( str, 0 );

	// If we received a sentinel value, return the input string, as there are no more cluster breaks to iterate over...
	if ( i === -1 ) {
		return str;
	}
	// Initialize a buffer for keeping track of cluster break indices:
	buf = zeros( n );

	// Wrap the buffer to create a circular buffer serving as a FIFO stack where we can keep at most `n` indices as we iterate from left-to-right:
	cbuf = new CircularBuffer( buf );

	// Add the first character index:
	cbuf.push( 0 );

	// Add the index of the first grapheme cluster break to our buffer:
	cbuf.push( i );

	// Slide a window over the string from left-to-right...
	count = 0;
	while ( true ) {
		count += 1;
		i = nextGraphemeClusterBreak( str, i );
		if ( i === -1 ) {
			break;
		}
		cbuf.push( i );
	}
	// Resolve the leftmost index:
	i = buf[ (count+1)%n ]; // count+1 as count%n corresponds to the index of the "newest" element in the circular buffer and count+1 is the next element to replace (i.e., the "oldest" index)

	// Return the last `n` grapheme clusters:
	return str.substring( i );
}


// EXPORTS //

module.exports = last;
