/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var lastCodeUnit = require( './../../base/last' );
var lastCodePoint = require( './../../base/last-code-point' );
var lastGraphemeCluster = require( './../../base/last-grapheme-cluster' );
var format = require( './../../format' );


// VARIABLES //

var MODES = [ 'grapheme', 'code_point', 'code_unit' ];
var FCNS = {
	'grapheme': lastGraphemeCluster,
	'code_point': lastCodePoint,
	'code_unit': lastCodeUnit
};
var isMode = contains( MODES );


// MAIN //

/**
* Returns the last character(s) of a string.
*
* @param {string} str - input string
* @param {NonNegativeInteger} [n=1] - number of characters to return
* @param {Options} [options] - options
* @param {string} [options.mode="grapheme"] - type of "character" to return (must be either `grapheme`, `code_point`, or `code_unit`)
* @throws {TypeError} last argument must be a string
* @throws {TypeError} second argument must be a nonnegative integer
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {string} output string
*
* @example
* var out = last( 'last man standing' );
* // returns 'g'
*
* @example
* var out = last( 'presidential election' );
* // returns 'n'
*
* @example
* var out = last( 'javaScript' );
* // returns 't'
*
* @example
* var out = last( 'Hidden Treasures' );
* // returns 's'
*
* @example
* var out = last( '🐶🐮🐷🐰🐸', 2 );
* // returns '🐰🐸'
*
* @example
* var out = last( 'foo bar', 3 );
* // returns 'bar'
*/
function last( str ) {
	var options;
	var nargs;
	var opts;
	var n;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	opts = {
		'mode': 'grapheme'
	};
	nargs = arguments.length;
	if ( nargs === 1 ) {
		n = 1;
	} else if ( nargs === 2 ) {
		n = arguments[ 1 ];
		if ( isPlainObject( n ) ) {
			options = n;
			n = 1;
		} else if ( !isNonNegativeInteger( n ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', n ) );
		}
	} else { // nargs > 2
		n = arguments[ 1 ];
		if ( !isNonNegativeInteger( n ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', n ) );
		}
		options = arguments[ 2 ];
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
	}
	if ( options ) {
		if ( hasOwnProp( options, 'mode' ) ) {
			opts.mode = options.mode;
			if ( !isMode( opts.mode ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Value: `%s`.', 'mode', MODES.join( '", "' ), opts.mode ) );
			}
		}
	}
	return FCNS[ opts.mode ]( str, n );
}


// EXPORTS //

module.exports = last;
