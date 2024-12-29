/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MODULES //

var atob = require( './../../../base/atob' ); // eslint-disable-line stdlib/no-redeclare
var Uint8Array = require( '@stdlib/array/uint8' );


// MAIN //

/**
* Converts a base64-encoded string to a Uint8Array.
*
* @param {string} str - base64-encoded string
* @returns {(Uint8Array|null)} output array
*
* @example
* var string2buffer = require( '@stdlib/buffer/from-string' );
*
* var str = string2buffer( 'Hello World!' ).toString( 'base64' );
* // returns 'SGVsbG8gV29ybGQh'
*
* var out = base64ToUint8Array( str );
* // returns <Uint8Array>[ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33 ]
*/
function base64ToUint8Array( str ) {
	var bytes;
	var v;
	var i;

	v = atob( str );
	if ( v === null ) {
		return null;
	}
	bytes = new Uint8Array( v.length );
	for ( i = 0; i < v.length; i++ ) {
		bytes[ i ] = v.charCodeAt( i );
	}
	return bytes;
}


// EXPORTS //

module.exports = base64ToUint8Array;
