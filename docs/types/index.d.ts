/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import acronym = require( './../../acronym' );
import base = require( './../../base' );
import camelcase = require( './../../camelcase' );
import capitalize = require( './../../capitalize' );
import codePointAt = require( './../../code-point-at' );
import constantcase = require( './../../constantcase' );
import dotcase = require( './../../dotcase' );
import endsWith = require( './../../ends-with' );
import first = require( './../../first' );
import forEach = require( './../../for-each' );
import format = require( './../../format' );
import fromCodePoint = require( './../../from-code-point' );
import headercase = require( './../../headercase' );
import kebabcase = require( './../../kebabcase' );
import last = require( './../../last' );
import lpad = require( './../../left-pad' );
import ltrim = require( './../../left-trim' );
import ltrimN = require( './../../left-trim-n' );
import lowercase = require( './../../lowercase' );
import nextCodePointIndex = require( './../../next-code-point-index' );
import nextGraphemeClusterBreak = require( './../../next-grapheme-cluster-break' );
import numGraphemeClusters = require( './../../num-grapheme-clusters' );
import num2words = require( './../../num2words' );
import pad = require( './../../pad' );
import pascalcase = require( './../../pascalcase' );
import percentEncode = require( './../../percent-encode' );
import prevGraphemeClusterBreak = require( './../../prev-grapheme-cluster-break' );
import removeFirst = require( './../../remove-first' );
import removeLast = require( './../../remove-last' );
import removePunctuation = require( './../../remove-punctuation' );
import removeUTF8BOM = require( './../../remove-utf8-bom' );
import removeWords = require( './../../remove-words' );
import repeat = require( './../../repeat' );
import replace = require( './../../replace' );
import replaceBefore = require( './../../replace-before' );
import reverse = require( './../../reverse' );
import rpad = require( './../../right-pad' );
import rtrim = require( './../../right-trim' );
import rtrimN = require( './../../right-trim-n' );
import snakecase = require( './../../snakecase' );
import splitGraphemeClusters = require( './../../split-grapheme-clusters' );
import startcase = require( './../../startcase' );
import startsWith = require( './../../starts-with' );
import substringAfter = require( './../../substring-after' );
import substringAfterLast = require( './../../substring-after-last' );
import substringBefore = require( './../../substring-before' );
import substringBeforeLast = require( './../../substring-before-last' );
import graphemeClusters2iterator = require( './../../to-grapheme-cluster-iterator' );
import graphemeClusters2iteratorRight = require( './../../to-grapheme-cluster-iterator-right' );
import toWellFormed = require( './../../to-well-formed' );
import trim = require( './../../trim' );
import truncate = require( './../../truncate' );
import truncateMiddle = require( './../../truncate-middle' );
import uncapitalize = require( './../../uncapitalize' );
import uppercase = require( './../../uppercase' );
import utf16ToUTF8Array = require( './../../utf16-to-utf8-array' );

/**
* Interface describing the `string` namespace.
*/
interface Namespace {
	/**
	* Generates an acronym for a given string.
	*
	* @param str - input string
	* @param options - function options
	* @param options.stopwords - custom stop words
	* @returns generated acronym
	*
	* @example
	* var out = ns.acronym( 'the quick brown fox' );
	* // returns 'QBF'
	*
	* @example
	* var out = ns.acronym( 'Hard-boiled eggs' );
	* // returns 'HBE'
	*
	* @example
	* var out = ns.acronym( 'National Association of Securities Dealers Automated Quotation' );
	* // returns 'NASDAQ'
	*/
	acronym: typeof acronym;

