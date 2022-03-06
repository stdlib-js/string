/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var sprintf = require( './../lib' );

var out = sprintf( '%s %s!', 'Hello', 'World' );
console.log( out );
// => 'Hello World!'

out = sprintf( 'Pi: ~%.2f', 3.141592653589793 );
console.log( out );
// => 'Pi: ~3.14'

out = sprintf( '%-10s %-10s', 'a', 'b' );
console.log( out );
// => 'a       b       '

out = sprintf( '%10s %10s', 'a', 'b' );
console.log( out );
// => '       a       b'

out = sprintf( '%2$s %1$s %3$s', 'b', 'a', 'c' );
console.log( out );
// => 'a b c'
