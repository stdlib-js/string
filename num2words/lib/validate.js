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

var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var indexOf = require( '@stdlib/utils/index-of' );
var format = require( './../../format' );


// VARIABLES //

var LANGUAGE_CODES = [ 'en', 'de' ];


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - options to validate
* @param {string} [options.lang] - language code
* @returns {(null|Error)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'lang': 'es'
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isPlainObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'lang' ) ) {
		opts.lang = options.lang;
		if ( indexOf( LANGUAGE_CODES, opts.lang ) === -1 ) {
			return new TypeError( format( 'invalid option. `%s` option must be one of the following: "%s". Value: `%s`.', 'lang', LANGUAGE_CODES.join( '", "' ), opts.lang ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