	/**
	* Base (i.e., lower-level) string functions.
	*/
	base: typeof base;

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
	* @param backward - backward iteration for low surrogates (default: false)
	* @throws second argument must be an integer
	* @throws second argument must be a valid index
	* @returns code point
	*
	* @example
	* var str = ns.codePointAt( 'अनुच्छेद', 2 );
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
	* Converts a string to dot case.
	*
	* @param str - string to convert
	* @returns dot-cased string
	*
	* @example
	* var str = ns.dotcase( 'Hello World!' );
	* // returns 'hello.world'
	*
	* @example
	* var str = ns.dotcase( 'foo_bar' );
	* // returns 'foo.bar'
	*
	* @example
	* var str = ns.dotcase( 'foo-bar' );
	* // returns 'foo.bar'
	*/
	dotcase: typeof dotcase;

	/**
	* Tests if a string ends with the characters of another string.
	*
	* ## Notes
	*
	* -   The last parameter restricts the search to a substring within the input string beginning from the leftmost character. If provided a negative value, `len` indicates to ignore the last `len` characters, returning the same output as `str.length + len`.
	*
	* @param str - input string
	* @param search - search string
	* @param len - substring length (default: str.length)
	* @returns boolean indicating if the input string ends with the search string
	*
	* @example
	* var bool = ns.endsWith( 'Remember the story I used to tell you when you were a boy?', 'boy?' );
	* // returns true
	*
	* @example
	* var bool = ns.endsWith( 'Remember the story I used to tell you when you were a boy?', 'Boy?' );
	* // returns false
	*
	* @example
	* var bool = ns.endsWith( 'To be, or not to be, that is the question.', 'to be' );
	* // returns false
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
	* Returns the first character(s) of a string.
	*
	* @param str - input string
	* @param n - number of characters to return (default: 1)
	* @returns updated string
	*
	* @example
	* var out = ns.first( 'last man standing' );
	* // returns 'l'
	*
	* @example
	* var out = ns.first( 'presidential election' );
	* // returns 'p'
	*
	* @example
	* var out = ns.first( 'javaScript' );
	* // returns 'j'
	*
	* @example
	* var out = ns.first( 'Hidden Treasures' );
	* // returns 'H'
	*
	* @example
	* var out = ns.first( '🐶🐮🐷🐰🐸', 2 );
	* // returns '🐶🐮'
	*
	* @example
	* var out = ns.first( 'foo bar', 5 );
	* // returns 'foo b'
	*/
	first: typeof first;

	/**
	* Invokes a function for each character in a string.
	*
	* ## Notes
	*
	* -   When invoked, the provided function is provided three arguments:
	*
	*     -   **value**: character.
	*     -   **index**: starting character index.
	*     -   **str**: input string.
	*
	* @param str - input string
	* @param options - options
	* @param clbk - function to invoke
	* @param thisArg - execution context
	* @returns input string
	*
	* @example
	* function log( value, index ) {
	*     console.log( '%d: %s', index, value );
	* }
	*
	* var opts = {
	*     'mode': 'code_point'
	* };
	* ns.forEach( 'Hello, World!', opts, log );
	*/
	forEach: typeof forEach;

	/**
	* Inserts supplied variable values into a format string.
	*
	* @param str - input string
	* @param args - variable values
	* @throws invalid flags
	* @returns formatted string
	*
	* @example
	* var str = ns.format( 'Hello %s!', 'world' );
	* // returns 'Hello world!'
	*
	* @example
	* var str = ns.format( 'Pi: ~%.2f', 3.141592653589793 );
	* // returns 'Pi: ~3.14'
	*/
	format: typeof format;

	/**
	* Creates a string from a sequence of Unicode code points.
	*
	* ## Notes
	*
	* -   In addition to multiple arguments, the function also supports providing an array-like object as a single argument containing a sequence of Unicode code points.
	*
	* @param pt - sequence of code points
	* @throws must provide either an array-like object of code points or one or more code points as separate arguments
	* @throws a code point must be a nonnegative integer
	* @throws must provide a valid Unicode code point
	* @returns created string
	*
	* @example
	* var str = ns.fromCodePoint( 9731 );
	* // returns '☃'
	*/
	fromCodePoint: typeof fromCodePoint;

