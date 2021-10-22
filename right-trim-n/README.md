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

# rightTrimN

> Trim `n` whitespace characters from the end of a string.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var rightTrimN = require( '@stdlib/string/right-trim-n' );
```

#### rightTrimN( str, n\[, chars] )

Trims `n` whitespace characters from the end of a string.

```javascript
var str = '  foo  ';
var out = rightTrimN( str, str.length );
// returns '  foo'

out = rightTrimN( str, 1 );
// returns '  foo '
```

To trim a specific set of characters, provide a string or an array of characters to trim:

```javascript
var str = '🐶🐶🐶 Animals 🐶🐶🐶';
var out = rightTrimN( str, str.length, [ '🐶', ' ' ] );
// returns '🐶🐶🐶 Animals'

out = rightTrimN( str, str.length, '🐶 ' );
// returns '🐶🐶🐶 Animals'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var rightTrimN = require( '@stdlib/string/right-trim-n' );

var out = rightTrimN( '   Whitespace   ', 3 );
// returns '   Whitespace'

out = rightTrimN( '\t\t\tTabs\t\t\t', 2 );
// returns '\t\t\tTabs\t'

out = rightTrimN( '~~~CUSTOM~~~', 3, '~' );
// returns '~~~CUSTOM'
```

</section>

<!-- /.examples -->


<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: rtrimn [options] --n=<number>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --n number            Number of characters to trim.
         --chars str           Characters to trim. Default: whitespace.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ rtrimn '   Whitespace   ' --n=3
   Whitespace
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '~beep~boop~~~' | rtrimn --n=2 --chars='~'
~beep~boop~
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
