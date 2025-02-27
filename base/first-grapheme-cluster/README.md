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

# firstGraphemeCluster

> Return the first `n` grapheme clusters (i.e., user-perceived characters) of a string.

<section class="usage">

## Usage

```javascript
var firstGraphemeCluster = require( '@stdlib/string/base/first-grapheme-cluster' );
```

#### firstGraphemeCluster( str, n )

Returns the first `n` grapheme clusters (i.e., user-perceived characters) of a string.

```javascript
var out = firstGraphemeCluster( 'last man standing', 1 );
// returns 'l'

out = firstGraphemeCluster( 'Hidden Treasures', 1 );
// returns 'H'

out = firstGraphemeCluster( 'foo bar', 5 );
// returns 'foo b'

out = firstGraphemeCluster( 'foo bar', 10 );
// returns 'foo bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var firstGraphemeCluster = require( '@stdlib/string/base/first-grapheme-cluster' );

var str = firstGraphemeCluster( 'presidential election', 1 );
// returns 'p'

str = firstGraphemeCluster( 'JavaScript', 1 );
// returns 'J'

str = firstGraphemeCluster( 'The Last of the Mohicans', 5 );
// returns 'The L'

str = firstGraphemeCluster( '🐶🐮🐷🐰🐸', 2 );
// returns '🐶🐮'

str = firstGraphemeCluster( '🐶🐮🐷🐰🐸', 10 );
// returns '🐶🐮🐷🐰🐸'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/first`][@stdlib/string/base/first]</span><span class="delimiter">: </span><span class="description">return the first UTF-16 code unit of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/first-code-point`][@stdlib/string/base/first-code-point]</span><span class="delimiter">: </span><span class="description">return the first Unicode code point of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/last-grapheme-cluster`][@stdlib/string/base/last-grapheme-cluster]</span><span class="delimiter">: </span><span class="description">return the last grapheme cluster (i.e., user-perceived character) of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/remove-first-grapheme-cluster`][@stdlib/string/base/remove-first-grapheme-cluster]</span><span class="delimiter">: </span><span class="description">remove the first grapheme cluster (i.e., user-perceived character) of a string.</span>
-   <span class="package-name">[`@stdlib/string/first`][@stdlib/string/first]</span><span class="delimiter">: </span><span class="description">return the first character(s) of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/first]: https://github.com/stdlib-js/string/tree/main/base/first

[@stdlib/string/base/first-code-point]: https://github.com/stdlib-js/string/tree/main/base/first-code-point

[@stdlib/string/base/last-grapheme-cluster]: https://github.com/stdlib-js/string/tree/main/base/last-grapheme-cluster

[@stdlib/string/base/remove-first-grapheme-cluster]: https://github.com/stdlib-js/string/tree/main/base/remove-first-grapheme-cluster

[@stdlib/string/first]: https://github.com/stdlib-js/string/tree/main/first

<!-- </related-links> -->

</section>

<!-- /.links -->