	/**
	* Converts a string to HTTP header case.
	*
	* @param str - string to convert
	* @returns HTTP header-cased string
	*
	* @example
	*  var str = ns.headercase( 'Hello World!' );
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
	* Returns the last character(s) of a string.
	*
	* @param str - input string
	* @param n - number of characters to return (default: 1)
	* @returns updated string
	*
	* @example
	* var out = ns.last( 'ns.last man standing' );
	* // returns 'g'
	*
	* @example
	* var out = ns.last( 'presidential election' );
	* // returns 'n'
	*
	* @example
	* var out = ns.last( 'javaScript' );
	* // returns 't'
	*
	* @example
	* var out = ns.last( 'Hidden Treasures' );
	* // returns 's'
	*
	* @example
	* var out = ns.last( '🐶🐮🐷🐰🐸', 2 );
	* // returns '🐰🐸'
	*
	* @example
	* var out = ns.last( 'foo bar', 3 );
	* // returns 'bar'
	*/
	last: typeof last;

	/**
	* Left pads a string such that the padded string has a length of at least `len`.
	*
	* ## Notes
	*
	* -   An output string is not guaranteed to have a length of exactly `len`, but to have a length of at least `len`. To generate a padded string having a length equal to `len`, post-process a padded string by trimming off excess characters.
	*
	* @param str - string to pad
	* @param len - minimum string length
	* @param pad - string used to pad (default: ' ')
	* @throws second argument must be a nonnegative integer
	* @throws padding must have a length greater than `0`
	* @returns padded string
	*
	* @example
	* var str = ns.lpad( 'a', 5 );
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
	* Trims `n` characters from the beginning of a string.
	*
	* @param str - input string
	* @param n - number of characters to trim
	* @param chars - characters to trim (default: whitespace characters)
	* @returns trimmed string
	*
	* @example
	* var str = '   abc   ';
	* var out = ns.ltrimN( str, 2 );
	* // returns ' abc   '
	*
	* @example
	* var str = '   abc   ';
	* var out = ns.ltrimN( str, str.length );
	* // returns 'abc   '
	*
	* @example
	* var str = '~~abc!~~';
	* var out = ns.ltrimN( str, str.length, [ '~', '!' ] );
	* // returns 'abc!~~'
	*
	* @example
	* var str = '🤖👨🏼‍🎨🤖👨🏼‍🎨🤖👨🏼‍🎨';
	* var out = ns.ltrimN( str, str.length, '👨🏼‍🎨🤖' );
	* // returns ''
	*/
	ltrimN: typeof ltrimN;

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
	* Returns the position of the next Unicode code point in a string after a specified position.
	*
	* @param str - input string
	* @param fromIndex - position (default: 0)
	* @throws first argument must be a string
	* @throws second argument must be an integer
	* @returns next code point position
	*
	* @example
	* var out = ns.nextCodePointIndex( '𐒻𐓟𐒻𐓟', 0 );
	* // returns 2
	*
	* out = ns.nextCodePointIndex( '🌷' );
	* // returns -1
	*/
	nextCodePointIndex: typeof nextCodePointIndex;

	/**
	* Returns the next extended grapheme cluster break in a string after a specified position.
	*
	* @param str - input string
	* @param fromIndex - position (default: 0)
	* @throws first argument must be a string
	* @throws second argument must be an integer
	* @returns next grapheme break position
	*
	* @example
	* var out = ns.nextGraphemeClusterBreak( 'अनुच्छेद', 1 );
	* // returns 3
	*
	* out = ns.nextGraphemeClusterBreak( '🌷' );
	* // returns -1
	*/
	nextGraphemeClusterBreak: typeof nextGraphemeClusterBreak;

