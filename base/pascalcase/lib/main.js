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

var capitalize = require( './../../../base/capitalize' );
var lowercase = require( './../../../base/lowercase' );
var replace = require( './../../../base/replace' );
var trim = require( './../../../base/trim' );


// VARIABLES //

var RE_WHITESPACE = /\s+/g;
var RE_SPECIAL = /[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g; // eslint-disable-line no-useless-escape
var RE_TO_PASCAL = /(?:\s|^)([^\s]+)(?=\s|$)/g;
var RE_CAMEL = /([a-z0-9])([A-Z])/g;


// FUNCTIONS //

/**
* Callback invoked upon a match.
*
* @private
* @param {string} match - entire match
* @param {string} p1 - first capture group
* @returns {string} capitalized capture group
*/
function replacer( match, p1 ) {
	return capitalize( lowercase( p1 ) );
}


// MAIN //

/**
* Converts a string to Pascal case.
*
* @param {string} str - string to convert
* @returns {string} Pascal-cased string
*
* @example
* var out = pascalcase( 'foo bar' );
* // returns 'FooBar'
*
* @example
* var out = pascalcase( 'IS_MOBILE' );
* // returns 'IsMobile'
*
* @example
* var out = pascalcase( 'Hello World!' );
* // returns 'HelloWorld'
*
* @example
* var out = pascalcase( '--foo-bar--' );
* // returns 'FooBar'
*/
function pascalcase( str ) {
	str = replace( str, RE_SPECIAL, ' ' );
	str = replace( str, RE_WHITESPACE, ' ' );
	str = replace( str, RE_CAMEL, '$1 $2' );
	str = trim( str );
	return replace( str, RE_TO_PASCAL, replacer );
}


// EXPORTS //

module.exports = pascalcase;
