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

# kebabcase

> Convert a string to kebab case.

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var kebabcase = require( '@stdlib/string/kebabcase' );
```

#### kebabcase( str )

Converts a string to kebab case.

```javascript
var str = kebabcase( 'Foo Bar' );
// returns 'foo-bar'

str = kebabcase( 'I am a tiny little house' );
// returns 'i-am-a-tiny-little-house'

str = kebabcase( 'Hello World!' );
// returns 'hello-world'
```

</section>

<!-- /.usage -->


<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var kebabcase = require( '@stdlib/string/kebabcase' );

var str = 'foo bar baz';
var out = kebabcase( str );
// returns 'foo-bar-baz'

str = 'foo_baz';
out = kebabcase( str );
// returns 'foo-baz'

str = 'foo-bar-baz!';
out = kebabcase( str );
// returns 'foo-bar-baz'

str = 'beep    boop!';
out = kebabcase( str );
// returns 'beep-boop'

str = 'foo-baz';
out = kebabcase( str );
// returns 'foo-baz'

str = 'Welcome! 😀';
out = kebabcase( str );
// returns 'welcome-😀'
```

</section>

<!-- /.examples -->


* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: kebabcase [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ kebabcase 'hello world!'
hello-world
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beEp booP' | kebabcase
beep-boop
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<section class="links">

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