	/**
	* Returns the number of grapheme clusters in a string.
	*
	* @param str - input string
	* @returns number of grapheme clusters
	*
	* @example
	* var out = ns.numGraphemeClusters( 'last man standing' );
	* // returns 17
	*
	* @example
	* var out = ns.numGraphemeClusters( 'presidential election' );
	* // returns 21
	*
	* @example
	* var out = ns.numGraphemeClusters( '🌷' );
	* // returns 1
	*
	* @example
	* var out = ns.numGraphemeClusters( 'अनुच्छेद' );
	* // returns 5
	*/
	numGraphemeClusters: typeof numGraphemeClusters;

	/**
	* Converts a number to a word representation.
	*
	* @param num - number to convert
	* @param options - options
	* @param options.lang - language code (default: 'en')
	* @returns string representation of a number
	*
	* @example
	* var out = ns.num2words( 12 );
	* // returns 'twelve'
	*
	* @example
	* var out = ns.num2words( 21.8 );
	* // returns 'twenty-one point eight'
	*
	* @example
	* var out = ns.num2words( 1234 );
	* // returns 'one thousand two hundred thirty-four'
	*
	* @example
	* var out = ns.num2words( 100381 );
	* // returns 'one hundred thousand three hundred eighty-one'
	*/
	num2words: typeof num2words;

	/**
	* Pads a string such that the padded string has a length of `len`.
	*
	* @param str - string to pad
	* @param len - string length
	* @param options - function options
	* @param options.lpad - string used to left pad (default: '')
	* @param options.rpad - string used to right pad (default: ' ')
	* @param options.centerRight - boolean indicating whether to center right in the event of a tie (default: false)
	* @throws second argument must be a nonnegative integer
	* @throws must provide valid options
	* @throws at least one padding must have a length greater than `0`
	* @returns padded string
	*
	* @example
	* var str = ns.pad( 'a', 5 );
	* // returns 'a    '
	*
	* @example
	* var str = ns.pad( 'a', 10, {
	*     'lpad': 'b'
	* });
	* // returns 'bbbbbbbbba'
	*
	* @example
	* var str = ns.pad( 'a', 12, {
	*     'rpad': 'b'
	* });
	* // returns 'abbbbbbbbbbb'
	*
	* @example
	* var opts = {
	*     'lpad': 'a',
	*     'rpad': 'c'
	* };
	* var str = ns.pad( 'b', 10, opts );
	* // returns 'aaaabccccc'
	*
	* @example
	* var opts = {
	*     'lpad': 'a',
	*     'rpad': 'c',
	*     'centerRight': true
	* };
	* var str = ns.pad( 'b', 10, opts );
	* // returns 'aaaaabcccc'
	*/
	pad: typeof pad;

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
	* Returns the previous extended grapheme cluster break in a string before a specified position.
	*
	* @param str - input string
	* @param fromIndex - position (default: str.length-1)
	* @throws first argument must be a string
	* @throws second argument must be an integer
	* @returns previous grapheme break position
	*
	* @example
	* var out = ns.prevGraphemeClusterBreak( 'अनुच्छेद', 2 );
	* // returns 0
	*
	* out = ns.prevGraphemeClusterBreak( '🌷', 1 );
	* // returns -1
	*/
	prevGraphemeClusterBreak: typeof prevGraphemeClusterBreak;

	/**
	* Removes the first character(s) of a string.
	*
	* @param str - input string
	* @param n - number of characters to remove (default: 1)
	* @returns updated string
	*
	* @example
	* var out = ns.removeFirst( 'last man standing' );
	* // returns 'ast man standing'
	*
	* @example
	* var out = ns.removeFirst( 'presidential election' );
	* // returns 'residential election'
	*
	* @example
	* var out = ns.removeFirst( 'JavaScript' );
	* // returns 'avaScript'
	*
	* @example
	* var out = ns.removeFirst( 'Hidden Treasures' );
	* // returns 'idden Treasures'
	*
	* @example
	* var out = ns.removeFirst( '🐶🐮🐷🐰🐸', 2 );
	* // returns '🐷🐰🐸'
	*
	* @example
	* var out = ns.removeFirst( 'foo bar', 4 );
	* // returns 'bar'
	*/
	removeFirst: typeof removeFirst;

