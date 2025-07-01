/**
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name altcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/altcase}
*/
setReadOnly( ns, 'altcase', require( './../../base/altcase' ) );

/**
* @name atob
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/atob}
*/
setReadOnly( ns, 'atob', require( './../../base/atob' ) );

/**
* @name base64ToUint8Array
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/base64-to-uint8array}
*/
setReadOnly( ns, 'base64ToUint8Array', require( './../../base/base64-to-uint8array' ) );

/**
* @name camelcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/camelcase}
*/
setReadOnly( ns, 'camelcase', require( './../../base/camelcase' ) );

/**
* @name capitalize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/capitalize}
*/
setReadOnly( ns, 'capitalize', require( './../../base/capitalize' ) );

/**
* @name codePointAt
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/code-point-at}
*/
setReadOnly( ns, 'codePointAt', require( './../../base/code-point-at' ) );

/**
* @name constantcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/constantcase}
*/
setReadOnly( ns, 'constantcase', require( './../../base/constantcase' ) );

/**
* @name distances
* @memberof ns
* @readonly
* @type {Namespace}
* @see {@link module:@stdlib/string/base/distances}
*/
setReadOnly( ns, 'distances', require( './../../base/distances' ) );

/**
* @name dotcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/dotcase}
*/
setReadOnly( ns, 'dotcase', require( './../../base/dotcase' ) );

/**
* @name endsWith
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/ends-with}
*/
setReadOnly( ns, 'endsWith', require( './../../base/ends-with' ) );

/**
* @name first
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/first}
*/
setReadOnly( ns, 'first', require( './../../base/first' ) );

/**
* @name firstCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/first-code-point}
*/
setReadOnly( ns, 'firstCodePoint', require( './../../base/first-code-point' ) );

/**
* @name firstGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/first-grapheme-cluster}
*/
setReadOnly( ns, 'firstGraphemeCluster', require( './../../base/first-grapheme-cluster' ) );

/**
* @name forEach
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each}
*/
setReadOnly( ns, 'forEach', require( './../../base/for-each' ) );

/**
* @name forEachCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each-code-point}
*/
setReadOnly( ns, 'forEachCodePoint', require( './../../base/for-each-code-point' ) );

/**
* @name forEachCodePointRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each-code-point-right}
*/
setReadOnly( ns, 'forEachCodePointRight', require( './../../base/for-each-code-point-right' ) );

/**
* @name forEachGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each-grapheme-cluster}
*/
setReadOnly( ns, 'forEachGraphemeCluster', require( './../../base/for-each-grapheme-cluster' ) );

/**
* @name forEachRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/for-each-right}
*/
setReadOnly( ns, 'forEachRight', require( './../../base/for-each-right' ) );

/**
* @name formatInterpolate
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/format-interpolate}
*/
setReadOnly( ns, 'formatInterpolate', require( './../../base/format-interpolate' ) );

/**
* @name formatTokenize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/format-tokenize}
*/
setReadOnly( ns, 'formatTokenize', require( './../../base/format-tokenize' ) );

/**
* @name headercase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/headercase}
*/
setReadOnly( ns, 'headercase', require( './../../base/headercase' ) );

/**
* @name invcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/invcase}
*/
setReadOnly( ns, 'invcase', require( './../../base/invcase' ) );

/**
* @name kebabcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/kebabcase}
*/
setReadOnly( ns, 'kebabcase', require( './../../base/kebabcase' ) );

/**
* @name last
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/last}
*/
setReadOnly( ns, 'last', require( './../../base/last' ) );

/**
* @name lastCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/last-code-point}
*/
setReadOnly( ns, 'lastCodePoint', require( './../../base/last-code-point' ) );

/**
* @name lastGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/last-grapheme-cluster}
*/
setReadOnly( ns, 'lastGraphemeCluster', require( './../../base/last-grapheme-cluster' ) );

/**
* @name lpad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/left-pad}
*/
setReadOnly( ns, 'lpad', require( './../../base/left-pad' ) );

/**
* @name ltrim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/left-trim}
*/
setReadOnly( ns, 'ltrim', require( './../../base/left-trim' ) );

/**
* @name lowercase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/lowercase}
*/
setReadOnly( ns, 'lowercase', require( './../../base/lowercase' ) );

