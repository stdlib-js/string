<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# codePointAt

> Return a Unicode [code point][code-point] from a string at a specified position.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var codePointAt = require( '@stdlib/string/code-point-at' );
```

#### codePointAt( string, position\[, backward] )

Returns a Unicode [code point][code-point] from a string at a specified position.

```javascript
var out = codePointAt( 'last man standing', 4 );
// returns 32
```

The function supports providing a `backward` argument for performing backward iteration for low surrogates.

```javascript
var out = codePointAt( '🌷', 1, true );
// returns 127799
```

The function supports providing a negative `position`.

```javascript
var out = codePointAt( 'last man standing', -13 );
// returns 32
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

This function differs from [`String.prototype.codePointAt`][mdn-string-codepointat] in the following ways:

-   The function supports providing a negative `position`. If provided a negative `position`, the function determines the string position relative to the end of the string.
-   The function supports providing a `backward` argument for performing backward iteration for low surrogates. [`String.prototype.codePointAt`][mdn-string-codepointat] simply returns the low surrogate value if no [UTF-16][utf-16] surrogate pair begins at the specified position. If invoked with `backward` set to `true`, this function will return the code point after aggregating with the preceding high surrogate, if the specified position does not mark the start of a surrogate pair.
-   The function raises an exception if provided a `position` which exceeds the bounds of the input string.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var codePointAt = require( '@stdlib/string/code-point-at' );

var v = codePointAt( 'last man standing', 4 );
// returns 32

v = codePointAt( 'presidential election', 8, true );
// returns 116

v = codePointAt( 'अनुच्छेद', 2 );
// returns 2369

v = codePointAt( '🌷', 1, true );
// returns 127799
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
Usage: code-point-at [options] --pos=<index> [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -b,    --backward            Backward iteration for low surrogates.
         --pos index           Position in string.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ code-point-at --pos=2 अनुच्छेद
2369
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'अनुच्छेद' | code-point-at --pos=2
2369
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

-   <span class="package-name">[`@stdlib/string/from-code-point`][@stdlib/string/from-code-point]</span><span class="delimiter">: </span><span class="description">create a string from a sequence of Unicode code points.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[code-point]: https://en.wikipedia.org/wiki/Code_point

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-string-codepointat]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

<!-- <related-links> -->

[@stdlib/string/from-code-point]: https://github.com/stdlib-js/string/tree/main/from-code-point

<!-- </related-links> -->

</section>

<!-- /.links -->
