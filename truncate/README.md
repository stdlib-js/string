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

# truncate

> Truncate a string to a specified length.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var truncate = require( '@stdlib/string/truncate' );
```

#### truncate( str, len\[, ending] )

Truncates a string to a specified length.

```javascript
var out = truncate( 'beep boop', 7 );
// returns 'beep...'
```

By default, the truncated string is appended with `'...'`. To customize the truncated string, provide an `ending` argument:

```javascript
var out = truncate( 'beep boop', 7, '!' );
// returns 'beep b!'

out = truncate( 'beep boop', 7, '!!!' );
// returns 'beep!!!'
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
var truncate = require( '@stdlib/string/truncate' );

var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
var out = truncate( str, 14 );
// returns 'Lorem ipsum...'

str = 'To be or not to be, that is the question';
out = truncate( str, 19, '!' );
// returns 'To be or not to be!'

str = 'The quick fox jumps over the lazy dog.';
out = truncate( str, 16, '...' );
// returns 'The quick fox...'

str = '🐺 Wolf Brothers 🐺';
out = truncate( str, 6 );
// returns '🐺 W...'
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
Usage: truncate [options] [<string>] --len <length>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --len length          String length.
         --ending str          Custom ending. Default: '...'.
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
    $ echo -n $'Hello, World!\nBeep Boop Baz' | truncate --len 6 --split /\r?\n/

    # Escaped...
    $ echo -n $'Hello, World!\nBeep Boop Baz' | truncate --len 6 --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ truncate 'Hello, World!' --len 8
Hello...

$ truncate 'Hello, World!' --len 6 --ending '!'
Hello!
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'Hello, World!' | truncate --len 8
Hello...
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'Hello, World!\tBeep Boop' | truncate --split '\t' --len 8
Hello...
Beep ...
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

-   <span class="package-name">[`@stdlib/string/truncate-middle`][@stdlib/string/truncate-middle]</span><span class="delimiter">: </span><span class="description">truncate a string in the middle to a specified length.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/truncate-middle]: https://github.com/stdlib-js/string/tree/main/truncate-middle

<!-- </related-links> -->

</section>

<!-- /.links -->
