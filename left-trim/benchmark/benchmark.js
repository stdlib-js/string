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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var ltrim = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( typeof String.prototype.trimLeft !== 'function' )
};
var whitespace = '\\u0020\\f\\n\\r\\t\\v\\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff';


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		whitespace + 'beep boop',
		whitespace + 'foo bar',
		whitespace + 'xyz'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = ltrim( values[ i%values.length ] );
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

bench( pkg+'::built-in', opts, function benchmark( b ) {
	var values;
	var out;
	var i;

	values = [
		whitespace + 'beep boop',
		whitespace + 'foo bar',
		whitespace + 'xyz'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = values[ i%values.length ].trimLeft();
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
