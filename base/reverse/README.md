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

# reverse

> reverse the UTF-16 code units of a string.

<section class="usage">

## Usage

```javascript
var reverse = require( '@stdlib/string/base/reverse' );
```

#### reverse( str )

Reverses the UTF-16 code units of a string.

```javascript
var out = reverse( 'last man standing' );
// returns 'gnidnats nam tsal'

out = reverse( 'Hidden Treasures' );
// returns 'serusaerT neddiH'

out = reverse( 'foo bar' );
// returns 'rab oof'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reverse = require( '@stdlib/string/base/reverse' );

var str = reverse( 'presidential election' );
// returns 'noitcele laitnediserp'

str = reverse( 'JavaScript' );
// returns 'tpircSavaJ'

str = reverse( 'The Last of the Mohicans' );
// returns 'snacihoM eht fo tsaL ehT'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/reverse-code-points`][@stdlib/string/base/reverse-code-points]</span><span class="delimiter">: </span><span class="description">reverse the Unicode code points of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/reverse-grapheme-clusters`][@stdlib/string/base/reverse-grapheme-clusters]</span><span class="delimiter">: </span><span class="description">reverse the grapheme clusters (i.e., user-perceived characters) of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/reverse-code-points]: https://github.com/stdlib-js/string/tree/main/base/reverse-code-points

[@stdlib/string/base/reverse-grapheme-clusters]: https://github.com/stdlib-js/string/tree/main/base/reverse-grapheme-clusters

<!-- </related-links> -->

</section>

<!-- /.links -->
