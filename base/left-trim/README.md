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

# ltrim

> Trim whitespace characters from the beginning of a string.

<section class="usage">

## Usage

```javascript
var ltrim = require( '@stdlib/string/base/left-trim' );
```

#### ltrim( str )

Trims whitespace from the beginning of a string.

```javascript
var out = ltrim( ' \r\n\t  Beep \t\t\n  ' );
// returns 'Beep \t\t\n  '
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Following [Unicode 6.3.0][unicode] and later, "whitespace" is defined as the following characters:

    -   `\f`
    -   `\n`
    -   `\r`
    -   `\t`
    -   `\v`
    -   `\u0020`
    -   `\u00a0`
    -   `\u1680`
    -   `\u2000-\u200a`
    -   `\u2028`
    -   `\u2029`
    -   `\u202f`
    -   `\u205f`
    -   `\u3000`
    -   `\ufeff`

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ltrim = require( '@stdlib/string/base/left-trim' );

var str = ltrim( '   Whitespace   ' );
// returns 'Whitespace   '

str = ltrim( '\t\t\tTabs\t\t\t' );
// returns 'Tabs\t\t\t'

str = ltrim( '\n\n\nNew Lines\n\n\n' );
// returns 'New Lines\n\n\n'
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/right-trim`][@stdlib/string/base/right-trim]</span><span class="delimiter">: </span><span class="description">trim whitespace characters from the end of a string.</span>
-   <span class="package-name">[`@stdlib/string/base/trim`][@stdlib/string/base/trim]</span><span class="delimiter">: </span><span class="description">trim whitespace characters from the beginning and end of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[unicode]: https://en.wikipedia.org/wiki/Unicode

<!-- <related-links> -->

[@stdlib/string/base/right-trim]: https://github.com/stdlib-js/string/tree/main/base/right-trim

[@stdlib/string/base/trim]: https://github.com/stdlib-js/string/tree/main/base/trim

<!-- </related-links> -->

</section>

<!-- /.links -->
