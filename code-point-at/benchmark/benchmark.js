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

var bench = require( '@stdlib/bench' );
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var fromCodePoint = require( './../../from-code-point' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var UNICODE_MAX = require( '@stdlib/constants/unicode/max' );
var pkg = require( './../package.json' ).name;
var codePointAt = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( typeof String.prototype.codePointAt !== 'function' )
};


// MAIN //

bench( pkg, function benchmark( b ) {
	var out;
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu() * UNICODE_MAX );
		out = codePointAt( fromCodePoint( x ), 0 );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( out ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', opts, function benchmark( b ) {
	var out;
	var x;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		x = floor( randu() * UNICODE_MAX );
		out = String.prototype.codePointAt.call( fromCodePoint( x ), 0 );
		if ( typeof out !== 'number' ) {
			b.fail( 'should return a number' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( out ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
