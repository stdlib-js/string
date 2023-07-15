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

var tape = require( 'tape' );
var noop = require( '@stdlib/utils/noop' );
var forEach = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof forEach, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a string', function test( t ) {
	var values;
	var i;

	values = [
		[],
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a string (thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		[],
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( 'beep', value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function (thisArg)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( 'beep', value );
		};
	}
});

tape( 'if provided an empty string, the function never invokes a provided function', function test( t ) {
	var out = forEach( '', fcn );
	t.strictEqual( out, '', 'returns expected value' );
	t.end();

	function fcn() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the function returns a provided string', function test( t ) {
	var str;
	var out;

	str = 'Hello, world';

	out = forEach( str, noop );
	t.strictEqual( out, str, 'returns expected value' );

	t.end();
});

tape( 'the function invokes a provided function for each character of a provided string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello, world';
	expected = [
		'H',
		'e',
		'l',
		'l',
		'o',
		',',
		' ',
		'w',
		'o',
		'r',
		'l',
		'd'
	];

	actual = [];
	forEach( str, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of the string (Unicode)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello, world \uD834\uDD1E';
	expected = [
		'H',
		'e',
		'l',
		'l',
		'o',
		',',
		' ',
		'w',
		'o',
		'r',
		'l',
		'd',
		' ',
		'\uD834\uDD1E'
	];

	actual = [];
	forEach( str, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function invokes a provided function for each character of the string (emoji)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '🌷🍕👉🏿';
	expected = [
		'🌷',
		'🍕',
		'👉🏿'
	];

	actual = [];
	forEach( str, copy );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function copy( value ) {
		actual.push( value );
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var ctx;
	var str;

	str = 'Hello, world';
	ctx = {
		'count': 0
	};

	forEach( str, count, ctx );

	t.strictEqual( ctx.count, str.length, 'returns expected value' );
	t.end();

	function count() {
		this.count += 1; // eslint-disable-line no-invalid-this
	}
});
