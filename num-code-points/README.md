<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# numCodePoints

> Return the number of Unicode code points in a string.

<section class="usage">

## Usage

```javascript
var numCodePoints = require( '@stdlib/string/num-code-points' );
```

#### numCodePoints( str )

Returns the number of code points in a string.

```javascript
var out = numCodePoints( 'last man standing' );
// returns 17

out = numCodePoints( 'Hidden Treasures' );
// returns 16

out = numCodePoints( '👋👋👋' );
// returns 3
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var numCodePoints = require( '@stdlib/string/num-code-points' );

console.log( numCodePoints( 'last man standing' ) );
// => 17

console.log( numCodePoints( '六书/六書' ) );
// => 5

console.log( numCodePoints( '🐶🐮🐷🐰🐸' ) );
// => 5

console.log( numCodePoints( 'Hello 👋 World' ) );
// => 13
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: num-code-points [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  -l,    --lines               Analyze individual lines.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ num-code-points beep
4
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep\nboop書' | num-code-points
10
```

```bash
$ echo -n 'beep\nboop書' | num-code-points -l
4
5
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
