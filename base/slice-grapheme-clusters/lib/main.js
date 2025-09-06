/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var max = require( '@stdlib/math/base/special/fast/max' );


// MAIN //

/**
* Slices a string based on grapheme cluster (i.e., user-perceived character) indices.
*
* @param {string} str - input string
* @param {integer} start - the `ith` grapheme cluster to start a slice (inclusive)
* @param {integer} end - the `jth` grapheme cluster to end a slice (exclusive)
* @returns {string} output string
*
* @example
* var out = sliceGraphemeClusters( 'Hello World', 0, 5 );
* // returns 'Hello'
*
* out = sliceGraphemeClusters( '👋👋👋', 0, 2 );
* // returns '👋👋'
*
* out = sliceGraphemeClusters( 'अनुच्छेद', 1, 3 );
* // returns 'नुच्'
*
* out = sliceGraphemeClusters( 'Hello World', -5, -1 );
* // returns 'Worl'
*/
function sliceGraphemeClusters( str, start, end ) {
	var numClusters;
	var result;
	var idx;
	var brk;
	var i;

	if ( str === '' ) {
		return '';
	}
	numClusters = numGraphemeClusters( str );
	if ( start < 0 ) {
		start = max( start + numClusters, 0 );
	}
	if ( end < 0 ) {
		end = max( end + numClusters, 0 );
	}
	if ( start >= numClusters || start >= end ) {
		return '';
	}
	if ( end > numClusters ) {
		end = numClusters;
	}
	result = '';
	idx = 0;
	i = 0;
	while ( idx < str.length ) {
		brk = nextGraphemeClusterBreak( str, idx );
		if ( brk === -1 ) {
			brk = str.length;
		}
		if ( i >= start && i < end ) {
			result += str.substring( idx, brk );
		}
		idx = brk;
		i += 1;
		if ( i >= end ) {
			break;
		}
	}
	return result;
}


// EXPORTS //

module.exports = sliceGraphemeClusters;
