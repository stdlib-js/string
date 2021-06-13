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

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import capitalize = require( './../../capitalize' );
import codePointAt = require( './../../code-point-at' );
import endsWith = require( './../../ends-with' );
import fromCodePoint = require( './../../from-code-point' );
import lpad = require( './../../left-pad' );
import ltrim = require( './../../left-trim' );
import lowercase = require( './../../lowercase' );
import nextGraphemeClusterBreak = require( './../../next-grapheme-cluster-break' );
import numGraphemeClusters = require( './../../num-grapheme-clusters' );
import pad = require( './../../pad' );
import percentEncode = require( './../../percent-encode' );
import removeFirst = require( './../../remove-first' );
import removeLast = require( './../../remove-last' );
import removePunctuation = require( './../../remove-punctuation' );
import removeUTF8BOM = require( './../../remove-utf8-bom' );
import removeWords = require( './../../remove-words' );
import repeat = require( './../../repeat' );
import replace = require( './../../replace' );
import reverseString = require( './../../reverse' );
import rpad = require( './../../right-pad' );
import rtrim = require( './../../right-trim' );
import startcase = require( './../../startcase' );
import startsWith = require( './../../starts-with' );
import trim = require( './../../trim' );
import uncapitalize = require( './../../uncapitalize' );
import uppercase = require( './../../uppercase' );
import utf16ToUTF8Array = require( './../../utf16-to-utf8-array' );

/**
* Interface describing the `string` namespace.
*/
interface Namespace {
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
	* @throws first argument must be a string
	* @throws second argument must be a nonnegative integer
	* @throws third argument must be a boolean
	* @throws position must be a valid index in string
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
	* Test if a string ends with the characters of another string.
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
	* Percent-encode a UTF-16 encoded string according to [RFC 3986][1].
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
	* Removes the first character of a string.
	*
	* @param str - input string
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
	* var out = ns.removeFirst( 'javaScript' );
	* // returns 'avaScript'
	*
	* @example
	* var out = ns.removeFirst( 'Hidden Treasures' );
	* // returns 'idden Treasures'
	*/
	removeFirst: typeof removeFirst;

	/**
	* Removes the last character of a string.
	*
	* @param str - input string
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
	* Replace search occurrences with a replacement string.
	*
	* ## Notes
	*
	* -   When provided a `string` as the `search` value, the function replaces *all* occurrences. To remove only the first match, use a regular expression.
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
	* var capitalize = require( `@stdlib/string/capitalize` );
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
	* Reverses a string.
	*
	* @param str - input string
	* @returns reversed string
	*
	* @example
	* var out = ns.reverseString( 'last man standing' );
	* // returns 'gnidnats nam tsal'
	*
	* @example
	* var out = ns.reverseString( 'presidential election' );
	* // returns 'noitcele laitnediserp'
	*
	* @example
	* var out = ns.reverseString( 'javaScript' );
	* // returns 'tpircSavaj'
	*
	* @example
	* var out = ns.reverseString( 'Hidden Treasures' );
	* // returns 'serusaerT neddiH'
	*/
	reverseString: typeof reverseString;

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
	* Capitalizes the first letter of each word in an input string.
	*
	* @param str - string to convert
	* @returns start case string
	*
	* @example
	* var str = ns.startcase( 'beep boop foo bar' );
	* // returns 'Beep Boop Foo Bar'
	*/
	startcase: typeof startcase;

	/**
	* Tests if a string starts with the characters of another string.
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
	* Trim whitespace characters from beginning and end of a string.
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
* Standard library string manipulation functions.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
