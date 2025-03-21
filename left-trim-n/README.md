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

# ltrimN

> Trim `n` characters from the beginning of a string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ltrimN = require( '@stdlib/string/left-trim-n' );
```

#### ltrimN( str, n\[, chars] )

Trims `n` characters from the beginning of a string.

```javascript
var str = '  foo  ';
var out = ltrimN( str, str.length );
// returns 'foo  '

out = ltrimN( str, 1 );
// returns ' foo  '
```

By default, the function trims whitespace characters. To trim a different set of characters instead, provide a string or an array of characters to trim:

```javascript
var str = '🐶🐶🐶 Animals 🐶🐶🐶';
var out = ltrimN( str, str.length, [ '🐶', ' ' ] );
// returns 'Animals 🐶🐶🐶'

out = ltrimN( str, str.length, '🐶 ' );
// returns 'Animals 🐶🐶🐶'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ltrimN = require( '@stdlib/string/left-trim-n' );

var out = ltrimN( '   Whitespace   ', 3 );
// returns 'Whitespace   '

out = ltrimN( '\t\t\tTabs\t\t\t', 2 );
// returns '\tTabs\t\t\t'

out = ltrimN( '~~~CUSTOM~~~', 3, '~' );
// returns 'CUSTOM~~~'
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
Usage: ltrimn [options] --n=<number>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --n number            Number of characters to trim.
         --chars str           Characters to trim. Default: whitespace.
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
    $ echo -n $'   foo   \n   bar   \n' | ltrimn --split /\r?\n/

    # Escaped...
    $ echo -n $'   foo   \n   bar   \n' | ltrimn --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ ltrimn '   Whitespace   ' --n=3
Whitespace   
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '~~~beep~boop~' | ltrimn --n=2 --chars '~'
~beep~boop~
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '~~~foo~~~\t~~~bar~~~\t~~~baz~~~' | ltrimn --split '\t' --chars '~' --n=3
foo~~~ 
bar~~~
baz~~~
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

-   <span class="package-name">[`@stdlib/string/right-trim-n`][@stdlib/string/right-trim-n]</span><span class="delimiter">: </span><span class="description">trim `n` characters from the end of a string.</span>
-   <span class="package-name">[`@stdlib/string/trim`][@stdlib/string/trim]</span><span class="delimiter">: </span><span class="description">trim whitespace characters from the beginning and end of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

<!-- <related-links> -->

[@stdlib/string/right-trim-n]: https://github.com/stdlib-js/string/tree/main/right-trim-n

[@stdlib/string/trim]: https://github.com/stdlib-js/string/tree/main/trim

<!-- </related-links> -->

</section>

<!-- /.links -->
