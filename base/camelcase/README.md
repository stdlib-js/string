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

# camelcase

> Convert a string to camel case.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var camelcase = require( '@stdlib/string/base/camelcase' );
```

#### camelcase( str )

Converts a string to camel case.

```javascript
var out = camelcase( 'foo bar' );
// returns 'fooBar'

out = camelcase( 'IS_MOBILE' );
// returns 'isMobile'

out = camelcase( 'Hello World!' );
// returns 'helloWorld'

out = camelcase( '--foo-bar--' );
// returns 'fooBar'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var camelcase = require( '@stdlib/string/base/camelcase' );

var str = 'Hello World!';
var out = camelcase( str );
// returns 'helloWorld'

str = 'HELLO WORLD!';
out = camelcase( str );
// returns 'helloWorld'

str = 'To be, or not to be: that is the question.';
out = camelcase( str );
// returns 'toBeOrNotToBeThatIsTheQuestion'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/constantcase`][@stdlib/string/base/constantcase]</span><span class="delimiter">: </span><span class="description">convert a string to constant case.</span>
-   <span class="package-name">[`@stdlib/string/base/lowercase`][@stdlib/string/base/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>
-   <span class="package-name">[`@stdlib/string/base/snakecase`][@stdlib/string/base/snakecase]</span><span class="delimiter">: </span><span class="description">convert a string to snake case.</span>
-   <span class="package-name">[`@stdlib/string/base/uppercase`][@stdlib/string/base/uppercase]</span><span class="delimiter">: </span><span class="description">convert a string to uppercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/constantcase]: https://github.com/stdlib-js/string/tree/main/base/constantcase

[@stdlib/string/base/lowercase]: https://github.com/stdlib-js/string/tree/main/base/lowercase

[@stdlib/string/base/snakecase]: https://github.com/stdlib-js/string/tree/main/base/snakecase

[@stdlib/string/base/uppercase]: https://github.com/stdlib-js/string/tree/main/base/uppercase

<!-- </related-links> -->

</section>

<!-- /.links -->
