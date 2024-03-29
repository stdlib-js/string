/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var splitGraphemeClusters = require( './../../split-grapheme-clusters' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var replace = require( './../../replace' );
var rescape = require( '@stdlib/utils/escape-regexp-string' );
var format = require( './../../format' );


// VARIABLES //

var WHITESPACE_CHARS = '\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff';


// MAIN //

/**
* Trims `n` characters from the end of a string.
*
* @param {string} str - input string
* @param {NonNegativeInteger} n - number of characters to trim
* @param {(string|StringArray)} [chars] - characters to trim (defaults to whitespace characters)
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} third argument must be a string or an array of strings
* @returns {string} trimmed string
*
* @example
* var str = '   abc   ';
* var out = rtrimN( str, 2 );
* // returns '   abc '
*
* @example
* var str = '   abc   ';
* var out = rtrimN( str, str.length );
* // returns '   abc'
*
* @example
* var str = '~~abc!~~';
* var out = rtrimN( str, str.length, [ '~', '!' ] );
* // returns '~~abc'
*
* @example
* var str = '🤖👨🏼‍🎨🤖👨🏼‍🎨🤖👨🏼‍🎨';
* var out = rtrimN( str, str.length, '👨🏼‍🎨🤖' );
* // returns ''
*/
function rtrimN( str, n, chars ) {
	var nElems;
	var reStr;
	var isStr;
	var RE;
	var i;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', str ) );
	}
	if ( !isNonNegativeInteger( n ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a nonnegative integer. Value: `%s`.', n ) );
	}
	if ( arguments.length > 2 ) {
		isStr = isString( chars );
		if ( !isStr && !isStringArray( chars ) ) {
			throw new TypeError( format( 'invalid argument. Must provide a string or an array of strings. Value: `%s`.', chars ) );
		}
		if ( isStr ) {
			chars = splitGraphemeClusters( chars );
		}
		nElems = chars.length - 1;
		reStr = '';
		for ( i = 0; i < nElems; i++ ) {
			reStr += rescape( chars[ i ] );
			reStr += '|';
		}
		reStr += rescape( chars[ nElems ] );

		// Case: Trim a specific set of characters from the end of a string..
		RE = new RegExp( '(?:' + reStr + '){0,'+n+'}$' );
	} else {
		// Case: Trim `n` whitespace characters from the end of a string...
		RE = new RegExp( '[' + WHITESPACE_CHARS + ']{0,'+n+'}$' );
	}
	return replace( str, RE, '' );
}


// EXPORTS //

module.exports = rtrimN;
