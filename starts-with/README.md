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

# startsWith

> Test if a string starts with the characters of another string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var startsWith = require( '@stdlib/string/starts-with' );
```

#### startsWith( str, search\[, position] )

Tests if a string starts with the characters of another string.

```javascript
var str = 'To be, or not to be, that is the question.';

var bool = startsWith( str, 'To be' );
// returns true

bool = startsWith( str, 'to be' );
// returns false
```

By default, the function searches from the beginning of the input string. To search from a different character index, provide a `position` value (zero-based). If provided a negative `position`, the start index is determined relative to the string end (i.e., `pos = str.length + position`).

```javascript
var str = 'Remember the story I used to tell you when you were a boy?';

var bool = startsWith( str, 'the story' );
// returns false

bool = startsWith( str, 'the story', 9 );
// returns true

bool = startsWith( str, 'you', -15 );
// returns true
```

If provided an empty `search` string, the function **always** returns `true`.

```javascript
var str = 'beep boop';

var bool = startsWith( str, '' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function differs from [`String.prototype.startsWith`][mdn-string-startswith] in the following ways:

    -   The function requires string values for the first and second arguments and requires that the `position` argument be an integer value.
    -   The function does **not** clamp negative `position` values. Instead, when provided a negative `position`, the function resolves the starting search position relative to the end of the string.
    -   Except when provided an empty `search` string, the function **always** returns `false` if a `position` resolves to a starting search position which exceeds the bounds of the input string.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var startsWith = require( '@stdlib/string/starts-with' );

var str = 'Fair is foul, and foul is fair, hover through fog and filthy air';

var bool = startsWith( str, 'Fair' );
// returns true

bool = startsWith( str, 'fair' );
// returns false

bool = startsWith( str, 'foul', 8 );
// returns true

bool = startsWith( str, 'filthy', -10 );
// returns true
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: starts-with [options] --search=<string> [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --search string       Search string.
         --pos int             Search position.
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
    $ echo -n $'Hello, World!\nBeep Boop Baz' | starts-with --search=Beep --split /\r?\n/

    # Escaped...
    $ echo -n $'Hello, World!\nBeep Boop Baz' | starts-with --search=Beep --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ starts-with --search=be beep
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'boop' | starts-with --search=bo
true
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'Hello, World!\tBeep Boop' | starts-with --search=Beep --split '\t'
false
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/ends-with`][@stdlib/string/ends-with]</span><span class="delimiter">: </span><span class="description">test if a string ends with the characters of another string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[mdn-string-startswith]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

<!-- <related-links> -->

[@stdlib/string/ends-with]: https://github.com/stdlib-js/string/tree/main/ends-with

<!-- </related-links> -->

</section>

<!-- /.links -->
