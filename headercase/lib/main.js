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
var base = require( './../../base/headercase' );


// MAIN //

/**
* Converts a string to HTTP header case.
*
* @param {string} str - string to convert
* @throws {TypeError} must provide a string
* @returns {string} HTTP header-cased string
*
* @example
* var out = headercase( 'foo bar' );
* // returns 'Foo-Bar'
*
* @example
* var out = headercase( 'IS_MOBILE' );
* // returns 'Is-Mobile'
*
* @example
* var out = headercase( 'Hello World!' );
* // returns 'Hello-World'
*
* @example
* var out = headercase( '--foo-bar--' );
* // returns 'Foo-Bar'
*/
function headercase( str ) {
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	return base( str );
}


// EXPORTS //

module.exports = headercase;
