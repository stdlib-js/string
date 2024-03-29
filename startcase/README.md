<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# startcase

> Capitalize the first letter of each word in a string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var startcase = require( '@stdlib/string/startcase' );
```

#### startcase( str )

Capitalizes the first letter of each word in a string.

```javascript
var str = startcase( 'beep boop a foo bar' );
// returns 'Beep Boop A Foo Bar'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var startcase = require( '@stdlib/string/startcase' );

var str = startcase( 'beep boop foo bar' );
// returns 'Beep Boop Foo Bar'

str = startcase( 'Beep' );
// returns 'Beep'

str = startcase( 'BeEp' );
// returns 'BeEp'

str = startcase( '$**_beep_BoOp_**$' );
// returns '$**_beep_BoOp_**$'

str = startcase( '' );
// returns ''
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: startcase [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ startcase 'beep boop foo bar'
Beep Boop Foo Bar
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep boop foo bar' | startcase
Beep Boop Foo Bar 
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/lowercase`][@stdlib/string/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>
-   <span class="package-name">[`@stdlib/string/uppercase`][@stdlib/string/uppercase]</span><span class="delimiter">: </span><span class="description">convert a string to uppercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

<!-- <related-links> -->

[@stdlib/string/lowercase]: https://github.com/stdlib-js/string/tree/main/lowercase

[@stdlib/string/uppercase]: https://github.com/stdlib-js/string/tree/main/uppercase

<!-- </related-links> -->

</section>

<!-- /.links -->
