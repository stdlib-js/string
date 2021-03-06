/*
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

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import formatInterpolate = require( './../../../base/format-interpolate' );
import formatTokenize = require( './../../../base/format-tokenize' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Generates string from a token array by interpolating values.
	*
	* @param tokens - string parts and format identifier objects
	* @param ...args - variable values
	* @throws invalid flags
	* @returns formatted string
	*
	* @example
	* var tokens = [ 'beep ', { 'specifier': 's' } ];
	* var out = formatInterpolate( tokens, 'boop' );
	* // returns 'beep boop'
	*/
	formatInterpolate: typeof formatInterpolate;

	/**
	* Tokenizes a string into an array of string parts and format identifier objects.
	*
	* @param str - input string
	* @returns tokens
	*
	* @example
	* var tokens = formatTokenize( 'Hello %s!' );
	* // returns [ 'Hello ', {...}, '!' ]
	*/
	formatTokenize: typeof formatTokenize;
}

/**
* String base packages.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
