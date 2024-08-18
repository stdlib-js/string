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

var reverseGraphemeClusters = require( './../lib' );

console.log( reverseGraphemeClusters( 'presidential election' ) );
// => 'noitcele laitnediserp'

console.log( reverseGraphemeClusters( 'JavaScript' ) );
// => 'tpircSavaJ'

console.log( reverseGraphemeClusters( 'The Last of the Mohicans' ) );
// => 'snacihoM eht fo tsaL ehT'

console.log( reverseGraphemeClusters( '🐶🐮🐷🐰🐸' ) );
// => '🐸🐰🐷🐮🐶'
