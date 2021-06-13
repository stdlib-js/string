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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var replace = require( './../../replace' );


// VARIABLES //

var RE = /[!"'(),–.:;<>?`{}|~\/\\\[\]]/g; // eslint-disable-line no-useless-escape


// MAIN //

/**
* Removes punctuation characters from a string.
*
* @param {string} str - input string
* @throws {TypeError} must provide a string primitive
* @returns {string} output string
*
* @example
* var str = 'Sun Tzu said: "A leader leads by example not by force."';
* var out = removePunctuation( str );
* // returns 'Sun Tzu said A leader leads by example not by force'
*
* @example
* var str = 'Double, double, toil and trouble; Fire burn, and cauldron bubble!';
* var out = removePunctuation( str );
* // returns 'Double double toil and trouble Fire burn and cauldron bubble'
*
* @example
* var str = 'This module removes these characters: `{}[]:,!/<>().;~|?\'"';
* var out = removePunctuation( str );
* // returns 'This module removes these characters '
*/
function removePunctuation( str ) {
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. Must provide a string primitive. Value: `' + str + '`.' );
	}
	return replace( str, RE, '' );
}


// EXPORTS //

module.exports = removePunctuation;
