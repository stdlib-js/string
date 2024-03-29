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

# trim

> Trim whitespace characters from the beginning and end of a string.

<section class="usage">

## Usage

```javascript
var trim = require( '@stdlib/string/trim' );
```

#### trim( str )

Trims whitespace characters from the beginning and end of a string.

```javascript
var out = trim( ' \t\t\n  Beep \r\n\t  ' );
// returns 'Beep'
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
var trim = require( '@stdlib/string/trim' );

var out = trim( '   Whitespace   ' );
// returns 'Whitespace'

out = trim( '\t\t\tTabs\t\t\t' );
// returns 'Tabs'

out = trim( '\n\n\nNew Lines\n\n\n' );
// returns 'New Lines'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: trim [options] [<string>]

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
    $ echo -n $'   foo   \n   bar   ' | trim --split /\r?\n/

    # Escaped...
    $ echo -n $'   foo   \n   bar   ' | trim --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ trim '    beep boop  '
beep boop
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n '    beep boop  ' | trim
beep boop
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n '   foo   \t   bar   \t   baz   ' | trim --split '\t'
foo
bar
baz
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/left-trim`][@stdlib/string/left-trim]</span><span class="delimiter">: </span><span class="description">trim whitespace characters from the beginning of a string.</span>
-   <span class="package-name">[`@stdlib/string/pad`][@stdlib/string/pad]</span><span class="delimiter">: </span><span class="description">pad a string.</span>
-   <span class="package-name">[`@stdlib/string/right-trim`][@stdlib/string/right-trim]</span><span class="delimiter">: </span><span class="description">trim whitespace characters from the end of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[unicode]: https://en.wikipedia.org/wiki/Unicode

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/left-trim]: https://github.com/stdlib-js/string/tree/main/left-trim

[@stdlib/string/pad]: https://github.com/stdlib-js/string/tree/main/pad

[@stdlib/string/right-trim]: https://github.com/stdlib-js/string/tree/main/right-trim

<!-- </related-links> -->

</section>

<!-- /.links -->
