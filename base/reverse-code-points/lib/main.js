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

// VARIABLES //

var RE_UTF16_LOW_SURROGATE = /[\uDC00-\uDFFF]/; // TODO: replace with stdlib pkg
var RE_UTF16_HIGH_SURROGATE = /[\uD800-\uDBFF]/; // TODO: replace with stdlib pkg


// MAIN //

/**
* Reverses the Unicode code points of a string.
*
* @param {string} str - input string
* @returns {string} output string
*
* @example
* var out = reverse( 'last man standing' );
* // returns 'gnidnats nam tsal'
*
* @example
* var out = reverse( 'presidential election' );
* // returns 'noitcele laitnediserp'
*
* @example
* var out = reverse( 'JavaScript' );
* // returns 'tpircSavaJ'
*
* @example
* var out = reverse( 'Hidden Treasures' );
* // returns 'serusaerT neddiH'
*/
function reverse( str ) {
	var len;
	var out;
	var ch1;
	var ch2;
	var i;

	len = str.length;
	out = '';

	// Process the string one Unicode code unit at a time and count UTF-16 surrogate pairs as a single Unicode code point...
	for ( i = 0; i < len; i++ ) {
		ch1 = str[ i ];

		// Check for a high UTF-16 surrogate...
		if ( RE_UTF16_HIGH_SURROGATE.test( ch1 ) ) {
			// Check for an unpaired surrogate at the end of the input string...
			if ( i === len-1 ) {
				// We found an unpaired surrogate...
				out = ch1 + out;
				break;
			}
			// Check whether the high surrogate is paired with a low surrogate...
			ch2 = str[ i+1 ];
			if ( RE_UTF16_LOW_SURROGATE.test( ch2 ) ) {
				// We found a surrogate pair:
				out = ch1 + ch2 + out;
				i += 1; // bump the index to process the next code unit
			} else {
				out = ch1 + out;
			}
		} else {
			out = ch1 + out;
		}
	}
	return out;
}


// EXPORTS //

module.exports = reverse;
