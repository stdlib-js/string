<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# Distances

> Implementations of various string similarity metrics.

<section class="usage">

## Usage

```javascript
var distances = require( '@stdlib/string/base/distances' );
```

#### distances

Namespace containing "distances", i.e, implementations of various string similarity metrics.

```javascript
var ns = distances;
// returns {...}
```

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`hammingDistance( s1, s2 )`][@stdlib/string/base/distances/hamming]</span><span class="delimiter">: </span><span class="description">calculate the Hamming distance between two equal-length strings.</span>
-   <span class="signature">[`levenshteinDistance( s1, s2 )`][@stdlib/string/base/distances/levenshtein]</span><span class="delimiter">: </span><span class="description">calculate the Levenshtein (edit) distance between two strings.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var ns = require( '@stdlib/string/base/distances' );

// Calculate the edit distance between two input strings...
var dist = ns.levenshteinDistance( 'algorithm', 'altruistic' );
// returns 6
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <toc-links> -->

[@stdlib/string/base/distances/hamming]: https://github.com/stdlib-js/string/tree/main/base/distances/hamming

[@stdlib/string/base/distances/levenshtein]: https://github.com/stdlib-js/string/tree/main/base/distances/levenshtein

<!-- </toc-links> -->

</section>

<!-- /.links -->
