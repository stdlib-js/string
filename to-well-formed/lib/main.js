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

var isString = require( '@stdlib/assert/is-string' );
var format = require( './../../format' );
var isWellFormed = require( '@stdlib/assert/is-well-formed-string' );


// VARIABLES //

var RE_UTF16_LOW_SURROGATE = /[\uDC00-\uDFFF]/;
var RE_UTF16_HIGH_SURROGATE = /[\uD800-\uDBFF]/;


// MAIN //

/**
* Replaces all lone surrogates in order to create a new string which is well formed.
*
* @param {string} str - string to convert
* @throws {TypeError} must provide a string
* @returns {string} new string which does not contain any lone surrogates
*
* @example
* var str = str2wellformed( 'ab\uD800' );
* // returns 'ab�'
*/
function str2wellformed( str ) {
	var modifiedString;
	var i;
	modifiedString = '';

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', str ) );
	}
	if ( isWellFormed( str ) ) {
		for ( i = 0; i < str.length; i++ ) {
			modifiedString += str[i];
		}
		return modifiedString;
	}
	for ( i = 0; i < str.length; i++ ) {
		if ( RE_UTF16_LOW_SURROGATE.test( str[ i ] ) || RE_UTF16_HIGH_SURROGATE.test( str[ i ] ) ) {
			modifiedString += '\uFFFD';
		}
		else {
			modifiedString += str[ i ];
		}
	}
	return modifiedString;
}


// EXPORTS //

module.exports = str2wellformed;
