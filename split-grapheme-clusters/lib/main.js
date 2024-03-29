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
var nextGraphemeClusterBreak = require( './../../next-grapheme-cluster-break' );
var format = require( './../../format' );


// MAIN //

/**
* Splits a string by its grapheme cluster breaks.
*
* @param {string} str - input string
* @throws {TypeError} must provide a string primitive
* @returns {StringArray} array of grapheme clusters
*
* @example
* var out = splitGraphemeClusters( 'café' );
* // returns [ 'c', 'a', 'f', 'é' ]
*
* @example
* var out = splitGraphemeClusters( '🍕🍕🍕' );
* // returns [ '🍕', '🍕', '🍕' ]
*/
function splitGraphemeClusters( str ) {
	var idx;
	var brk;
	var out;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a string. Value: `%s`.', str ) );
	}
	idx = 0;
	out = [];
	if ( str.length === 0 ) {
		return out;
	}
	brk = nextGraphemeClusterBreak( str, idx );
	while ( brk !== -1 ) {
		out.push( str.substring( idx, brk ) );
		idx = brk;
		brk = nextGraphemeClusterBreak( str, idx );
	}
	out.push( str.substring( idx ) );
	return out;
}


// EXPORTS //

module.exports = splitGraphemeClusters;
