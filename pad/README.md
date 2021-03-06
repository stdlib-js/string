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

# pad

> Pad a string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pad = require( '@stdlib/string/pad' );
```

#### pad( str, len\[, options] )

Pads a `string` such that the padded `string` has a `length` of `len`.

```javascript
var str = pad( 'a', 5 );
// returns 'a    '
```

The function accepts the following `options`:

-   **lpad**: `string` used to left pad. Default: `''`.
-   **rpad**: `string` used to right pad. Default: `' '`.
-   **centerRight**: `boolean` indicating whether to center right in the event of a tie. Default: `false` (i.e., center left).

By default, an input `string` is padded with spaces. To pad with a different character or sequence of characters, provide a pad `string`.

```javascript
var str = pad( 'a', 10, {
    'lpad': 'b'
});
// returns 'bbbbbbbbba'

str = pad( 'a', 12, {
    'rpad': 'b'
});
// returns 'abbbbbbbbbbb'
```

To center an input `string`, provide both `lpad` and `rpad` options.

```javascript
var opts = {
    'lpad': 'a',
    'rpad': 'c'
};

var str = pad( 'b', 11, opts );
// returns 'aaaaabccccc'
```

When both `lpad` and `rpad` are specified and `len-str.length` is **odd**, left and right padding cannot equally split the available padding space. By default, right padding receives the extra character (i.e., the input `string` is left-centered).

```javascript
var opts = {
    'lpad': 'a',
    'rpad': 'c'
};

var str = pad( 'b', 10, opts );
// returns 'aaaabccccc'
```

To center right, set the `centerRight` option.

```javascript
var opts = {
    'lpad': 'a',
    'rpad': 'c',
    'centerRight': true
};

var str = pad( 'b', 10, opts );
// returns 'aaaaabcccc'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to [lpad][@stdlib/string/left-pad] and [rpad][@stdlib/string/right-pad], any padding which does not evenly divide available space is trimmed such that the returned `string` length is **always** `len`.

    ```javascript
    var opts = {
        'lpad': 'boop',
        'rpad': 'woot'
    };
    var str = pad( 'beep', 10, opts );
    // returns 'boobeepwoo'
    ```

-   Similarly, if `len < str.length`, the input `string` is trimmed.

    ```javascript
    // Pad right, trim right:
    var str = pad( 'beep', 2 );
    // returns 'be'

    // Pad left, trim left:
    str = pad( 'beep', 2, {
        'lpad': 'b'
    });
    // returns 'ep'

    // Pad both, trim both:
    str = pad( 'beep', 2, {
        'lpad': '@',
        'rpad': '!'
    });
    // returns 'ee'

    // Pad both, trim both starting from left:
    str = pad( 'abcdef', 3, {
        'lpad': '@',
        'rpad': '!'
    });
    // returns 'cde'

    // Pad both, trim both starting from right:
    str = pad( 'abcdef', 3, {
        'lpad': '@',
        'rpad': '!',
        'centerRight': true
    });
    // returns 'bcd'
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var pad = require( '@stdlib/string/pad' );

var str = 'boop';
var out;
var len;
var i;

for ( i = 0; i < 100; i++ ) {
    len = round( randu()*10.0 ) + str.length;
    out = pad( str, len, {
        'lpad': 'beep',
        'rpad': 'p'
    });
    console.log( '%s. %d. %d.', out, len, out.length );
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
Usage: padstr [options] [<string>] --len <length>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --len length          String length.
         --lpad str            String used to left pad. Default: ''.
         --rpad str            String used to right pad. Default: ' '.
         --cright              Center right in the event of a tie.
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
    $ echo -n $'beep\nboop' | padstr --len 10 --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | padstr --len 10 --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ padstr beep --len 10 --lpad b --rpad p
bbbbeepppp
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep' | pad --len 9 --lpad a --rpad o
aabeepooo
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep\tboop' | pad --len 9 --lpad a --rpad o --split '\t'
aabeepooo
aaboopooo
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
-   <span class="package-name">[`@stdlib/string/right-pad`][@stdlib/string/right-pad]</span><span class="delimiter">: </span><span class="description">right pad a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/left-pad]: https://github.com/stdlib-js/string/tree/main/left-pad

[@stdlib/string/right-pad]: https://github.com/stdlib-js/string/tree/main/right-pad

<!-- </related-links> -->

</section>

<!-- /.links -->
