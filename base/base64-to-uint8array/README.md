<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# base64ToUint8Array

> Convert a Base64-encoded string to a [Uint8Array][@stdlib/array/uint8].

<!-- Package usage documentation. -->

<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var base64ToUint8Array = require( '@stdlib/string/base/base64-to-uint8array' );
```

#### base64ToUint8Array( str )

Converts a base64-encoded string to a [Uint8Array][@stdlib/array/uint8].

```javascript
var string2buffer = require( '@stdlib/buffer/from-string' );

var str = string2buffer( 'Hello World!' ).toString( 'base64' );
// returns 'SGVsbG8gV29ybGQh'

var out = base64ToUint8Array( str );
// returns <Uint8Array>[ 72, 101, ... ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function returns `null` when provided a string containing non-ASCII characters.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```javascript
var string2buffer = require( '@stdlib/buffer/from-string' );
var base64ToUint8Array = require( '@stdlib/string/base/base64-to-uint8array' );

var buf = string2buffer( 'Hello World!' ).toString( 'base64' );
// returns 'SGVsbG8gV29ybGQh'

var arr = base64ToUint8Array( buf );
// returns <Uint8Array>

buf = string2buffer( 'HELLO WORLD!' ).toString( 'base64' );
// returns 'SEVMTE8gV09STEQh'

arr = base64ToUint8Array( buf );
// returns <Uint8Array>

buf = string2buffer( 'To be, or not to be: that is the question.' ).toString( 'base64' );
// returns 'VG8gYmUsIG9yIG5vdCB0byBiZTogdGhhdCBpcyB0aGUgcXVlc3Rpb24u'

arr = base64ToUint8Array( buf );
// returns <Uint8Array>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
