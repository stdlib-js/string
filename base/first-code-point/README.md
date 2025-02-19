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

# firstCodePoint

> Return the first `n` Unicode code points of a string.

<section class="usage">

## Usage

```javascript
var firstCodePoint = require( '@stdlib/string/base/first-code-point' );
```

#### firstCodePoint( str, n )

Returns the first `n` Unicode code points of a string.

```javascript
var out = firstCodePoint( 'last man standing', 1 );
// returns 'l'

out = firstCodePoint( 'Hidden Treasures', 1 );
// returns 'H'

out = firstCodePoint( 'foo bar', 5 );
// returns 'foo b'

out = firstCodePoint( 'foo bar', 10 );
// returns 'foo bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var firstCodePoint = require( '@stdlib/string/base/first-code-point' );

var str = firstCodePoint( 'presidential election', 1 );
// returns 'p'

str = firstCodePoint( 'JavaScript', 1 );
// returns 'J'

str = firstCodePoint( 'The Last of the Mohicans', 5 );
// returns 'The L'

str = firstCodePoint( 'अनुच्छेद', 1 );
// returns 'अ'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/first`][@stdlib/string/base/first]</span><span class="delimiter">: </span><span class="description">return the first UTF-16 code unit of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/first-grapheme-cluster`][@stdlib/string/base/first-grapheme-cluster]</span><span class="delimiter">: </span><span class="description">return the first grapheme cluster (i.e., user-perceived character) of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/last-code-point`][@stdlib/string/base/last-code-point]</span><span class="delimiter">: </span><span class="description">return the last Unicode code point of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/remove-first-code-point`][@stdlib/string/base/remove-first-code-point]</span><span class="delimiter">: </span><span class="description">remove the first Unicode code point of a string.</span>
-   <span class="package-name">[`@stdlib/string/first`][@stdlib/string/first]</span><span class="delimiter">: </span><span class="description">return the first character(s) of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/first]: https://github.com/stdlib-js/string/tree/main/base/first

[@stdlib/string/base/first-grapheme-cluster]: https://github.com/stdlib-js/string/tree/main/base/first-grapheme-cluster

[@stdlib/string/base/last-code-point]: https://github.com/stdlib-js/string/tree/main/base/last-code-point

[@stdlib/string/base/remove-first-code-point]: https://github.com/stdlib-js/string/tree/main/base/remove-first-code-point

[@stdlib/string/first]: https://github.com/stdlib-js/string/tree/main/first

<!-- </related-links> -->

</section>

<!-- /.links -->
