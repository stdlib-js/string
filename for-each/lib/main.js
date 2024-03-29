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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var forEachCodeUnit = require( './../../base/for-each' );
var forEachCodePoint = require( './../../base/for-each-code-point' );
var forEachGraphemeCluster = require( './../../base/for-each-grapheme-cluster' );
var format = require( './../../format' );


// VARIABLES //

var MODES = [ 'grapheme', 'code_point', 'code_unit' ];
var FCNS = {
	'grapheme': forEachGraphemeCluster,
	'code_point': forEachCodePoint,
	'code_unit': forEachCodeUnit
};
var isMode = contains( MODES );


// MAIN //

/**
* Invokes a function for each character in a string.
*
* @param {string} str - input string
* @param {Options} [options] - options
* @param {string} [options.mode="grapheme"] - type of "character" over which to iterate (must be either `grapheme`, `code_point`, or `code_unit`)
* @param {Function} clbk - function to invoke
* @param {*} [thisArg] - execution context
* @throws {TypeError} first argument must be a string
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {string} input string
*
* @example
* function log( value, index ) {
*     console.log( '%d: %s', index, value );
* }
*
* forEach( 'Hello', log );
*/
function forEach( str, options, clbk ) {
	var thisArg;
	var nargs;
	var opts;
	var cb;
	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	opts = {
		'mode': 'grapheme'
	};
	nargs = arguments.length;
	if ( nargs === 2 ) {
		cb = options;
		options = null;
	} else if ( nargs === 3 ) {
		if ( isPlainObject( options ) ) {
			cb = clbk;
		} else {
			cb = options;
			options = null;
			thisArg = clbk;
		}
	} else { // nargs === 4
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		cb = clbk;
		thisArg = arguments[ 3 ];
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', cb ) );
	}
	if ( options ) {
		if ( hasOwnProp( options, 'mode' ) ) {
			opts.mode = options.mode;
			if ( !isMode( opts.mode ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Value: `%s`.', 'mode', MODES.join( '", "' ), opts.mode ) );
			}
		}
	}
	FCNS[ opts.mode ]( str, cb, thisArg );
	return str;
}


// EXPORTS //

module.exports = forEach;
