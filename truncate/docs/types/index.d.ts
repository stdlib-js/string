/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

/**
* Truncates a string to a specified length.
*
* @param str - input string
* @param len - output string length (including ending)
* @param ending - custom ending (default: `...`)
* @returns truncated string
*
* @example
* var out = truncate( 'beep boop', 7 );
* // returns 'beep...'
*
* @example
* var out = truncate( 'beep boop', 7, '|' );
* // returns 'beep b|'
*/
declare function truncate( str: string, len: number, ending?: string ): string;


// EXPORTS //

export = truncate;
