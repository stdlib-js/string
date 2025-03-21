/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import altcase = require( './../../../base/altcase' );
import atob = require( './../../../base/atob' );
import base64ToUint8Array = require( './../../../base/base64-to-uint8array' );
import camelcase = require( './../../../base/camelcase' );
import capitalize = require( './../../../base/capitalize' );
import codePointAt = require( './../../../base/code-point-at' );
import constantcase = require( './../../../base/constantcase' );
import distances = require( './../../../base/distances' );
import dotcase = require( './../../../base/dotcase' );
import endsWith = require( './../../../base/ends-with' );
import first = require( './../../../base/first' );
import firstCodePoint = require( './../../../base/first-code-point' );
import firstGraphemeCluster = require( './../../../base/first-grapheme-cluster' );
import forEach = require( './../../../base/for-each' );
import forEachCodePoint = require( './../../../base/for-each-code-point' );
import forEachCodePointRight = require( './../../../base/for-each-code-point-right' );
import forEachGraphemeCluster = require( './../../../base/for-each-grapheme-cluster' );
import forEachRight = require( './../../../base/for-each-right' );
import formatInterpolate = require( './../../../base/format-interpolate' );
import formatTokenize = require( './../../../base/format-tokenize' );
import headercase = require( './../../../base/headercase' );
import invcase = require( './../../../base/invcase' );
import kebabcase = require( './../../../base/kebabcase' );
import last = require( './../../../base/last' );
import lastCodePoint = require( './../../../base/last-code-point' );
import lastGraphemeCluster = require( './../../../base/last-grapheme-cluster' );
import lpad = require( './../../../base/left-pad' );
import ltrim = require( './../../../base/left-trim' );
import lowercase = require( './../../../base/lowercase' );
import pascalcase = require( './../../../base/pascalcase' );
import percentEncode = require( './../../../base/percent-encode' );
import removeFirst = require( './../../../base/remove-first' );
import removeFirstCodePoint = require( './../../../base/remove-first-code-point' );
import removeFirstGraphemeCluster = require( './../../../base/remove-first-grapheme-cluster' );
import removeLast = require( './../../../base/remove-last' );
import removeLastCodePoint = require( './../../../base/remove-last-code-point' );
import removeLastGraphemeCluster = require( './../../../base/remove-last-grapheme-cluster' );
import repeat = require( './../../../base/repeat' );
import replace = require( './../../../base/replace' );
import replaceAfter = require( './../../../base/replace-after' );
import replaceAfterLast = require( './../../../base/replace-after-last' );
import replaceBefore = require( './../../../base/replace-before' );
import replaceBeforeLast = require( './../../../base/replace-before-last' );
import reverse = require( './../../../base/reverse' );
import reverseCodePoints = require( './../../../base/reverse-code-points' );
import reverseGraphemeClusters = require( './../../../base/reverse-grapheme-clusters' );
import rpad = require( './../../../base/right-pad' );
import rtrim = require( './../../../base/right-trim' );
import snakecase = require( './../../../base/snakecase' );
import startcase = require( './../../../base/startcase' );
import startsWith = require( './../../../base/starts-with' );
import stickycase = require( './../../../base/stickycase' );
import trim = require( './../../../base/trim' );
import truncateMiddle = require( './../../../base/truncate-middle' );
import uncapitalize = require( './../../../base/uncapitalize' );
import uppercase = require( './../../../base/uppercase' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Converts a string to alternate case.
	*
	* @param str - string to convert
	* @returns alternate-cased string
	*
	* @example
	* var str = ns.altcase( 'beep' );
	* // returns 'bEeP'
	*
	* @example
	* var str = ns.altcase( 'beep boop' );
	* // returns 'bEeP BoOp'
	*
	* @example
	* var str = ns.altcase( 'Hello World!' );
	* // returns 'hElLo wOrLd!'
	*/
	altcase: typeof altcase;

	/**
	* Decodes a string of data which has been encoded using Base64 encoding.
	*
	* @param str - binary string containing base64-encoded data
	* @returns an ASCII string containing decoded data
	*
	* @example
	* var out = ns.atob( 'SGVsbG8sIHdvcmxk' );
	* // returns 'Hello, world'
	*/
	atob: typeof atob;

	/**
	* Converts a base64-encoded string to a Uint8Array.
	*
	* ## Notes
	*
	* -   If provided a string containing non-ASCII characters, the function returns `null`.
	*
	* @param str - base64-encoded string
	* @returns output array
	*
	* @example
	* var string2buffer = require( '@stdlib/buffer/from-string' );
	*
	* var str = string2buffer( 'Hello World!' ).toString( 'base64' );
	* // returns 'SGVsbG8gV29ybGQh'
	*
	* var out = ns.base64ToUint8Array( str );
	* // returns <Uint8Array>[ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33 ]
	*/
	base64ToUint8Array: typeof base64ToUint8Array;

	/**
	* Converts a string to camel case.
	*
	* @param str - string to convert
	* @returns camel-cased string
	*
	* @example
	* var str = ns.camelcase( 'Hello World!' );
	* // returns 'helloWorld'
	*
	* @example
	* var str = ns.camelcase( 'foo_bar' );
	* // returns 'fooBar'
	*
	* @example
	* var str = ns.camelcase( 'foo-bar' );
	* // returns 'fooBar'
	*/
	camelcase: typeof camelcase;

	/**
	* Capitalizes the first character in a string.
	*
	* @param str - input string
	* @returns capitalized string
	*
	* @example
	* var out = ns.capitalize( 'last man standing' );
	* // returns 'Last man standing'
	*
	* @example
	* var out = ns.capitalize( 'presidential election' );
	* // returns 'Presidential election'
	*
	* @example
	* var out = ns.capitalize( 'javaScript' );
	* // returns 'JavaScript'
	*
	* @example
	* var out = ns.capitalize( 'Hidden Treasures' );
	* // returns 'Hidden Treasures'
	*/
	capitalize: typeof capitalize;

	/**
	* Returns a Unicode code point from a string at specified position.
	*
	* @param str - input string
	* @param idx - position
	* @param backward - backward iteration for low surrogates
	* @returns code point
	*
	* @example
	* var str = ns.codePointAt( 'अनुच्छेद', 2, false );
	* // returns 2369
	*
	* str = ns.codePointAt( '🌷', 1, true );
	* // returns 127799
	*/
	codePointAt: typeof codePointAt;

	/**
	* Converts a string to constant case.
	*
	* @param str - string to convert
	* @returns constant-cased string
	*
	* @example
	* var str = ns.constantcase( 'beep' );
	* // returns 'BEEP'
	*
	* @example
	* var str = ns.constantcase( 'beep boop' );
	* // returns 'BEEP_BOOP'
	*
	* @example
	* var str = ns.constantcase( 'Hello World!' );
	* // returns 'HELLO_WORLD'
	*/
	constantcase: typeof constantcase;

	/**
	* Implementations of various string similarity metrics.
	*/
	distances: typeof distances;

	/**
	* Converts a string to dot case.
	*
	* @param str - string to convert
	* @returns dot-cased string
	*
	* @example
	* var str = ns.dotcase( 'beepBoop' );
	* // returns 'beep.boop'
	*
	* @example
	* var str = ns.dotcase( 'beep boop' );
	* // returns 'beep.boop'
	*
	* @example
	* var str = ns.dotcase( 'Hello World!' );
	* // returns 'hello.world'
	*/
	dotcase: typeof dotcase;

	/**
	* Tests if a string ends with the characters of another string.
	*
	* ## Notes
	*
	* -   The last parameter restricts the search to a substring within the input string beginning from the leftmost character. If provided a negative value, `len` indicates to ignore the last `len` characters, and is thus equivalent to `str.length + len`.
	*
	* @param str - input string
	* @param search - search string
	* @param len - substring length
	* @returns boolean indicating if the input string ends with the search string
	*
	* @example
	* var bool = ns.endsWith( 'To be, or not to be, that is the question.', 'to be', 19 );
	* // returns true
	*
	* @example
	* var bool = ns.endsWith( 'To be, or not to be, that is the question.', 'to be', -23 );
	* // returns true
	*/
	endsWith: typeof endsWith;

	/**
	* Returns the first `n` UTF-16 code units of a string.
	*
	* @param str - input string
	* @param n - number of code units to return
	* @returns output string
	*
	* @example
	* var out = ns.first( 'last man standing', 1 );
	* // returns 'l'
	*
	* @example
	* var out = ns.first( 'presidential election', 1 );
	* // returns 'p'
	*
	* @example
	* var out = ns.first( 'JavaScript', 1 );
	* // returns 'J'
	*
	* @example
	* var out = ns.first( 'Hidden Treasures', 1 );
	* // returns 'H'
	*
	* @example
	* var out = ns.first( 'foo bar', 5 );
	* // returns 'foo b'
	*/
	first: typeof first;

	/**
	* Returns the first `n` Unicode code points of a string.
	*
	* @param str - input string
	* @param n - number of code points to return
	* @returns output string
	*
	* @example
	* var out = ns.firstCodePoint( 'last man standing', 1 );
	* // returns 'l'
	*
	* @example
	* var out = ns.firstCodePoint( 'presidential election', 1 );
	* // returns 'p'
	*
	* @example
	* var out = ns.firstCodePoint( 'JavaScript', 1 );
	* // returns 'J'
	*
	* @example
	* var out = ns.firstCodePoint( 'Hidden Treasures', 1 );
	* // returns 'H'
	*
	* @example
	* var out = ns.firstCodePoint( 'foo bar', 5 );
	* // returns 'foo b'
	*/
	firstCodePoint: typeof firstCodePoint;

	/**
	* Returns the first `n` grapheme clusters (i.e., user-perceived characters) of a string.
	*
	* @param str - input string
	* @param n - number of grapheme clusters to return
	* @returns output string
	*
	* @example
	* var out = ns.firstGraphemeCluster( 'last man standing', 1 );
	* // returns 'l'
	*
	* @example
	* var out = ns.firstGraphemeCluster( 'presidential election', 1 );
	* // returns 'p'
	*
	* @example
	* var out = ns.firstGraphemeCluster( 'JavaScript', 1 );
	* // returns 'J'
	*
	* @example
	* var out = ns.firstGraphemeCluster( 'Hidden Treasures', 1 );
	* // returns 'H'
	*
	* @example
	* var out = ns.firstGraphemeCluster( '🐶🐮🐷🐰🐸', 2 );
	* // returns '🐶🐮'
	*
	* @example
	* var out = ns.firstGraphemeCluster( 'foo bar', 5 );
	* // returns 'foo b'
	*/
	firstGraphemeCluster: typeof firstGraphemeCluster;

	/**
	* Invokes a function for each UTF-16 code unit in a string.
	*
	* ## Notes
	*
	* -   When invoked, the provided function is provided three arguments:
	*
	*     -   **value**: character.
	*     -   **index**: character index.
	*     -   **str**: input string.
	*
	* @param str - input string
	* @param clbk - function to invoke
	* @param thisArg - execution context
	* @returns input string
	*
	* @example
	* function log( value, index ) {
	*     console.log( '%d: %s', index, value );
	* }
	*
	* ns.forEach( 'Hello, World!', log );
	*/
	forEach: typeof forEach;

	/**
	* Invokes a function for each Unicode code point in a string.
	*
	* ## Notes
	*
	* -   When invoked, the provided function is provided three arguments:
	*
	*     -   **value**: code point.
	*     -   **index**: starting code point index.
	*     -   **str**: input string.
	*
	* @param str - input string
	* @param clbk - function to invoke
	* @param thisArg - execution context
	* @returns input string
	*
	* @example
	* function log( value, index ) {
	*     console.log( '%d: %s', index, value );
	* }
	*
	* ns.forEachCodePoint( 'Hello, World!', log );
	*/
	forEachCodePoint: typeof forEachCodePoint;

	/**
	* Invokes a function for each Unicode code point in a string, iterating from right to left.
	*
	* ## Notes
	*
	* -   When invoked, the provided function is provided three arguments:
	*
	*     -   **value**: code point.
	*     -   **index**: starting code point index.
	*     -   **str**: input string.
	*
	* @param str - input string
	* @param clbk - function to invoke
	* @param thisArg - execution context
	* @returns input string
	*
	* @example
	* function log( value, index ) {
	*     console.log( '%d: %s', index, value );
	* }
	*
	* ns.forEachCodePointRight( 'Hello, World!', log );
	*/
	forEachCodePointRight: typeof forEachCodePointRight;

	/**
	* Invokes a function for each grapheme cluster (i.e., user-perceived character) in a string.
	*
	* ## Notes
	*
	* -   When invoked, the provided function is provided three arguments:
	*
	*     -   **value**: grapheme cluster.
	*     -   **index**: starting grapheme cluster index.
	*     -   **str**: input string.
	*
	* @param str - input string
	* @param clbk - function to invoke
	* @param thisArg - execution context
	* @returns input string
	*
	* @example
	* function log( value, index ) {
	*     console.log( '%d: %s', index, value );
	* }
	*
	* ns.forEachGraphemeCluster( 'Hello, World!', log );
	*/
	forEachGraphemeCluster: typeof forEachGraphemeCluster;

	/**
	* Invokes a function for each UTF-16 code unit in a string, iterating from right to left.
	*
	* ## Notes
	*
	* -   When invoked, the provided function is provided three arguments:
	*
	*     -   **value**: character.
	*     -   **index**: character index.
	*     -   **str**: input string.
	*
	* @param str - input string
	* @param clbk - function to invoke
	* @param thisArg - execution context
	* @returns input string
	*
	* @example
	* function log( value, index ) {
	*     console.log( '%d: %s', index, value );
	* }
	*
	* forEach( 'Hello, World!', log );
	*/
	forEachRight: typeof forEachRight;

	/**
	* Generates string from a token array by interpolating values.
	*
	* @param tokens - string parts and format identifier objects
	* @param args - variable values
	* @throws invalid flags
	* @returns formatted string
	*
	* @example
	* var tokens = [ 'beep ', { 'specifier': 's' } ];
	* var out = ns.formatInterpolate( tokens, 'boop' );
	* // returns 'beep boop'
	*/
	formatInterpolate: typeof formatInterpolate;

	/**
	* Tokenizes a string into an array of string parts and format identifier objects.
	*
	* @param str - input string
	* @returns tokens
	*
	* @example
	* var tokens = ns.formatTokenize( 'Hello %s!' );
	* // returns [ 'Hello ', {...}, '!' ]
	*/
	formatTokenize: typeof formatTokenize;

	/**
	* Converts a string to HTTP header case.
	*
	* @param str - string to convert
	* @returns HTTP header-cased string
	*
	* @example
	* var str = ns.headercase( 'Hello World!' );
	* // returns 'Hello-World'
	*
	* @example
	* var str = ns.headercase( 'foo_bar' );
	* // returns 'Foo-Bar'
	*
	* @example
	* var str = ns.headercase( 'foo-bar' );
	* // returns 'Foo-Bar'
	*/
	headercase: typeof headercase;

	/**
	* Converts a string to inverse case.
	*
	* @param str - string to convert
	* @returns inverse-cased string
	*
	* @example
	* var str = ns.invcase( 'FOO bar' );
	* // returns 'foo BAR'
	*
	* @example
	* var str = ns.invcase( 'beep' );
	* // returns 'BEEP'
	*
	* @example
	* var str = ns.invcase( 'beep boop' );
	* // returns 'BEEP BOOP'
	*
	* @example
	* var str = ns.invcase( 'Hello World!' );
	* // returns 'hELLO wORLD!'
	*/
	invcase: typeof invcase;

	/**
	* Converts a string to kebab case.
	*
	* @param str - string to convert
	* @returns kebab-cased string
	*
	* @example
	* var str = ns.kebabcase( 'fooBar' );
	* // returns 'foo-bar'
	*
	* @example
	* var str = ns.kebabcase( 'foo_bar' );
	* // returns 'foo-bar'
	*
	* @example
	* var str = ns.kebabcase( 'foo-bar' );
	* // returns 'foo-bar'
	*/
	kebabcase: typeof kebabcase;

	/**
	* Returns the last `n` UTF-16 code units of a string.
	*
	* @param str - input string
	* @param n - number of code units to return
	* @returns output string
	*
	* @example
	* var s = ns.last( 'hello world', 1 );
	* // returns 'd'
	*
	* @example
	* var s = ns.last( 'foo', 2 );
	* // returns 'oo'
	*
	* @example
	* var s = ns.last( 'JavaScript', 6 );
	* // returns 'Script'
	*
	* @example
	* var s = ns.last( 'foo bar', 10 );
	* // returns 'foo bar'
	*/
	last: typeof last;

	/**
	* Returns the last `n` Unicode code points of a string.
	*
	* @param str - input string
	* @param n - number of code points to return
	* @returns output string
	*
	* @example
	* var out = ns.lastCodePoint( 'Hello World', 1 );
	* // returns 'd'
	*
	* @example
	* var out = ns.lastCodePoint( 'JavaScript', 6 );
	* // returns 'Script'
	*
	* @example
	* var out = ns.lastCodePoint( 'New', 5 );
	* // returns 'New'
	*
	* @example
	* var out = ns.lastCodePoint( 'अनुच्छेद', 1 );
	* // returns 'द'
	*/
	lastCodePoint: typeof lastCodePoint;

	/**
	* Returns the last `n` grapheme clusters (i.e., user-perceived characters) of a string.
	*
	* @param str - input string
	* @param n - number of grapheme clusters to return
	* @returns output string
	*
	* @example
	* var out = ns.lastGraphemeCluster( 'Hello World', 1 );
	* // returns 'd'
	*
	* @example
	* var out = ns.lastGraphemeCluster( 'Evening', 3 );
	* // returns 'ing'
	*
	* @example
	* var out = ns.lastGraphemeCluster( 'JavaScript', 6 );
	* // returns 'Script'
	*
	* @example
	* var out = ns.lastGraphemeCluster( '🐶🐮🐷🐰🐸', 2 );
	* // returns '🐰🐸'
	*
	* @example
	* var out = ns.lastGraphemeCluster( 'foo bar', 5 );
	* // returns 'o bar'
	*/
	lastGraphemeCluster: typeof lastGraphemeCluster;

	/**
	* Left pads a string such that the padded string has a length of at least `len`.
	*
	* ## Notes
	*
	* -   An output string is not guaranteed to have a length of exactly `len`, but to have a length of at least `len`. To generate a padded string having a length equal to `len`, post-process a padded string by trimming off excess characters.
	*
	* @param str - string to pad
	* @param len - minimum string length
	* @param pad - string used to pad
	* @returns padded string
	*
	* @example
	* var str = ns.lpad( 'a', 5, ' ' );
	* // returns '    a'
	*
	* @example
	* var str = ns.lpad( 'beep', 10, 'b' );
	* // returns 'bbbbbbbeep'
	*
	* @example
	* var str = ns.lpad( 'boop', 12, 'beep' );
	* // returns 'beepbeepboop'
	*/
	lpad: typeof lpad;

	/**
	* Trims whitespace characters from the beginning of a string.
	*
	* @param str - input string
	* @returns trimmed string
	*
	* @example
	* var out = ns.ltrim( '   Whitespace   ' );
	* // returns 'Whitespace   '
	*
	* @example
	* var out = ns.ltrim( '\t\t\tTabs\t\t\t' );
	* // returns 'Tabs\t\t\t'
	*
	* @example
	* var out = ns.ltrim( '\n\n\nNew Lines\n\n\n' );
	* // returns 'New Lines\n\n\n'
	*/
	ltrim: typeof ltrim;

	/**
	* Converts a string to lowercase.
	*
	* @param str - string to convert
	* @returns lowercase string
	*
	* @example
	* var str = ns.lowercase( 'bEEp' );
	* // returns 'beep'
	*/
	lowercase: typeof lowercase;

	/**
	* Converts a string to Pascal case.
	*
	* @param str - string to convert
	* @returns Pascal-cased string
	*
	* @example
	* var str = ns.pascalcase( 'Hello World!' );
	* // returns 'HelloWorld'
	*
	* @example
	* var str = ns.pascalcase( 'foo_bar' );
	* // returns 'FooBar'
	*
	* @example
	* var str = ns.pascalcase( 'foo-bar' );
	* // returns 'FooBar'
	*/
	pascalcase: typeof pascalcase;

	/**
	* Percent-encodes a UTF-16 encoded string according to [RFC 3986][1].
	*
	* [1]: https://tools.ietf.org/html/rfc3986#section-2.1
	*
	* @param str - string to percent-encode
	* @returns percent-encoded string
	*
	* @example
	* var str1 = 'Ladies + Gentlemen';
	*
	* var str2 = ns.percentEncode( str1 );
	* // returns 'Ladies%20%2B%20Gentlemen'
	*/
	percentEncode: typeof percentEncode;

	/**
	* Removes the first `n` UTF-16 code units of a string.
	*
	* @param str - input string
	* @param n - number of code units to remove
	* @returns output string
	*
	* @example
	* var out = ns.removeFirst( 'last man standing', 1 );
	* // returns 'ast man standing'
	*
	* @example
	* var out = ns.removeFirst( 'presidential election', 1 );
	* // returns 'residential election'
	*
	* @example
	* var out = ns.removeFirst( 'JavaScript', 1 );
	* // returns 'avaScript'
	*
	* @example
	* var out = ns.removeFirst( 'Hidden Treasures', 1 );
	* // returns 'idden Treasures'
	*
	* @example
	* var out = ns.removeFirst( 'foo bar', 5 );
	* // returns 'ar'
	*/
	removeFirst: typeof removeFirst;

	/**
	* Removes the first `n` Unicode code points of a string.
	*
	* @param str - input string
	* @param n - number of code points to remove
	* @returns output string
	*
	* @example
	* var out = ns.removeFirstCodePoint( 'last man standing', 1 );
	* // returns 'ast man standing'
	*
	* @example
	* var out = ns.removeFirstCodePoint( 'presidential election', 1 );
	* // returns 'residential election'
	*
	* @example
	* var out = ns.removeFirstCodePoint( 'JavaScript', 1 );
	* // returns 'avaScript'
	*
	* @example
	* var out = ns.removeFirstCodePoint( 'Hidden Treasures', 1 );
	* // returns 'idden Treasures'
	*
	* @example
	* var out = ns.removeFirstCodePoint( 'foo bar', 5 );
	* // returns 'ar'
	*/
	removeFirstCodePoint: typeof removeFirstCodePoint;

	/**
	* Removes the first `n` grapheme clusters (i.e., user-perceived characters) of a string.
	*
	* @param str - input string
	* @param n - number of grapheme clusters to remove
	* @returns output string
	*
	* @example
	* var out = ns.removeFirstGraphemeCluster( 'last man standing', 1 );
	* // returns 'ast man standing'
	*
	* @example
	* var out = ns.removeFirstGraphemeCluster( 'presidential election', 1 );
	* // returns 'residential election'
	*
	* @example
	* var out = ns.removeFirstGraphemeCluster( 'JavaScript', 1 );
	* // returns 'avaScript'
	*
	* @example
	* var out = ns.removeFirstGraphemeCluster( 'Hidden Treasures', 1 );
	* // returns 'idden Treasures'
	*
	* @example
	* var out = ns.removeFirstGraphemeCluster( '🐶🐮🐷🐰🐸', 2 );
	* // returns '🐷🐰🐸'
	*
	* @example
	* var out = ns.removeFirstGraphemeCluster( 'foo bar', 5 );
	* // returns 'ar'
	*/
	removeFirstGraphemeCluster: typeof removeFirstGraphemeCluster;

	/**
	* Removes the last `n` UTF-16 code units of a string.
	*
	* @param str - input string
	* @param n - number of code units to remove
	* @returns output string
	*
	* @example
	* var out = ns.removeLast( 'last man standing', 1 );
	* // returns 'last man standin'
	*
	* @example
	* var out = ns.removeLast( 'presidential election', 1 );
	* // returns 'presidential electio'
	*
	* @example
	* var out = ns.removeLast( 'JavaScript', 1 );
	* // returns 'JavaScrip'
	*
	* @example
	* var out = ns.removeLast( 'Hidden Treasures', 1 );
	* // returns 'Hidden Treasure'
	*
	* @example
	* var out = ns.removeLast( 'foo bar', 5 );
	* // returns 'fo'
	*/
	removeLast: typeof removeLast;

	/**
	* Removes the last `n` Unicode code points of a string.
	*
	* @param str - input string
	* @param n - number of code points to remove
	* @returns output string
	*
	* @example
	* var out = ns.removeLastCodePoint( 'last man standing', 1 );
	* // returns 'last man standin'
	*
	* @example
	* var out = ns.removeLastCodePoint( 'presidential election', 1 );
	* // returns 'presidential electio'
	*
	* @example
	* var out = ns.removeLastCodePoint( 'JavaScript', 1 );
	* // returns 'JavaScrip'
	*
	* @example
	* var out = ns.removeLastCodePoint( 'Hidden Treasures', 1 );
	* // returns 'Hidden Treasure'
	*
	* @example
	* var out = ns.removeLastCodePoint( 'foo bar', 5 );
	* // returns 'fo'
	*/
	removeLastCodePoint: typeof removeLastCodePoint;

	/**
	* Removes the last `n` grapheme clusters (i.e., user-perceived characters) of a string.
	*
	* @param str - input string
	* @param n - number of grapheme clusters to remove
	* @returns output string
	*
	* @example
	* var out = ns.removeLastGraphemeCluster( 'last man standing', 1 );
	* // returns 'last man standin'
	*
	* @example
	* var out = ns.removeLastGraphemeCluster( 'presidential election', 1 );
	* // returns 'presidential electio'
	*
	* @example
	* var out = ns.removeLastGraphemeCluster( 'JavaScript', 1 );
	* // returns 'JavaScrip'
	*
	* @example
	* var out = ns.removeLastGraphemeCluster( 'Hidden Treasures', 1 );
	* // returns 'Hidden Treasure'
	*
	* @example
	* var out = ns.removeLastGraphemeCluster( '🐶🐮🐷🐰🐸', 2 );
	* // returns '🐶🐮🐷'
	*
	* @example
	* var out = ns.removeLastGraphemeCluster( 'foo bar', 5 );
	* // returns 'fo'
	*/
	removeLastGraphemeCluster: typeof removeLastGraphemeCluster;

	/**
	* Repeats a string `n` times and returns the concatenated result.
	*
	* @param str - string to repeat
	* @param n - number of times to repeat the string
	* @returns repeated string
	*
	* @example
	* var str = ns.repeat( 'a', 5 );
	* // returns 'aaaaa'
	*
	* @example
	* var str = ns.repeat( '', 100 );
	* // returns ''
	*
	* @example
	* var str = ns.repeat( 'beep', 0 );
	* // returns ''
	*/
	repeat: typeof repeat;

	/**
	* Replaces search occurrences with a replacement string.
	*
	* @param str - input string
	* @param search - search expression
	* @param newval - replacement value or function
	* @returns new string containing replacement(s)
	*
	* @example
	* var str = 'Hello World';
	* var out = ns.replace( str, /world/i, 'Mr. President' );
	* // returns 'Hello Mr. President'
	*
	* @example
	* var capitalize = require( './../../../base/capitalize' );
	*
	* var str = 'Oranges and lemons say the bells of St. Clement\'s';
	*
	* function ns.replacer( match, p1 ) {
	*     return capitalize( p1 );
	* }
	*
	* var out = ns.replace( str, /([^\s]*)/gi, ns.replacer );
	* // returns 'Oranges And Lemons Say The Bells Of St. Clement\'s'
	*/
	replace: typeof replace;

	/**
	* Replaces the substring after the first occurrence of a specified search string.
	*
	* ## Notes
	*
	* -   If unable to find search string, the function returns the input string unchanged.
	* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last string character, with the last string character corresponding to `fromIndex = -1`.
	*
	* @param str - input string
	* @param search - search string
	* @param replacement - replacement string
	* @param fromIndex - index at which to start the search
	* @returns output string
	*
	* @example
	* var out = ns.replaceAfter( 'beep boop', ' ', 'foo', 0 );
	* // returns 'beep foo'
	*
	* @example
	* var out = ns.replaceAfter( 'beep boop', 'p', 'foo', 5 );
	* // returns 'beep boopfoo'
	*
	* @example
	* var out = ns.replaceAfter( 'Hello World!', '', 'foo', 0 );
	* // returns 'Hello World!'
	*
	* @example
	* var out = ns.replaceAfter( 'Hello World!', 'xyz', 'foo', 0 );
	* // returns 'Hello World!'
	*
	* @example
	* var out = ns.replaceAfter( 'beep boop', ' ', 'foo' , 5 );
	* // returns 'beep foo'
	*
	* @example
	* var out = ns.replaceAfter( 'beep boop beep baz', 'beep', 'foo' , 5 );
	* // returns 'beep boop beepfoo'
	*/
	replaceAfter: typeof replaceAfter;

	/**
	* Replaces the substring after the last occurrence of a specified search string.
	*
	* ## Notes
	*
	* -   The function scans a provided string from the starting index to the beginning of the string (i.e., backward).
	* -   If unable to find search string, the function returns the input string unchanged.
	* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last string character, with the last string character corresponding to `fromIndex = -1`.
	*
	* @param str - input string
	* @param search - search string
	* @param replacement - replacement string
	* @param fromIndex - index from which to start searching
	* @returns output string
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.replaceAfterLast( str, ' ', 'foo', str.length );
	* // returns 'beep foo'
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.replaceAfterLast( str, 'p', 'foo', str.length );
	* // returns 'beep boopfoo'
	*
	* @example
	* var str = 'Hello World!';
	* var out = ns.replaceAfterLast( str, '', 'foo',  str.length );
	* // returns 'Hello World!'
	*
	* @example
	* var str = 'Hello World!';
	* var out = ns.replaceAfterLast( str, 'xyz', 'foo', str.length );
	* // returns 'Hello World!'
	*
	* @example
	* var str = 'beep boop baz';
	* var out = ns.replaceAfterLast( str, 'p b', 'foo', str.length );
	* // returns 'beep boop bfoo'
	*
	* @example
	* var str = 'beep boop baz';
	* var out = ns.replaceAfterLast( str, 'p b', 'foo', 6 );
	* // returns 'beep bfoo'
	*/
	replaceAfterLast: typeof replaceAfterLast;

	/**
	* Replaces the substring before the first occurrence of a specified search string.
	*
	* ## Notes
	*
	* -   If unable to find search string, the function returns the input string unchanged.
	* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last string character, with the last string character corresponding to `fromIndex = -1`.
	*
	* @param str - input string
	* @param search - search string
	* @param replacement - replacement string
	* @param fromIndex - index at which to start the search
	* @returns output string
	*
	* @example
	* var out = ns.replaceBefore( 'beep boop', ' ', 'foo', 0 );
	* // returns 'foo boop'
	*
	* @example
	* var out = ns.replaceBefore( 'beep boop', 'p', 'foo', 5 );
	* // returns 'foop'
	*
	* @example
	* var out = ns.replaceBefore( 'Hello World!', '', 'foo', 0 );
	* // returns 'Hello world!'
	*
	* @example
	* var out = ns.replaceBefore( 'Hello World!', 'xyz', 'foo', 0 );
	* // returns 'Hello World!'
	*/
	replaceBefore: typeof replaceBefore;

	/**
	* Replaces the substring before the last occurrence of a specified search string.
	*
	* ## Notes
	*
	* -   The function scans a provided string from the starting index to the beginning of the string (i.e., backward).
	* -   If unable to find search string, the function returns the input string unchanged.
	* -   If `fromIndex` is less than zero, the starting index is resolved relative to the last string character, with the last string character corresponding to `fromIndex = -1`.
	*
	* @param str - input string
	* @param search - search string
	* @param replacement - replacement string
	* @param fromIndex - index from which to start searching
	* @returns output string
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.replaceBeforeLast( str, ' ', 'foo', str.length );
	* // returns 'foo boop'
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.replaceBeforeLast( str, 'p', 'foo', str.length );
	* // returns 'foop'
	*
	* @example
	* var str = 'Hello World!';
	* var out = ns.replaceBeforeLast( str, '', 'foo',  str.length );
	* // returns 'Hello World!'
	*
	* @example
	* var str = 'Hello World!';
	* var out = ns.replaceBeforeLast( str, 'xyz', 'foo', str.length );
	* // returns 'Hello World!'
	*
	* @example
	* var str = 'beep boop baz';
	* var out = ns.replaceBeforeLast( str, 'p b', 'foo', str.length );
	* // returns 'foop baz'
	*
	* @example
	* var str = 'beep boop baz';
	* var out = ns.replaceBeforeLast( str, 'p b', 'foo', 6 );
	* // returns 'foop boop baz'
	*/
	replaceBeforeLast: typeof replaceBeforeLast;

	/**
	* Reverses the UTF-16 code units of a string.
	*
	* @param str - input string
	* @returns output string
	*
	* @example
	* var out = ns.reverse( 'last man standing' );
	* // returns 'gnidnats nam tsal'
	*
	* @example
	* var out = ns.reverse( 'presidential election' );
	* // returns 'noitcele laitnediserp'
	*
	* @example
	* var out = ns.reverse( 'JavaScript' );
	* // returns 'tpircSavaJ'
	*
	* @example
	* var out = ns.reverse( 'Hidden Treasures' );
	* // returns 'serusaerT neddiH'
	*
	* @example
	* var out = ns.reverse( 'foo bar' );
	* // returns 'rab oof'
	*/
	reverse: typeof reverse;

	/**
	* Reverses the Unicode code points of a string.
	*
	* @param str - input string
	* @returns output string
	*
	* @example
	* var out = ns.reverseCodePoints( 'last man standing' );
	* // returns 'gnidnats nam tsal'
	*
	* @example
	* var out = ns.reverseCodePoints( 'presidential election' );
	* // returns 'noitcele laitnediserp'
	*
	* @example
	* var out = ns.reverseCodePoints( 'JavaScript' );
	* // returns 'tpircSavaJ'
	*
	* @example
	* var out = ns.reverseCodePoints( 'Hidden Treasures' );
	* // returns 'serusaerT neddiH'
	*
	* @example
	* var out = ns.reverseCodePoints( 'foo bar' );
	* // returns 'rab oof'
	*/
	reverseCodePoints: typeof reverseCodePoints;

	/**
	* Reverses the grapheme clusters (i.e., user-perceived characters) of a string.
	*
	* @param str - input string
	* @returns output string
	*
	* @example
	* var out = ns.reverseGraphemeClusters( 'last man standing' );
	* // returns 'gnidnats nam tsal'
	*
	* @example
	* var out = ns.reverseGraphemeClusters( 'presidential election' );
	* // returns 'noitcele laitnediserp'
	*
	* @example
	* var out = ns.reverseGraphemeClusters( 'JavaScript' );
	* // returns 'tpircSavaJ'
	*
	* @example
	* var out = ns.reverseGraphemeClusters( 'Hidden Treasures' );
	* // returns 'serusaerT neddiH'
	*
	* @example
	* var out = ns.reverseGraphemeClusters( '🐶🐮🐷🐰🐸' );
	* // returns '🐸🐰🐷🐮🐶'
	*
	* @example
	* var out = ns.reverseGraphemeClusters( 'foo bar' );
	* // returns 'rab oof'
	*/
	reverseGraphemeClusters: typeof reverseGraphemeClusters;

	/**
	* Right pads a string such that the padded string has a length of at least `len`.
	*
	* ## Notes
	*
	* -   An output string is not guaranteed to have a length of exactly `len`, but to have a length of at least `len`. To generate a padded string having a length equal to `len`, post-process a padded string by trimming off excess characters.
	*
	* @param str - string to pad
	* @param len - minimum string length
	* @param pad - string used to pad
	* @returns padded string
	*
	* @example
	* var str = ns.rpad( 'a', 5, ' ' );
	* // returns 'a    '
	*
	* @example
	* var str = ns.rpad( 'beep', 10, 'b' );
	* // returns 'beepbbbbbb'
	*
	* @example
	* var str = ns.rpad( 'boop', 12, 'beep' );
	* // returns 'boopbeepbeep'
	*/
	rpad: typeof rpad;

	/**
	* Trims whitespace from the end of a string.
	*
	* @param str - input string
	* @returns trimmed string
	*
	* @example
	* var out = ns.rtrim( '   Whitespace   ' );
	* // returns '   Whitespace'
	*
	* @example
	* var out = ns.rtrim( '\t\t\tTabs\t\t\t' );
	* // returns '\t\t\tTabs'
	*
	* @example
	* var out = ns.rtrim( '\n\n\nNew Lines\n\n\n' );
	* // returns '\n\n\nNew Lines'
	*/
	rtrim: typeof rtrim;

	/**
	* Converts a string to snake case.
	*
	* @param str - string to convert
	* @returns snake-cased string
	*
	* @example
	* var str = ns.snakecase( 'fooBar' );
	* // returns 'foo_bar'
	*
	* @example
	* var str = ns.snakecase( 'foo-bar' );
	* // returns 'foo_bar'
	*
	* @example
	* var str = ns.snakecase( 'foo_bar' );
	* // returns 'foo_bar'
	*/
	snakecase: typeof snakecase;

	/**
	* Capitalizes the first letter of each word in an input string.
	*
	* @param str - string to convert
	* @returns start-cased string
	*
	* @example
	* var str = ns.startcase( 'beep boop foo bar' );
	* // returns 'Beep Boop Foo Bar'
	*/
	startcase: typeof startcase;

	/**
	* Tests if a string starts with the characters of another string.
	*
	* ## Notes
	*
	* -   If provided a negative `position`, the search starting position is resolved relative to the end of the string. For example, if provided the input string `'beep boop'` and a `position` equal to `-2`, the starting position resolves to `7`.
	*
	* @param str - input string
	* @param search - search string
	* @param position - position at which to start searching
	* @returns boolean indicating if the input string starts with the search string
	*
	* @example
	* var bool = ns.startsWith( 'Remember the story I used to tell you when you were a boy?', 'Remember', 0 );
	* // returns true
	*
	* @example
	* var bool = ns.startsWith( 'Remember the story I used to tell you when you were a boy?', 'Remember, remember', 0 );
	* // returns false
	*
	* @example
	* var bool = ns.startsWith( 'To be, or not to be, that is the question.', 'To be', 0 );
	* // returns true
	*
	* @example
	* var bool = ns.startsWith( 'To be, or not to be, that is the question.', 'to be', 0 );
	* // returns false
	*
	* @example
	* var bool = ns.startsWith( 'To be, or not to be, that is the question.', 'to be', 14 );
	* // returns true
	*
	* @example
	* var bool = ns.startsWith( 'To be, or not to be, that is the question.', 'quest', -9 );
	* // returns true
	*/
	startsWith: typeof startsWith;

	/**
	* Converts a string to "sticky caps" case.
	*
	* @param str - input string
	* @param p - probability of capitalization (default: 0.5)
	* @returns sticky case string
	*
	* @example
	* var str = ns.stickycase( 'hello world' );
	* // returns <string>
	*
	* @example
	* var str = ns.stickycase( 'hello world', 0.2 );
	* // returns <string>
	*
	* @example
	* var str = ns.stickycase( 'hello world', 0.8 );
	* // returns <string>
	*/
	stickycase: typeof stickycase;

	/**
	* Trims whitespace characters from the beginning and end of a string.
	*
	* @param str - input string
	* @returns trimmed string
	*
	* @example
	* var out = ns.trim( '   Whitespace   ' );
	* // returns 'Whitespace'
	*
	* @example
	* var out = ns.trim( '\t\t\tTabs\t\t\t' );
	* // returns 'Tabs'
	*
	* @example
	* var out = ns.trim( '\n\n\nNew Lines\n\n\n' );
	* // returns 'New Lines'
	*/
	trim: typeof trim;

	/**
	* Truncates the middle UTF-16 code units of a string to return a string having a specified length.
	*
	* @param str - input string
	* @param len - output string length (including sequence)
	* @param seq - custom replacement sequence
	* @returns truncated string
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.truncateMiddle( str, 5, '...' );
	* // returns 'b...p'
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.truncateMiddle( str, 5, '>>>' );
	* // returns 'b>>>p'
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.truncateMiddle( str, 10, '...' );
	* // returns 'beep boop'
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.truncateMiddle( str, 0, '...' );
	* // returns ''
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.truncateMiddle( str, 2, '...' );
	* // returns '..'
	*/
	truncateMiddle: typeof truncateMiddle;

	/**
	* Uncapitalizes the first character of a string.
	*
	* @param str - input string
	* @returns input string with first character converted to lowercase
	*
	* @example
	* var out = ns.uncapitalize( 'Last man standing' );
	* // returns 'last man standing'
	*
	* @example
	* var out = ns.uncapitalize( 'Presidential election' );
	* // returns 'presidential election'
	*
	* @example
	* var out = ns.uncapitalize( 'JavaScript' );
	* // returns 'javaScript'
	*
	* @example
	* var out = ns.uncapitalize( 'Hidden Treasures' );
	* // returns 'hidden Treasures'
	*/
	uncapitalize: typeof uncapitalize;

	/**
	* Converts a string to uppercase.
	*
	* @param str - string to convert
	* @returns uppercase string
	*
	* @example
	* var str = ns.uppercase( 'bEEp' );
	* // returns 'BEEP'
	*/
	uppercase: typeof uppercase;
}

/**
* Base (i.e., lower-level) string functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
