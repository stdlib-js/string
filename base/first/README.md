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

# first

> Return the first `n` UTF-16 code units of a string.

<section class="usage">

## Usage

```javascript
var first = require( '@stdlib/string/base/first' );
```

#### first( str, n )

Returns the first `n` UTF-16 code units of a string.

```javascript
var out = first( 'last man standing', 1 );
// returns 'l'

out = first( 'Hidden Treasures', 1 );
// returns 'H'

out = first( 'foo bar', 5 );
// returns 'foo b'

out = first( 'foo bar', 10 );
// returns 'foo bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var first = require( '@stdlib/string/base/first' );

var str = first( 'presidential election', 1 );
// returns 'p'

str = first( 'JavaScript', 1 );
// returns 'J'

str = first( 'The Last of the Mohicans', 5 );
// returns 'The L'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/first-code-point`][@stdlib/string/base/first-code-point]</span><span class="delimiter">: </span><span class="description">return the first Unicode code point of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/first-grapheme-cluster`][@stdlib/string/base/first-grapheme-cluster]</span><span class="delimiter">: </span><span class="description">return the first grapheme cluster (i.e., user-perceived character) of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/last`][@stdlib/string/base/last]</span><span class="delimiter">: </span><span class="description">return the last UTF-16 code unit of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/remove-first`][@stdlib/string/base/remove-first]</span><span class="delimiter">: </span><span class="description">remove the first UTF-16 code unit of a string.</span>
-   <span class="package-name">[`@stdlib/string/first`][@stdlib/string/first]</span><span class="delimiter">: </span><span class="description">return the first character(s) of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/first-code-point]: https://github.com/stdlib-js/string/tree/main/base/first-code-point

[@stdlib/string/base/first-grapheme-cluster]: https://github.com/stdlib-js/string/tree/main/base/first-grapheme-cluster

[@stdlib/string/base/last]: https://github.com/stdlib-js/string/tree/main/base/last

[@stdlib/string/base/remove-first]: https://github.com/stdlib-js/string/tree/main/base/remove-first

[@stdlib/string/first]: https://github.com/stdlib-js/string/tree/main/first

<!-- </related-links> -->

</section>

<!-- /.links -->