	/**
	* Removes the last character(s) of a string.
	*
	* @param str - input string
	* @param n - number of characters to remove (default: 1)
	* @returns updated string
	*
	* @example
	* var out = ns.removeLast( 'last man standing' );
	* // returns 'last man standin'
	*
	* @example
	* var out = ns.removeLast( 'presidential election' );
	* // returns 'presidential electio'
	*
	* @example
	* var out = ns.removeLast( 'javaScript' );
	* // returns 'javaScrip'
	*
	* @example
	* var out = ns.removeLast( 'Hidden Treasures' );
	* // returns 'Hidden Treasure'
	*
	* @example
	* var out = ns.removeLast( 'leader', 2 );
	* // returns 'lead'
	*/
	removeLast: typeof removeLast;

	/**
	* Removes punctuation characters from a string.
	*
	* @param str - input string
	* @returns output string
	*
	* @example
	* var str = 'Sun Tzu said: "A leader leads by example not by force."';
	* var out = ns.removePunctuation( str );
	* // returns 'Sun Tzu said A leader leads by example not by force'
	*
	* @example
	* var str = 'Double, double, toil and trouble; Fire burn, and cauldron bubble!';
	* var out = ns.removePunctuation( str );
	* // returns 'Double double toil and trouble Fire burn and cauldron bubble'
	*
	* @example
	* var str = 'This module removes these characters: `{}[]:,!/<>().;~|?\'"';
	* var out = ns.removePunctuation( str );
	* // returns 'This module removes these characters '
	*/
	removePunctuation: typeof removePunctuation;

	/**
	* Removes a UTF-8 byte order mark (BOM) from the beginning of a string.
	*
	* ## Notes
	*
	* -   A UTF-8 byte order mark ([BOM][1]) is the byte sequence `0xEF,0xBB,0xBF`.
	* -   To convert a UTF-8 encoded `Buffer` to a `string`, the `Buffer` must be converted to [UTF-16][2]. The BOM thus gets converted to the single 16-bit code point `'\ufeff'` (UTF-16 BOM).
	*
	* [1]: https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8
	* [2]: http://es5.github.io/#x4.3.16
	*
	* @param str - input string
	* @returns string with BOM removed
	*
	* @example
	* var str = ns.removeUTF8BOM( '\ufeffbeep' );
	* // returns 'beep'
	*/
	removeUTF8BOM: typeof removeUTF8BOM;

	/**
	* Removes a list of words from a string.
	*
	* @param str - input string
	* @param words - array of words to be removed
	* @param ignoreCase - boolean indicating whether to perform a case-insensitive operation (default: false)
	* @returns output string
	*
	* @example
	* var str = 'beep boop Foo bar';
	* var out = ns.removeWords( str, [ 'boop', 'foo' ] );
	* // returns 'beep  Foo bar'
	*
	* @example
	* var str = 'beep boop Foo bar';
	* var out = ns.removeWords( str, [ 'boop', 'foo' ], true );
	* // returns 'beep   bar'
	*/
	removeWords: typeof removeWords;

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
	* ## Notes
	*
	* -   When provided a `string` as the `search` value, the function replaces **all** occurrences. To remove only the first match, use a regular expression.
	*
	* @param str - input string
	* @param search - search expression
	* @param newval - replacement value or function
	* @returns new string containing replacement(s)
	*
	* @example
	* var str = 'beep';
	* var out = ns.replace( str, 'e', 'o' );
	* // returns 'boop'
	*
	* @example
	* var str = 'Hello World';
	* var out = ns.replace( str, /world/i, 'Mr. President' );
	* // returns 'Hello Mr. President'
	*
	* @example
	* var capitalize = require( './../../capitalize' );
	*
	* var str = 'Oranges and lemons say the bells of St. Clement\'s';
	*
	* function ns.replacer( match, p1 ) {
	*     return capitalize( p1 );
	* }
	*
	* var out = ns.replace( str, /([^\s]*)/gi, ns.replacer);
	* // returns 'Oranges And Lemons Say The Bells Of St. Clement\'s'
	*/
	replace: typeof replace;

