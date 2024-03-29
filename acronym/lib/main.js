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

var removePunctuation = require( './../../remove-punctuation' );
var tokenize = require( '@stdlib/nlp/tokenize' );
var replace = require( './../../base/replace' );
var uppercase = require( './../../base/uppercase' );
var lowercase = require( './../../base/lowercase' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var contains = require( '@stdlib/array/base/assert/contains' ).factory;
var format = require( './../../format' );
var validate = require( './validate.js' );
var STOPWORDS = require( './stopwords.json' );


// VARIABLES //

var RE_HYPHEN = /-/g;


// MAIN //

/**
* Generates an acronym for a given string.
*
* ## Notes
*
* -   The acronym is generated by capitalizing the first letter of each word in the string.
* -   The function removes stop words from the string before generating the acronym.
* -   The function splits hyphenated words and uses the first character of each hyphenated part.
*
* @param {string} str - input string
* @param {Options} [options] - function options
* @param {StringArray} [options.stopwords] - custom stop words
* @throws {TypeError} must provide a string primitive
* @throws {TypeError} must provide valid options
* @returns {string} generated acronym
*
* @example
* var out = acronym( 'the quick brown fox' );
* // returns 'QBF'
*
* @example
* var out = acronym( 'Hard-boiled eggs' );
* // returns 'HBE'
*
* @example
* var out = acronym( 'National Association of Securities Dealers Automated Quotation' );
* // returns 'NASDAQ'
*/
function acronym( str, options ) {
	var isStopWord;
	var words;
	var opts;
	var err;
	var out;
	var i;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	opts = {};
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	isStopWord = contains( opts.stopwords || STOPWORDS );
	str = removePunctuation( str );
	str = replace( str, RE_HYPHEN, ' ' );
	words = tokenize( str );
	out = '';
	for ( i = 0; i < words.length; i++ ) {
		if ( isStopWord( lowercase( words[ i ] ) ) === false ) {
			out += uppercase( words[ i ].charAt( 0 ) );
		}
	}
	return out;
}


// EXPORTS //

module.exports = acronym;
