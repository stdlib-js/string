/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var capitalize = require( './../../capitalize' );
var replace = require( './../lib' );

var out = replace( 'beep', 'e', 'o' );
console.log( out );
// => 'boop'

out = replace( 'Hello World', /world/i, 'Mr. President' );
console.log( out );
// => 'Hello Mr. President'

function replacer( match, p1 ) {
	return capitalize( p1 );
}
var str = 'Oranges and lemons say the bells of St. Clement\'s';
out = replace( str, /([^\s]*)/gi, replacer );
console.log( out );
// => 'Oranges And Lemons Say The Bells Of St. Clement\'s'
