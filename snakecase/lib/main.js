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
var format = require( './../../format' );
var base = require( './../../base/snakecase' );


// MAIN //

/**
* Converts a string to snake case.
*
* @param {string} str - string to convert
* @throws {TypeError} must provide a string
* @returns {string} snake-cased string
*
* @example
* var str = snakecase( 'Hello World!' );
* // returns 'hello_world'
*
* @example
* var str = snakecase( 'foo bar' );
* // returns 'foo_bar'
*
* @example
* var str = snakecase( 'I am a tiny little teapot' );
* // returns 'i_am_a_tiny_little_teapot'
*
* @example
* var str = snakecase( 'BEEP boop' );
* // returns 'beep_boop'
*
* @example
* var str = snakecase( 'isMobile' );
* // returns 'is_mobile'
*/
function snakecase( str ) {
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', str ) );
	}
	return base( str );
}


// EXPORTS //

module.exports = snakecase;
