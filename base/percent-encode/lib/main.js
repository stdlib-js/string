/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var utf16ToUTF8Array = require( './../../../utf16-to-utf8-array' );


// VARIABLES //

// Character codes:
var UNDERSCORE = 95|0;
var PERIOD = 46|0;
var HYPHEN = 45|0;
var TILDE = 126|0;
var ZERO = 48|0;
var NINE = 57|0;
var A = 65|0;
var Z = 90|0;
var a = 97|0;
var z = 122|0;


// MAIN //

/**
* Percent-encodes a UTF-16 encoded string according to [RFC 3986][1].
*
* [1]: https://tools.ietf.org/html/rfc3986#section-2.1
*
* @param {string} str - string to percent-encode
* @returns {string} percent-encoded string
*
* @example
* var str1 = 'Ladies + Gentlemen';
*
* var str2 = percentEncode( str1 );
* // returns 'Ladies%20%2B%20Gentlemen'
*/
function percentEncode( str ) {
	var byte;
	var out;
	var len;
	var buf;
	var i;

	// Convert to an array of octets using UTF-8 encoding (see https://tools.ietf.org/html/rfc3986#section-2.5):
	buf = utf16ToUTF8Array( str );

	// Encode the string...
	len = buf.length;
	out = '';
	for ( i = 0; i < len; i++ ) {
		byte = buf[ i ];
		if (
			// ASCII Digits:
			( byte >= ZERO && byte <= NINE ) ||

			// ASCII uppercase letters:
			( byte >= A && byte <= Z ) ||

			// ASCII lowercase letters:
			( byte >= a && byte <= z ) ||

			// ASCII unreserved characters (see https://tools.ietf.org/html/rfc3986#section-2.3):
			byte === HYPHEN ||
			byte === PERIOD ||
			byte === UNDERSCORE ||
			byte === TILDE
		) {
			out += str.charAt( i );
		} else {
			// Convert an octet to hexadecimal and uppercase according to the RFC (see https://tools.ietf.org/html/rfc3986#section-2.1):
			out += '%' + byte.toString( 16 ).toUpperCase();
		}
	}
	return out;
}


// EXPORTS //

module.exports = percentEncode;
