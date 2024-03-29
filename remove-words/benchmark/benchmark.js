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

var bench = require( '@stdlib/bench' );
var stopwords = require( '@stdlib/datasets/stopwords-en' );
var uppercase = require( './../../uppercase' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var replace = require( './../../replace' );
var pkg = require( './../package.json' ).name;
var removeWords = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var words;
	var str;
	var out;
	var i;

	words = stopwords();
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = 'The word '+words[ i % words.length ]+' should be removed from this string';
		out = removeWords( str, words );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::case_insensitive', function benchmark( b ) {
	var upper;
	var words;
	var str;
	var out;
	var i;

	words = stopwords();
	upper = [];
	for ( i = 0; i < words.length; i++ ) {
		upper.push( uppercase( words[ i ] ) );
	}
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = 'The word '+words[ i % words.length ]+' should be removed from this string';
		out = removeWords( str, upper, true );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::regexp', function benchmark( b ) {
	var words;
	var str;
	var out;
	var i;

	words = stopwords();
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		str = 'The word '+words[ i % words.length ]+' should be removed from this string';
		out = removeWordsRegexp( str, words );
		if ( typeof out !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( out ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function removeWordsRegexp( str, words ) {
		var reString;
		var wordRE;
		var i;
		reString = '';
		for ( i = 0; i < words.length; i++ ) {
			reString += '\\b'+words[i]+'\\b';
			if ( i < words.length-1 ) {
				reString += '|';
			}
		}
		wordRE = new RegExp( reString, 'g' );
		return replace( str, wordRE, '' );
	}
});
