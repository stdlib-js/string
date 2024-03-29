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

var repeat = require( './../../../base/repeat' );
var ceil = require( '@stdlib/math/base/special/ceil' );


// MAIN //

/**
* Right pads a string such that the padded string has a length of at least `len`.
*
* @param {string} str - string to pad
* @param {NonNegativeInteger} len - minimum string length
* @param {string} pad - string used to pad
* @returns {string} padded string
*
* @example
* var str = rpad( 'a', 5, ' ' );
* // returns 'a    '
*
* @example
* var str = rpad( 'beep', 10, 'b' );
* // returns 'beepbbbbbb'
*
* @example
* var str = rpad( 'boop', 12, 'beep' );
* // returns 'boopbeepbeep'
*/
function rpad( str, len, pad ) {
	var n = ( len - str.length ) / pad.length;
	if ( n <= 0 ) {
		return str;
	}
	n = ceil( n );
	return str + repeat( pad, n );
}


// EXPORTS //

module.exports = rpad;
