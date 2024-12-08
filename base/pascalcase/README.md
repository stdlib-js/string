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

# pascalcase

> Convert a string to Pascal case.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var pascalcase = require( '@stdlib/string/base/pascalcase' );
```

#### pascalcase( str )

Converts a string to Pascal case.

```javascript
var out = pascalcase( 'foo bar' );
// returns 'FooBar'

out = pascalcase( 'IS_MOBILE' );
// returns 'IsMobile'

out = pascalcase( 'Hello World!' );
// returns 'HelloWorld'

out = pascalcase( '--foo-bar--' );
// returns 'FooBar'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var pascalcase = require( '@stdlib/string/base/pascalcase' );

var str = 'Hello World!';
var out = pascalcase( str );
// returns 'HelloWorld'

str = 'HELLO WORLD!';
out = pascalcase( str );
// returns 'HelloWorld'

str = 'To be, or not to be: that is the question.';
out = pascalcase( str );
// returns 'ToBeOrNotToBeThatIsTheQuestion'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/camelcase`][@stdlib/string/base/camelcase]</span><span class="delimiter">: </span><span class="description">convert a string to camel case.</span>
-   <span class="package-name">[`@stdlib/string/base/lowercase`][@stdlib/string/base/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>
-   <span class="package-name">[`@stdlib/string/base/uppercase`][@stdlib/string/base/uppercase]</span><span class="delimiter">: </span><span class="description">convert a string to uppercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/camelcase]: https://github.com/stdlib-js/string/tree/main/base/camelcase

[@stdlib/string/base/lowercase]: https://github.com/stdlib-js/string/tree/main/base/lowercase

[@stdlib/string/base/uppercase]: https://github.com/stdlib-js/string/tree/main/base/uppercase

<!-- </related-links> -->

</section>

<!-- /.links -->