	/**
	* Replaces the substring before the first occurrence of a specified search string.
	*
	* @param str - input string
	* @param search - search string
	* @param replacement - replacement string
	* @returns output string
	*
	* @example
	* var out = ns.replaceBefore( 'beep boop', ' ', 'foo' );
	* // returns 'foo boop'
	*
	* @example
	* var out = ns.replaceBefore( 'beep boop', 'p', 'foo' );
	* // returns 'foop boop'
	*
	* @example
	* var out = ns.replaceBefore( 'Hello World!', '', 'foo' );
	* // returns 'Hello world!'
	*
	* @example
	* var out = ns.replaceBefore( 'Hello World!', 'xyz', 'foo' );
	* // returns 'Hello World!'
	*/
	replaceBefore: typeof replaceBefore;

	/**
	* Reverses a string.
	*
	* @param str - input string
	* @param options - options
	* @returns reversed string
	*
	* @example
	* var out = ns.reverse( 'last man standing', {
	*     'mode': 'code_unit'
	* });
	* // returns 'gnidnats nam tsal'
	*
	* @example
	* var out = ns.reverse( '🐶🐮🐷🐰🐸', {
	*     'mode': 'grapheme'
	* });
	* // returns '🐸🐰🐷🐮🐶'
	*/
	reverse: typeof reverse;

	/**
	* Right pads a string such that the padded string has a length of at least `len`.
	*
	* ## Notes
	*
	* -   An output string is not guaranteed to have a length of exactly `len`, but to have a length of at least `len`. To generate a padded string having a length equal to `len`, post-process a padded string by trimming off excess characters.
	*
	* @param str - string to pad
	* @param len - minimum string length
	* @param pad - string used to pad (default: ' ')
	* @throws second argument must be a nonnegative integer
	* @throws padding must have a length greater than `0`
	* @returns padded string
	*
	* @example
	* var str = ns.rpad( 'a', 5 );
	* // returns 'a    '
	*
	* @example
	* var str = ns.rpad( 'beep', 10, 'p' );
	* // returns 'beeppppppp'
	*
	* @example
	* var str = ns.rpad( 'beep', 12, 'boop' );
	* // returns 'beepboopboop'
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
	* Trims `n` characters from the end of a string.
	*
	* @param str - input string
	* @param n - number of characters to trim
	* @param chars - characters to trim (default: whitespace characters)
	* @returns trimmed string
	*
	* @example
	* var str = '   abc   ';
	* var out = ns.rtrimN( str, 2 );
	* // returns '   abc '
	*
	* @example
	* var str = '   abc   ';
	* var out = ns.rtrimN( str, str.length );
	* // returns '   abc'
	*
	* @example
	* var str = '~~abc!~~';
	* var out = ns.rtrimN( str, str.length, [ '~', '!' ] );
	* // returns '~~abc'
	*
	* @example
	* var str = '🤖👨🏼‍🎨🤖👨🏼‍🎨🤖👨🏼‍🎨';
	* var out = ns.rtrimN( str, str.length, '👨🏼‍🎨🤖' );
	* // returns ''
	*/
	rtrimN: typeof rtrimN;

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
	* Splits a string by its grapheme cluster breaks.
	*
	* @param str - input string
	* @returns array of grapheme clusters
	*
	* @example
	* var out = ns.splitGraphemeClusters( 'café' );
	* // returns [ 'c', 'a', 'f', 'é' ]
	*
	* @example
	* var out = ns.splitGraphemeClusters( '🍕🍕🍕' );
	* // returns [ '🍕', '🍕', '🍕' ]
	*/
	splitGraphemeClusters: typeof splitGraphemeClusters;

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
	* @param position - position at which to start searching (default: 0)
	* @returns boolean indicating if the input string starts with the search string
	*
	* @example
	* var bool = ns.startsWith( 'Remember the story I used to tell you when you were a boy?', 'Remember' );
	* // returns true
	*
	* @example
	* var bool = ns.startsWith( 'Remember the story I used to tell you when you were a boy?', 'Remember, remember' );
	* // returns false
	*
	* @example
	* var bool = ns.startsWith( 'To be, or not to be, that is the question.', 'To be' );
	* // returns true
	*
	* @example
	* var bool = ns.startsWith( 'To be, or not to be, that is the question.', 'to be' );
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
	* Returns the part of a string after a specified substring.
	*
	* @param str - input string
	* @param search - search string
	* @param fromIndex - index at which to start the search (default: 0)
	* @returns substring
	*
	* @example
	* var out = ns.substringAfter( 'Hello, world!', ', ' );
	* // returns 'world!'
	*
	* @example
	* var out = ns.substringAfter( 'beep boop', 'beep' );
	* // returns ' boop'
	*
	* @example
	* var out = ns.substringAfter( 'beep boop', 'boop' );
	* // returns ''
	*
	* @example
	* var out = ns.substringAfter( 'beep boop', 'xyz' );
	* // returns ''
	*
	* @example
	* var out = ns.substringAfter( 'beep boop', 'beep', 5 );
	* // returns ''
	*
	* @example
	* var out = ns.substringAfter( 'beep boop beep baz', 'beep', 5 );
	* // returns ' baz'
	*/
	substringAfter: typeof substringAfter;

