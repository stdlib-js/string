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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var reverseCodeUnit = require( './../../base/reverse' );
var reverseCodePoints = require( './../../base/reverse-code-points' );
var reverseGraphemeClusters = require( './../../base/reverse-grapheme-clusters' );
var format = require( './../../format' );


// VARIABLES //

var MODES = [ 'grapheme', 'code_point', 'code_unit' ];
var FCNS = {
	'grapheme': reverseGraphemeClusters,
	'code_point': reverseCodePoints,
	'code_unit': reverseCodeUnit
};
var isMode = contains( MODES );


// MAIN //

/**
* Reverses a string.
*
* @param {string} str - input string
* @param {Options} [options] - options
* @param {string} [options.mode="grapheme"] - type of "character" to return (must be either `grapheme`, `code_point`, or `code_unit`)
* @throws {TypeError} must provide a string primitive
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {string} reversed string
*
* @example
* var out = reverse( 'last man standing' );
* // returns 'gnidnats nam tsal'
*
* @example
* var out = reverse( 'presidential election' );
* // returns 'noitcele laitnediserp'
*
* @example
* var out = reverse( 'javaScript' );
* // returns 'tpircSavaj'
*
* @example
* var out = reverse( 'Hidden Treasures' );
* // returns 'serusaerT neddiH'
*/
function reverse( str ) {
	var options;
	var nargs;
	var opts;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	opts = {
		'mode': 'grapheme'
	};
	nargs = arguments.length;
	if ( nargs > 1 ) {
		options = arguments[ 1 ];
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
	return FCNS[ opts.mode ]( str );
}


// EXPORTS //

module.exports = reverse;
