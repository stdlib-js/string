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
var uppercase = require( './../../../base/uppercase' );
var isEven = require( '@stdlib/math/base/assert/is-even' );


// MAIN //

/**
* Converts a string to alternate case.
*
* @param {string} str - string to convert
* @returns {string} alternate-cased string
*
* @example
* var str = altcase( 'beep' );
* // returns 'bEeP'
*
* @example
* var str = altcase( 'beep boop' );
* // returns 'bEeP BoOp'
*
* @example
* var str = altcase( 'isMobile' );
* // returns 'iSmObIlE'
*
* @example
* var str = altcase( 'Hello World!' );
* // returns 'hElLo wOrLd!'
*/
function altcase( str ) {
	var out = '';
	var i;
	for ( i = 0; i < str.length; i++ ) {
		if ( isEven( i ) ) {
			out += lowercase( str[i] );
		} else {
			out += uppercase( str[i] );
		}
	}
	return out;
}


// EXPORTS //

module.exports = altcase;
