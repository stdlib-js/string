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

Capitalizes the first character in a `string`.

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

var str;

str = capitalize( 'last man standing' );
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
```

</section>

<!-- /.usage -->

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

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
