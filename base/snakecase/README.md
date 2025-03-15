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

# snakecase

> Convert a string to snake case.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var snakecase = require( '@stdlib/string/base/snakecase' );
```

#### snakecase( str )

Converts a string to snake case.

```javascript
var str = snakecase( 'Foo Bar' );
// returns 'foo_bar'

str = snakecase( 'I am a tiny little house' );
// returns 'i_am_a_tiny_little_house'

str = snakecase( 'Hello World!' );
// returns 'hello_world'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var snakecase = require( '@stdlib/string/base/snakecase' );

var str = 'foo bar baz';
var out = snakecase( str );
// returns 'foo_bar_baz'

str = 'foo_baz';
out = snakecase( str );
// returns 'foo_baz'

str = 'foo_bar_baz!';
out = snakecase( str );
// returns 'foo_bar_baz'

str = 'beep    boop!';
out = snakecase( str );
// returns 'beep_boop'

str = 'foo-baz';
out = snakecase( str );
// returns 'foo_baz'

str = 'Welcome! 😀';
out = snakecase( str );
// returns 'welcome_😀'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/camelcase`][@stdlib/string/base/camelcase]</span><span class="delimiter">: </span><span class="description">convert a string to camel case.</span>
-   <span class="package-name">[`@stdlib/string/base/lowercase`][@stdlib/string/base/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>
-   <span class="package-name">[`@stdlib/string/base/stickycase`][@stdlib/string/base/stickycase]</span><span class="delimiter">: </span><span class="description">convert a string to sticky case.</span>
-   <span class="package-name">[`@stdlib/string/base/uppercase`][@stdlib/string/base/uppercase]</span><span class="delimiter">: </span><span class="description">convert a string to uppercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/camelcase]: https://github.com/stdlib-js/string/tree/main/base/camelcase

[@stdlib/string/base/lowercase]: https://github.com/stdlib-js/string/tree/main/base/lowercase

[@stdlib/string/base/stickycase]: https://github.com/stdlib-js/string/tree/main/base/stickycase

[@stdlib/string/base/uppercase]: https://github.com/stdlib-js/string/tree/main/base/uppercase

<!-- </related-links> -->

</section>

<!-- /.links -->
