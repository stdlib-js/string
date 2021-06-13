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

var RE_COMBINING_MARKS = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g; // eslint-disable-line no-misleading-character-class
var RE_SURROGATE_PAIR = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;


// FUNCTIONS //

/**
* Callback invoked for swapping symbols with their combining marks.
*
* @private
* @param {string} match - match
* @param {string} p1 - first capture group
* @param {string} p2 - second capture group
* @returns {string} updated string
*/
function onCombiningMark( match, p1, p2 ) {
	// Reverse combined marks in order for the marks to be in the same order after subsequent reversing...
	return reverseString( p2 ) + p1;
}


// MAIN //

/**
* Reverses a string.
*
* @param {string} str - input string
* @throws {TypeError} must provide a string primitive
* @returns {string} reversed string
*
* @example
* var out = reverseString( 'last man standing' );
* // returns 'gnidnats nam tsal'
*
* @example
* var out = reverseString( 'presidential election' );
* // returns 'noitcele laitnediserp'
*
* @example
* var out = reverseString( 'javaScript' );
* // returns 'tpircSavaj'
*
* @example
* var out = reverseString( 'Hidden Treasures' );
* // returns 'serusaerT neddiH'
*/
function reverseString( str ) {
	var out;
	var i;
	if ( !isString( str ) ) {
		throw new TypeError( 'invalid argument. First argument must be a string primitive. Value: `' + str + '`.' );
	}
	if ( str === '' ) {
		return '';
	}
	// Swap symbols with their combing marks:
	str = replace( str, RE_COMBINING_MARKS, onCombiningMark );

	// Swap high and low surrogates so that low surrogates appear first:
	str = replace( str, RE_SURROGATE_PAIR, '$2$1' );

	// Reverse the string code units...
	out = [];
	for ( i = str.length-1; i >= 0; i-- ) {
		out.push( str.charAt( i ) );
	}
	return out.join( '' );
}


// EXPORTS //

module.exports = reverseString;
