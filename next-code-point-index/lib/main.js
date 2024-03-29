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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var format = require( './../../format' );


// VARIABLES //

var RE_UTF16_LOW_SURROGATE = /[\uDC00-\uDFFF]/; // TODO: replace with stdlib pkg
var RE_UTF16_HIGH_SURROGATE = /[\uD800-\uDBFF]/; // TODO: replace with stdlib pkg


// MAIN //

/**
* Returns the position of the next Unicode code point in a string after a specified position.
*
* @param {string} str - input string
* @param {integer} [fromIndex=0] - position
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be an integer
* @returns {integer} position of the next Unicode code point
*
* @example
* var out = nextCodePointIndex( 'last man standing', 4 );
* // returns 5
*
* @example
* var out = nextCodePointIndex( 'presidential election', 8 );
* // returns 9
*
* @example
* var out = nextCodePointIndex( '𐒻𐓟𐒻𐓟', 0 );
* // returns 2
*
* @example
* var out = nextCodePointIndex( '🌷' );
* // returns -1
*/
function nextCodePointIndex( str, fromIndex ) {
	var lastIndex;
	var len;
	var idx;
	var i;
	var j;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( arguments.length > 1 ) {
		if ( !isInteger( fromIndex ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be an integer. Value: `%s`.', fromIndex ) );
		}
		idx = fromIndex;
	} else {
		idx = 0;
	}
	len = str.length;
	if ( idx < 0 ) {
		idx += len;
		if ( idx < 0 ) {
			idx = 0;
		}
	}
	lastIndex = len - 1;
	if ( idx >= lastIndex ) {
		return -1;
	}

	// Check for a high UTF-16 surrogate...
	i = idx + 1;
	j = i + 1;
	if ( RE_UTF16_HIGH_SURROGATE.test( str[ idx ] ) ) {
		// Check whether the high surrogate is paired with a low surrogate...
		if ( RE_UTF16_LOW_SURROGATE.test( str[ i ] ) ) {
			// We found a surrogate pair:
			return ( j >= lastIndex ) ? -1 : j;
		}
		return i;
	}
	return i;
}


// EXPORTS //

module.exports = nextCodePointIndex;
