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

var removeFirstCodePoint = require( './../lib' );

console.log( removeFirstCodePoint( 'presidential election', 1 ) );
// => 'residential election'

console.log( removeFirstCodePoint( 'JavaScript', 1 ) );
// => 'avaScript'

console.log( removeFirstCodePoint( 'The Last of the Mohicans', 5 ) );
// => 'ast of the Mohicans'

console.log( removeFirstCodePoint( 'अनुच्छेद', 1 ) );
// => 'नुच्छेद'
