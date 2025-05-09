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

# removeLast

> Remove the last `n` UTF-16 code units of a string.

<section class="usage">

## Usage

```javascript
var removeLast = require( '@stdlib/string/base/remove-last' );
```

#### removeLast( str, n )

Removes the last `n` UTF-16 code units of a string.

```javascript
var out = removeLast( 'last man standing', 1 );
// returns 'last man standin'

out = removeLast( 'Hidden Treasures', 1 );
// returns 'Hidden Treasure'

out = removeLast( 'foo bar', 5 );
// returns 'fo'

out = removeLast( 'foo bar', 10 );
// returns ''
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var removeLast = require( '@stdlib/string/base/remove-last' );

var str = removeLast( 'presidential election', 1 );
// returns 'presidential electio'

str = removeLast( 'JavaScript', 1 );
// returns 'JavaScrip'

str = removeLast( 'The Last of the Mohicans', 5 );
// returns 'The Last of the Moh'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/remove-last-code-point`][@stdlib/string/base/remove-last-code-point]</span><span class="delimiter">: </span><span class="description">remove the last Unicode code point of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/remove-last-grapheme-cluster`][@stdlib/string/base/remove-last-grapheme-cluster]</span><span class="delimiter">: </span><span class="description">remove the last grapheme cluster (i.e., user-perceived character) of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/remove-first`][@stdlib/string/base/remove-first]</span><span class="delimiter">: </span><span class="description">remove the first UTF-16 code unit of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/remove-last-code-point]: https://github.com/stdlib-js/string/tree/main/base/remove-last-code-point

[@stdlib/string/base/remove-last-grapheme-cluster]: https://github.com/stdlib-js/string/tree/main/base/remove-last-grapheme-cluster

[@stdlib/string/base/remove-first]: https://github.com/stdlib-js/string/tree/main/base/remove-first

<!-- </related-links> -->

</section>

<!-- /.links -->
