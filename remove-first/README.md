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

# removeFirst

> Remove the first character of a string.

<section class="usage">

## Usage

```javascript
var removeFirst = require( '@stdlib/string/remove-first' );
```

#### removeFirst( str )

Removes the first character of a `string`.

```javascript
var out = removeFirst( 'last man standing' );
// returns 'ast man standing'

out = removeFirst( 'Hidden Treasures' );
// returns 'idden Treasures'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var removeFirst = require( '@stdlib/string/remove-first' );

var str = removeFirst( 'last man standing' );
// returns 'ast man standing'

str = removeFirst( 'presidential election' );
// returns 'residential election'

str = removeFirst( 'javaScript' );
// returns 'avaScript'

str = removeFirst( 'Hidden Treasures' );
// returns 'idden Treasures'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: remove-first [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ remove-first beep
eep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep' | remove-first
eep
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/remove-last`][@stdlib/string/remove-last]</span><span class="delimiter">: </span><span class="description">remove the last character of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

<!-- <related-links> -->

[@stdlib/string/remove-last]: https://github.com/stdlib-js/string/tree/main/remove-last

<!-- </related-links> -->

</section>

<!-- /.links -->