	/**
	* Returns the part of a string after the last occurrence of a specified substring.
	*
	* @param str - input string
	* @param search - search value
	* @param fromIndex - index of last character to be considered beginning of a match (default: `str.length`)
	* @returns substring
	*
	* @example
	* var out = ns.substringAfterLast( 'beep boop', 'b' );
	* // returns 'oop'
	*
	* @example
	* var out = ns.substringAfterLast( 'beep boop', 'o' );
	* // returns 'p'
	*
	* @example
	* var out = ns.substringAfterLast( 'Hello World', 'o' );
	* // returns 'rld'
	*
	* @example
	* var out = ns.substringAfterLast( 'Hello World', '!' );
	* // returns ''
	*
	* @example
	* var out = ns.substringAfterLast( 'Hello World', '' );
	* // returns ''
	*
	* @example
	* var out = ns.substringAfterLast( 'beep boop baz', 'p b', 6 );
	* // returns 'oop baz'
	*/
	substringAfterLast: typeof substringAfterLast;

	/**
	* Returns the part of a string before a specified substring.
	*
	* @param str - input string
	* @param search - search string
	* @returns substring
	*
	* @example
	* var out = ns.substringBefore( 'beep boop', ' ' );
	* // returns 'beep'
	*
	* @example
	* var out = ns.substringBefore( 'beep boop', 'p' );
	* // returns 'bee'
	*
	* @example
	* var out = ns.substringBefore( 'Hello World!', '' );
	* // returns ''
	*
	* @example
	* var out = ns.substringBefore( 'Hello World!', 'XYZ' );
	* // returns 'Hello World!'
	*/
	substringBefore: typeof substringBefore;

	/**
	* Returns the part of a string before the last occurrence of a specified substring.
	*
	* @param str - input string
	* @param search - search value
	* @returns substring
	*
	* @example
	* var out = ns.substringBeforeLast( 'abcba', 'b' );
	* // returns 'abc'
	*
	* @example
	* var out = ns.substringBeforeLast( 'Hello World, my friend!', ' ' );
	* // returns 'Hello World, my'
	*
	* @example
	* var out = ns.substringBeforeLast( 'abcba', ' ' );
	* // returns 'abcba'
	*
	* @example
	* var out = ns.substringBeforeLast( 'abcba', '' );
	* // returns 'abcba'
	*/
	substringBeforeLast: typeof substringBeforeLast;

