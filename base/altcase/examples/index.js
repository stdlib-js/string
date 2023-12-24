/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var altcase = require( './../lib' );

var str = 'Hello World!';
var out = altcase( str );
console.log( out );
// => 'hElLo wOrLd!'

str = 'I am a tiny little teapot';
out = altcase( str );
console.log( out );
// => 'i aM A TiNy lItTlE TeApOt'

str = 'with big problems';
out = altcase( str );
console.log( out );
// => 'wItH BiG PrObLeMs'

str = 'To be, or not to be: that is the question.';
out = altcase( str );
console.log( out );
// => 'tO Be, Or nOt tO Be: ThAt iS ThE QuEsTiOn.'

str = 'isMobile';
out = altcase( str );
console.log( out );
// => 'iSmObIlE'
