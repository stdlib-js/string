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

# forEachGraphemeCluster

> Invokes a function for each grapheme cluster (i.e., user-perceived character) in a string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var forEachGraphemeCluster = require( '@stdlib/string/base/for-each-grapheme-cluster' );
```

#### forEachGraphemeCluster( str, clbk\[, thisArg ] )

Invokes a function for each grapheme cluster (i.e., user-perceived character) in a string.

```javascript
function log( value, index ) {
    console.log( '%d: %s', index, value );
}

forEachGraphemeCluster( 'Beep!', log );
/* =>
    0: B
    1: e
    2: e
    3: p
    4: !
*/
```

The invoked function is provided three arguments:

-   **value**: grapheme cluster.
-   **index**: starting grapheme cluster index.
-   **str**: input string.

To set the function execution context, provide a `thisArg`.

```javascript
function clbk() {
    this.count += 1;
}

var str = '👉🏿';

var ctx = {
    'count': 0
};

forEachGraphemeCluster( str, clbk, ctx );

var cnt = ctx.count;
// returns 1
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
var forEachGraphemeCluster = require( '@stdlib/string/base/for-each-grapheme-cluster' );

function log( value, index ) {
    console.log( '%d: %s', index, value );
}

forEachGraphemeCluster( 'presidential election', log );
forEachGraphemeCluster( 'Iñtërnâtiônàlizætiøn', log );
forEachGraphemeCluster( '🌷🍕', log );
forEachGraphemeCluster( '\uD834\uDD1E', log );
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

-   <span class="package-name">[`@stdlib/string/base/for-each`][@stdlib/string/base/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function for each UTF-16 code unit in a string.</span>
-   <span class="package-name">[`@stdlib/string/base/for-each-code-point`][@stdlib/string/base/for-each-code-point]</span><span class="delimiter">: </span><span class="description">invoke a function for each Unicode code point in a string.</span>
-   <span class="package-name">[`@stdlib/string/for-each`][@stdlib/string/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function for each character in a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/for-each]: https://github.com/stdlib-js/string/tree/main/base/for-each

[@stdlib/string/base/for-each-code-point]: https://github.com/stdlib-js/string/tree/main/base/for-each-code-point

[@stdlib/string/for-each]: https://github.com/stdlib-js/string/tree/main/for-each

<!-- </related-links> -->

</section>

<!-- /.links -->
