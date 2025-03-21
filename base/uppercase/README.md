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

# uppercase

> Convert a string to uppercase.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var uppercase = require( '@stdlib/string/base/uppercase' );
```

#### uppercase( str )

Converts a string to uppercase.

```javascript
var str = uppercase( 'bEEp' );
// returns 'BEEP'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uppercase = require( '@stdlib/string/base/uppercase' );

var str = uppercase( 'Beep' );
// returns 'BEEP'

str = uppercase( 'BeEp' );
// returns 'BEEP'

str = uppercase( 'Beep BOOP' );
// returns 'BEEP BOOP'

str = uppercase( '$**_beep_BoOp_**$' );
// returns '$**_BEEP_BOOP_**$'

str = uppercase( '' );
// returns ''
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/lowercase`][@stdlib/string/base/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/string/base/lowercase]: https://github.com/stdlib-js/string/tree/main/base/lowercase

<!-- </related-links> -->

</section>

<!-- /.links -->
