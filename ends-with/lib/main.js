/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var format = require( './../../format' );
var base = require( './../../base/ends-with' );


// MAIN //

/**
* Test if a string ends with the characters of another string.
*
* @param {string} str - input string
* @param {string} search - search string
* @param {integer} [len=str.length] - substring length
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a string
* @throws {TypeError} third argument must be an integer
* @returns {boolean} boolean indicating if the input string ends with the search string
*
* @example
* var bool = endsWith( 'Remember the story I used to tell you when you were a boy?', 'boy?' );
* // returns true
*
* @example
* var bool = endsWith( 'Remember the story I used to tell you when you were a boy?', 'Boy?' );
* // returns false
*
* @example
* var bool = endsWith( 'To be, or not to be, that is the question.', 'to be' );
* // returns false
*
* @example
* var bool = endsWith( 'To be, or not to be, that is the question.', 'to be', 19 );
* // returns true
*
* @example
* var bool = endsWith( 'To be, or not to be, that is the question.', 'to be', -23 );
* // returns true
*/
function endsWith( str, search, len ) {
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( !isString( search ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a string. Value: `%s`.', search ) );
	}
	if ( arguments.length > 2 ) {
		if ( !isInteger( len ) ) {
			throw new TypeError( format( 'invalid argument. Third argument must be an integer. Value: `%s`.', len ) );
		}
	} else {
		len = str.length;
	}
	return base( str, search, len );
}


// EXPORTS //

module.exports = endsWith;
