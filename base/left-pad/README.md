<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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
var lpad = require( '@stdlib/string/base/left-pad' );
```

#### lpad( str, len, pad )

Left pads a string such that the padded string has a length of **at least** `len`.

```javascript
var str = lpad( 'a', 5, ' ' );
// returns '    a'

str = lpad( 'beep', 10, 'b' );
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

    str = str.substring( 0, 10 ); // => length 10
    // returns 'beepbeepbo'

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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var papply = require( '@stdlib/utils/papply' );
var papplyRight = require( '@stdlib/utils/papply-right' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var map = require( '@stdlib/utils/map' );
var logEach = require( '@stdlib/console/log-each' );
var lpad = require( '@stdlib/string/base/left-pad' );

// Define a string to pad:
var str = 'beep';

// Generate random lengths:
var lens = discreteUniform( 10, str.length, str.length+10 );

// Create a function for creating padded strings:
var fcn = naryFunction( papply( papplyRight( lpad, 'b' ), str ), 1 );

// Generate padded strings:
var out = map( lens, fcn );

// Print results:
logEach( '%s', out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/right-pad`][@stdlib/string/base/right-pad]</span><span class="delimiter">: </span><span class="description">right pad a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-string-padstart]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

<!-- <related-links> -->

[@stdlib/string/base/right-pad]: https://github.com/stdlib-js/string/tree/main/base/right-pad

<!-- </related-links> -->

</section>

<!-- /.links -->
