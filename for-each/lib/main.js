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

var isFunction = require( '@stdlib/assert/is-function' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var format = require( './../../format' );
var nextGraphemeClusterBreak = require( './../../next-grapheme-cluster-break' );


// MAIN //

/**
* Invokes a callback once for each (visual) character of a string.
*
* @param {string} str - input string
* @param {Function} clbk - function to invoke
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be a string primitive
* @throws {TypeError} second argument must be a function
* @returns {string} input string
*
* @example
* function log( value, index, str ) {
*     console.log( '%s: %d', index, value );
* }
*
* var str = 'Hello';
*
* forEach( str, log );
*/
function forEach( str, clbk, thisArg ) {
	var len;
	var idx;
	var brk;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( format( 'invalid argument. Second argument must be a function. Value: `%s`.', clbk ) );
	}
	if ( str === '' ) {
		return '';
	}

	idx = 0;
	len = str.length;
	while ( idx < len ) {
		// Find out where the next grapheme cluster begins:
		brk = nextGraphemeClusterBreak( str, idx );

		// -1 only when end of string is reached...
		if (brk === -1) {
			brk = len;
		}

		// Invoke the clbk on the cluster:
		clbk.call( thisArg, str.substring(idx, brk), idx, str );

		// Hop onto the beginning of the next cluster:
		idx = brk;
	}
	return str;
}


// EXPORTS //

module.exports = forEach;
