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

# fromCodePoint

> Create a string from a sequence of Unicode [code points][code-point].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var fromCodePoint = require( '@stdlib/string/from-code-point' );
```

#### fromCodePoint( pt1\[, pt2\[, pt3\[, ...]]] )

Creates a `string` from a sequence of Unicode [code points][code-point].

```javascript
var out = fromCodePoint( 9731 );
// returns '☃'
```

In addition to providing [code points][code-point] as separate arguments, the function supports providing an array-like `object` as a single argument containing a sequence of [code points][code-point].

```javascript
var Uint16Array = require( '@stdlib/array/uint16' );

var out = fromCodePoint( 97, 98, 99 );
// returns 'abc'

out = fromCodePoint( new Uint16Array( [ 97, 98, 99 ] ) );
// returns 'abc'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function differs from [`String.fromCharCode`][mdn-string-fromcharcode] in the following ways:

    -   The function provides support for all valid Unicode values (up to `21` bits). While most common Unicode values can be represented using one 16-bit unit, higher code point characters require two 16-bit units (a surrogate pair consisting of a high and a low surrogate) to form a single character. [`String.fromCharCode`][mdn-string-fromcharcode] does **not** support surrogate pairs, supporting only UCS-2, a subset of [UTF-16][utf-16].

-   This function differs from [`String.fromCodePoint`][mdn-string-fromcodepoint] in the following ways:

    -   The function supports explicitly providing an array-like `object` containing a sequence of [code points][code-point].
    -   The function requires **at least** one [code point][code-point].
    -   The function requires that all [code points][code-point] be nonnegative integers. The function does **not** support values, such as `null`, `undefined`, `true`, `false`, `'0'`, `'1'`, etc., which can be cast to integer values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var UNICODE_MAX_BMP = require( '@stdlib/constants/unicode/max-bmp' );
var fromCodePoint = require( '@stdlib/string/from-code-point' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = floor( randu()*UNICODE_MAX_BMP );
    console.log( '%d => %s', x, fromCodePoint( x ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: from-code-point [options] [<code_point> <code_point> ...]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'97\n98\n99' | from-code-point --split /\r?\n/

    # Escaped...
    $ echo -n $'97\n98\n99' | from-code-point --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ from-code-point 9731
☃
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '9731' | from-code-point
☃
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '97\t98\t99\t' | from-code-point --split '\t'
abc
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/code-point-at`][@stdlib/string/code-point-at]</span><span class="delimiter">: </span><span class="description">return a Unicode code point from a string at a specified position.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[code-point]: https://en.wikipedia.org/wiki/Code_point

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[mdn-string-fromcharcode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

[mdn-string-fromcodepoint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

<!-- <related-links> -->

[@stdlib/string/code-point-at]: https://github.com/stdlib-js/string/tree/main/code-point-at

<!-- </related-links> -->

</section>

<!-- /.links -->
