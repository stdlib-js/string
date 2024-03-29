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

# capitalize

> Capitalize the first character in a string.

<section class="usage">

## Usage

```javascript
var capitalize = require( '@stdlib/string/capitalize' );
```

#### capitalize( str )

Capitalizes the first character in a string.

```javascript
var out = capitalize( 'last man standing' );
// returns 'Last man standing'

out = capitalize( 'Hidden Treasures' );
// returns 'Hidden Treasures'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var capitalize = require( '@stdlib/string/capitalize' );

var str = capitalize( 'last man standing' );
// returns 'Last man standing'

str = capitalize( 'presidential election' );
// returns 'Presidential election'

str = capitalize( 'javaScript' );
// returns 'JavaScript'

str = capitalize( 'Hidden Treasures' );
// returns 'Hidden Treasures'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: capitalize [options] [<string>]

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
    $ echo -n $'beep\nboop' | capitalize --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | capitalize --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ capitalize beep
Beep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beEp' | capitalize
BeEp
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep\tbOOP' | capitalize --split '\t'
Beep
BOOP
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/uncapitalize`][@stdlib/string/uncapitalize]</span><span class="delimiter">: </span><span class="description">uncapitalize the first character of a string.</span>
-   <span class="package-name">[`@stdlib/string/uppercase`][@stdlib/string/uppercase]</span><span class="delimiter">: </span><span class="description">convert a string to uppercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/uncapitalize]: https://github.com/stdlib-js/string/tree/main/uncapitalize

[@stdlib/string/uppercase]: https://github.com/stdlib-js/string/tree/main/uppercase

<!-- </related-links> -->

</section>

<!-- /.links -->