	/**
	* Returns an iterator which iterates over each grapheme cluster in a string.
	*
	* @param src - input value
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var iter = ns.graphemeClusters2iterator( '🌷🍕' );
	*
	* var v = iter.next().value;
	* // returns '🌷'
	*
	* v = iter.next().value;
	* // returns '🍕'
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	graphemeClusters2iterator: typeof graphemeClusters2iterator;

	/**
	* Returns an iterator which iterates from right to left over each grapheme cluster in a string.
	*
	* @param src - input value
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var iter = ns.graphemeClusters2iteratorRight( '🌷🍕' );
	*
	* var v = iter.next().value;
	* // returns '🍕'
	*
	* v = iter.next().value;
	* // returns '🌷'
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	graphemeClusters2iteratorRight: typeof graphemeClusters2iteratorRight;

	/**
	* Replaces all lone surrogates in order to create a new string which is well formed.
	*
	* @param str - string to test
	* @returns new string which does not contain any lone surrogates
	*
	* @example
	* var result = ns.toWellFormed( '\uDBFF' );
	* // returns �
	*
	* @example
	* var result = ns.toWellFormed( '\uDBFFFF\uDBFF' );
	* // returns �FF�
	*
	* @example
	* var result = ns.toWellFormed( '-5' );
	* // returns -5
	*/
	toWellFormed: typeof toWellFormed;

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
	* Truncates a string to a specified length.
	*
	* @param str - input string
	* @param len - output string length (including ending)
	* @param ending - custom ending (default: `...`)
	* @returns truncated string
	*
	* @example
	* var out = ns.truncate( 'beep boop', 7 );
	* // returns 'beep...'
	*
	* @example
	* var out = ns.truncate( 'beep boop', 7, '|' );
	* // returns 'beep b|'
	*/
	truncate: typeof truncate;

	/**
	* Truncates a string in the middle to a specified length.
	*
	* @param str - input string
	* @param len - output string length (including sequence)
	* @param seq - custom replacement sequence (default: `...`)
	* @returns truncated string
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.truncateMiddle( str, 5 );
	* // returns 'b...p'
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.truncateMiddle( str, 5, '>>>' );
	* // returns 'b>>>p'
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.truncateMiddle( str, 10 );
	* // returns 'beep boop'
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.truncateMiddle( str, 0 );
	* // returns ''
	*
	* @example
	* var str = 'beep boop';
	* var out = ns.truncateMiddle( str, 2 );
	* // returns '..'
	*
	* @example
	* var str = '🐺 Wolf Brothers 🐺';
	* var out = ns.truncateMiddle( str, 7 );
	* // returns '🐺 ... 🐺'
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

	/**
	* Converts a UTF-16 encoded string to an array of integers using UTF-8 encoding.
	*
	* ## Notes
	*
	* -   The following byte sequences are used to represent a character. The sequence depends on the code point:
	*
	*     0x00000000 - 0x0000007F:
	*          0xxxxxxx
	*
	*      0x00000080 - 0x000007FF:
	*          110xxxxx 10xxxxxx
	*
	*      0x00000800 - 0x0000FFFF:
	*          1110xxxx 10xxxxxx 10xxxxxx
	*
	*      0x00010000 - 0x001FFFFF:
	*          11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
	*
	* -   The `x` bit positions correspond to code point bits.
	* -   Only the shortest possible multi-byte sequence which can represent a code point is used.
	*
	* @param str - string to convert
	* @returns array of integers
	* @see [UTF-8]{@link https://en.wikipedia.org/wiki/UTF-8}
	* @see [Stack Overflow]{@link https://stackoverflow.com/questions/6240055/manually-converting-unicode-codepoints-into-utf-8-and-utf-16}
	*
	* @example
	* var str = '☃';
	* var out = ns.utf16ToUTF8Array( str );
	* // returns [ 226, 152, 131 ]
	*/
	utf16ToUTF8Array: typeof utf16ToUTF8Array;
}

/**
* String manipulation functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
