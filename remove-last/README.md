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

# removeLast

> Remove the last character(s) of a string.

<section class="usage">

## Usage

```javascript
var removeLast = require( '@stdlib/string/remove-last' );
```

#### removeLast( str\[, n] )

Removes the last character of a `string`.

```javascript
var out = removeLast( 'last man standing' );
// returns 'last man standin'

out = removeLast( 'Hidden Treasures' );
// returns 'Hidden Treasure'
```

If provided a second argument, the function removes the last `n` characters.

```javascript
var out = removeLast( 'foo bar', 4 );
// returns 'foo'

out = removeLast( 'foo bar', 0 );
// returns 'foo bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var removeLast = require( '@stdlib/string/remove-last' );

var str = removeLast( 'last man standing' );
// returns 'last man standin'

str = removeLast( 'presidential election' );
// returns 'presidential electio'

str = removeLast( 'javaScript' );
// returns 'javaScrip'

str = removeLast( 'Hidden Treasures' );
// returns 'Hidden Treasure'

str = removeLast( 'Lorem ipsum dolor sit amet', 4 );
// returns 'Lorem ipsum dolor sit '

str = removeLast( '🐮🐷🐸🐵', 2 );
// returns '🐮🐷'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: remove-last [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --n                   Number of characters to remove. Default: 1.
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
    $ echo -n $'beep\nboop' | remove-last --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | remove-last --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ remove-last beep
bee
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep\nboop' | remove-last --n 2
be
bo
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep\tboop' | remove-last --split '\t'
bee
boo
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/remove-first`][@stdlib/string/remove-first]</span><span class="delimiter">: </span><span class="description">remove the first character of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/remove-first]: https://github.com/stdlib-js/string/tree/main/remove-first

<!-- </related-links> -->

</section>

<!-- /.links -->
