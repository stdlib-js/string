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

# dotcase

> Convert a string to dot case.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dotcase = require( '@stdlib/string/base/dotcase' );
```

#### dotcase( str )

Converts a string to dot case.

```javascript
var str = dotcase( 'foo bar' );
// returns 'foo.bar'

str = dotcase( 'foo bar baz' );
// returns 'foo.bar.baz'

str = dotcase( 'foo_bar' );
// returns 'foo.bar'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var dotcase = require( '@stdlib/string/base/dotcase' );

var str = 'Hello World!';
var out = dotcase( str );
// returns 'hello.world'

str = 'I am a tiny little teapot';
out = dotcase( str );
// returns 'i.am.a.tiny.little.teapot'

str = 'with big problems';
out = dotcase( str );
// returns 'with.big.problems'

str = 'To be, or not to be: that is the question.';
out = dotcase( str );
// returns 'to.be.or.not.to.be.that.is.the.question'

str = 'isMobile';
out = dotcase( str );
// returns 'is.mobile'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/camelcase`][@stdlib/string/base/camelcase]</span><span class="delimiter">: </span><span class="description">convert a string to camel case.</span>
-   <span class="package-name">[`@stdlib/string/base/lowercase`][@stdlib/string/base/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>
-   <span class="package-name">[`@stdlib/string/base/snakecase`][@stdlib/string/base/snakecase]</span><span class="delimiter">: </span><span class="description">convert a string to snake case.</span>
-   <span class="package-name">[`@stdlib/string/base/uppercase`][@stdlib/string/base/uppercase]</span><span class="delimiter">: </span><span class="description">convert a string to uppercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/camelcase]: https://github.com/stdlib-js/string/tree/main/base/camelcase

[@stdlib/string/base/lowercase]: https://github.com/stdlib-js/string/tree/main/base/lowercase

[@stdlib/string/base/snakecase]: https://github.com/stdlib-js/string/tree/main/base/snakecase

[@stdlib/string/base/uppercase]: https://github.com/stdlib-js/string/tree/main/base/uppercase

<!-- </related-links> -->

</section>

<!-- /.links -->