/**
* @name pascalcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/pascalcase}
*/
setReadOnly( ns, 'pascalcase', require( './../../base/pascalcase' ) );

/**
* @name percentEncode
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/percent-encode}
*/
setReadOnly( ns, 'percentEncode', require( './../../base/percent-encode' ) );

/**
* @name removeFirst
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-first}
*/
setReadOnly( ns, 'removeFirst', require( './../../base/remove-first' ) );

/**
* @name removeFirstCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-first-code-point}
*/
setReadOnly( ns, 'removeFirstCodePoint', require( './../../base/remove-first-code-point' ) );

/**
* @name removeFirstGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-first-grapheme-cluster}
*/
setReadOnly( ns, 'removeFirstGraphemeCluster', require( './../../base/remove-first-grapheme-cluster' ) );

/**
* @name removeLast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-last}
*/
setReadOnly( ns, 'removeLast', require( './../../base/remove-last' ) );

/**
* @name removeLastCodePoint
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-last-code-point}
*/
setReadOnly( ns, 'removeLastCodePoint', require( './../../base/remove-last-code-point' ) );

/**
* @name removeLastGraphemeCluster
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/remove-last-grapheme-cluster}
*/
setReadOnly( ns, 'removeLastGraphemeCluster', require( './../../base/remove-last-grapheme-cluster' ) );

/**
* @name repeat
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/repeat}
*/
setReadOnly( ns, 'repeat', require( './../../base/repeat' ) );

/**
* @name replace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace}
*/
setReadOnly( ns, 'replace', require( './../../base/replace' ) );

/**
* @name replaceAfter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-after}
*/
setReadOnly( ns, 'replaceAfter', require( './../../base/replace-after' ) );

/**
* @name replaceAfterLast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-after-last}
*/
setReadOnly( ns, 'replaceAfterLast', require( './../../base/replace-after-last' ) );

/**
* @name replaceBefore
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-before}
*/
setReadOnly( ns, 'replaceBefore', require( './../../base/replace-before' ) );

/**
* @name replaceBeforeLast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/replace-before-last}
*/
setReadOnly( ns, 'replaceBeforeLast', require( './../../base/replace-before-last' ) );

/**
* @name reverse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/reverse}
*/
setReadOnly( ns, 'reverse', require( './../../base/reverse' ) );

/**
* @name reverseCodePoints
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/reverse-code-points}
*/
setReadOnly( ns, 'reverseCodePoints', require( './../../base/reverse-code-points' ) );

/**
* @name reverseGraphemeClusters
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/reverse-grapheme-clusters}
*/
setReadOnly( ns, 'reverseGraphemeClusters', require( './../../base/reverse-grapheme-clusters' ) );

/**
* @name rpad
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/right-pad}
*/
setReadOnly( ns, 'rpad', require( './../../base/right-pad' ) );

/**
* @name rtrim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/right-trim}
*/
setReadOnly( ns, 'rtrim', require( './../../base/right-trim' ) );

/**
* @name snakecase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/snakecase}
*/
setReadOnly( ns, 'snakecase', require( './../../base/snakecase' ) );

/**
* @name startcase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/startcase}
*/
setReadOnly( ns, 'startcase', require( './../../base/startcase' ) );

/**
* @name startsWith
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/starts-with}
*/
setReadOnly( ns, 'startsWith', require( './../../base/starts-with' ) );

/**
* @name stickycase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/stickycase}
*/
setReadOnly( ns, 'stickycase', require( './../../base/stickycase' ) );

/**
* @name trim
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/trim}
*/
setReadOnly( ns, 'trim', require( './../../base/trim' ) );

/**
* @name truncateMiddle
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/truncate-middle}
*/
setReadOnly( ns, 'truncateMiddle', require( './../../base/truncate-middle' ) );

/**
* @name uncapitalize
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/uncapitalize}
*/
setReadOnly( ns, 'uncapitalize', require( './../../base/uncapitalize' ) );

/**
* @name uppercase
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/string/base/uppercase}
*/
setReadOnly( ns, 'uppercase', require( './../../base/uppercase' ) );


// EXPORTS //

module.exports = ns;
