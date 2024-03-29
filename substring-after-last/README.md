<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# substringAfterLast

> Return the part of a string after the last occurrence of a specified substring.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var substringAfterLast = require( '@stdlib/string/substring-after-last' );
```

#### substringAfterLast( str, search\[, fromIndex] )

Returns the part of a string after the last occurrence of a specified substring.

```javascript
var str = 'beep boop';
var out = substringAfterLast( str, 'b' );
// returns 'oop'

out = substringAfterLast( str, 'o' );
// returns 'p'
```

By default, the search starts at the end of the string and proceeds backwards to the beginning. To start the search at a specified index, specify an integer for the `fromIndex` argument.

```javascript
var str = 'beep boop';
var out = substringAfterLast( str, 'b', 3 );
// returns 'eep boop'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If a substring is not present in a provided string, the function returns an empty string.
-   If provided an empty substring, the function returns an empty string.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var substringAfterLast = require( '@stdlib/string/substring-after-last' );

var str = 'To be, or not to be, that is the question.';
var out = substringAfterLast( str, ', ' );
// returns 'that is the question.'

out = substringAfterLast( str, 'to be' );
// returns ', that is the question.'

out = substringAfterLast( str, 'question.' );
// returns ''

out = substringAfterLast( str, 'xyz' );
// returns ''

out = substringAfterLast( str, '' );
// returns ''
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
Usage: substring-after-last [options] --search=<string> [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --search string       Search string.
         --from-index int      Index at which to start the search.
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
    $ echo -n $'foo\nbar\nbaz' | substring-after-last --search a --split /\r?\n/

    # Escaped...
    $ echo -n $'foo\nbar\nbaz' | substring-after-last --search a --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ substring-after-last abcdefg --search d
efg
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n $'bar\nbaz' | substring-after-last --search b
ar
az
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'bar\tbaz' | substring-after-last --search b --split '\t'
ar
az
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

-   <span class="package-name">[`@stdlib/string/substring-before`][@stdlib/string/substring-before]</span><span class="delimiter">: </span><span class="description">return the part of a string before a specified substring.</span>
-   <span class="package-name">[`@stdlib/string/substring-before-last`][@stdlib/string/substring-before-last]</span><span class="delimiter">: </span><span class="description">return the part of a string before the last occurrence of a specified substring.</span>
-   <span class="package-name">[`@stdlib/string/substring-after`][@stdlib/string/substring-after]</span><span class="delimiter">: </span><span class="description">return the part of a string after a specified substring.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/substring-before]: https://github.com/stdlib-js/string/tree/main/substring-before

[@stdlib/string/substring-before-last]: https://github.com/stdlib-js/string/tree/main/substring-before-last

[@stdlib/string/substring-after]: https://github.com/stdlib-js/string/tree/main/substring-after

<!-- </related-links> -->

</section>

<!-- /.links -->
