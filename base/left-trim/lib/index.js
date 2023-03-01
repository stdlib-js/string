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

/**
* Trim whitespace characters from the beginning of a string.
*
* @module @stdlib/string/base/left-trim
*
* @example
* var ltrim = require( '@stdlib/string/base/left-trim' );
*
* var out = ltrim( '   Whitespace   ' );
* // returns 'Whitespace   '
*
* out = ltrim( '\t\t\tTabs\t\t\t' );
* // returns 'Tabs\t\t\t'
*/

// MODULES //

var HAS_BUILTIN = require( './has_builtin.js' );
var polyfill = require( './polyfill.js' );
var main = require( './main.js' );


// MAIN //

var ltrim;
if ( HAS_BUILTIN ) {
	ltrim = main;
} else {
	ltrim = polyfill;
}


// EXPORTS //

module.exports = ltrim;
