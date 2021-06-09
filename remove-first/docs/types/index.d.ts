/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

/**
* Removes the first character of a string.
*
* @param str - input string
* @returns updated string
*
* @example
* var out = removeFirst( 'last man standing' );
* // returns 'ast man standing'
*
* @example
* var out = removeFirst( 'presidential election' );
* // returns 'residential election'
*
* @example
* var out = removeFirst( 'javaScript' );
* // returns 'avaScript'
*
* @example
* var out = removeFirst( 'Hidden Treasures' );
* // returns 'idden Treasures'
*/
declare function removeFirst( str: string ): string;


// EXPORTS //

export = removeFirst;
