/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var slice = require( './../lib' );

console.log( slice( 'presidential election', 1, 21 ) );
// => 'residential election'

console.log( slice( 'JavaScript', 4, 10 ) );
// => 'Script'

console.log( slice( 'The Last of the Mohicans', 5, 24 ) );
// => 'ast of the Mohicans'
