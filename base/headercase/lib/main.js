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

var lowercase = require( './../../../base/lowercase' );
var replace = require( './../../../base/replace' );
var startcase = require( './../../../base/startcase' );
var trim = require( './../../../base/trim' );


// VARIABLES //

var RE_WHITESPACE = /\s+/g;
var RE_SPECIAL = /[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g; // eslint-disable-line no-useless-escape
var RE_CAMEL = /([a-z0-9])([A-Z])/g;


// MAIN //

/**
* Converts a string to HTTP header case.
*
* @param {string} str - string to convert
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
	str = replace( str, RE_SPECIAL, ' ' );
	str = replace( str, RE_CAMEL, '$1 $2' );
	str = trim( str );
	str = lowercase( str );
	str = startcase( str );
	return replace( str, RE_WHITESPACE, '-' );
}


// EXPORTS //

module.exports = headercase;
