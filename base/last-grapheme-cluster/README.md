<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# lastGraphemeCluster

> Return the last `n` grapheme clusters (i.e., user-perceived characters) of a string.

<section class="usage">

## Usage

```javascript
var lastGraphemeCluster = require( '@stdlib/string/base/last-grapheme-cluster' );
```

#### lastGraphemeCluster( str, n )

Returns the last `n` grapheme clusters (i.e., user-perceived characters) of a string.

```javascript
var out = lastGraphemeCluster( 'Hello World', 1 );
// returns 'd'

out = lastGraphemeCluster( 'Evening', 3 );
// returns 'ing'

out = lastGraphemeCluster( 'foo bar', 10 );
// returns 'foo bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lastGraphemeCluster = require( '@stdlib/string/base/last-grapheme-cluster' );

var str = lastGraphemeCluster( 'Hello World!', 1 );
// returns '!'

str = lastGraphemeCluster( 'JavaScript', 6 );
// returns 'Script'

str = lastGraphemeCluster( 'stdlib', 10 );
// returns 'stdlib'

str = lastGraphemeCluster( '🐶🐮🐷🐰🐸', 2 );
// returns '🐰🐸'

str = lastGraphemeCluster( '六书/六書', 2 );
// returns '六書'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/first-grapheme-cluster`][@stdlib/string/base/first-grapheme-cluster]</span><span class="delimiter">: </span><span class="description">return the first grapheme cluster (i.e., user-perceived character) of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/last-code-point`][@stdlib/string/base/last-code-point]</span><span class="delimiter">: </span><span class="description">return the last Unicode code point of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/last`][@stdlib/string/base/last]</span><span class="delimiter">: </span><span class="description">return the last UTF-16 code unit of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/first-grapheme-cluster]: https://github.com/stdlib-js/string/tree/main/base/first-grapheme-cluster

[@stdlib/string/base/last-code-point]: https://github.com/stdlib-js/string/tree/main/base/last-code-point

[@stdlib/string/base/last]: https://github.com/stdlib-js/string/tree/main/base/last

<!-- </related-links> -->

</section>

<!-- /.links -->
