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

var numCodePoints = require( './../../../num-code-points' );
var max = require( '@stdlib/math/base/special/fast/max' );


// VARIABLES //

var RE_UTF16_LOW_SURROGATE = /[\uDC00-\uDFFF]/; // TODO: replace with stdlib pkg
var RE_UTF16_HIGH_SURROGATE = /[\uD800-\uDBFF]/; // TODO: replace with stdlib pkg


// MAIN //

/**
* Slices a string based on Unicode code points.
*
* @param {string} str - input string
* @param {integer} start - the `ith` Unicode code point to start a slice (inclusive)
* @param {integer} end - the `jth` Unicode code point to end a slice (exclusive)
* @returns {string} output string
*
* @example
* var out = sliceCodePoints( 'Hello 👋 World', 1, 3 );
* // returns 'el'
*
* out = sliceCodePoints( '👋👋👋', 1, 2 );
* // returns '👋'
*/
function sliceCodePoints( str, start, end ) {
	var totalCodePoints;
	var codePoints;
	var len;
	var ch1;
	var ch2;
	var idx;
	var ch;
	var i;

	len = str.length;
	if ( len === 0 ) {
		return '';
	}
	totalCodePoints = numCodePoints( str );
	if ( start < 0 ) {
		start = max( totalCodePoints + start, 0 );
	}
	if ( end < 0 ) {
		end = max( totalCodePoints + end, 0 );
	} else if ( end > totalCodePoints ) {
		end = totalCodePoints;
	}
	if ( start >= totalCodePoints || end <= start ) {
		return '';
	}
	codePoints = '';
	idx = 0;

	// Process the string one Unicode code unit at a time and handle UTF-16 surrogate pairs as a single Unicode code point...
	for ( i = 0; i < len && idx < end; i++ ) {
		ch1 = str[ i ];
		ch = ch1;

		// Check for a UTF-16 surrogate pair...
		if ( i < len-1 && RE_UTF16_HIGH_SURROGATE.test( ch1 ) ) {
			// Check whether the high surrogate is paired with a low surrogate...
			ch2 = str[ i+1 ];
			if ( RE_UTF16_LOW_SURROGATE.test( ch2 ) ) {
				// We found a surrogate pair:
				ch += ch2;
				i += 1; // bump the index to process the next code unit
			}
		}
		// Note: `ch` may be a lone surrogate (e.g., a low surrogate without a preceding high surrogate or a high surrogate at the end of the input string).

		if ( idx >= start && idx < end ) {
			codePoints += ch;
		}
		idx += 1;
	}
	return codePoints;
}


// EXPORTS //

module.exports = sliceCodePoints;
