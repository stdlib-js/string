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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var format = require( './../../format' );


// VARIABLES //

var RE_UTF16_LOW_SURROGATE = /[\uDC00-\uDFFF]/; // TODO: replace with stdlib pkg
var RE_UTF16_HIGH_SURROGATE = /[\uD800-\uDBFF]/; // TODO: replace with stdlib pkg


// MAIN //

/**
* Returns the number of code points in a string.
*
* @param {string} str - input string
* @throws {TypeError} must provide a string
* @returns {NonNegativeInteger} number of code points
*
* @example
* var out = numCodePoints( 'last man standing' );
* // returns 17
*
* @example
* var out = numCodePoints( 'presidential election' );
* // returns 21
*
* @example
* var out = numCodePoints( 'अनुच्छेद' );
* // returns 8
*/
function numCodePoints( str ) {
	var count;
	var i;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', str ) );
	}
	count = 0;

	// Process the string one Unicode code unit at a time and count UTF-16 surrogate pairs as a single Unicode code point...
	for ( i = 0; i < str.length; i++ ) {
		// Check for a high UTF-16 surrogate...
		if ( RE_UTF16_HIGH_SURROGATE.test( str[ i ] ) ) {
			// Check for an unpaired surrogate at the end of the input string...
			if ( i === str.length-1 ) {
				// We found an unpaired surrogate...
				count += 1;
				break;
			}
			// Check whether the high surrogate is paired with a low surrogate...
			if ( RE_UTF16_LOW_SURROGATE.test( str[ i+1 ] ) ) {
				// We found a surrogate pair:
				i += 1; // bump the index to process the next code unit
				count += 1;
			}
		} else {
			count += 1;
		}
	}
	return count;
}


// EXPORTS //

module.exports = numCodePoints;
