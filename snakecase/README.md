<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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
var snakecase = require( '@stdlib/string/snakecase' );
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
var snakecase = require( '@stdlib/string/snakecase' );

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

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: snakecase [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beEp booP\nfooBar' | snakecase --split /\r?\n/

    # Escaped...
    $ echo -n $'beEp booP\nfooBar' | snakecase --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ snakecase 'hello world!'
hello_world
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beEp booP' | snakecase
beep_boop
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beEp booP\tfooBar' | snakecase --split '\t'
beep_boop
foo_bar
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/camelcase`][@stdlib/string/camelcase]</span><span class="delimiter">: </span><span class="description">convert a string to camel case.</span>
-   <span class="package-name">[`@stdlib/string/constantcase`][@stdlib/string/constantcase]</span><span class="delimiter">: </span><span class="description">convert a string to constant case.</span>
-   <span class="package-name">[`@stdlib/string/kebabcase`][@stdlib/string/kebabcase]</span><span class="delimiter">: </span><span class="description">convert a string to kebab case.</span>
-   <span class="package-name">[`@stdlib/string/pascalcase`][@stdlib/string/pascalcase]</span><span class="delimiter">: </span><span class="description">convert a string to Pascal case.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/camelcase]: https://github.com/stdlib-js/string/tree/main/camelcase

[@stdlib/string/constantcase]: https://github.com/stdlib-js/string/tree/main/constantcase

[@stdlib/string/kebabcase]: https://github.com/stdlib-js/string/tree/main/kebabcase

[@stdlib/string/pascalcase]: https://github.com/stdlib-js/string/tree/main/pascalcase

<!-- </related-links> -->

</section>

<!-- /.links -->
