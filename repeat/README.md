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

# repeat

> Repeat a string a specified number of times and return the concatenated result.

<section class="usage">

## Usage

```javascript
var repeat = require( '@stdlib/string/repeat' );
```

#### repeat( str, n )

Repeats a string `n` times and returns the concatenated result.

```javascript
var str = repeat( 'a', 5 );
// returns 'aaaaa'

str = repeat( '', 100 );
// returns ''

str = repeat( 'beep', 0 );
// returns ''
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var repeat = require( '@stdlib/string/repeat' );

var i;
for ( i = 0; i < 100; i++ ) {
    console.log( repeat( 'beep', discreteUniform( 0, 3 ) ) );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: repstr [options] [<string>] --n <repeats>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --n repeats           Number of repetitions.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beep\nboop' | repstr --n 3 --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | repstr --n 3 --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ repstr beep --n 5
beepbeepbeepbeepbeep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n $'ab' | repstr --n 3
ababab
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n $'beep\tboop' | repstr --n 3 --split '\t'
beepbeepbeep
boopboopboop
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/pad`][@stdlib/string/pad]</span><span class="delimiter">: </span><span class="description">pad a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/pad]: https://github.com/stdlib-js/string/tree/main/pad

<!-- </related-links> -->

</section>

<!-- /.links -->
