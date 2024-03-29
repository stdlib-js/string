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
var trim = require( './../../../base/trim' );


// VARIABLES //

var RE_WHITESPACE = /\s+/g;
var RE_SPECIAL = /[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g; // eslint-disable-line no-useless-escape
var RE_CAMEL = /([a-z0-9])([A-Z])/g;


// MAIN //

/**
* Converts a string to dot case.
*
* @param {string} str - string to convert
* @returns {string} dot-cased string
*
* @example
* var str = dotcase( 'beep' );
* // returns 'beep'
*
* @example
* var str = dotcase( 'beep boop' );
* // returns 'beep.boop'
*
* @example
* var str = dotcase( 'isMobile' );
* // returns 'is.mobile'
*
* @example
* var str = dotcase( 'Hello World!' );
* // returns 'hello.world'
*/
function dotcase( str ) {
	str = replace( str, RE_SPECIAL, ' ' );
	str = replace( str, RE_CAMEL, '$1 $2' );
	str = trim( str );
	str = replace( str, RE_WHITESPACE, '.' );
	return lowercase( str );
}


// EXPORTS //

module.exports = dotcase;
