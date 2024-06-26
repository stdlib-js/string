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
var format = require( './../../format' );
var base = require( './../../base/replace-before' );


// MAIN //

/**
* Replaces the substring before the first occurrence of a specified search string.
*
* @param {string} str - input string
* @param {string} search - search string
* @param {string} replacement - replacement string
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a string
* @throws {TypeError} third argument must be a string
* @returns {string} output string
*
* @example
* var out = replaceBefore( 'beep boop', ' ', 'foo' );
* // returns 'foo boop'
*
* @example
* var out = replaceBefore( 'beep boop', 'p', 'foo' );
* // returns 'foop boop'
*
* @example
* var out = replaceBefore( 'Hello World!', '', 'foo' );
* // returns 'Hello World!'
*
* @example
* var out = replaceBefore( 'Hello World!', 'xyz', 'foo' );
* // returns 'Hello World!'
*/
function replaceBefore( str, search, replacement ) {
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( !isString( search ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a string. Value: `%s`.', search ) );
	}
	if ( !isString( replacement ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a string. Value: `%s`.', replacement ) );
	}
	return base( str, search, replacement, 0 );
}


// EXPORTS //

module.exports = replaceBefore;
