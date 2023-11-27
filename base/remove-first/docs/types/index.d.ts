/*
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

// TypeScript Version: 4.1

/**
* Removes the first `n` UTF-16 code units of a string.
*
* @param str - input string
* @param n - number of code units to remove
* @returns output string
*
* @example
* var out = removeFirst( 'last man standing', 1 );
* // returns 'ast man standing'
*
* @example
* var out = removeFirst( 'presidential election', 1 );
* // returns 'residential election'
*
* @example
* var out = removeFirst( 'JavaScript', 1 );
* // returns 'avaScript'
*
* @example
* var out = removeFirst( 'Hidden Treasures', 1 );
* // returns 'idden Treasures'
*
* @example
* var out = removeFirst( 'foo bar', 5 );
* // returns 'ar'
*/
declare function removeFirst( str: string, n: number ): string;


// EXPORTS //

export = removeFirst;
