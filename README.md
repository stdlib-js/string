<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# String Manipulation

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> String manipulation functions.



<section class="usage">

## Usage

```javascript
import string from 'https://cdn.jsdelivr.net/gh/stdlib-js/string@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { acronym, base, camelcase, capitalize, codePointAt, constantcase, dotcase, endsWith, first, forEach, format, fromCodePoint, graphemeClusters2iterator, graphemeClusters2iteratorRight, headercase, kebabcase, lowercase, lpad, ltrim, ltrimN, nextCodePointIndex, nextGraphemeClusterBreak, num2words, numGraphemeClusters, pad, pascalcase, percentEncode, prevGraphemeClusterBreak, removeFirst, removeLast, removePunctuation, removeUTF8BOM, removeWords, repeat, replace, replaceBefore, reverseString, rpad, rtrim, rtrimN, snakecase, splitGraphemeClusters, startcase, startsWith, substringAfter, substringAfterLast, substringBefore, substringBeforeLast, trim, truncate, truncateMiddle, uncapitalize, uppercase, utf16ToUTF8Array } from 'https://cdn.jsdelivr.net/gh/stdlib-js/string@deno/mod.js';
```

#### string

Namespace containing string manipulation functions.

```javascript
var str = string;
// returns {...}
```

The namespace exposes the following string manipulation functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`acronym( str[, options] )`][@stdlib/string/acronym]</span><span class="delimiter">: </span><span class="description">generate an acronym for a given string.</span>
-   <span class="signature">[`base`][@stdlib/string/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) string functions.</span>
-   <span class="signature">[`camelcase( str )`][@stdlib/string/camelcase]</span><span class="delimiter">: </span><span class="description">convert a string to camel case.</span>
-   <span class="signature">[`capitalize( str )`][@stdlib/string/capitalize]</span><span class="delimiter">: </span><span class="description">capitalize the first character in a string.</span>
-   <span class="signature">[`codePointAt( string, position[, backward] )`][@stdlib/string/code-point-at]</span><span class="delimiter">: </span><span class="description">return a Unicode code point from a string at a specified position.</span>
-   <span class="signature">[`constantcase( str )`][@stdlib/string/constantcase]</span><span class="delimiter">: </span><span class="description">convert a string to constant case.</span>
-   <span class="signature">[`dotcase( str )`][@stdlib/string/dotcase]</span><span class="delimiter">: </span><span class="description">convert a string to dot case.</span>
-   <span class="signature">[`endsWith( str, search[, len] )`][@stdlib/string/ends-with]</span><span class="delimiter">: </span><span class="description">test if a string ends with the characters of another string.</span>
-   <span class="signature">[`first( str[, n][, options] )`][@stdlib/string/first]</span><span class="delimiter">: </span><span class="description">return the first character(s) of a string.</span>
-   <span class="signature">[`forEach( str, [options,] clbk[, thisArg ] )`][@stdlib/string/for-each]</span><span class="delimiter">: </span><span class="description">invokes a function for each character in a string.</span>
-   <span class="signature">[`format( str, ...args )`][@stdlib/string/format]</span><span class="delimiter">: </span><span class="description">insert supplied variable values into a format string.</span>
-   <span class="signature">[`fromCodePoint( pt1[, pt2[, pt3[, ...]]] )`][@stdlib/string/from-code-point]</span><span class="delimiter">: </span><span class="description">create a string from a sequence of Unicode code points.</span>
-   <span class="signature">[`headercase( str )`][@stdlib/string/headercase]</span><span class="delimiter">: </span><span class="description">convert a string to HTTP header case.</span>
-   <span class="signature">[`kebabcase( str )`][@stdlib/string/kebabcase]</span><span class="delimiter">: </span><span class="description">convert a string to kebab case.</span>
-   <span class="signature">[`lpad( str, len[, pad] )`][@stdlib/string/left-pad]</span><span class="delimiter">: </span><span class="description">left pad a string.</span>
-   <span class="signature">[`ltrimN( str, n[, chars] )`][@stdlib/string/left-trim-n]</span><span class="delimiter">: </span><span class="description">trim `n` characters from the end of a string.</span>
-   <span class="signature">[`ltrim( str )`][@stdlib/string/left-trim]</span><span class="delimiter">: </span><span class="description">trim whitespace characters from the beginning of a string.</span>
-   <span class="signature">[`lowercase( str )`][@stdlib/string/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>
-   <span class="signature">[`nextCodePointIndex( string[, fromIndex] )`][@stdlib/string/next-code-point-index]</span><span class="delimiter">: </span><span class="description">return the position of the next Unicode code point in a string after a specified position.</span>
-   <span class="signature">[`nextGraphemeClusterBreak( string[, fromIndex] )`][@stdlib/string/next-grapheme-cluster-break]</span><span class="delimiter">: </span><span class="description">return the next extended grapheme cluster break in a string after a specified position.</span>
-   <span class="signature">[`numGraphemeClusters( str )`][@stdlib/string/num-grapheme-clusters]</span><span class="delimiter">: </span><span class="description">return the number of grapheme clusters in a string.</span>
-   <span class="signature">[`num2words( value[, options] )`][@stdlib/string/num2words]</span><span class="delimiter">: </span><span class="description">convert a number to a word representation.</span>
-   <span class="signature">[`pad( str, len[, options] )`][@stdlib/string/pad]</span><span class="delimiter">: </span><span class="description">pad a string.</span>
-   <span class="signature">[`pascalcase( str )`][@stdlib/string/pascalcase]</span><span class="delimiter">: </span><span class="description">convert a string to Pascal case.</span>
-   <span class="signature">[`percentEncode( str )`][@stdlib/string/percent-encode]</span><span class="delimiter">: </span><span class="description">percent-encode a UTF-16 encoded string according to RFC 3986.</span>
-   <span class="signature">[`prevGraphemeClusterBreak( string[, fromIndex] )`][@stdlib/string/prev-grapheme-cluster-break]</span><span class="delimiter">: </span><span class="description">return the previous extended grapheme cluster break in a string before a specified position.</span>
-   <span class="signature">[`removeFirst( str[, n][, options] )`][@stdlib/string/remove-first]</span><span class="delimiter">: </span><span class="description">remove the first character(s) of a string.</span>
-   <span class="signature">[`removeLast( str[, n][, options] )`][@stdlib/string/remove-last]</span><span class="delimiter">: </span><span class="description">remove the last character(s) of a string.</span>
-   <span class="signature">[`removePunctuation( str )`][@stdlib/string/remove-punctuation]</span><span class="delimiter">: </span><span class="description">remove punctuation characters from a string.</span>
-   <span class="signature">[`removeUTF8BOM( str )`][@stdlib/string/remove-utf8-bom]</span><span class="delimiter">: </span><span class="description">remove a UTF-8 byte order mark (BOM) from the beginning of a string.</span>
-   <span class="signature">[`removeWords( str, words[, ignoreCase] )`][@stdlib/string/remove-words]</span><span class="delimiter">: </span><span class="description">remove a list of words from a string.</span>
-   <span class="signature">[`repeat( str, n )`][@stdlib/string/repeat]</span><span class="delimiter">: </span><span class="description">repeat a string a specified number of times and return the concatenated result.</span>
-   <span class="signature">[`replaceBefore( str, search, replacement )`][@stdlib/string/replace-before]</span><span class="delimiter">: </span><span class="description">replace the substring before the first occurrence of a specified search string.</span>
-   <span class="signature">[`replace( str, search, newval )`][@stdlib/string/replace]</span><span class="delimiter">: </span><span class="description">replace search occurrences with a replacement string.</span>
-   <span class="signature">[`reverseString( str[, options] )`][@stdlib/string/reverse]</span><span class="delimiter">: </span><span class="description">reverse a string.</span>
-   <span class="signature">[`rpad( str, len[, pad] )`][@stdlib/string/right-pad]</span><span class="delimiter">: </span><span class="description">right pad a string.</span>
-   <span class="signature">[`rtrimN( str, n[, chars] )`][@stdlib/string/right-trim-n]</span><span class="delimiter">: </span><span class="description">trim `n` characters from the end of a string.</span>
-   <span class="signature">[`rtrim( str )`][@stdlib/string/right-trim]</span><span class="delimiter">: </span><span class="description">trim whitespace characters from the end of a string.</span>
-   <span class="signature">[`snakecase( str )`][@stdlib/string/snakecase]</span><span class="delimiter">: </span><span class="description">convert a string to snake case.</span>
-   <span class="signature">[`splitGraphemeClusters( str )`][@stdlib/string/split-grapheme-clusters]</span><span class="delimiter">: </span><span class="description">split a string by its grapheme cluster breaks.</span>
-   <span class="signature">[`startcase( str )`][@stdlib/string/startcase]</span><span class="delimiter">: </span><span class="description">capitalize the first letter of each word in a string.</span>
-   <span class="signature">[`startsWith( str, search[, position] )`][@stdlib/string/starts-with]</span><span class="delimiter">: </span><span class="description">test if a string starts with the characters of another string.</span>
-   <span class="signature">[`substringAfterLast( str, search[, fromIndex] )`][@stdlib/string/substring-after-last]</span><span class="delimiter">: </span><span class="description">return the part of a string after the last occurrence of a specified substring.</span>
-   <span class="signature">[`substringAfter( str, search[, fromIndex] )`][@stdlib/string/substring-after]</span><span class="delimiter">: </span><span class="description">return the part of a string after a specified substring.</span>
-   <span class="signature">[`substringBeforeLast( str, search )`][@stdlib/string/substring-before-last]</span><span class="delimiter">: </span><span class="description">return the part of a string before the last occurrence of a specified substring.</span>
-   <span class="signature">[`substringBefore( str, search )`][@stdlib/string/substring-before]</span><span class="delimiter">: </span><span class="description">return the part of a string before a specified substring.</span>
-   <span class="signature">[`graphemeClusters2iteratorRight( src[, mapFcn[, thisArg]] )`][@stdlib/string/to-grapheme-cluster-iterator-right]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates from right to left over grapheme clusters.</span>
-   <span class="signature">[`graphemeClusters2iterator( src[, mapFcn[, thisArg]] )`][@stdlib/string/to-grapheme-cluster-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over grapheme clusters.</span>
-   <span class="signature">[`trim( str )`][@stdlib/string/trim]</span><span class="delimiter">: </span><span class="description">trim whitespace characters from the beginning and end of a string.</span>
-   <span class="signature">[`truncateMiddle( str, len[, seq] )`][@stdlib/string/truncate-middle]</span><span class="delimiter">: </span><span class="description">truncate a string in the middle to a specified length.</span>
-   <span class="signature">[`truncate( str, len[, ending] )`][@stdlib/string/truncate]</span><span class="delimiter">: </span><span class="description">truncate a string to a specified length.</span>
-   <span class="signature">[`uncapitalize( str )`][@stdlib/string/uncapitalize]</span><span class="delimiter">: </span><span class="description">uncapitalize the first character of a string.</span>
-   <span class="signature">[`uppercase( str )`][@stdlib/string/uppercase]</span><span class="delimiter">: </span><span class="description">convert a string to uppercase.</span>
-   <span class="signature">[`utf16ToUTF8Array( str )`][@stdlib/string/utf16-to-utf8-array]</span><span class="delimiter">: </span><span class="description">convert a UTF-16 encoded string to an array of integers using UTF-8 encoding.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import getKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@deno/mod.js';
import string from 'https://cdn.jsdelivr.net/gh/stdlib-js/string@deno/mod.js';

console.log( getKeys( string ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string.svg
[npm-url]: https://npmjs.org/package/@stdlib/string

[test-image]: https://github.com/stdlib-js/string/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/string/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string/tree/deno
[deno-readme]: https://github.com/stdlib-js/string/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string/tree/umd
[umd-readme]: https://github.com/stdlib-js/string/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string/tree/esm
[esm-readme]: https://github.com/stdlib-js/string/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string/main/LICENSE

<!-- <toc-links> -->

[@stdlib/string/acronym]: https://github.com/stdlib-js/string/tree/main/acronym

[@stdlib/string/base]: https://github.com/stdlib-js/string/tree/main/base

[@stdlib/string/camelcase]: https://github.com/stdlib-js/string/tree/main/camelcase

[@stdlib/string/capitalize]: https://github.com/stdlib-js/string/tree/main/capitalize

[@stdlib/string/code-point-at]: https://github.com/stdlib-js/string/tree/main/code-point-at

[@stdlib/string/constantcase]: https://github.com/stdlib-js/string/tree/main/constantcase

[@stdlib/string/dotcase]: https://github.com/stdlib-js/string/tree/main/dotcase

[@stdlib/string/ends-with]: https://github.com/stdlib-js/string/tree/main/ends-with

[@stdlib/string/first]: https://github.com/stdlib-js/string/tree/main/first

[@stdlib/string/for-each]: https://github.com/stdlib-js/string/tree/main/for-each

[@stdlib/string/format]: https://github.com/stdlib-js/string/tree/main/format

[@stdlib/string/from-code-point]: https://github.com/stdlib-js/string/tree/main/from-code-point

[@stdlib/string/headercase]: https://github.com/stdlib-js/string/tree/main/headercase

[@stdlib/string/kebabcase]: https://github.com/stdlib-js/string/tree/main/kebabcase

[@stdlib/string/left-pad]: https://github.com/stdlib-js/string/tree/main/left-pad

[@stdlib/string/left-trim-n]: https://github.com/stdlib-js/string/tree/main/left-trim-n

[@stdlib/string/left-trim]: https://github.com/stdlib-js/string/tree/main/left-trim

[@stdlib/string/lowercase]: https://github.com/stdlib-js/string/tree/main/lowercase

[@stdlib/string/next-code-point-index]: https://github.com/stdlib-js/string/tree/main/next-code-point-index

[@stdlib/string/next-grapheme-cluster-break]: https://github.com/stdlib-js/string/tree/main/next-grapheme-cluster-break

[@stdlib/string/num-grapheme-clusters]: https://github.com/stdlib-js/string/tree/main/num-grapheme-clusters

[@stdlib/string/num2words]: https://github.com/stdlib-js/string/tree/main/num2words

[@stdlib/string/pad]: https://github.com/stdlib-js/string/tree/main/pad

[@stdlib/string/pascalcase]: https://github.com/stdlib-js/string/tree/main/pascalcase

[@stdlib/string/percent-encode]: https://github.com/stdlib-js/string/tree/main/percent-encode

[@stdlib/string/prev-grapheme-cluster-break]: https://github.com/stdlib-js/string/tree/main/prev-grapheme-cluster-break

[@stdlib/string/remove-first]: https://github.com/stdlib-js/string/tree/main/remove-first

[@stdlib/string/remove-last]: https://github.com/stdlib-js/string/tree/main/remove-last

[@stdlib/string/remove-punctuation]: https://github.com/stdlib-js/string/tree/main/remove-punctuation

[@stdlib/string/remove-utf8-bom]: https://github.com/stdlib-js/string/tree/main/remove-utf8-bom

[@stdlib/string/remove-words]: https://github.com/stdlib-js/string/tree/main/remove-words

[@stdlib/string/repeat]: https://github.com/stdlib-js/string/tree/main/repeat

[@stdlib/string/replace-before]: https://github.com/stdlib-js/string/tree/main/replace-before

[@stdlib/string/replace]: https://github.com/stdlib-js/string/tree/main/replace

[@stdlib/string/reverse]: https://github.com/stdlib-js/string/tree/main/reverse

[@stdlib/string/right-pad]: https://github.com/stdlib-js/string/tree/main/right-pad

[@stdlib/string/right-trim-n]: https://github.com/stdlib-js/string/tree/main/right-trim-n

[@stdlib/string/right-trim]: https://github.com/stdlib-js/string/tree/main/right-trim

[@stdlib/string/snakecase]: https://github.com/stdlib-js/string/tree/main/snakecase

[@stdlib/string/split-grapheme-clusters]: https://github.com/stdlib-js/string/tree/main/split-grapheme-clusters

[@stdlib/string/startcase]: https://github.com/stdlib-js/string/tree/main/startcase

[@stdlib/string/starts-with]: https://github.com/stdlib-js/string/tree/main/starts-with

[@stdlib/string/substring-after-last]: https://github.com/stdlib-js/string/tree/main/substring-after-last

[@stdlib/string/substring-after]: https://github.com/stdlib-js/string/tree/main/substring-after

[@stdlib/string/substring-before-last]: https://github.com/stdlib-js/string/tree/main/substring-before-last

[@stdlib/string/substring-before]: https://github.com/stdlib-js/string/tree/main/substring-before

[@stdlib/string/to-grapheme-cluster-iterator-right]: https://github.com/stdlib-js/string/tree/main/to-grapheme-cluster-iterator-right

[@stdlib/string/to-grapheme-cluster-iterator]: https://github.com/stdlib-js/string/tree/main/to-grapheme-cluster-iterator

[@stdlib/string/trim]: https://github.com/stdlib-js/string/tree/main/trim

[@stdlib/string/truncate-middle]: https://github.com/stdlib-js/string/tree/main/truncate-middle

[@stdlib/string/truncate]: https://github.com/stdlib-js/string/tree/main/truncate

[@stdlib/string/uncapitalize]: https://github.com/stdlib-js/string/tree/main/uncapitalize

[@stdlib/string/uppercase]: https://github.com/stdlib-js/string/tree/main/uppercase

[@stdlib/string/utf16-to-utf8-array]: https://github.com/stdlib-js/string/tree/main/utf16-to-utf8-array

<!-- </toc-links> -->

</section>

<!-- /.links -->
