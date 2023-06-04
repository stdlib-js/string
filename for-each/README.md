<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# forEach

> Invokes a callback once for each (visual) character of a string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var forEach = require( '@stdlib/string/for-each' );
```

#### forEach( str, clbk\[, thisArg ] )

Invokes a `function` for each (visual) character of a `string`.

```javascript
function log( value, index ) {
    console.log( '%s: %d', index, value );
}

var str = 'Hello World!';

forEach( str, log );
/* =>
    0: H
    1: e
    2: l
    3: l
    4: o
    5:
    6: W
    7: o
    8: r
    9: l
    10: d
    11: !
*/
```

The invoked `function` is provided three arguments:

-   `value`: visual character.
-   `index`: starting character index.
-   `str`: input string.

```javascript
function log1( value, index ) {
    var repeatVal = value + value;
    console.log( '%s: %d', index, repeatVal );
}

var str1 = 'Hello World!';

forEach( str1, log1 );
/* =>
    0: HH
    1: ee
    2: ll
    3: ll
    4: oo
    5:
    6: WW
    7: oo
    8: rr
    9: ll
    10: dd
    11: !!
*/

function log2( value, index ) {
    var upperCased = value.toUpperCase();
    console.log( '%s: %d', index, upperCased );
}

var str2 = 'hello world!';

forEach( str2, log2 );
/* =>
    0: H
    1: E
    2: L
    3: L
    4: O
    5:
    6: W
    7: O
    8: R
    9: L
    10: D
    11: !
*/
```

To set the function execution context, provide a `thisArg`.

```javascript
function count( value ) {
    this.count += 1;
}

var str3 = 'hello world!';

var context = {
    'count': 0
};

forEach( str3, count, context );

var bool = str3.length === context.count;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function differs from traditional string iterations in the following ways:

    -   The function returns the input `str`.

    -   The `clbk` is executed on each _visual_ character as opposed to being executed on each character.

        ```javascript
        function log( value, index ) {
            console.log( '%s: %s', index, value );
        }

        var str = '\uD834\uDD1E';

        forEach( str, log );
        /* =>
            0: 𝄞
        */
        ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isEven = require( '@stdlib/assert/is-even' ).isPrimitive;
var forEach = require( '@stdlib/string/for-each' );

function log( value, index ) {
    if ( isEven( index ) ) {
        console.log( '%s: %d', index, '*' );
    } else {
        console.log( '%s: %d', index, value );
    }
}

var str4 = 'Javascript';
forEach( str4, log );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/for-each`][@stdlib/utils/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function once for each element in a collection.</span>
-   <span class="package-name">[`@stdlib/utils/async/for-each`][@stdlib/utils/async/for-each]</span><span class="delimiter">: </span><span class="description">invoke an async function once for each element in a collection.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/for-each]: https://github.com/stdlib-js/utils-for-each

[@stdlib/utils/async/for-each]: https://github.com/stdlib-js/utils-async-for-each

<!-- </related-links> -->

</section>

<!-- /.links -->