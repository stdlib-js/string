<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# nextGraphemeClusterBreak

> Return the next extended grapheme cluster break in a string after a specified position.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nextGraphemeClusterBreak = require( '@stdlib/string/next-grapheme-cluster-break' );
```

#### nextGraphemeClusterBreak( string\[, fromIndex] )

Returns the next extended grapheme cluster break in a string after a specified position.

```javascript
var out = nextGraphemeClusterBreak( 'last man standing' );
// returns 1
```

By default, the function searches for a grapheme cluster break starting from the first index. To specify an alternative starting search index, provide a `fromIndex` argument.

```javascript
var out = nextGraphemeClusterBreak( 'last man standing', 4 );
// returns 5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `string` is an empty string, the function returns `-1` irrespective of `fromIndex`.
-   If an extended grapheme cluster break does not exist after `fromIndex`, the function returns `-1`.
-   Note that `fromIndex` does **not** refer to a visual character position, but to an index in the ordered sequence of [UTF-16][utf-16] code units.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var nextGraphemeClusterBreak = require( '@stdlib/string/next-grapheme-cluster-break' );

var out = nextGraphemeClusterBreak( 'last man standing', 4 );
// returns 5

out = nextGraphemeClusterBreak( 'presidential election', 8 );
// returns 9

out = nextGraphemeClusterBreak( 'अनुच्छेद', 1 );
// returns 3

out = nextGraphemeClusterBreak( '🌷', 0 );
// returns -1
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
Usage: next-grapheme-cluster-break [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --from index          Starting search position in string. Default: 0.
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
$ next-grapheme-cluster-break --from=1 अनुच्छेद
3
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'अनुच्छेद' | next-grapheme-cluster-break --from=1
3
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

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/num-grapheme-clusters`][@stdlib/string/num-grapheme-clusters]</span><span class="delimiter">: </span><span class="description">return the number of grapheme clusters in a string.</span>
-   <span class="package-name">[`@stdlib/string/prev-grapheme-cluster-break`][@stdlib/string/prev-grapheme-cluster-break]</span><span class="delimiter">: </span><span class="description">return the previous extended grapheme cluster break in a string before a specified position.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[utf-16]: https://en.wikipedia.org/wiki/UTF-16

<!-- <related-links> -->

[@stdlib/string/num-grapheme-clusters]: https://github.com/stdlib-js/string/tree/main/num-grapheme-clusters

[@stdlib/string/prev-grapheme-cluster-break]: https://github.com/stdlib-js/string/tree/main/prev-grapheme-cluster-break

<!-- </related-links> -->

</section>

<!-- /.links -->
