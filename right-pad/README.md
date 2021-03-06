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

# Right Pad

> Right pad a string.

<section class="usage">

## Usage

```javascript
var rpad = require( '@stdlib/string/right-pad' );
```

#### rpad( str, len\[, pad] )

Right pads a `string` such that the padded `string` has a `length` of **at least** `len`.

```javascript
var str = rpad( 'a', 5 );
// returns 'a    '
```

By default, an input `string` is padded with `spaces`. To pad with a different character or sequence of characters, provide a `pad` string.

```javascript
var str = rpad( 'beep', 10, 'p' );
// returns 'beeppppppp'

str = rpad( 'beep', 12, 'boop' );
// returns 'beepboopboop'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An output `string` is **not** guaranteed to have a length of **exactly** `len`, but to have a `length` of **at least** `len`. To generate a padded `string` having a `length` equal to `len`

    ```javascript
    var str = rpad( 'beep', 10, 'boop' );
    // returns 'beepboopboop' => length 12

    str = str.substring( 0, 10 );
    // returns 'beepboopbo' => length 10
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var rpad = require( '@stdlib/string/right-pad' );

var str = 'beep';
var n;
var i;

for ( i = 0; i < 100; i++ ) {
    n = round( randu()*10.0 ) + str.length;
    console.log( rpad( str, n, 'p' ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: rpad [options] [<string>] --len=<length>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --len length          Minimum string length.
         --pad str             String used to pad. Default: ' '.
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
    $ echo -n $'beep\nboop' | rpad --len 8 --pad % --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | rpad --len 8 --pad % --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ rpad beep --len 10 --pad p
beeppppppp
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'boop' | rpad --len 8 --pad %
boop%%%%
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'boop\tbeep' |  rpad --len 8 --pad % --split '\t'
boop%%%%
beep%%%%
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/left-pad`][@stdlib/string/left-pad]</span><span class="delimiter">: </span><span class="description">left pad a string.</span>
-   <span class="package-name">[`@stdlib/string/pad`][@stdlib/string/pad]</span><span class="delimiter">: </span><span class="description">pad a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/left-pad]: https://github.com/stdlib-js/string/tree/main/left-pad

[@stdlib/string/pad]: https://github.com/stdlib-js/string/tree/main/pad

<!-- </related-links> -->

</section>

<!-- /.links -->
