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

var tape = require( 'tape' );
var nextGraphemeClusterBreak = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nextGraphemeClusterBreak, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the first argument is not a string (one argument)', function test( t ) {
	var values;
	var i;

	values = [
		-5,
		3.14,
		-1.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nextGraphemeClusterBreak( value );
		};
	}
});

tape( 'the function throws an error if the first argument is not a string (two arguments)', function test( t ) {
	var values;
	var i;

	values = [
		-5,
		3.14,
		-1.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nextGraphemeClusterBreak( value, 0 );
		};
	}
});

tape( 'the function throws an error if the second argument is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'bar',
		3.14,
		NaN,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3 ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nextGraphemeClusterBreak( 'foo', value );
		};
	}
});

tape( 'the function returns the next grapheme cluster break position in a provided string', function test( t ) {
	var out;

	out = nextGraphemeClusterBreak( 'last man standing' );
	t.strictEqual( out, 1, 'returns expected value' );

	out = nextGraphemeClusterBreak( 'presidential election' );
	t.strictEqual( out, 1, 'returns expected value' );

	out = nextGraphemeClusterBreak( 'नुच्छेद' );
	t.strictEqual( out, 2, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an index from which to begin searching', function test( t ) {
	var out;

	out = nextGraphemeClusterBreak( 'last man standing', 4 );
	t.strictEqual( out, 5, 'returns expected value' );

	out = nextGraphemeClusterBreak( 'presidential election', 8 );
	t.strictEqual( out, 9, 'returns expected value' );

	out = nextGraphemeClusterBreak( 'अनुच्छेद', 1 );
	t.strictEqual( out, 3, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a negative integer for the starting search index', function test( t ) {
	var out;

	out = nextGraphemeClusterBreak( 'last man standing', -13 );
	t.strictEqual( out, 5, 'returns expected value' );

	out = nextGraphemeClusterBreak( 'presidential election', -13 );
	t.strictEqual( out, 9, 'returns expected value' );

	out = nextGraphemeClusterBreak( 'अनुच्छेद', -7 );
	t.strictEqual( out, 3, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if the starting search index is greater than or equal to the string length', function test( t ) {
	var out;

	out = nextGraphemeClusterBreak( 'last man standing', 17 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( 'presidential election', 22 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( 'अनुच्छेद', 10 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( '🌷', 2 );
	t.strictEqual( out, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if the starting search index resides within the last extended grapheme cluster of the string', function test( t ) {
	var out;

	out = nextGraphemeClusterBreak( 'last man standing', 16 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( 'presidential election', 20 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( 'अनुच्छेद', 7 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( '🌷', 1 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( '🌷' );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( '六', 0 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( '六' );
	t.strictEqual( out, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an empty string', function test( t ) {
	var out;

	out = nextGraphemeClusterBreak( '', -2 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( '', 2 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( '', 0 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = nextGraphemeClusterBreak( '' );
	t.strictEqual( out, -1, 'returns expected value' );

	t.end();
});
