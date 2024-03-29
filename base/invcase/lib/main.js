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

var uppercase = require( './../../../base/uppercase' );
var lowercase = require( './../../../base/lowercase' );


// MAIN //

/**
* Converts a string to inverse case.
*
* @param {string} str - string to convert
* @returns {string} inverse-cased string
*
* @example
* var str = invcase( 'beep' );
* // returns 'BEEP'
*
* @example
* var str = invcase( 'beep BOOP' );
* // returns 'BEEP boop'
*
* @example
* var str = invcase( 'isMobile' );
* // returns 'ISmOBILE'
*
* @example
* var str = invcase( 'HeLlO wOrLd!' );
* // returns 'hElLo WoRlD!'
*/
function invcase( str ) {
	var out;
	var ch;
	var s;
	var i;

	out = [];
	for ( i = 0; i < str.length; i++ ) {
		ch = str[ i ];
		s = uppercase( ch );
		if ( s === ch ) {
			s = lowercase( ch );
		}
		out.push( s );
	}
	return out.join( '' );
}


// EXPORTS //

module.exports = invcase;
