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

# lpad

> Left pad a string.

<section class="usage">

## Usage

```javascript
var lpad = require( '@stdlib/string/left-pad' );
```

#### lpad( str, len\[, pad] )

Left pads a string such that the padded string has a length of **at least** `len`.

```javascript
var str = lpad( 'a', 5 );
// returns '    a'
```

By default, an input string is padded with a Unicode "space" character (U+0020). To pad with a different character or sequence of characters, provide a `pad` string.

```javascript
var str = lpad( 'beep', 10, 'b' );
// returns 'bbbbbbbeep'

str = lpad( 'boop', 12, 'beep' );
// returns 'beepbeepboop'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   An output string is **not** guaranteed to have a length of **exactly** `len`, but to have a length of **at least** `len`. To generate a padded string having a length equal to `len`

    ```javascript
    var str = lpad( 'boop', 10, 'beep' ); // => length 12
    // returns 'beepbeepboop'

    str = str.substring( str.length-10 ); // => length 10
    // returns 'epbeepboop'
    ```

-   This function differs from [`String.prototype.padStart`][mdn-string-padstart] in the following ways:

    -   The function is **not** guaranteed to return a string having a length exactly equal to `len` (as explained above).
    -   The function does **not** truncate `pad` (from the end) in order to ensure the returned string has length `len`.

    To replicate [`String.prototype.padStart`][mdn-string-padstart] truncation behavior

    ```javascript
    var floorb = require( '@stdlib/math/base/special/floorb' );

    function padStart( str, len, pad ) {
        var n;
        if ( len <= str.length ) {
            return str;
        }
        n = floorb( len-str.length, 1, pad.length ) + str.length;
        return pad.substring( 0, len-n ) + lpad( str, n, pad );
    }

    var str = padStart( 'boop', 10, 'beep' );
    // returns 'bebeepboop'
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var lpad = require( '@stdlib/string/left-pad' );

var str = 'beep';
var i;
for ( i = 0; i < 100; i++ ) {
    console.log( lpad( str, discreteUniform( str.length, str.length+10 ), 'b' ) );
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
Usage: lpad [options] --len=<length> [<string>]

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
    $ echo -n $'beep\nboop' | lpad -len 8 --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | lpad -len 8 --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ lpad beep --len 10 --pad b
bbbbbbbeep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep' | lpad --len 8
    beep
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'boop\tbeep' |  lpad --len 8 --split '\t'
    boop
    beep
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/pad`][@stdlib/string/pad]</span><span class="delimiter">: </span><span class="description">pad a string.</span>
-   <span class="package-name">[`@stdlib/string/right-pad`][@stdlib/string/right-pad]</span><span class="delimiter">: </span><span class="description">right pad a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[mdn-string-padstart]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

<!-- <related-links> -->

[@stdlib/string/pad]: https://github.com/stdlib-js/string/tree/main/pad

[@stdlib/string/right-pad]: https://github.com/stdlib-js/string/tree/main/right-pad

<!-- </related-links> -->

</section>

<!-- /.links -->
