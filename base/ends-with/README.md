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

# endsWith

> Test if a string ends with the characters of another string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var endsWith = require( '@stdlib/string/base/ends-with' );
```

#### endsWith( str, search, len )

Tests if a string ends with the characters of another string.

```javascript
var str = 'Remember the story I used to tell you when you were a boy?';

var bool = endsWith( str, 'boy?', str.length );
// returns true

bool = endsWith( str, 'Boy?', str.length );
// returns false
```

To search from a specific character position, provide a `len` argument. If `len` is positive, the function restricts the search to a substring with length `len`, beginning with the leftmost character. If `len` is negative, `len` indicates to ignore the last `len` characters (equivalent to `str.length + len`).

```javascript
var str = 'To be, or not to be, that is the question.';

var bool = endsWith( str, 'to be', 19 );
// returns true

bool = endsWith( str, 'to be', -23 );
// returns true
```

If provided an empty `search` string, the function **always** returns `true`.

```javascript
var str = 'beep boop';

var bool = endsWith( str, '' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In general, exercise caution when operating on substrings containing Unicode characters, as the visual character length may not equal the number of code points. For example,

    ```javascript
    var len = '🏠'.length;
    // returns 2
    ```

-   This function differs from [`String.prototype.endsWith`][mdn-string-endswith] in the following ways:

    -   The function assumes string values for the first and second arguments and assumes that the `len` argument is an integer value.
    -   The function does **not** clamp positive `len` values to the end of the input string.
    -   Except when provided an empty `search` string, the function **always** returns `false` if `len` resolves to a starting search position which exceeds the bounds of the input string.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var endsWith = require( '@stdlib/string/base/ends-with' );

var str = 'Fair is foul, and foul is fair, hover through fog and filthy air';

var bool = endsWith( str, 'air', str.length );
// returns true

bool = endsWith( str, 'fair', str.length );
// returns false

bool = endsWith( str, 'fair', 30 );
// returns true

bool = endsWith( str, 'fair', -34 );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/base/starts-with`][@stdlib/string/base/starts-with]</span><span class="delimiter">: </span><span class="description">test if a string starts with the characters of another string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-string-endswith]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

<!-- <related-links> -->

[@stdlib/string/base/starts-with]: https://github.com/stdlib-js/string/tree/main/base/starts-with

<!-- </related-links> -->

</section>

<!-- /.links -->
