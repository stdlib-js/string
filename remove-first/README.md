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

# removeFirst

> Remove the first character(s) of a string.

<section class="usage">

## Usage

```javascript
var removeFirst = require( '@stdlib/string/remove-first' );
```

#### removeFirst( str\[, n]\[, options] )

Removes the first character(s) of a `string`.

```javascript
var out = removeFirst( 'last man standing' );
// returns 'ast man standing'

out = removeFirst( 'Hidden Treasures' );
// returns 'idden Treasures'
```

The function supports the following options:

-   **mode**: type of characters to return. Must be one of the following:

    -   `'grapheme'`: grapheme clusters. Appropriate for strings containing visual characters which can span multiple Unicode code points (e.g., emoji).
    -   `'code_point'`: Unicode code points. Appropriate for strings containing visual characters which are comprised of more than one Unicode code unit (e.g., ideographic symbols and punctuation and mathematical alphanumerics).
    -   `'code_unit'`: UTF-16 code units. Appropriate for strings containing visual characters drawn from the basic multilingual plane (BMP) (e.g., common characters, such as those from the Latin, Greek, and Cyrillic alphabets).

    Default: `'grapheme'`.

By default, the function returns the first character. To return the first `n` characters, provide a second argument specifying the number of characters to return.

```javascript
var out = removeFirst( 'foo bar', 4 );
// returns 'bar'

out = removeFirst( 'foo bar', 10 );
// returns ''
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   By default, the function assumes the general case in which an input string may contain an arbitrary number of grapheme clusters. This assumption comes with a performance cost. Accordingly, if an input string is known to only contain visual characters of a particular type (e.g., only alphanumeric), one can achieve better performance by specifying the appropriate `mode` option.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var removeFirst = require( '@stdlib/string/remove-first' );

var str = removeFirst( 'last man standing' );
// returns 'ast man standing'

str = removeFirst( 'presidential election' );
// returns 'residential election'

str = removeFirst( 'JavaScript' );
// returns 'avaScript'

str = removeFirst( 'Hidden Treasures' );
// returns 'idden Treasures'

str = removeFirst( 'The Last of the Mohicans', 4 );
// returns 'Last of the Mohicans'

str = removeFirst( '🐶🐮🐷🐰🐸', 2 );
// returns '🐷🐰🐸'

str = removeFirst( '🐶🐮🐷🐰🐸', 10 );
// returns ''
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: remove-first [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --n                   Number of characters to remove. Default: 1.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
         --mode mode           Type of character to return. Default: 'grapheme'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beep\nboop' | remove-first --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | remove-first --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ remove-first beep
eep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep\nboop' | remove-first --n=2
be
bo
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep\tboop' | remove-first --split '\t'
eep
oop
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/remove-last`][@stdlib/string/remove-last]</span><span class="delimiter">: </span><span class="description">remove the last character(s) of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/remove-last]: https://github.com/stdlib-js/string/tree/main/remove-last

<!-- </related-links> -->

</section>

<!-- /.links -->
