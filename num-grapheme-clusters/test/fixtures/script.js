/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var startsWith = require( '@stdlib/string/starts-with' );
var inmap = require( '@stdlib/utils/inmap' );


// FUNCTIONS //

/**
* Returns the UCS-2 encoding from code points.
*
* @private
* @param {NonNegativeIntegerArray} arr - array of code points
* @returns {string} - UCS-2 encoded string
*/
function ucs2encode( arr ) {
	var out;
	var tmp;
	var i;

	out = [];
	for ( i = 0; i < arr.length; i++) {
		tmp = arr[ i ];
		if ( tmp > 0xFFFF ) {
			tmp -= 0x10000;
			out.push( String.fromCharCode( ( (tmp >>> 10) & 0x3FF ) | 0xD800 ) ); // eslint-disable-line max-len
			tmp = 0xDC00 | ( tmp & 0x3FF );
		}
		out.push( String.fromCharCode( tmp ) );
	}
	return out.join( '' );
}

/**
* Returns the hexadecimal form of argument.
*
* @private
* @param {integer} c - temp
* @returns {integer} - hexadecimal form
*/
function convertToHex( c ) {
	return parseInt( c, 16 );
}

/**
* Transforms a test case line into a UCS-2 encoded string.
*
* @private
* @param {string} sequence - temp
* @returns {string} - encoded string
*/
function mapper( sequence ) {
	var codePoints = inmap( sequence.split(/\s*×\s*/), convertToHex );
	return ucs2encode( codePoints );
}

/**
* Returns the test data from a single line.
*
* @private
* @param {string} line - line
* @returns {Object} - test data
*/
function generateTestData( line ) {
	var codePoints;
	var expected;
	var input;

	codePoints = inmap( line.split( /\s*[×÷]\s*/ ), convertToHex );
	input = ucs2encode( codePoints );

	expected = inmap( line.split( /\s*÷\s*/ ), mapper );

	return {
		'input': input,
		'expected': expected
	};
}

/**
* Removes comments from a line of test.
*
* @private
* @param {string} line - line
* @returns {string} line without comments
*/
function removeComments( line ) {
	return line.split( '#' )[ 0 ];
}

/**
* Filters lines.
*
* @private
* @param {string} line - line
* @returns {boolean} boolean indicating whether to include a line for generating test data
*/
function filter( line ) {
	return line !== null && line.length > 0 && !startsWith( line, '#' );
}


// MAIN //

/**
* Main execution sequence.
*
* @private
* @param {string} filename - input filename
* @param {string} out - output filename
*/
function main( filename, out ) {
	var fpath;
	var fopts;
	var data;

	fopts = {
		'encoding': 'utf8'
	};
	fpath = resolve( __dirname, filename );
	data = readFileSync( fpath, fopts ).split( '\n' ).filter( filter );

	inmap( data, removeComments );
	inmap( data, generateTestData );

	fpath = join( __dirname, out );
	writeFileSync( fpath, JSON.stringify( data )+'\n' );
}

main( 'grapheme_break_test.txt', 'test_data.json' );
